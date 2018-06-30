// 0. モジュールシステムを使っている場合 (例: vue-cli 経由で)、Vue と VueRouter をインポートし、`Vue.use(VueRouter)` を呼び出します。
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. ルートコンポーネントを定義します
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import Child from './components/Child.vue'
import Login from './components/Login.vue'

import Auth from './api/Auth.js'

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
  {
    path: '/foo/:msg',
    component: HelloWorld,
    props: true,
    children: [
      {
        path: 'child',
        component: Child,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/bar',
    component: HelloWorld2
  },
  {
    path: '/login',
    component: Login
  }

]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!Auth.loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
