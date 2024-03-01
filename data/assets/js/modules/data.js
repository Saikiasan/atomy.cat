class Data {
  static fetchData(url) {
    return new Promise((resolve, reject) => {
      $.getJSON(url)
      .done(data => resolve(data))
      .fail(error => reject(error))
    })
  }

  static Consoler(t) {
    return console.log(`This is a message from ${t}`)
  }
}

export default Data