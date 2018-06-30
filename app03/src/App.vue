<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- ナビゲーションに router-link コンポーネントを使う -->
      <!-- リンク先を `to` プロパティに指定します -->
      <!-- デフォルトで `<router-link>` は `<a>` タグとして描画されます -->
      <router-link to="/foo/hello">Go to Foo</router-link>
      <router-link to="/foo/hello/child">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- ルートアウトレット -->
    <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
