export class Storage {
  static setLocal(k, v) {
    localStorage.setItem(k, JSON.stringify(v))
  }

  static getLocal(k) {
    storedVal = localStorage.getItem(k)
    return storedVal ? JSON.parse(storedVal) : null
  }

  static removeLocal(k) {
    localStorage.removeItem(k)
  }

  static clearLocal() {
    localStorage.clear()
  }

  static setSession(k, v) {
    sessionStorage.setItem(k, v)
  }

  static getSession(k) {
    if (sessionStorage.getItem(k)) {
      return sessionStorage.getItem(k)
    } else {
      return null
    }
  }
}