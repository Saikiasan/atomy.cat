jQuery(function() {
  function loadBuyerProducts() {
    $.getJSON('data/level0.json', function(productData) {
      const totaldisplay = $('<div>').addClass('badge bg-danger rounded-circle p-2 m-2 position-fixed top-0 start-0 fs-5 shadow').text(productData.length).css({
        zIndex: 100
      });
      $('.data-num').append(totaldisplay);

      productData.forEach(product => {
        const card = $('<div>').addClass('card col-md-4 col-lg-2 shadow m-4');
        const title = product.title;
        const price = product.price;
        const imageUrl = product.imageUrl;

        const image = $('<img>').addClass('mx-auto my-2').attr('src', imageUrl).attr('alt', 'Product Image').css({
          width: '200px',
          height: '200px'
        });

        const cardBody = $('<div>').addClass('card-body text-center p-2 mb-2');
        const titleElement = $('<h5>').addClass('card-title').text(title);
        const priceElement = $('<p>').addClass('card-text text-primary fw-bold fs-4').text('MRP: ₹ ' + price);

        cardBody.append(titleElement, priceElement);
        card.append(image, cardBody);

        $('#productList').append(card);
      });
    }).fail(function(error) {
      console.error('Error fetching product data:', error);
    });
  }

  function loadDistributorProducts() {
    $.getJSON('data/level1.json', function(products) {
      const totaldisplay = $('<div>').addClass('badge bg-danger rounded-circle p-2 m-2 position-fixed top-0 start-0 fs-5 shadow').text(products.length).css({
        zIndex: 100
      });
      $('.data-num').append(totaldisplay);

      products.forEach(product => {
        const card = $('<div>').addClass('card col-md-4 col-lg-2 shadow m-4');
        const title = product.title;
        const price = product.price;
        const imageUrl = product.imageUrl;
        const points = product.points;

        const image = $('<img>').addClass('mx-auto my-2').attr('src', imageUrl).attr('alt', 'Distributor Product Image').css({
          width: '200px',
          height: '200px'
        });

        const cardBody = $('<div>').addClass('card-body text-center p-2 mb-2');
        const titleEl = $('<h5>').addClass('card-title').text(title);
        const priceEl = $('<p>').addClass('card-text text-primary fw-bold fs-5').text('Distributor Price: ₹ ' + price);
        const pointsEl = $('<p>').addClass('text-success fw-bold fs-4').text('PV: ' + points);

        cardBody.append(titleEl, priceEl, pointsEl);
        card.append(image, cardBody);

        $('#productList').append(card);
      });
    }).fail(function(error) {
      console.error('Error: ' + error);
    });
  }

  function lightR() {
    $('.l1').toggleClass('visually-hidden','text-light')
    $('.l0').toggleClass('visually-hidden')
    $('.container-0').toggleClass('bg-black','bg-primary')
  }

  function toggleProducts() {
    $('#btn').on('change', function() {
      $('#productList').empty(); // Clear existing products

      if ($(this).is(':checked')) {
        lightR()
        loadDistributorProducts();
      } else {
        lightR()
        loadBuyerProducts();
      }
    });
    loadBuyerProducts()
  }

  toggleProducts(); // Initial load based on button state

    // Check if the screen width is less than or equal to a mobile threshold
    function isMobileScreen() {
      return $(window).width() <= 768; // Adjust the threshold as needed
    }
  
    // Function to be executed if the screen is detected as mobile
    function mobileScreenFunction() {
      console.log('Mobile screen detected!');
      setInterval(function(){$('.card').removeClass('shadow').addClass('border-0')},300)
    }
  
    // Function to be executed if the screen is not detected as mobile
    function nonMobileScreenFunction() {
      console.log('Non-mobile screen detected!');
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
});