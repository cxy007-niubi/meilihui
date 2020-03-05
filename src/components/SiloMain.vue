<template>
  <main v-if="datalist.length">
    <div v-for="data in datalist" :key="data.name?data.name:data.urlkey">
      <div>
        <img :src="data.imageUrl" />
        <h4>{{data.englishName}}</h4>
        <span>{{data.chineseName}}</span>
        <h5>{{data.discountText}}</h5>
      </div>
    </div>
  </main>
</template>
<script>
export default {
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