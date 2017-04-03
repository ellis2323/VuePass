<template>
  <li class="list__item">
    <div href="#" class="list__tile">
      <div class="list__tile__content">
        {{ model.title }}
      </div>
      <div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ESidebarElement',
  props: {
    model: {}
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
