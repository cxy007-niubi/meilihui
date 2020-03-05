<template>
  <main v-if="datalist.length">
    <div v-for="data in datalist" :key="data.name">
      <h3 v-show="data.name">{{data.name}}</h3>
      <div class="xy"  v-for="item in data.events" :key="item.eventId" >
        <img :src="item.imageUrl" alt />
        <slot></slot>
        <h4>{{item.englishName}}</h4>
        <span>{{item.chineseName}}</span>
        <h5>{{item.discountText}}</h5>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data(){
return {
  // hhh:false
}
  },
  props: ["datalist"],
  mounted() {
  }
};
</script>
<style scoped lang="scss">
main {
  width: 90%;
  margin: 0 auto;

  img {
    width: 100%;
  }
  div{
      position: relative;
      color:#fff;
      h3{
          color: #000;
      }
      h4,span,h5{
          position: absolute;
          left:10px;
        //   bottom: 78px;
        font-weight: 400;
      }
      h4{
          bottom: 30px;
          font-size: 12px;
      }
      span{
          font-size: 10px;
          bottom: 18px
      }
      h5{
          font-size: 10px;
          bottom: 5px;
      }
  }
  .xy{
    margin-top: 10px;
  }
}
</style>