<template>
  <div>
    <tabbar v-show="show"></tabbar>
    <router-view></router-view>
    <bottomslideter v-show="show"></bottomslideter>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import bottomslideter from '@/components/Bottomslide'
export default {
  components: {
    tabbar,
    bottomslideter
  },
  computed: {
    show () {
      return this.$store.state.isShow
    }
  }
}
</script>

<style lang="scss">
</style>
