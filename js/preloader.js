export const preload = () => {
  if ($('.preloader').length) {
    $('.preloader').delay(1500).fadeOut('slow').promise().then(function () {
      $(this).detach()
      // MENU
      $('#menu-con').toggleClass('visually-hidden')
      $('menu').addClass('animated slideInUp fast')
    })
  }
}
