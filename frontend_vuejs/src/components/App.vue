<template>
<v-app id="example-3" class="grey lighten-1" top-toolbar left-sidebar>
  <v-toolbar>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebar4 = !sidebar4" />
    <v-toolbar-logo class="text-xs-right">Logo</v-toolbar-logo>
  </v-toolbar>
  <main>
    <e-sidebar />
    <v-content>
      <div @click="INCREMENT(1)">{{ count2 }}</div>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

    </v-content>
  </main>
</v-app>
</template>

<script>

import ESidebar from './Sidebar.vue'
import { mapGetters, mapMutations } from 'vuex'
import { INCREMENT } from '../store/mutation-types.js'

export default {
  components: {
    ESidebar
  },
  data () {
    return {
      itemGroup: [
        { header: 'Header' },
        {
          title: 'Parent',
          group: '/company',
          items: [
            { title: 'Child' },
            { title: 'Child' },
            { title: 'Child' }
          ]
        }
      ],
      sidebar4: true,
      item: {
        text: 'Get Started'
      }
    }
  },
  computed: {
    ...mapGetters([
      'count', 'count2'
    ])
  },
  methods: {
    ...mapMutations([
      INCREMENT
    ])
  }
}
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/main'
  @import '../css/main.css'
</style>
