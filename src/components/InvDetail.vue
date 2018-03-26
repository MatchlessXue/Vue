<template>
  <div>
    <header>
      <p><router-link to="/"><i class="el-icon-arrow-left"></i></router-link></p>
      投资详情</header>
    <div id="main">
      <div class="profit">
        预期年化收益<br/><span>{{profit}}</span>%
        <p class="invPeople">投资人数：{{invPeople}}</p>
      </div>
      <div class="project">
        <h3>{{project_name}}</h3>
        <div class="pro_infor">
          <p><span>融资金额</span>{{money}}元</p>
          <p><span>融资余额</span>{{balance}}元</p>
          <p><span>借款期限</span>{{term}}个月</p>
          <p><span>还款方式</span>{{method}}</p>
          <p><span>结束时间</span><span @click="timer" class="color">{{endTime}}</span></p>
        </div>
        <div class="progbar">还款中</div>
        <div class="infor">
          <p :class="{have:isHave1}">网络借贷协议</p>
          <p :class="{have:isHave2}">投资合同范本</p>
          <p :class="{have:isHave3}">资产标</p>
        </div>
        <div class="tabs">
          <ul>
            <li @click="handleClick(1)" :class="{on:index==1}">项目详情</li>
            <li @click="handleClick(2)" :class="{on:index==2}">借款材料</li>
            <li @click="handleClick(3)" :class="{on:index==3}">企业信息</li>
            <li @click="handleClick(4)" :class="{on:index==4}">还款计划</li>
            <li @click="handleClick(5)" :class="{on:index==5}">投资列表</li>
          </ul>
        </div>
        <div class="content1" v-show="index==1">
          <p class="text">1、基本情况：借款单位为上海万信酒店集团有限公司旗下子公司—上海万信酒店管理有限公司，成立于2013年8月14日，注册资金1000万元。总部位于中国金融城市中心--上海，是一家从事酒店投资咨询、 酒店资产管理、酒店金融研发、基于酒店资产价值管理研究，拓展客户需求为导向的研究型专业酒店投资管理公司。目前万信酒店集团在上海陆家嘴、世博展览馆以及迪斯尼乐园等商业旅游景点拥有多家豪华高端商务连锁酒店。公司发展前景良好具有很高的品牌知名度。</p>
          <p class="text">2、借款用途：本次借款人民币十万元，期限一个月，用途为单位资金周转扩大经营。</p>
          <p class="text">3、还款来源：借款单位营业收入。</p>
          <p class="text">4、外部查询：根据全国法院被执行人信息查询系统、全国企业信用信息公示系统查询结果显示该借款单位、法定代表人信息一切正常属实。</p>
          <p class="text">5、审核要点：经寓锡金服风控部对借款人申请材料进行系统的调查，申请资料真实可查，借款单位无不良征信纪录，上半年经营状况社会信誉良好；借款人单位地址与营业执照地址一致。</p>
          <p class="text">6、审批结果：经寓锡金服风控团队审核同意授信借款。</p>
          <p class="text">7、法律保障：此次项目全程由第三方专业律师事务所提供专业的法律支持</p>
          <p><img src="https://pic.yuxijf.com/10001/editor/20170801/1e976c612746fb743e075673480e6a61.png" alt=""></p>
          <p><img src="https://pic.yuxijf.com/10001/editor/20170801/4ce6b9a547fdd94e30fdd8e4f7f73af2.png" alt=""></p>
          <p><img src="https://pic.yuxijf.com/10001/editor/20170801/5ebca83defec2c4fc734963673884d1c.png" alt=""></p>
          <p><img src="https://pic.yuxijf.com/10001/editor/20170811/a082ee553a9ab6733416458f4302dbb5.jpg" alt=""></p>
        </div>
        <div class="content2" v-show="index==2">
          <ul>
            <li v-for="src in imgSrc">
              <img :src="src.src" alt="">
            </li>
          </ul>
        </div>
        <div class="content3" v-show="index==3">
          <h4>企业信息</h4>
          <p><span>企业名称</span>上海万信酒店管理有限公司</p>
          <p><span>注册资金</span>1000万元</p>
          <p><span>成立日期</span>2013-08-14</p>
          <p><span>所在地区</span>上海 上海市</p>
          <p><span>营业地址</span>上海市浦东新区杨高中路2112号</p>
          <p><span>企业简介</span>上海万信酒店集团有限公司旗下子公司—上海万信酒店管理有限公司，成立于2013年8月14日，注册资金1000万元。总部位于中国金融城市中心--上海，是一家从事酒店投资咨询、 酒店资产管理、酒店金融研发、基于酒店资产价值管理研究，拓展客户需求为导向的研究型专业投资管理公司。</p>
        </div>
        <div class="content4" v-show="index==4">暂无数据</div>
        <div class="content5" v-show="index==5">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
      name: "inv-detail",
      data(){
        return{
          profit:'7.30',
          project_name:'定向8万信酒店项目标0321-5',
          invPeople:0,
          money:100000.00,
          balance:100000.00,
          term:1,
          method:'到期还本还息',
          endTime:'1天23时00分43秒',
          isHave1:true,
          isHave2:true,
          isHave3:false,
          activeName:'first',
          index:1,
          imgSrc:[
            {src:'https://pic.yuxijf.com/10001/editor/20180321/763fcc431b2d9440243a642b39dadf9d.jpg'},
            {src:'https://pic.yuxijf.com/10001/editor/20180321/260377fec76e531e7339c0de72994b7c.jpg'},
            {src:'https://pic.yuxijf.com/10001/editor/20180321/61fdc935c59634fc67dcd6379243da75.png'},
          ],
        }
      },
      methods:{
        handleClick(type){
          console.log(type);
          this.index=type;
        },
        timer(){
          var time_end=new Date('2018/3/28 23:59:59');
          time_end=time_end.getTime();
          var time_now,time_distance,str_time;
          var int_day,int_hour,int_minute,int_second;
          time_now=new Date();
          time_now=time_now.getTime();
          time_distance=time_end-time_now;
          if(time_distance>0){
            int_day = Math.floor(time_distance / 86400000);
            time_distance -= int_day * 86400000;
            int_hour = Math.floor(time_distance / 3600000);
            time_distance -= int_hour *3600000;
            int_minute = Math.floor(time_distance / 60000);
            time_distance -= int_minute * 60000;
            int_second = Math.floor(time_distance / 1000);
            if(int_hour<10) int_hour="0"+int_hour;
            if(int_minute<10) int_minute="0"+int_minute;
            if(int_second<10) int_second="0"+int_second;
            str_time = int_day + "天" + int_hour + "时" + int_minute + "分" + int_second + "秒";
            this.endTime = str_time;
            setTimeout(this.timer,1000);
          }else{
            this.endTime="活动已结束";
          }
        },
      }
    }
</script>

<style scoped>
  .tabs{
    overflow: hidden;
    border-radius:8px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #008def;
    margin-bottom: 20px;
  }
  .tabs ul,.content2 ul{
    display: -webkit-box;
  }
  .tabs li,.content2 li{
    -webkit-box-flex: 1;
  }
  .tabs li{
    text-align: center;
    border-left: 1px solid #008def;
    font-size: 12px;
  }
  .tabs li:first-child{
    border-left: 0;
  }
  .tabs .on{
    background: #008def;
    color: #fff;
  }
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
  .profit{
    margin: 15px 0;
    padding-top: 20px;
    text-align: center;
    background: #fff;
  }
  .profit span{
    font-size: 30px;
    line-height: 50px;
  }
  .invPeople{
    padding: 10px;
    border-top: 1px solid #999;
    text-align: left;
  }
  .project{
    background: #fff;
    padding: 10px;
    font-size: 13px;
  }
  .profit p{
    font-size: 12px;
  }
  .project span,.content3 span{
    color: #666;
    margin-right: 10px;
  }
  .pro_infor>p,.content3>p{
    margin-top: 8px;
  }
  .pro_infor{
    display: inline-block;
  }
  .have{
    color: #008def;
  }
  .infor{
    display: flex;
    justify-content: space-around;
    margin:20px 5px;
    padding: 10px 3px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
  .infor p{
    display: inline-block;
  }
  .content1 p.text{
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
  }
  .content3 p{
    font-size: 13px;
  }
  .content4,.content5{
    text-align: center;
  }
  .progbar{
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius:50%;
    border: 4px solid #59bbff;
    line-height: 80px;
    font-size: 13px;
    text-align: center;
    float: right;
    margin: 20px 20px 0 0;
    letter-spacing: 2px;
  }
  .pro_infor .color{
    color: #fe5384;
  }
</style>
