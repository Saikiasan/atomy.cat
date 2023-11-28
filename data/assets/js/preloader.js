import { sessionStore, sessionGet } from "./dataFetch.js"
export const preload = () => {
  const status = sessionGet('preloader')
  if(!status){
    $('.preloader').toggleClass('visually-hidden')
    if ($('.preloader').length) {
      $('.preloader').delay(500).fadeOut('fast').promise().then(function () {
        $(this).detach()
        // MENU
        // $('#menu-con').toggleClass('visually-hidden')
        // $('menu').addClass('animated fadeIn fast')
        sessionStore('preloader',true)
      })
    }
  } else {
    const loader = $('.loader')
    const v = 'visually-hidden'
    loader.toggleClass(v)
    if(loader.length) {
      loader.delay(500).fadeOut('slow').promise().then(function(){
        $(this).detach()
      })
    }
  }
}
