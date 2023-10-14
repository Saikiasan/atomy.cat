jQuery(function () {
  function loadData() {
    // Fetch data from the first JSON file
    $.getJSON('data/b.json', function (productData) {
      // Fetch data from the second JSON file
      $.getJSON('data/d.json', function (distributorData) {
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

    productData.forEach(product => {
      const distributor = distributorData.find(distributor => distributor.gds === product.gds);

      const card = createCard(product.gds,product.title, product.price, distributor.price, distributor.points, product.imageUrl);
      $('#productList').append(card);
    });
  }

  function createCard(gds,title, price, distributorPrice, points, imageUrl) {
    const card = $('<div>').addClass('card col-md-4 col-lg-2 m-4 border-0').attr('data-link',gds);
    const image = $('<img>').addClass('mx-auto my-2').attr('src', imageUrl).attr('alt', 'Product Image').css({
      width: '200px',
      height: '200px'
    });

    const cardBody = $('<div>').addClass('card-body text-center p-2 mb-2 rounded-4 shadow');
    const distBody = $('<div>').addClass('rounded-4 mx-5 py-2 bg-dark mb-3');
    const titleElement = $('<h5>').addClass('card-title fs-4 mb-2').text(title);
    const priceElement = $('<p>').addClass('card-text text-primary fw-bold fs-5 mb-3').text('MRP: ₹ ' + price);
    const distributorPriceElement = $('<p>').addClass('card-text text-success fw-bolder fs-3 mb-0 pb-0').text('DP: ₹ ' + distributorPrice);
    const pointsElement = $('<p>').addClass('card-text text-danger fw-bold fs-3').text('PV: ' + points);

    distBody.append(distributorPriceElement, pointsElement);
    cardBody.append(titleElement, priceElement, distBody);
    card.append(image, cardBody);

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
    setInterval(function(){$('.card').addClass('shadow');$('.card-body').removeClass('shadow')},300)
    // Add your non-mobile-specific code here
  }

  // Initial check on page load
  if (isMobileScreen()) {
    mobileScreenFunction();
  } else {
    nonMobileScreenFunction();
  }

  // Check on window resize
  $(window).on('resize', function() {
    if (isMobileScreen()) {
      mobileScreenFunction();
    } else {
      nonMobileScreenFunction();
    }
  });

})