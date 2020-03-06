
<template>
  <div>
    <div v-if="$store.state.isShow">
      <div class="banner" @click="tobrand" v-if="banners.length">
        <img :src="data.main_image" alt="hhhhh" v-for="data in banners" :key="data.id" />
        <span>{{banners[0].main_title}}</span>
        <p>{{banners[0].sub_title}}</p>
      </div>
      <div class="every">
        <div v-for="(data,index) in every" :key="data.main_title" @click="hhh(index)">
          <div>
            <h3>{{data.main_title}}</h3>
            <h6>{{data.sub_title}}</h6>
          </div>
          <div>
            <img :src="data.products[index].picUrl" alt />
            <h4>{{data.products[index].tag}}</h4>
            <img :src="data.products[index?--index:++index].picUrl" alt />
            <h4>{{data.products[index?--index:++index].tag}}</h4>
          </div>
        </div>
      </div>

      <recommend :datalist="mainData"></recommend>
    </div>

    <!-- 这里是index下的search点击后 -->
    <div v-else>
               <div class="cont">
                   <div class="search">
                   <van-search v-model="text" placeholder="请输入搜索关键词" />
                    </div>
                    <div class="change" @click="isShow=true">
                        取消
                    </div>
               </div>
               <p>
                   搜索发现
               </p>
               <div class="list">
                   <ul>
                       <li v-for="(data,index) in searchFindList" :key='index'>
                           {{data.findKeyWord}}
                       </li>
                   </ul>
               </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import recommend from '@/components/Recommend'
export default {
  data () {
    return {
      banners: [],
      every: null,
      mainData: []
    }
  },
  components: {
    recommend
  },
  mounted () {
    // axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5')
    //   .then(res => {
    //     console.log(res.data.banners)
    //     this.banners = res.data.banners
    //   }
    //   ),
    // axios.get('http://www.mei.com/appapi/ninenew/operational/v1?credential=').then(res => {
    //   console.log(res.data.show2)
    //   this.every = res.data.show2
    // }),
    // axios.get(
    //   'http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1583370238508&summary=be4254f6c5f2516f29c40418d50556e9&platform_code=H5'
    // )
    //   .then(res => {
    //     console.log(res.data.lists)
    //     this.mainData = res.data.lists
    //   })
  },
  methods: {
    tobrand () {
      this.$router.push('/brand')
    },
    hhh (index) {
      this.$store.state.isShow = false
      if (index === 0) {
        this.$router.push('/act/dailynew')
      }
      if (index === 1) {
        this.$router.push('/act/qingcang')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  color: #ccc;
  position: relative;
  img {
    width: 100%;
  }
  span {
    position: absolute;
    left: 50%;
    font-size: 26px;
    font-weight: 800;
    bottom: 140px;
    margin-left: -85px;
  }
  p {
    position: absolute;
    left: 130px;
    font-size: 18px;
    font-weight: 800;
    bottom: 100px;
  }
}
h3,
h4,
h6 {
  display: inline-block;
}
.every {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #ccc;
  img {
    width: 20%;
  }
}
</style>
