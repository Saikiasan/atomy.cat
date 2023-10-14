import json

def create_markdown_table(json_data, output_file, excluded_fields):
    try:
        # Filter out excluded fields
        filtered_data = [{key: value for key, value in product.items() if key not in excluded_fields} for product in json_data]

        # Write Markdown table header dynamically
        with open(output_file, 'w') as md_file:
            md_file.write("# Database\n\n")
            md_file.write("| Sl. No. | " + " | ".join(filtered_data[0].keys()) + " |\n")
            md_file.write("| --- | " + " | ".join(["---"] * len(filtered_data[0])) + " |\n")

            # Write each row of the table dynamically
            for idx, product in enumerate(filtered_data, start=1):
                md_file.write(f"| {idx} | " + " | ".join([str(product[key]) for key in product.keys()]) + " |\n")

        print(f"Markdown file '{output_file}' created successfully.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    try:
        # Specify the path to your JSON file
        json_file_path = input("Enter the path to your JSON file: ")

        # Load JSON data from file
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)

        # Get the desired file name for the Markdown file
        output_file_name = input("Enter the desired Markdown file name (with .md extension): ")

        # Get user input for fields to exclude, separated by commas
        excluded_fields_input = input("Enter fields to exclude (comma-separated): ")
        excluded_fields = [field.strip() for field in excluded_fields_input.split(',')]

        # Call the function to create the Markdown table
        create_markdown_table(data, output_file_name, excluded_fields)

    except FileNotFoundError:
        print(f"Error: The file '{json_file_path}' was not found.")
    except json.JSONDecodeError:
        print(f"Error: Unable to decode JSON from the file '{json_file_path}'. Please ensure it is valid JSON.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
