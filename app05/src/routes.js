import Home from './components/Home'
import Default from './components/Default.vue'
import NotFound from './components/404.vue'

import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'

// Routes
const routes = [
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    children: [
      { path: 'default', component: Default, alias: '' },
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: {description: 'Overview of environment', requiresAuth: true}
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
