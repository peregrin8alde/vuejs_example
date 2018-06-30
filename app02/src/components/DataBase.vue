<template>
  <div class="database">
    <form id="formPost" v-on:submit.prevent="post">
      <input type="text" v-model="postPath" placeholder="postPath">
      <textarea v-model="postText"></textarea>
      <input type="submit" value="Post data">
    </form>
    <form id="formGet" v-on:submit.prevent="setGetPath">
      <input type="text" v-model="getPath" placeholder="getPath">
      <textarea v-model="getText"></textarea>
      <input type="submit" value="Set getPath">
    </form>
  </div>
</template>

<script>
import firebase from '../config/firebase'

var database = firebase.database()
var dataRef = null

export default {
  name: 'DataBase',
  props: [
    
  ],
  data: function () {
    return {
      postPath: '',
      postText: '',
      getPath: '',
      getText: ''
    }
  },
  methods: {
    post: function () {
      database.ref('data/' + this.postPath).set({
        data: this.postText
      })
    },
    setGetPath: function () {
      // detach
      if (dataRef) {
        dataRef.off()
      }
      dataRef = database.ref('data/' + this.getPath)
      var self = this
      dataRef.on('value', function(snapshot) {
        self.getText = JSON.stringify(snapshot.val())
      })
    }
  }
}

</script>

<style scoped>

</style>
