<template>
  <div @touchstart="start($event)" @touchend="end($event)">
    <header>个人中心</header>
    <div id="main">
      <div class="income">
        <p class="incomeP1">{{income}}</p>
        <p class="incomeP2"><b>总累计收益（元）</b></p>
      </div>
      <div class="capitalInfor">
        <p><b>账户总资产（元）</b><br><span>{{assets}}</span></p>
        <p><b>可用余额（元）</b><br><span>{{balance}}</span></p>
      </div>
      <div class="myself">
        <p @click="recharge"><i class="el-icon-tickets"></i><br/>充值</p><p @click="withdrawal"><i class="el-icon-date"></i><br/>提现</p>
      </div>
      <div class="item">
        <div><i class="el-icon-info"></i><h4>我的项目</h4><br/><span>我投资过的项目</span><br/><span>查看项目</span></div>
        <div><i class="el-icon-error"></i><h4>我的借款</h4><br/><span>账户流水账</span><br/><span>快来看看吧</span></div>
        <div><i class="el-icon-success"></i><h4>我的推广</h4><br/><span>我的推广</span><br/><span>小伙伴一起来赚钱</span></div>
        <div><i class="el-icon-warning"></i><h4>账户详情</h4><br/><span>我的账户明细</span><br/><span>查看我的账户信息</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "person-center",
      data(){
          return{
            income:'0.00',
            assets:'0.00',
            balance:'0.00',
          }
      },
      methods:{
        start(ev){
          ev.stopPropagation();
          this.startX=ev.changedTouches[0].clientX;
          this.startY=ev.changedTouches[0].clientY;
        },
        end(ev){
          ev.stopPropagation();
          this.endX=ev.changedTouches[0].clientX;
          this.endY=ev.changedTouches[0].clientY;
          this.move_x=Math.abs(this.endX-this.startX);
          this.move_y=Math.abs(this.endY-this.startY);
          this.move_x>this.move_y?(this.startX>this.endX?"":this.$router.push({path:'/investment'})):"";
        },
        recharge(){
          this.$layer.confirm('请先开通资金托管','','暂不开通','马上开通',function(){
            console.log("充值");
          });
        },
        withdrawal(){
          this.$layer.confirm('请先开通资金托管','','暂不开通','马上开通',function(){
            console.log("提现");
          });
        },
      }
    }
</script>

<style scoped>
  #main{
    background: #dadada;
  }
  .income,.capitalInfor,.myself,.item{
    background: #fff;
  }
  .income{
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #999;
  }
  .incomeP1 {
    color: orange;
    font-size: 30px;
  }
  .incomeP2{
    font-size: 13px;
  }
  .capitalInfor,.myself{
    display: flex;
    justify-content:flex-start;
    font-size: 13px;
    padding: 15px 0;
  }
  .myself{
    justify-content: center;
    margin: 10px 0;
  }
  .myself p {
    display: inline-block;
    text-align: center;
    flex-grow: 1;
    font-weight: bold;
  }
  .capitalInfor p{
    display: inline-block;
    flex-grow: 1;
    padding-left: 8px;
  }
  .capitalInfor span{
    color: orange;
  }
  .item{
    display: flex;
    flex-wrap:wrap;
    margin: 10px 0;
  }
  .item div{
    display: inline-block;
    width: 50%;
    padding: 20px 0;
  }
  .item span{
    font-size: 12px;
    color: #666;
    margin-left: 20px;
  }
  .item h4{
    display: inline-block;
    margin-left: 5px;
  }
</style>
