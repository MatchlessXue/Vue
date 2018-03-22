<template>
  <footer>
    <div id="home_page">
      <router-link to="/">首页</router-link>
    </div>
    <div id="investment">
      <router-link to="/investment">我要投资</router-link>
    </div>
    <div id="person_center">
      <router-link to="/personcenter">个人中心</router-link>
    </div>
  </footer>
</template>

<script>
    export default {
      name: "app-footer",
    }
</script>

<style scoped>
  footer{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #666;
    z-index: 200;
  }
  footer>div{
    width: 32%;
    height: 50px;
    line-height: 50px;
    display:inline-block;
    text-align: center;
  }
  footer a{
    text-decoration: none;
    color: #000;
  }
</style>
