<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>SignIn form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="user.username" prepend-icon="person" name="Username" label="Username" type="text"></v-text-field>
                <v-text-field v-model="user.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signIn">SignIn</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import store from '../store'

export default {
  data: function () {
    return {
      user: {
        username: '',
        password: '',        
      }
    }
  },
  methods: {
    signIn: function () {
      store.signIn()
      this.$router.push(this.$route.query.redirect)
    }
  }
}
</script>
