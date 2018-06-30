<template>
  <div class="login">
    <h1>Login</h1>
    <form id="loginForm" v-on:submit.prevent="signIn">
      <input type="submit" value="Sign In">
    </form>
    <form id="logoutForm" v-on:submit.prevent="signOut">
      <input type="submit" value="Sign Out">
    </form>
  </div>
</template>

<script>
import Auth from '../api/Auth.js'

export default {
  name: 'Login',
  methods: {
    signIn: function () {
      Auth.login()
      this.$router.push(this.$route.query.redirect);
    },
    signOut: function () {
      Auth.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
