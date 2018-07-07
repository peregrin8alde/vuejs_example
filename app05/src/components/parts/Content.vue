<template>
  <v-card>
    <v-card-title primary-title>
      <div class="headline">{{ content.title }}</div>
    </v-card-title>
    <v-card-text><div>{{ content.value }}</div></v-card-text>
    <v-card-actions>
      <v-btn>action</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Content',
  props: [
    'content'
  ]
}
</script>

<style scoped>

</style>
