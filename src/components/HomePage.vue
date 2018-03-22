<template>
    <div @touchstart="start($event)" @touchend="end($event)">
      <header>首页
        <p><router-link to="/setup"><i class="el-icon-more"></i></router-link></p>
      </header>
      <div id="main">
        <div class="HomePage">
          <img class="adver" src="../assets/home.png" alt="">
          <div class="dataShow">
            <div class="data">
              <div class="content">
                <div>
                  <p class="fixText">新标预告</p>
                  <p class="textTop"><b>{{annual_profit}}%</b><br><span>年化收益</span></p>
                </div>
                <div><p class="textTop"><b>{{loan_amount}}元</b><br><span>借款金额</span></p></div>
                <div><p class="textTop"><b>{{loan_term}}个月</b><br><span>借款期限</span></p></div>
              </div>
              <div class="infor">
                <p>开始时间：{{start_time}}</p><p>还款方式：{{re_method}}</p>
              </div>
            </div>
          </div>
          <div class="projectShow">
            <div>
              <p class="projectName">{{project_name}}</p>
              <div class="textSign">
                <p>本金保障</p>
                <p>灵活投资</p>
                <p>稳定增值</p>
              </div>
              <div>
                <p class="profit">{{annual_profit2}}%</p>
                <div class="profitText"><p>年化收益</p></div>
              </div>
            </div>
          </div>
          <div class="buttonDiv">
            <button @click="InvDetail">开始赚钱</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // import header from './header'
  // import footer from './footer'
  export default {
      name: "HomePage",
      data() {
        return {
          annual_profit: 7.30,
          annual_profit2: 9.20,
          loan_amount: 80000.00,
          loan_term: 1,
          start_time: '2016-05-29',
          re_method: '到期还本利息',
          project_name: '(亿铁)定向2万信项目标036378',

          startX:0,startY:0,endX:0,endY:0,move_x:0,move_y:0,
        }
      },
    components:{
      // "app-header":header,
      // "app-footer":footer,
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
        this.move_x>this.move_y?(this.startX>this.endX?this.$router.push({path:'/investment'}):""):"";
      },
      InvDetail(){
        this.$router.push({path:'/InvDetail'});
      }
    }
  }
</script>

<style scoped>
  header p{
    position: absolute;
    display: inline-block;
    right: 10px;
  }
  header a{
    color: white;
    font-size: 25px;
  }
  .buttonDiv{
    margin: 10px 5px;
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
  .HomePage{
    background: #dadada;
  }
  .adver{
    width: 100%;
  }
  .dataShow,.projectShow{
    width: 100%;
    margin-top: 5px;
    background: #fff;
  }
  .projectShow>div{
    padding: 10px 20px;
  }
  .projectName{
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0 20px 0;
    width: 100%;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .textSign{
    display: flex;
    justify-content:space-around;
  }
  .textSign p{
    padding: 3px 5px;
  }
  .textSign p:nth-child(1){
    border: 2px solid red;
    color: red;
  }
  .textSign p:nth-child(2){
    border: 2px solid orange;
    color: orange;
  }
  .textSign p:nth-child(3){
     border: 2px solid limegreen;
    color: limegreen;
   }
  .profit{
    color: red;
    font-size: 50px;
    text-align: center;
    padding: 30px 0 0px 0;
  }
  .profitText {
    text-align: center;
  }
  .profitText p{
    display: inline-block;
    font-size: 13px;
  }
  .dataShow{
    height: 110px;
  }
  .dataShow .fixText{
    background: #ffa200;
    color: white;
    width: 20px;
    text-align: center;
    line-height: 13px;
    font-size: 12px;
    margin: 0;
    float: left;
  }
  .dataShow .content{
    width: 100%;
    height: 70px;
    font-size: 16px;
  }
  .dataShow .content div{
    display: inline-block;
    width: 32%;
    text-align: center;
    margin-top: -4px;
  }
  .textTop{
    margin-top: 15px;
  }
  .dataShow .content span{
    color:#666666;
    font-size: 12px;
  }
  .dataShow .infor{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-top:1px solid #999999;
  }
  .dataShow .infor p {
    display: inline-block;
    width: 49%;
    text-align: center;
    font-size: 12px;
    color: #666666;
    margin: 0;
  }
</style>
