import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: loadPage('LoginPage')
  },
  {
    path: '/home',
    name: 'Home',
    component: loadPage('HomePage'),
    children: [
      {
        path: 'favorites',
        name: 'Home.Favorites',
        component: loadPage('FavoritePage')
      },
      {
        path: 'new',
        name: 'Home.New',
        component: loadPage('NewPage')
      },
      {
        path: 'indoor',
        name: 'Home.Indoor',
        component: loadPage('IndoorPage')
      },
      {
        path: 'outdoor',
        name: 'Home.Outdoor',
        component: loadPage('OutdoorPage')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/plant/:plantId',
    name: 'Plant',
    component: loadPage('PlantPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
