jQuery(function () {
  let urlweb = 'https://www.atomy.com/in/Home/Product/MallMain';
  let imager = 'https://www.atomy.com/';

  // Fetch the product data using Axios
  axios.get(urlweb)
    .then(response => {
      const htmlData = response.data;

      // Create a temporary container to parse the HTML data
      const tempContainer = $('<div>');
      tempContainer.html(htmlData);

      // Find all the product elements
      const productElements = tempContainer.find('ul.pBox');

      // Loop through each product element and create a card
      productElements.each(function () {
        const productElement = $(this);

        // Create the product card element
        const card = $('<div>').addClass('card col-md-4 col-lg-2 shadow m-4');

        // Extract the relevant data from the product element
        const imageSrc = productElement.find('img').attr('src');
        const title = productElement.find('.ptitle a').text();
        const price = productElement.find('.pprice .numberic').text();

        // Create the card image
        const image = $('<img>').addClass('mx-auto my-2')
          .attr('src', imager + imageSrc)
          .attr('alt', 'Product Image')
          .css({
            width: '200px',
            height: '200px'
          });

        // Create the card body
        const cardBody = $('<div>').addClass('card-body text-center px-2 mb-2');

        // Create the card title
        const titleElement = $('<h5>').addClass('card-title').text(title);

        // Create the card price
        const priceElement = $('<p>').addClass('card-text text-primary fw-bold fs-4').text('MRP: ₹ ' + price);

        // Append the elements to the card body
        cardBody.append(titleElement, priceElement);

        // Append the elements to the card
        card.append(image, cardBody);

        // Append the card to the product list container
        $('#productList').append(card);
      });

    })
    .catch(error => {
      console.error('Error fetching product data:', error);
    });
});