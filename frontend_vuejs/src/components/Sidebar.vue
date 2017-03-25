<template>
<v-sidebar v-model="sidebar4" height="auto">
    <v-list dense>
    <template v-for="item in itemGroup">
        <v-list-group v-if="item.items">
        <v-list-item slot="item">
            <v-list-tile ripple>
            <v-list-tile-title v-text="item.title" />
            <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
            </v-list-tile>
        </v-list-item>
        <v-list-item v-for="subItem in item.items" :key="item">
            <v-list-tile ripple>
            <v-list-tile-title v-text="subItem.title" />    
            </v-list-tile>
        </v-list-item>
        </v-list-group>
        <v-subheader v-else-if="item.header" v-text="item.header" />
        <v-divider v-else-if="item.divider" light />
        <v-list-item v-else>
        <v-list-tile ripple>
            <v-list-tile-title v-text="item.title" />    
        </v-list-tile>
        </v-list-item>
    </template>
    </v-list>
</v-sidebar>
</template>

<script>
  export default {
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
          },
        ],
        sidebar4: true
      }
    }
  }
</script>

<style lang="stylus">
</style>