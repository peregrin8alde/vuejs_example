<template>
  <div id="app">
    <SignIn :user=user />
    <DataBase />
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import DataBase from './components/DataBase.vue'

export default {
  name: 'app',
  components: {
    SignIn,
    DataBase
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
