<template>
  <div>
    <header>
      <p><router-link to="/"><i class="el-icon-arrow-left"></i></router-link></p>
      系统设置
    </header>
    <div id="main">
      <ul class="setup">
        <li><i class="el-icon-bell"></i><span>网站公告</span></li>
        <li><i class="el-icon-question"></i><span>常见问题</span></li>
        <li><i class="el-icon-service"></i><span>联系客服</span></li>
        <li><i class="el-icon-warning"></i><span>版本检测</span></li>
      </ul>
      <div class="buttonDiv">
        <button @click="InvDetail($event)">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "set-up",
      data(){
        return{
          content:'确认退出登录吗',
          option:'',
          yes:'',
          cancel:'',
        }
      },
      methods:{
        InvDetail(ev){
          ev.stopPropagation();
          var _this=this;
          this.$layer.confirm(this.content,function(index){
            // console.log(index);
            console.log("退出登录");
            _this.$layer.closeAll();
            _this.$router.push({path:'/'});
          });
        }
      },
    }
</script>

<style scoped>
  header p{
    display: inline-block;
    position: absolute;
    left: 10px;
  }
  header a{
    color: white;
    font-size: 25px;
  }
  #main{
    background: #dadada;
  }
  .setup{
    margin-top: 20px;
    border-top: 1px solid #999;
    background: #fff;
  }
  .setup li{
    padding: 10px 0 10px 8px;
    font-size: 13px;
    border-bottom:1px solid #999;
  }
  .setup span{
    margin-left: 10px;
  }
  .buttonDiv{
    margin: 20px 5px;
  }
  button{
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius:8px;
    background: #1892e8;
  }
</style>
