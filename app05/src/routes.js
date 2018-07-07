import Home from './components/Home.vue'
import NotFound from './components/404.vue'

import SignIn from './components/SignIn.vue'

import Dashboard from './components/Dashboard.vue'
import Settings from './components/Settings.vue'

// Routes
const routes = [
  {
    path: '/signin',
    component: SignIn,
    name: 'SignIn',
  },
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    children: [
      {
        path: 'home',
        component: Home,
        name: 'Home',
        alias: ''
      },
      {
        path: 'settings',
        component: Settings,
        name: 'Settings',
        meta: {description: 'Setting', requiresAuth: true}
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
