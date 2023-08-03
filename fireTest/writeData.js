let localhostUrl = 'http://127.0.0.1:5500/';
let atomyUrl = 'https://www.atomy.com/';

// level0: buyer, level1: distributor, level3: productdata
// Detailed data of the product | after login

function pData() {
  fetch('data/level1.json')
    .then(response => response.json())
    .then(data => {
      const allResults = [];

      const fetchPromises = data.map(item => {
        const hrefUrl = item.hrefUrlE;

        return fetch(hrefUrl)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // gds code
            const gds = item.gds;
            // console.log(gds)

            // Retrieve banner image URL
            const bannerImgElement = doc.querySelector('.DetailView img');
            const bannerImgUrl = bannerImgElement.src.replace(localhostUrl, atomyUrl);

            // Retrieve detail images from #tGdsDetail
            const detailImages = Array.from(doc.querySelectorAll('#tGdsDetail img'))
              .map(img => img.src.replace(localhostUrl, atomyUrl));

            const result = {
              gds,
              bannerImgUrl,
              detailImages
            };

            allResults.push(result);
          })
          .catch(error => {
            console.error('Error fetching the HTML:', error);
          });
      });

      Promise.all(fetchPromises)
        .then(() => {
          const jsonData = JSON.stringify(allResults, null, 2);
          const blob = new Blob([jsonData], {
            type: 'application/json'
          });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'level3.json';
          link.click();
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching the JSON file:', error);
    });
}

// Distributor data | after login = 05 july 2023
function distData(htmlCode) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, 'text/html');
  const productEl = doc.querySelectorAll('ul.pBox');
  const products = Array.from(productEl).map((product) => {
    const hrefUrl = product.querySelector('li.ptitle a').getAttribute('href');
    const hrefUrlE = hrefUrl.replace('./', atomyUrl + 'in/Home/Product/');
    const title = product.querySelector('.ptitle a').textContent;
    const price = parseFloat(product.querySelector('.pprice .numberic').textContent);
    const points = parseInt(product.querySelector('.ppoint .numberic').textContent);
    const gds = hrefUrl.split('=')[1];

    return {
      hrefUrlE,
      gds,
      title,
      price,
      points,
    };
  });

  const jsonData = JSON.stringify(products, null, 2);

  const blob = new Blob([jsonData], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'level1.json';
  link.click();
  URL.revokeObjectURL(url);

  console.log('Data written to level1.json successfully.');
}

// MRP | before login = 05 july 2023
function buyerData(htmlCode) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, 'text/html');
  const productEl = doc.querySelectorAll('ul.pBox');
  const products = Array.from(productEl).map((product) => {
    const imgUrl = product.querySelector('img').src;
    const title = product.querySelector('.ptitle a').textContent;
    const price = parseFloat(product.querySelector('.pprice .numberic').textContent);
    const hrefUrl = product.querySelector('li.ptitle a').getAttribute('href');
    const gds = hrefUrl.split('=')[1];
    const updatedUrl = imgUrl.replace(localhostUrl, atomyUrl);

    return {
      gds,
      title,
      imageUrl: updatedUrl,
      price,
    };
  });



  // const jsonData = JSON.stringify(products, null, 2);

  // const blob = new Blob([jsonData], {
  //   type: 'application/json'
  // });
  // const url = URL.createObjectURL(blob);
  // const link = document.createElement('a');
  // link.href = url;
  // link.download = 'level0.json';
  // link.click();
  // URL.revokeObjectURL(url);

  console.log('Data written to level0.json successfully.');
}



function handleCheckboxChange(event) {
  const distributorCheckbox = document.getElementById('distributor_input')
  const productDetailCheckbox = document.getElementById('product_details')
  const buyerCheckbox = document.getElementById('buyer_check')

  if (distributorCheckbox.checked) {
    // DISTRIBUTOR
    const htmlCode = prompt('enter your dist html')
    const details = distData(htmlCode)
    console.log(JSON.stringify(details, null, null))
  } else if (productDetailCheckbox.checked) {
    // PRODUCT-DATA
    pData()
  } else if (buyerCheckbox.checked) {
    // BUYER | NORMAL - MRP ₹
    const htmlCode = prompt('enter your buyer html')
    const details = buyerData(htmlCode)
    console.log(JSON.stringify(details, null, null))
  }
}

function handleCheckboxes(event) {
  const checkboxes = document.querySelectorAll('.form-check')
  checkboxes.forEach((checkbox) => {
    if (checkbox !== event.target) {
      checkbox.checked = false
    }
  })
  handleCheckboxChange()
}

function setupCheckboxListeners() {
  const checkboxes = document.querySelectorAll('.form-check')
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxes)
  })
}
setupCheckboxListeners()