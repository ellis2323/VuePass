<template>
<div>
Les clefs:
<ul>
<li v-for ="key in keys">{{key}}</li>
</ul>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'keys'
    ])
  }
}
</script>

<style lang="stylus">
</style>
