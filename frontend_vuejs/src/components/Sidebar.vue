<template>
<v-sidebar v-model="activeSidebar" height="auto" right>
  <div class="list__group__header">
    <ul class="list list--dense e-list--dense">
    <template v-for="item in keysBoxes.containers">
      <e-sidebar-container :model="item" />
    </template>
    <template v-for="item in items.entries">
      <e-sidebar-element :model="item" />
    </template>
    </ul>
  </div>
</v-sidebar>
</template>

<script>
/* eslint-disable no-unused-vars */
import { SET_KEYBOXES } from '../store/mutation-types.js'
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'

function sortByname (e1, e2) {
  if (('items' in e1) && ('items' in e2)) {
    return e1.title > e2.title
  } else if ('items' in e1) {
    return 1
  } else if ('items' in e2) {
    return -1
  } else {
    return e1.title > e2.title
  }
}

function convertGroups (parent, groups, uid) {
  // we want objects with title, items only
  parent.containers = []
  parent.entries = []
  for (let key in groups) {
    // create a child
    let child = { level: parent.level + 1, uid }
    uid += 1
    // scan obj
    let obj = groups[key]
    // change name into title
    if ('name' in obj) {
      child.title = obj.name
    }
    // keys
    child.keys = obj.keys
    // case with children
    if (('children' in obj) && (obj.children.length > 0)) {
      parent.containers.push(child)
    } else {
    // case without children
      parent.entries.push(child)
    }
    convertGroups(child, obj.children, uid)
  }
  parent.containers.sort()
  parent.entries.sort()
}

function retrieveGroups (context) {
  axios.get('/api/keys').then(function (response) {
    let res = { title: 'VuePass', level: 0, keys: [], uid: 0 }
    convertGroups(res, response.data.groups.children[0].children, 1)
    context.SET_KEYBOXES(res)
    context.items = res
  }).catch(response => {
    console.log(response)
  })
}

/* eslint-disable no-unused-vars */
import ESidebarContainer from './SidebarContainer.vue'
import ESidebarElement from './SidebarElement.vue'

export default {
  name: 'ESidebar',
  components: {
    ESidebarContainer,
    ESidebarElement
  },
  mounted () {
    retrieveGroups(this)
  },
  data () {
    return {
      item: {
        title: 'toto',
        action: true
      },
      items: [],
      activeSidebar: false
    }
  },
  computed: {
    ...mapGetters([
      'keysBoxes'
    ])
  },
  methods: {
    ...mapMutations([
      SET_KEYBOXES
    ])
  }
}
</script>

<style lang="stylus">

.e-list--dense {
  padding: 0px
}

</style>
