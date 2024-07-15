// THE ALL IN ONE ALERT/ NOTIFICATIONS/ POPUP SCRIPT
export class Alertify{
  popupBody = $('#popup-body')
  popupModal = $('#popup-modal')
  popupTitle = $('#popup-title')
  
  static popup(title='', body='A default message'){
    popupBody.text=body
    popupTitle.text=title
  }
}