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
    <p>{{ signInState }}</p>
  </div>
</template>

<script>
import firebase from 'firebase'

var config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
}
firebase.initializeApp(config)

export default {
  name: 'SignIn',
  data: function () {
    return {
      email: '',
      password: '',
      signInState: ''
    }
  },
  // methods
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage)
      })
    },
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage)
      })
      var user = firebase.auth().currentUser;
      
      if (user) {
        this.signInState = 'Signed In'
      } else {
        this.signInState = 'Not Signed In'
      }
    },
    signOut: function () {
      firebase.auth().signOut().then(function() {
        this.signInState = 'Not Signed In'
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
