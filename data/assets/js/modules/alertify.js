// THE ALL IN ONE ALERT/ NOTIFICATIONS/ POPUP SCRIPT

// import Swal from '../sweetalert2.all.min.js'

export class Alertify{
  popupBody = $('#popup-body')
  popupModal = $('#popup-modal')
  popupTitle = $('#popup-title')
  
  static popup(title='', body='A default message'){
    popupBody.text=body
    popupTitle.text=title
  }

  static updates(title="Last Updates!", date, publisher="Keson Dutta") {
    Swal.fire({
      title: `${title} \nDate: ${date}`,
      showConfirmBtn: false,
    })
    console.log('ok')
  }
}