import {Data} from './data.js'
import {Saikia} from './misc.js'

export class Search {
  static clsBtn = $('#closeIcon')
  static initiate(){
    $.getJSON(Data.distributorJsonData, function(d){
      const searchData = d
      $('#searchInput').on('input', function(){
        const searchTerm = $(this).val()
        if(searchTerm.trim() !== ''){
          const filteredData = Search.filterData(searchTerm, searchData)
          Search.showSearchResults(filteredData)
        } else {
          $('#productList .card').removeClass('visually-hidden')
        }
      })
    })
  }

  static showSearchField(el){
    let searchField = '#search-home'
    let navBrand = '.navbar-brand'
    let vh = Saikia._vh
    $(el).on('click', function(){
      
      // console.log(el)
      // when el is clicked, display the search form, hide the logo - animate the transitions
      $(navBrand).addClass('animated fadeOutLeft fast')
        $(navBrand).fadeOut()
        $(searchField).toggleClass(vh).addClass('animated fadeInLeft').fadeIn()
    })
  }

  static filterData(t, d){
    return d.filter(item => {
      return item.title.toLowerCase().includes(t.toLowerCase())
    })
  }

  static showSearchResults(results) {
    if (results.length === 0) {
      // searchResults.append('<p>No results found.</p>');
    } else {
      // Add visually-hidden class to all items initially
      $('#productList .card').addClass('visually-hidden');
      // closeIcon.show()

      results.forEach(result => {
        // Remove visually-hidden class for matched items
        const matchedItems = $(`#productList .card:contains("${result.title}")`);
        matchedItems.removeClass('visually-hidden');
      });
    }
  }

}

Search.clsBtn.on('click', function(){
  $('#searchInput').val('').focus();
  $(`#productList .card`).removeClass('visually-hidden');
  // $(this).hide()
})