import { removeData, storeData } from "./dataFetch.js";

let buttonsData = [{
    bgColorItem: "#ff8c00",
    dataPage: "user",
    svgPath: `<svg class="icon" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>`
  },
  {
    bgColorItem: "#f54888",
    dataPage: "setting",
    svgPath: `<svg class="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                </path>
              </svg>`
  },
  {
    bgColorItem: "#67b2f0",
    dataPage: "productList",
    svgPath: `<svg viewBox="0 0 24 24" class="icon">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>`
  },
  {
    bgColorItem: "#e0b115",
    dataPage: "dash",
    svgPath: `<svg class="icon" viewBox="0 0 24 24">
                <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
                    C3.9,4.4,4.4,3.9,5.1,3.9z" />
                <path d="M4.2,9.3h15.6" />
                <path d="M9.1,9.5v10.3" />
              </svg>`
  },
  {
    bgColorItem: "#65ddb7",
    dataPage: "menuList",
    svgPath: `<svg class="icon" viewBox="0 0 24 24">
                <path d="M3.8,6.6h16.4" />
                <path d="M20.2,12.1H3.8" />
                <path d="M3.8,17.5h16.4" />
              </svg>`
  }
];

// CREATING NAVIGATION BAR DYNAMICALLY WITH JAVASCRIPT
// THIS DOSEN'T ALLOW THE DYNAMIC ANIMATION, GOT TO FIGURE SOMETHING OUT.
export const navigation = () => {
  const topbar = $('<div>').attr("id", "topInfo").addClass("d-flex bg-danger justify-content-between pb-1 px-2 visually-hidden")
  const updatedText = $('<div>').addClass('updatedtext')
  $(`<span class="fw-bold"><i data-feather="arrow-up-circle" width="1.2em" stroke-width="2pt"></i>&nbsp;&nbsp;Date updated : 11-07-2023</span>`).appendTo(updatedText)
  const topBtn = $(`<button class="btn p-0 m-0" id="topInfoBtn"><i data-feather="x-circle"></i></button>`)
  topbar.append(updatedText, topBtn)

  const menu = $('<menu>').addClass('menu')
  buttonsData.forEach(function (btn) {
    const button = $('<button>').addClass('menu__item').attr({
      "style": `--bgColorItem: ${btn.bgColorItem};`,
      "data-page": `${btn.dataPage}`
    })
    $(btn.svgPath).appendTo(button)
    menu.append(button)
  })
  const menuBorder = $('<div>').addClass('menu__border')
  menu.append(menuBorder)

  const svgContainer = $('<div>').addClass('svg-container')
  $(`<svg viewBox="0 0 202.9 45.5"><clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)"><path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z" /></clipPath></svg>`).appendTo(svgContainer)
  $('header').append(topbar, menu, svgContainer)
}

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

    const page = item.data('page');
    urlCrawler(page);
  }

  function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element[0].getBoundingClientRect();
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

export const urlCrawler = (url, gds) => {
  const page = url || 'home';

  if (page) {
    const targetNavLink = $(`.menu__item[data-page="${page}"]`);
    $('.menu__item').removeClass('active'); // Remove 'active' class from all menu items
    targetNavLink.addClass('active');

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
          if (!gds) {
            $('root#root').html(content);
            removeData('gds')
          } else {
            $('root#root').html(content);
            // local
            storeData('gds',gds)
          }

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
  $('#menu-con menu').addClass(v)
  $('.product-menu').toggleClass(v).addClass('animated slideInUp fast')
  .on('click',function(){
    goBack()
  })
}

export const goBack = () => {
  urlCrawler()
};
