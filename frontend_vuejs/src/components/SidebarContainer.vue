<template>
  <!-- container -->
<div>
  <li class="list__item">
    <div href="#" class="list__tile">
      <div class="list__tile__content" @click="selectContainer(model.uid)">
        {{ model.title }}
      </div>
      <div>
        <v-icon @click.native="toggleContainer" v-if="expand">keyboard_arrow_down</v-icon>
        <v-icon @click.native="toggleContainer" v-if="!expand">keyboard_arrow_up</v-icon>
      </div>
    </div>
  </li>
  <template v-if="expand" v-for="item in model.containers">
    <ESidebarContainer :model="item" />
  </template>
  <template v-if="expand" v-for="item in model.entries">
    <ESidebarElement :model="item" />
  </template>
</div>
</template>

<script>
import { SELECT_KEYSBOXES } from '../store/mutation-types.js'
import { mapMutations } from 'vuex'

import ESidebarElement from './SidebarElement.vue'

export default {
  name: 'ESidebarContainer',
  components: {
    ESidebarElement
  },
  props: {
    model: {}
  },
  data () {
    return {
      expand: true
    }
  },
  methods: {
    toggleContainer: function () {
      this.expand = !this.expand
    },
    selectContainer: function (uid) {
      this.SELECT_KEYSBOXES(uid)
    },
    ...mapMutations([
      SELECT_KEYSBOXES
    ])
  }

}
</script>

<style lang="stylus">
</style>
