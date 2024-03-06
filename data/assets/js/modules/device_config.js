class DeviceConfig {
  static isMobileScreen() {
    return $(window).width() < $(window).height()
  }
  
  static mobileScreen(){
    console.log("A mobile screen detected!")
  }

  static noMobileScreen(){
    console.log('Non-mobile screen detected!')
    setInterval(function () {
      $('.card').addClass('shadow')
      $('.card-body').removeClass('shadow')
    }, 300)
  }
}

export default DeviceConfig