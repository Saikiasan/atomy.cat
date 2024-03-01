class Storage {
  static localStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static localStorage(key) {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  }

  static removeLocalStorage(key) {
    localStorage.removeItem(key)
  }

  static clearLocalStorage() {
    localStorage.clear()
  }

  static sessionStorage(key, value) {
    sessionStorage.setItem(key, value);
  }

  static sessionStorage(key) {
    return sessionStorage.getItem(key);
  }
}

export default Storage