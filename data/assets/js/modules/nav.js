import { Saikia } from "./misc.js";

export class Nav {

  static productMenu() {
    // $('header').toggleClass(v)
    // $('#menu-con menu').addClass(v)
    // updateViewportSettings('yes')
    $('.product-menu').toggleClass(Saikia._vh).addClass('animated slideInUp fast')
      .on('click', function () {
        // goBack()
      })
  }
}

// TODO: TO CHANGE THE PARAMS FOR THE 3 ARGS