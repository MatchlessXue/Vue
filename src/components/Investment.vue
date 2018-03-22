<template>
  <div id="totalDiv" @touchstart="start($event)" @touchend="end($event)">
    <header>我要投资</header>
    <div id="InNav">
      <p @click="selection(1)" :class="{selection : index==1}">
        投资列表 <b></b>
      </p>
      <p @click="selection(2)" :class="{selection : index==2}">债权列表</p>
    </div>
    <div id="main">
      <ul v-show="index==1">
        <li v-for="list in lists1">
          <div class="pro_name">{{list.project_name}}</div>
          <div class="content">
            <div><p><b>{{list.annual_profit}}%</b><br><span>年化收益</span></p></div>
            <div><p><b>{{list.loan_amount}}万元</b><br><span>借款金额</span></p></div>
            <div><p><b>{{list.loan_term}}个月</b><br><span>借款期限</span></p></div>
            <div class="stateDiv"><p>还款中</p></div>
          </div>
          <div class="guarantor">
            <p>&nbsp;担保方：{{list.guarantor}}</p>
            <p class="float_r">投资人数：{{list.in_number}}&nbsp;</p>
          </div>
        </li>
      </ul>
      <ul v-show="index==2">
        <li v-for="list in lists2">
          <div class="pro_name">{{list.project_name}}</div>
          <div class="content">
            <div><p><b>{{list.money1}}元</b><br><span>债权价值</span></p></div>
            <div><p><b>{{list.loan_term}}</b><br><span>转让期数</span></p></div>
            <div><p><b>{{list.annual_profit}}%</b><br><span>原标年化收益</span></p></div>
            <div><p><b>{{list.money2}}元</b><br><span>转让价格</span></p></div>
          </div>
          <div class="guarantor">
            <p>&nbsp;担保方：{{list.guarantor}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
      name: "investment",
      data(){
        return{
          index:1,
          lists1:[
            {annual_profit: 11.6, loan_amount: 10.00, loan_term: 3, project_name: '定向8(亿铁)资产项目标0316-8', guarantor:'无', in_number:1},
            {annual_profit: 10.6, loan_amount: 15.00, loan_term: 5, project_name: '定向7(亿铁)资产项目标0316-7', guarantor:'无', in_number:1},
            {annual_profit: 9.8, loan_amount: 10.00, loan_term: 2, project_name: '定向6(亿铁)资产项目标0316-6', guarantor:'无', in_number:1},
            {annual_profit: 9.7, loan_amount: 20.00, loan_term: 4, project_name: '定向5(亿铁)资产项目标0316-5', guarantor:'无', in_number:1},
            {annual_profit: 11.6, loan_amount: 17.00, loan_term: 3, project_name: '定向4(亿铁)资产项目标0316-4', guarantor:'无', in_number:1},
            {annual_profit: 9.8, loan_amount: 10.00, loan_term: 2, project_name: '定向3(亿铁)资产项目标0316-3', guarantor:'无', in_number:1},
            {annual_profit: 7.3, loan_amount: 15.00, loan_term: 1, project_name: '定向2(亿铁)资产项目标0316-2', guarantor:'无', in_number:1},
            {annual_profit: 11.6, loan_amount: 20.00, loan_term: 3, project_name: '定向1(亿铁)资产项目标0316-1', guarantor:'无', in_number:1},
            {annual_profit: 9.5, loan_amount: 10.00, loan_term: 3, project_name: '定向9(亿铁)资产项目标0316-9', guarantor:'无', in_number:1},
            {annual_profit: 8.7, loan_amount: 40.00, loan_term: 4, project_name: '定向10(亿铁)资产项目标0316-10', guarantor:'无', in_number:1},
            {annual_profit: 12.6, loan_amount: 12.00, loan_term: 3, project_name: '定向11(亿铁)资产项目标0316-11', guarantor:'无', in_number:1},
            {annual_profit: 11.2, loan_amount: 28.00, loan_term: 1, project_name: '定向12(亿铁)资产项目标0316-12', guarantor:'无', in_number:1},
            {annual_profit: 9.5, loan_amount: 14.00, loan_term: 2, project_name: '定向13(亿铁)资产项目标0316-13', guarantor:'无', in_number:1},
          ],
          lists2:[
            {money1:500.22,money2:502.78,annual_profit: 8.00,  loan_term: '1/1', project_name: '极限美容项目标0316-9', guarantor:'无'},
            {money1:475.19,money2:492.45,annual_profit: 9.80,  loan_term: '1/1', project_name: '定向7(亿铁)资产项目标0316-9', guarantor:'无'},
            {money1:685.48,money2:703.18,annual_profit: 12.60,  loan_term: '1/1', project_name: '定向6(亿铁)资产项目标0316-9', guarantor:'无'},
          ],
          startX:0,endX:0,startY:0,endY:0,move_x:0,move_y:0,
        }
      },
      methods:{
        selection:function(type){
          this.index=type;
        },
        start(ev){
          ev.stopPropagation();
          this.startX=ev.changedTouches[0].clientX;
          this.startY=ev.changedTouches[0].clientY;
        },
        end(ev){
          ev.stopPropagation();
          this.endX=ev.changedTouches[0].clientX;
          this.endY=ev.changedTouches[0].clientY;
          this.move_x=Math.abs(this.startX-this.endX);
          this.move_y=Math.abs(this.startY-this.endY);
          if(this.move_x>this.move_y){
            if(this.startX>this.endX){
              this.index==1?this.index=2:this.$router.push({path:'/personcenter'});
            }else{
              this.index==2?this.index=1:this.$router.push({path:'/'});
            }
          }
        },
      }
    }
</script>

<style scoped>
  #totalDiv{
    /*margin-left: -50px;*/
    /*借款材料*/
    /*https://pic.yuxijf.com/10001/editor/20170801/1e976c612746fb743e075673480e6a61.png*/
    /*https://pic.yuxijf.com/10001/editor/20180320/7ea8ce690f57f80f27301067a3974952.png*/
    /* */

    /*项目详情*/
    /*https://pic.yuxijf.com/10001/editor/20170801/1e976c612746fb743e075673480e6a61.png*/
    /*https://pic.yuxijf.com/10001/editor/20170801/4ce6b9a547fdd94e30fdd8e4f7f73af2.png*/
    /*https://pic.yuxijf.com/10001/editor/20170801/5ebca83defec2c4fc734963673884d1c.png*/
    /*https://pic.yuxijf.com/10001/editor/20170811/a082ee553a9ab6733416458f4302dbb5.jpg*/
  }
  #main{
    top: 100px;
  }
  #InNav{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #777;
    text-align: center;
    border-bottom:2px solid #999;
    position: absolute;
    top: 45px;
  }
  #InNav P{
    display: inline-block;
    width: 49%;
  }
  #InNav b{
    width: 1px;
    height: 26px;
    float: right;
    background: #ababab;
    margin-top: 12px;
  }
  .selection{
    color: #1da7ff;
    border-bottom:1px solid #0E1AFF;
  }
  ul{
    margin-top: 10px;
    background: #eee;
  }
  ul li{
    margin:8px 5px;
    border: 1px solid #999;
  }
  .pro_name{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    font-size: 12px;
  }
  .content{
    width: 100%;
    padding: 15px 0;
    font-size: 16px;
    height: 40px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-around;
  }
  .content div{
    display: inline-block;
    text-align: center;
  }
  .content span{
    color:#666666;
    font-size: 12px;
  }
  .guarantor{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .guarantor p{
    display: inline-block;
  }
  .float_r{float: right;}
  .stateDiv{
    margin-top: -3px;
  }
  .stateDiv p{
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius:50%;
    border: 3px solid #1da7ff;
    font-size: 12px;
    color: #1da7ff;
    text-align: center;
  }
</style>
