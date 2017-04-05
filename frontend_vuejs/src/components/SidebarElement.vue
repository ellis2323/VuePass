<template>
  <li class="list__item">
    <div href="#" class="list__tile">
      <div class="list__tile__content" @click="selectContainer(model.uid)">
        {{ model.title }}
      </div>
      <div>
      </div>
    </div>
  </li>
</template>

<script>
import { SELECT_KEYSBOXES } from '../store/mutation-types.js'
import { mapMutations } from 'vuex'

export default {
  name: 'ESidebarElement',
  props: {
    model: {}
  },
  data () {
    return {}
  },
  methods: {
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
