import {
  Saikia
} from './misc.js'
import {
  Image,
  ImagePath
} from './image.js'

export class Data {
  // ROOT VARIABLES FOR THE CLASS
  static buyerJsonData = '../data/product/b.json'
  static distributorJsonData = '../data/product/d.json'
  static productJsonData = '../data/product/p.json'

  // LOADS THE JSON FILES FOR COMPARISON OF DATA IN EACH JSON AND FETCH THE EXACT SAME PRODUCT
  static loadData() {
    $.getJSON(Data.buyerJsonData, function (productData) {
      $.getJSON(Data.distributorJsonData, function (distributorData) {
        Data.processData(productData, distributorData)
      }).fail(function (error) {
        console.error('Error fetching distributor data:', error)
      })
    }).fail(function (error) {
      console.error('Error fetching Buyer\'s data:', error)
    })
  }

  // COMBINES THE DATA FROM BOTH JSON FILES AND DISPLAYS IT TO THE USER
  static processData(productData, distributorData) {
    const totaldisplay = $('<div class="badge bg-danger rounded-circle p-2 m-2 position-fixed top-0 start-0 fs-5 shadow">')
      .text(productData.length).css({
        zIndex: 100
      })
    $('.data-num').append(totaldisplay)
    $('#productList').empty()

    productData.forEach(product => {
      const distributor = distributorData.find(distributor => distributor.gds === product.gds)
      const card = Data.createCard(product.gds, product.title, product.price, distributor.price, distributor.points, Image.product(product.gds))
      $('#productList').append(card)
    })
  }

  // CREATES A BOOTSTRAP CARD ELEMENT
  static createCard(gds, title, price, distributorPrice, points, imageUrl, sign = 'AtomyKeson2024') {
    const card = $('<div class="card col-10 col-lg-5 col-xxl-3 m-4 border-0 animated invisible">')
      .attr('data-link', gds)
    const image = $('<img>').addClass('mx-auto my-2').attr({
      'data-src': imageUrl,
      'alt': `${title}_${sign}_@webmaster-ankitsaikia`,
      'loading': 'lazy'
    }).css({
      width: '200px',
      height: '200px'
    })

    const cardBody = $('<div>').addClass('card-body text-center p-2 mb-2 rounded-4 shadow');
    const distBody = $('<div>').addClass('rounded-4 mx-5 py-2 bg-dark mb-3');
    const titleElement = $('<h5>').addClass('card-title fs-4 mb-2').text(title);
    const priceElement = $('<p>').addClass('card-text text-primary fw-bold fs-5 mb-3').text('MRP: ₹ ' + price);
    const distributorPriceElement = $('<p>').addClass('card-text text-success fw-bolder fs-3 mb-0 pb-0').text('DP: ₹ ' + distributorPrice);
    const pointsElement = $('<p>').addClass('card-text text-danger fw-bold fs-3').text('PV: ' + points);
    const refcard = $('<a>')
      .attr('href', `/product/?gds=${gds}`)
      .addClass('btn btn-primary mb-4 rounded-3 product-link')
      .text('Read More');

    distBody.append(distributorPriceElement, pointsElement);
    cardBody.append(titleElement, priceElement, distBody, refcard);
    card.append(image, cardBody);

    Saikia.observer.observe(image[0]);

    return card;
  }

  // DISPLAY THE INFORMATION ON THE SELECTED PRODUCT ACCORDING TO THE URL PARAM
  static details() {
    const gdsCode = Saikia.urlRead('gds')
    if (gdsCode) {
      $.getJSON(Data.productJsonData, function (data) {
          var foundData = data.find(function (item) {
            return item.gds === gdsCode;
          })

          if (foundData) {
            $.getJSON(Data.buyerJsonData, function (c) {
              const n = c.find(function (p) {
                return p.gds === foundData.gds
              })
              const imageElement = $('<img>').attr({
                  'src': Image.infoBanner(n.gds),
                  'alt': n.title
                }).addClass('mx-auto d-flex pb-5')
                .css({
                  width: '300px',
                  height: '300px'
                });

              const name = $('<h1>').text(n.title).addClass('title text-center')

              //dataline
              if (foundData.detailImages && foundData.detailImages.length > 0) {
                var containerElement1 = $('#imageD1');

                foundData.detailImages.forEach(function (img, index) {
                  const paddedNumber = String(index + 1).padStart(2, '0');
                  const imagePath = Image.infoItems(n.gds) + paddedNumber + ImagePath.extention;
                  const imageElement = $('<img>').attr({
                    'data-src': imagePath,
                    'alt': n.title,
                    'loading': 'lazy'
                  }).addClass('p-1').css({
                    width: '100%'
                  });
                  containerElement1.append(imageElement);
                  Saikia.observer.observe(imageElement[0]);
                });

              } else {
                // Handle case when no image URLs are found
                console.log('NOTHING')
              }

              var containerElement = $('#result');
              containerElement.append(imageElement, name);
            })
          } else {
            // Handle case when GDS code is not found
          }
        })
        .fail(function (error) {
          console.log('Error fetching JSON data:', error);
        });
    }
  }

}

Data.loadData()

// export default Data