import Vue from 'vue'
import App from '../components/App.vue'
import Home from '../components/Home.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
/* eslint-disable no-unused-vars */
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vuetify)

let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
