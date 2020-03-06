<template>
    <div>
       <div class="header" v-show="isShow">
           <div class="top">
               <ul>
                   <li @click="handlelogin">
                       <span>登陆</span>
                   </li>
                   <li class="search" @click='$store.state.isShow=false'>
                        <van-search v-model="text" placeholder="FENDI最低可至五折"  input-align="left"/>
                   </li>
                   <li>
                       <!-- 购物车按钮  -->
                       <i class="iconfont icon-bags" @click="handlecar"></i>
                   </li>
               </ul>
               </div>
            <div class="bottom">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                              <router-link tag="div" activeClass="active" v-for="(data,index) in datalist" :key="index"
                             :to="data.path"  class="swiper-slide" >
                             {{data.name}}
                             </router-link>
                </div>
            </div>
            </div>
           </div>
           <!-- 点击搜索框显示的页面 -->
           <!-- <div class="box" v-show="!isShow">
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
           </div> -->
       </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Search } from 'vant'
// 下面这个
// import { Search , Toast } from 'vant'

Vue.use(Search)
export default {
  data () {
    return {
      datalist: [],
      text: '',
      isShow: true,
      searchFindList: []
    }
  },
  mounted () {
    //  这是获取导航栏的数据
    axios.get('/appapi/silo/navigationAll/v3?timestamp=1583382604676&summary=3c061c95ac534cb4dd4abeda7e46d0e2').then(res => {
      var arr = [{ name: '推荐' }, ...res.data.lists, { name: '即将上新' }]
      var pathlist = ['/index', '/silo/crossborder', '/silo/women', '/silo/men', '/silo/cosmetics', '/silo//silo/lifestyle', '/silo/kids', '/upcoming']
      var datalist = []
      for (var i = 0; i < arr.length; i++) {
        var obj = {}
        // console.log( arr[i].name,pathlist[i])
        obj.path = pathlist[i]
        obj.name = arr[i].name
        datalist.push(obj)
      }
      console.log(datalist)
      this.datalist = datalist
    })
    //   这是获取的list列表的数据
    axios.get('/appapi/search/searchFind/v3').then(res => {
      console.log(res.data.searchFindList)
      this.searchFindList = res.data.searchFindList
    })
    //  new Swiper(".swiper-container",{})
  },
  methods: {
    handlelogin () {
      this.$store.state.isShow = false
      this.$router.push('/login/mobile')
    },
    handlecar () {
      this.$store.state.isShow = false
      this.$router.push('/shoppingcart')
    },
    onCancel () {
      this.$store.state.isShow = true
      this.$router.back()
    //   this.isShow = true
    }
  }
}
</script>

<style scoped lang="scss">
    .header{
        background-color: rgba($color: #fff, $alpha: .1);
        color: #fff;
    }
    div{

        width: 100%;
        .header{
            height: 80px;
            position: fixed;
            z-index: 10;
            left: 0;
            top: 0;
            .top{
                height: 40px;
                line-height: 50px;
                ul{
                    display: block;
                    li{
                        text-align: center;
                        display: block;
                        float: left;
                        margin-left: 15px;
                        font-size: 14px;
                    }
                }
            }
        }

    }
    .active{
        text-decoration: underline

    }
 .bottom{
     height: 40px;
     .swiper-wrapper{
         display: flex;
         flex-flow: row;
         justify-content: space-between;
         width: 100%;
         overflow: auto;
         white-space: nowrap;
         .swiper-slide{
             padding: 0 10px;
             font-size: 12px;
         }

     }
 }
 .box{
     z-index:20;
    height: 40px;
     .cont{
         display: flex;
    .search{
        width: 80%;
        box-sizing:border-box;
        margin-left: 15px;
    }
    .change{
        width: 15%;
        line-height: 54px;
        font-size: 12px;
    }
    }
    p{
        padding: 0 15px;
    }
    .list{
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        li{
            padding: 0 5px;
            font-size: 12px;
            background: #f0eeee;
            display: block;
            width: 80px;
            height: 30px;
            margin-top: 5px;
            text-align: center;
            line-height: 30px;
        }
    }
 }

</style>
