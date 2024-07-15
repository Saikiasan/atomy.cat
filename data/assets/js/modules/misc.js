import {
  Storage
} from './storage.js'

// CONTAINS FUNCTIONS FOR THE APP
export class Saikia {

  static _pantone = '00b5ef'
  static _ke = '美'
  static _vh = 'visually-hidden'
  static _in = 'invisible'
  static _author = {
    name: 'Ankit Saikia',
    github: 'Saikiasan'
  }
  // console.log(Saikia._author.name + Saikia._author.last)
  static _sys = {
    appName: 'Atomy-KD',
    developer: Saikia._author.name,
    gitRepo: `https://github.com/${Saikia._author.github}/atomy.cat`,
    hostedOn: 'GutHub Pages',
    whatsapp: '+91 8257068226'
  }

  // WINDOW OBSERVER FOR VISIBLE ANIMATIONS - TODO: CHANGE THE CODE WITH GSAP SCROLLTRIGGER EVENTS
  static observer = new IntersectionObserver(entries => {
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
  })

  // RETURNS THE URL PARAMETRES FROM THE URL FOR THE OPTED ARGUMENT
  static urlRead(p) {
    const url_param = new URLSearchParams(window.location.search)
    return url_param.get(p)
  }

  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

}

// CLASS THAT CONTAINS FUNCTIONS FOR SCREEN CHECKS
export class Scr {

  static viewportMeta = (content) => {
    const viewportMeta = $('meta[name="viewport"]')
    if (viewportMeta) {
      viewportMeta.attr('content', 'width=device-width, initial-scale=1.0, user-scalable=' + content)
    }
  }

  static isMobile() {
    return $(window).width() < $(window).height()
  }

  static mobileScreenFunction() {
    console.log('Mobile screen detected!')
  }

  static nonMobileScreenFunction() {
    console.log('Non-mobile screen detected!')
    setInterval(function () {
      $('.card').addClass('shadow')
      $('.card-body').removeClass('shadow')
    }, 300)
  }

  static debounce(fn, delay) {
    let timer = null
    return function () {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }

  static handleResize() {
    if (Scr.isMobile()) {
      Scr.mobileScreenFunction()
    } else {
      Scr.nonMobileScreenFunction()
    }
  }
}

export class UI {
  static theme = (tr) => {
    let i = 'isDark'
    let s = Storage.getSession(i)
    let b = $('html')
    let dk = 'dark-knight'
    if (s) {
      b.addClass(dk)
    }

    $(tr).on('click', function () {
      if (b.hasClass(dk)) {
        Storage.setSession(i, '')
        b.removeClass(dk)
      } else {
        Storage.setSession(i, true)
        b.addClass(dk)
      }
    })
  }

  static async preload() {
    const status = Storage.getSession('preloader')
    if (!status) {
      console.log('hi')
      // $('.preloader').toggleClass(Saikia._vh)
      await Saikia.sleep(1000)
      if ($('.preloader').length) {
        $('.preloader').delay(1500).fadeOut('slow').promise().then(function () {
          $(this).detach()
          // MENU
          // $('#menu-con').toggleClass('visually-hidden')
          // $('menu').addClass('animated fadeIn fast')
          Storage.setSession('preloader', true)
        })
      }
    } else {
      // console.log('ye')
      const loader = $('.preloader')
      // loader.toggleClass(Saikia._vh)
      await Saikia.sleep(1000)
      if (loader.length) {
        loader.delay(500).fadeOut('slow').promise().then(function () {
          $(this).detach()
        })
      }
    }
  }
}


// Scr.handleResize
const debouncedResizeHandler = Scr.debounce(Scr.handleResize(), 200)
$(window).on('resize', debouncedResizeHandler)