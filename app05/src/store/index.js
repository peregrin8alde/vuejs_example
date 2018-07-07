let store = {
  debug: true,
  state: {
    signedIn: false,
  },
  signIn: function() {
    if (this.debug) console.log('Signed In')
    this.state.signedIn = true
  },
  signOut: function() {
    if (this.debug) console.log('Signed Out')
    this.state.signedIn = false
  }
}

export default store