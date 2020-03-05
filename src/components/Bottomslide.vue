<template>
  <div class="xy">
    <span>400-664-6698</span>
    <ul>
      <li>
        <a href="##">首页</a>
        <span>|</span>
      </li>
      <li>
        <a href="##">客户端</a>
         <span>|</span>
      </li>
      <li>
        <a href="##">登录</a>
         <span>|</span>
      </li>
      <li>
        <a href="##">注册</a>
      </li>
    </ul>
    <span>浙IPC备16004860号-1</span>
  </div>
</template>
<script>
export default {
  mounted () {
    var obox = document.querySelector('.xy')
    if (obox.offsetTop < 100) {
      console.log(obox)
      obox.style.marginTop = '100px'
      console.log(obox.style.marginTop)
    }
  }
}
</script>
<style lang="scss" scoped>
.xy{
  margin: 0 auto;
  text-align: center;
  width: 100%;
  line-height: 24px;
  span{
    display: block;
    font-size: 12px;
    color: #666;
  }
  ul{
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
    width: 70%;
    li{
      display: flex;
      a{
        font-size: 12px;
        color: #666;
        display: block;
        padding: 0 12px;
        span{
        font-weight: 700;
        }
      }

    }
  }
}
</style>
