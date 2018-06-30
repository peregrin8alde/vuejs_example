<template>
  <div class="signIn">
    <form id="form" v-on:submit.prevent="signUp">
      <input type="email" v-model="email" placeholder="email@email.com">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Sign Up">
    </form>
    <form id="form" v-on:submit.prevent="signIn">
      <input type="email" v-model="email" placeholder="email@email.com">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Sign In">
    </form>
    <form id="form" v-on:submit.prevent="signOut">
      <input type="submit" value="Sign Out">
    </form>
    <p>{{ user.signInState }}</p>
  </div>
</template>

<script>
import firebase from '../config/firebase'

var auth = firebase.auth()

export default {
  name: 'SignIn',
  props: [
    'user',
  ],
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  mounted: function () {
    var self = this
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.user.email = user.email;
        self.user.signInState = 'Sign in'
      } else {
        self.user.signInState = 'Signed out'
      }
    })
  },
  // methods
  methods: {
    signUp: function () {
      auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage)
      })
    },
    signIn: function () {
      auth.signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage)
      })
    },
    signOut: function () {
      auth.signOut().then(function() {
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: Helvetica, Arial, sans-serif;
}

ul {
  padding: 0;
}

.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .25s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}
</style>
