<template>
  <div id="app">
    <SignIn :user=user />
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'

export default {
  name: 'app',
  components: {
    SignIn
  },
  data: function () {
    return {
      user: {
        email: '',
        password: '',
        signInState: ''
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
