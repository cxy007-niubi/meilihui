
<template>
  <div>
    <div class="silo" @click="tobrand" v-if="banners.length">
      <img :src="data.main_image" alt="hhhhh" v-for="data in banners" :key="data.id" />
      <span>{{banners[0].main_title}}</span>
      <p>{{banners[0].sub_title}}</p>
    </div>
    <silo-main :datalist="mainData"></silo-main> 
  </div>
</template>
<script>
import axios from 'axios'
import siloMain from "@/components/SiloMain"
export default {
  data () {
    return {
      banners: [],
      every: null,
      mainData:[]
    }
  },
  components:{
    // recommend,
    siloMain
  }
  ,
  mounted () {
    axios
      .get(
        'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5'
      )
      .then(res => {
        console.log(res.data.banners)
        this.banners = res.data.banners
      }),
    axios
      .get('http://www.mei.com/appapi/ninenew/operational/v1?credential=')
      .then(res => {
        console.log(res.data.show2)
        this.every = res.data.show2
      }),
       axios
      .get('http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1583409660046&summary=d103693394d815fbb6493f99c1d13ced&platform_code=H5')
      .then(res => {
        console.log(res.data.eventList)
        this.mainData = res.data.eventList;
      })
    
  },
  methods:{
      tobrand(){
          this.$router.push('/brand')
      }
  }
}
</script>
<style lang="scss" scoped>
.silo {
      color: #ccc;
    position: relative;
  img {
    width: 100%;
  }
  span{
      position: absolute;
      left:50%;
      font-size: 26px;
      font-weight: 800;
      bottom:140px;
      margin-left: -85px;
  }
  p{
      position: absolute;
      left:130px;
      font-size: 18px;
      font-weight: 800;
      bottom: 100px;
  }
}
h3,h4,h6{
    display: inline-block;
}
.every{
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #ccc;
    img{
        width:20%;
    }

}
</style>
