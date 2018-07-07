<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <v-flex
        v-for="(item, i) in items"
        xs12
      >
        <Content :content="item"></Content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Content from './parts/Content.vue'

export default {
  name: 'Home',
  components: {
    Content
  },
  props: [
    'msg'
  ],
  data: function () {
    return {
      items: [
        {
          title: 'item1',
          value: 'aaaa'
        },
        {
          title: 'item2',
          value: 'bbb'
        },
        {
          title: 'item3',
          value: 'ccc'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
