import { urlParam } from "./nav.js";
export const datafetch = () => {
  function loadData() {
    // Fetch data from the first JSON file
    $.getJSON('../data/product/b.json', function (productData) {
      // Fetch data from the second JSON file
      $.getJSON('../data/product/d.json', function (distributorData) {
        processData(productData, distributorData);
      }).fail(function (error) {
        console.error('Error fetching distributor data:', error);
      });
    }).fail(function (error) {
      console.error('Error fetching product data:', error);
    });
  }

  function processData(productData, distributorData) {
    const totaldisplay = $('<div>').addClass('badge bg-danger rounded-circle p-2 m-2 position-fixed top-0 start-0 fs-5 shadow').text(productData.length).css({
      zIndex: 100
    });
    $('.data-num').append(totaldisplay);
    $('#productList').empty()

    productData.forEach(product => {
      const distributor = distributorData.find(distributor => distributor.gds === product.gds);

      let imagePath = "../data/assets/product_visuals/products/"
      var productImg = imagePath + product.gds + ".webp"
      // console.log(productImg)
      // product.imageUrl
      const card = createCard(product.gds, product.title, product.price, distributor.price, distributor.points, productImg);
      $('#productList').append(card);
    });
  }

  function createCard(gds, title, price, distributorPrice, points, imageUrl) {
    const card = $('<div>').addClass('card col-10 col-lg-5 col-xxl-3 m-4 border-0 animated invisible').attr('data-link', gds);
    const image = $('<img>').addClass('mx-auto my-2').attr({
      'data-src': imageUrl,
      'alt': `${title} | Atomy Keson`,
      'loading': 'lazy'
    }).css({
      width: '200px',
      height: '200px'
    });

    const cardBody = $('<div>').addClass('card-body text-center p-2 mb-2 rounded-4 shadow');
    const distBody = $('<div>').addClass('rounded-4 mx-5 py-2 bg-dark mb-3');
    const titleElement = $('<h5>').addClass('card-title fs-4 mb-2').text(title);
    const priceElement = $('<p>').addClass('card-text text-primary fw-bold fs-5 mb-3').text('MRP: ₹ ' + price);
    const distributorPriceElement = $('<p>').addClass('card-text text-success fw-bolder fs-3 mb-0 pb-0').text('DP: ₹ ' + distributorPrice);
    const pointsElement = $('<p>').addClass('card-text text-danger fw-bold fs-3').text('PV: ' + points);
    const refcard = $('<a>')
      .attr('href',`/product/?gds=${gds}`)
      .addClass('btn btn-primary mb-4 rounded-3 product-link')
      .text('Read Details');

    distBody.append(distributorPriceElement, pointsElement);
    cardBody.append(titleElement, priceElement, distBody, refcard);
    card.append(image, cardBody);

    observer.observe(image[0]);

    // refcard.on('click', function () {
    //   const page = $(this).data('page')
    //   const gds = $(this).data('gds')
    //   urlCrawler()
    //   console.log(page + gds)

    // })

    return card;
  }

  // Call the function to load data from the JSON files
  loadData();

  // Check if the screen width is less than or equal to a mobile threshold
  function isMobileScreen() {
    return $(window).width() < $(window).height(); // Adjust the threshold as needed
  }

  // Function to be executed if the screen is detected as mobile
  function mobileScreenFunction() {
    console.log('Mobile screen detected!');
  }

  // Function to be executed if the screen is not detected as mobile
  function nonMobileScreenFunction() {
    console.log('Non-mobile screen detected!');
    setInterval(function () {
      $('.card').addClass('shadow');
      $('.card-body').removeClass('shadow')
    }, 300)
    // Add your non-mobile-specific code here
  }

  // Function to debounce the window resize event
  function debounce(fn, delay) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // Resize event handler
  function handleResize() {
    if (isMobileScreen()) {
      mobileScreenFunction();
    } else {
      nonMobileScreenFunction();
    }
  }

  // Initial check on page load
  handleResize();

  // Attach the debounced resize event handler
  const debouncedResizeHandler = debounce(handleResize, 200); // Adjust the debounce delay as needed
  $(window).on('resize', debouncedResizeHandler);

}

export const details = () => {
  var gdsCode = urlParam('gds');
  if (gdsCode) {
    $.getJSON('../data/product/p.json', function (data) {
        // Find the data based on the GDS code
        var foundData = data.find(function (item) {
          return item.gds === gdsCode;
        });

        if (foundData) {
          //name of the item - 19-11-23
          $.getJSON('../data/product/b.json', function (c){
            const n = c.find(function (p){
              return p.gds === foundData.gds
            })
          
            const webpPath = "../data/assets/product_visuals/grouped_products/" + foundData.gds + "/"
            var webpBanner = webpPath + "banner.webp"
            
            // Create an image element
          var imageElement = $('<img>').attr({'src': webpBanner,'alt':n.title}).addClass('mx-auto d-flex pb-5')
          .css({
              width: '300px',
              height: '300px'
            });

            const name = $('<h1>').text(n.title).addClass('title text-center')
            
            //dataline
            if (foundData.detailImages && foundData.detailImages.length > 0) {
            var containerElement1 = $('#imageD1');
            
          //   for (let i = 1; i <= foundData.detailImages.length; i++) {
          //     let paddedNumber = String(i).padStart(2, '0');
          //     let imagePath = webpPath + paddedNumber + '.webp';
          
          //     var imageElement = $('<img>').attr({
          //         'data-src': imagePath,
          //         'alt': 'detailed img',
          //         'loading': 'lazy'
          //     }).addClass('p-1').css({
          //         width: '100%'
          //     });
          
          //     containerElement1.append(imageElement);
          //     observer.observe(imageElement[0]);
          // }
          
          foundData.detailImages.forEach(function (img, index) {
            let paddedNumber = String(index + 1).padStart(2, '0');
            let imagePath = webpPath + paddedNumber + '.webp';
            var imageElement = $('<img>').attr({
                'data-src': imagePath,
                'alt': 'detailed img',
                'loading': 'lazy'
            }).addClass('p-1').css({
                width: '100%'
            });
            containerElement1.append(imageElement);
            observer.observe(imageElement[0]);
        });
        
          } else {
            // Handle case when no image URLs are found
            console.log('no images')
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

// Storing data in localStorage
export const locStore = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

// Retrieving data from localStorage
export const locGet = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
}

export const locRem = (key) => {
  localStorage.removeItem(key);
}

export const locCls = () => {
  localStorage.clear()
}

export const sessionStore = (key,value) => {
  sessionStorage.setItem(key,value)
}

export const sessionGet = (key) => {
  // Check if the key exists in session storage
  if (sessionStorage.getItem(key)) {
    // Return the value associated with the key
    return sessionStorage.getItem(key);
  } else {
    // Return null or a default value if the key is not found
    return null; // or return a default value
  }
};


export const observer = new IntersectionObserver(entries => {
  const vh = 'invisible'
  entries.forEach(entry => {
    const lazyImage = $(entry.target);
    const card = lazyImage.closest('.card');

    if (entry.isIntersecting) {
      // Image is in view
      lazyImage.attr('src', lazyImage.data('src'));

      if (card.length) {
        card.addClass('fadeIn').removeClass(vh);
      } else {
        // No card detected, add fadeIn directly to the image
        lazyImage.addClass('fadeIn').removeClass(vh);
      }
    } else {
      // Image is not in view
      if (card.length) {
        // card.removeClass('fadeIn').addClass(vh);
      } else {
        // No card detected, remove fadeIn from the image
        // lazyImage.removeClass('fadeIn').addClass(vh);
      }
    }
  });
});


export const searchbar = () => {
  const closeIcon = $('#closeIcon');
  // Function to handle focus and blur events on the search input
  // $('#searchInput').on({
  //   focus: function () {
  //     $('#productList').addClass('animated fadeIn');
  //   },
  //   blur: function () {
  //     $('#productList').removeClass('animated fadeIn');
  //   }
  // });

  // closeIcon.hide()
  $.getJSON('../data/product/d.json', function (data) {
    const searchData = data;

    // Event listener for the search input
    $('#searchInput').on('input', function () {
      const searchTerm = $(this).val();

      // Check if the search term is not empty
      if (searchTerm.trim() !== '') {
        const filteredData = filterData(searchTerm, searchData);
        renderResults(filteredData);
        // closeIcon.show()
      } else {
        // If the search term is empty, clear the results
        // $('#searchResults').empty();
        // closeIcon.hide()
        $('#productList .card').removeClass('visually-hidden')
      }
    });
  });

  // Function to filter data based on search term
  function filterData(term, searchData) {
    return searchData.filter(item => {
      return item.title.toLowerCase().includes(term.toLowerCase());
    });
  }

  // Function to render search results
  function renderResults(results) {
    if (results.length === 0) {
      // searchResults.append('<p>No results found.</p>');
    } else {
      // Add visually-hidden class to all items initially
      $('#productList .card').addClass('visually-hidden');
      // closeIcon.show()

      results.forEach(result => {
        // Remove visually-hidden class for matched items
        const matchedItems = $(`#productList .card:contains("${result.title}")`);
        matchedItems.removeClass('visually-hidden');
      });
    }
  }

  closeIcon.on('click', function () {
    $('#searchInput').val('').focus();
    $(`#productList .card`).removeClass('visually-hidden');
    // $(this).hide();
  })
}