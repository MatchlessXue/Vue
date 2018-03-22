<template>
  <div id="app">
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
  import footer from './components/footer'
  export default {
    name: 'App',
    components:{
      "app-footer":footer
    },
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style-type: none;
  }
  img{
    width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #main{
    width: 100%;
    overflow: auto;
    position: absolute;
    top: 45px;
    bottom: 50px;
    z-index: 10;
  }
  header{
    width:100%;
    height: 45px;
    line-height:45px;
    background: #1892e8;
    color: white;
    font-size: 16px;
    text-align: center;
    position: absolute;
    top: 0;
    z-index: 5;
  }
</style>
