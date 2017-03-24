import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
/* eslint-disable no-unused-vars */
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
