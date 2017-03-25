<template>
<v-app id="example-3" class="grey lighten-1" top-toolbar left-sidebar>
  <v-toolbar>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebar4 = !sidebar4" />
    <v-toolbar-logo class="text-xs-right">Logo</v-toolbar-logo>
  </v-toolbar>
  <main>
    <Sidebar />
    <v-content>

      <v-container fluid>
        <router-view></router-view>
      </v-container>

    </v-content>
  </main>
</v-app>
</template>

<script>

import Sidebar from './Sidebar.vue'

export default {
  components: {
    Sidebar
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
  }
}
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/main'
  @import '../css/main.css'
</style>
