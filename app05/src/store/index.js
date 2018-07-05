let store = {
  debug: true,
  state: {
    signedIn: false,
  },
  signIn: function() {
    if (this.debug) console.log('Signed In')
    this.state.loggedIn = true
  },
  signOut: function() {
    if (this.debug) console.log('Signed Out')
    this.state.loggedIn = false
  }
}

export default store