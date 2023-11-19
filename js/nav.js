import { removeData, storeData } from "./dataFetch.min.js";

export const clicks = () => {
  const menu = $(".menu");
  const menuItems = menu.find(".menu__item");
  const menuBorder = menu.find(".menu__border");
  let activeItem = menu.find(".active");

  function clickItem(item, index) {
    menu.css("--timeOut", "");

    if (activeItem.is(item)) return;

    if (activeItem.length) {
      activeItem.removeClass("active");
    }

    item.addClass("active");
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
  }

  function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element[0].getBoundingClientRect();
    element.addClass('active')
    const left = Math.floor(offsetActiveItem.left - menu[0].offsetLeft - (menuBorder.outerWidth() -
      offsetActiveItem.width) / 2) + "px";
    menuBorder.css("transform", `translate3d(${left}, 0, 0)`);
  }

  menuItems.on("click", function () {
    clickItem($(this), menuItems.index(this));
  });
  offsetMenuBorder(activeItem, menuBorder);

  $(window).on("resize", function () {
    offsetMenuBorder(activeItem, menuBorder);
    menu.css("--timeOut", "none");
  });

}

export const urlCrawler = () => {
  
  const page = urlParam('page') || 'home'
  // const gds = urlParams.get('gds')
  
  if (page) {
    $(`.nav-link[href="?page=${page}"]`).addClass('active')
    // const targetNavLink = $(`.menu__item[data-page="${page}"]`);
    // $('.menu__item').removeClass('active');
    // targetNavLink.addClass('active');

    const filePath = 'pages/' + page + '.html';
    $('title').text('ATOMY - ' + page.charAt(0).toUpperCase() + page.slice(1));

    $.ajax({
      url: filePath,
      dataType: 'html',
      success: function (content) {
        var mainElement = $('.main');

        // Fade out the main element
        mainElement.fadeOut('fast', function () {
          // Set the new content after fade out is complete
          $('root#root').html(content);

          // console.log(param1)
          // Fade in the main element
          mainElement.fadeIn('fast');
        });
      },

      error: function (status, error) {
        console.error('Error loading content:', error, status);
      }
    });
  } else {
    console.error("Missing url in url");
  }
};


export const productMenu = () => {
  let v = 'visually-hidden'
  // $('header').toggleClass(v)
  // $('#menu-con menu').addClass(v)
  updateViewportSettings('yes')
  $('.product-menu').toggleClass(v).addClass('animated slideInUp fast')
  .on('click',function(){
    goBack()
  })
}

export const goBack = () => {
  urlCrawler()
  updateViewportSettings('no')
};

// NO / YES
export const updateViewportSettings = (content) => {
  const viewportMeta = $('meta[name="viewport"]')
  if (viewportMeta) {
    viewportMeta.attr('content','width=device-width, initial-scale=1.0, user-scalable=' + content)
  }
}

export const urlParam = (value) => {
  const urlParameter = new URLSearchParams(window.location.search)
  return urlParameter.get(value)
}