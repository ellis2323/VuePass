<template>
  <!-- container -->
<div>
  <li class="list__item">
    <div href="#" class="list__tile">
      <div class="list__tile__content">
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
    }
  }

}
</script>

<style lang="stylus">
</style>
