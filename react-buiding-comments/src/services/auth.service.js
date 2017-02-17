module.exports = {
  login(username, pass, cb) {
  cb = arguments[arguments.length - 1]
  if (localStorage.token) {
    if (cb) cb(true)
    this.onChange(true)
    return
  }
  pretendRequest(username, pass, (res) => {
    if (res.authenticated) {
    localStorage.token = res.token
    localStorage.username = res.username
    if (cb) cb(true)
    this.onChange(true)
    } else {
    if (cb) cb(false)
    this.onChange(false)
    }
  })
  },

  getToken() {
  return localStorage.token
  },

  logout(cb) {
  delete localStorage.token
  delete localStorage.username
  if (cb) cb()
  this.onChange(false)
  },

  loggedIn() {
  return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(username, pass, cb) {
  setTimeout(() => {
  if (1===1) {
    cb({
    authenticated: true,
    token: Math.random().toString(36).substring(7),
    username: username
    })
  } else {
    cb({ authenticated: false })
  }
  }, 0)
}