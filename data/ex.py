import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import os

localhost_url = 'http://127.0.0.1:5500/'
atomy_url = 'https://www.atomy.com/'
    
def fetch_html_from_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        print(f"Error reading HTML file: {e}")
        return None

def dist_data(html_code):
    soup = BeautifulSoup(html_code, 'html.parser')
    product_el = soup.select('ul.pBox')
    products = []

    for product in product_el:
        href_url = product.select_one('li.ptitle a')['href']
        href_url_e = href_url.replace('./', atomy_url + 'in/Home/Product/')
        title = product.select_one('.ptitle a').text
        price = float(product.select_one('.pprice .numberic').text)
        points = int(product.select_one('.ppoint .numberic').text)
        gds = href_url.split('=')[1]

        products.append({
            'hrefUrlE': href_url_e,
            'gds': gds,
            'title': title,
            'price': price,
            'points': points
        })

    json_data = json.dumps(products, indent=2)
    output_path = 'd.json'
    with open(output_path, 'w') as json_file:
        json_file.write(json_data)

    print(f'Data written to {output_path} successfully.')

def pdata(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

        all_results = []

        for index, item in enumerate(data, start=1):
            item_name = item['title']
            href_url = item['hrefUrlE']

            html = fetch_html_from_url(href_url)
            if html:
                parser = BeautifulSoup(html, 'html.parser')

                # gds code
                gds = item['gds']

                # Print the current URL being processed
                print(f"Processing Item {index}: {item_name}, URL: {href_url}")

                # Retrieve banner image URL
                banner_img_element = parser.select_one('.DetailView img')
                banner_img_url = atomy_url + banner_img_element['src'].lstrip('/')

                # Retrieve detail images from #tGdsDetail
                detail_images = [urljoin(atomy_url, img['src'].lstrip('/').strip()) for img in parser.select('#tGdsDetail img')]
                result = {
                    'gds': gds,
                    'bannerImgUrl': banner_img_url,
                    'detailImages': detail_images
                }

                all_results.append(result)

        json_data = json.dumps(all_results, indent=2)
        output_path = 'p.json'
        with open(output_path, 'w') as json_file:
            json_file.write(json_data)

        print(f'Data written to {output_path} successfully.')

    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
    except Exception as e:
        print(f"Error: {e}")


def buyer_data(html_code):
    soup = BeautifulSoup(html_code, 'html.parser')
    product_el = soup.select('ul.pBox')
    products = []

    for product in product_el:
        img_url = product.select_one('img')['src']
        title = product.select_one('.ptitle a').text
        price = float(product.select_one('.pprice .numberic').text)
        href_url = product.select_one('li.ptitle a')['href']
        gds = href_url.split('=')[1]
        updated_url = atomy_url + img_url.lstrip('/')

        products.append({
            'imageUrl': updated_url,
            'title': title,
            'price': price,
            'gds': gds,
        })

    json_data = json.dumps(products, indent=2)
    output_path = 'b.json'
    with open(output_path, 'w') as json_file:
        json_file.write(json_data)

    print(f'Data written to {output_path} successfully.')

def fetch_html_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching HTML: {e}")
        return None

def handle_checkbox_change():
    print("Choose the type of data extraction:")
    print("1. Distributor Data")
    print("2. Product Data")
    print("3. Buyer Data")

    choice = input("Enter your choice (1/2/3): ")

    html_code = fetch_html_from_file('html_data.html')  # Assuming fetch_html_from_file is defined in your script
    if html_code:
        if choice == '1':
            dist_data(html_code)
        elif choice == '2':
            pdata('d.json')
        elif choice == '3':
            buyer_data(html_code)
        else:
            print("Invalid choice. Please enter a valid choice (1/2/3).")

def main():
    handle_checkbox_change()

if __name__ == "__main__":
    main()
