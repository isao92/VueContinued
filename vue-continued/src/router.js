import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Module16 from './views/Module16.vue'
import UserStart from './views/UserStart.vue'
import UserDetail from './views/UserDetail.vue'
import UserEdit from './views/UserEdit.vue'
import Header from './views/Header.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/module15',
      name: 'module15',
      // route level code-splitting
      // this generates a separate chunk (module15.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "module15" */ './views/Module15.vue')
    },
    {
      path: '/module16/:id',
      name: 'module16',
      component: Module16
    },
    {
      path: '/user',
      components: {
        default: UserStart,
        'header-bottom': Header
      },
      children: [
        { path: '',
          component: UserStart
        },
        { path: ':id',
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log('inside route setup')
            next()
          }
        },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
      ]
    },
    {
      path: ':id',
      component: UserDetail
    },
    {
      path: ':id/edit',
      name: 'userEdit',
      component: UserEdit
    },
    {
      path: '/redirect-me',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '*', redirect: '/'
    }
  ]
})
