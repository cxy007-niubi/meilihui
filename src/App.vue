<template>
  <div>
    <tabbar></tabbar>
   <router-view></router-view>
   <bottomslideter></bottomslideter>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
import bottomslideter from '@/components/Bottomslide'
export default {
  components: {
    tabbar,
    bottomslideter
  }
}
</script>

<style lang="scss">
</style>
