export const preload = () => {
  if ($('.preloader').length) {
    $('.preloader').delay(1500).fadeOut('slow').promise().then(function () {
      $(this).detach();
      $('header').toggleClass('visually-hidden').then(
        $('menu').addClass('animated slideInUp fast')
      )
    })
  }
}