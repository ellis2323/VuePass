import axios from 'axios'
import config from '../js/config'
axios.defaults.baseURL = config.data.backend_url

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

import App from '../components/App.vue'
import Home from '../components/Home.vue'
import store from '../store'
/* eslint-disable no-unused-vars */
// import ESidebarContainer from '../components/SidebarContainer.vue'
// import ESidebarElement from '../components/SidebarElement.vue'
// import ESidebar from '../components/Sidebar.vue'

let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }
  ]
})

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router: router,
  render: h => h(App)
})
