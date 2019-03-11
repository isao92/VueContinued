import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'https://vuetest-ff7c6.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => { return { messages: response.body } }
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
