<template>
  <div id="helper">
    <div class="helper-head">
      <!-- <img src="../../assets/helper/lunbo1.666c83bd.jpg"> -->
      <div class="helper-mask">
        <div class="helper-head-img">
          <div class="helper-head-phone">
            <img src="~assets/helper/samsung_android.4435b423.png">
          </div>
        </div>
        <div class="helper-head-right">
          <div class="helper-head-main">
            <h1 class="head-first">
              武科大助手
            </h1>
            <h2 class="head-second">
              随时随地 开启校园之旅
            </h2>
            <div class="head-btn">
              <h4 @click="toDownload()">安卓端</h4>
              <h4 @click="toDownload()">iPhone端</h4>
              <h4 @click="clickwx()">微信小程序</h4>
              <h4 @click="clickqq()">QQ小程序</h4>
            </div>
            <h3 class="head-third">
              武汉科技大学 @领航工作室 LingHang Studio.
            </h3>
            <h3 class="head-forth">
              武科大助手：www.wustlinghang.cn/helper
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="helper-middle">
      <div class="middle-head">
        <div class="middle-head-title">Product Features</div>
        <div class="middle-head-text">全方位为你的校园生活护航</div>
      </div>
      <div class="middle-foot">
        <div class="foot-left">
          <ul>
            <li class="grades" :class="{active:isActive1}" @click='clickgra()'>
              <div class="title">成绩查询</div>
              <div class="text">便捷查询，第一时间知晓自己的成绩</div>  
            </li>
            <li class="gpa" @click='clickgpa()' :class="{active:isActive2}">
              <div class="title">GPA图表统计</div>
              <div class="text">学分趋势，平均成绩，牢牢掌握自己的学习状态</div>
            </li>
          </ul>
        </div>
        <div class="middle-img">
          <div class="middle-phone"></div>
          <img :src="Url" />
        </div>
        <div class="foot-right">
          <ul>
            <li class="schedule" @click='clicksch()' :class="{active:isActive3}">
              <div class="title">课程表</div>
              <div class="text">一键导入教务处课表，以及多种实用功能</div>
            </li>
            <li class="volunteer" @click='clickvol()' :class="{active:isActive4}">
              <div class="title">志愿者</div>
              <div class="text">工时查询、工时认证，志愿活动信息透明可见</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="helper-foot1">
     <div class="foot-title">More Functions</div>
     <div class="helper-foot">
      <div class="foot-left2">
        <img src='~assets/helper/更多功能.jpg'>
      </div>
      <div class="foot-right2">
        <div>
           <div>更多丰富的功能</div>
        <ul>
          <li>倒计时</li>
          <li>失物招领</li>
          <li>教室查询</li>
          <li>图书馆</li>
          <li>校车时刻</li>
          <li>学校校历</li>
          <li>...</li>
        </ul>
      </div>
        </div>
       
    </div>
    </div>

    <div class="helper-feet">
      <div>©2021 LingHang Studio.武汉科技大学 领航工作室</div>
    </div>
  </div>
</template>

<script>
import imgUrl from 'assets/helper/QQ图片20210718183632.jpg'
import imgUrl1 from 'assets/helper/grade.jpg'
import imgUrl2 from 'assets/helper/gpa.jpg'
import imgUrl3 from 'assets/helper/schedule.jpg'
import imgUrl4 from 'assets/helper/vol.jpg'

export default {
  el: '#helper',
  name: 'helper',
  data(){
    return {
      Url: imgUrl,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  },
  methods: {
    clickwx(){
      alert('微信搜索“新武科大助手”小程序')
    },
    clickqq(){
      alert('QQ搜索“武科大助手”小程序')
    },
    clickgpa(){
      this.Url = imgUrl2
      this.isActive2 = true;
      this.isActive1 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    clickgra(){
      this.Url = imgUrl1
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    clicksch(){
      this.Url = imgUrl3
      this.isActive3 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive4 = false;
    },
    clickvol(){
      this.Url = imgUrl4
      this.isActive4 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    // clickpage(){
    //   this.Url = imgUrl
    //   this.isActive4 = false;
    //   this.isActive1 = false;
    //   this.isActive2 = false;
    //   this.isActive3 = false;
    // }

    toDownload() {
      this.$router.push('/download');
    }
  }
}
</script>

<style scoped>
#helper{
  background-color: #ffffff;
  margin: 0px 50px ;
}

.helper-head{
  position: relative;
  height: 700px;
  background: url("~assets/helper/lunbo1.666c83bd.jpg") no-repeat;
  overflow: hidden;
  background-size: cover;
}

/* .big-img{
  position: relative;
  z-index: 0;
} */

.helper-mask{
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.helper-head-img{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 50%;
}

.helper-head-phone{
  width: 300px;
  height: 693px;
  margin: 100px 30px;
}

.helper-head-img img{
  width: 310px;
  transition: all 0.4s;
  cursor: pointer;
}

.helper-head-img img:hover{
  transform: scale(1.05);
}

.helper-head-right{
  width: 50%;
}

.head-first{
  margin-top: 170px;
  color: #dcdcdc;
  font-size: 3em;
  display: flex;

}

.head-second{
  font-weight: 400;
  color: #dcdcdc;
  font-size: 2em;
  margin: 40px 0px ;
  display: flex;
  font-family: 	FZYaoti;
}

.head-btn{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: flex-start;
  margin: 20px 0px;
}

.head-btn h4{
  border: 2px solid #dcdcdc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  padding: 5px 10px;
  color: #dcdcdc;
  margin: 0 20px 0 0 ;
}

.head-btn h4:hover{
  color: grey;
  background-color: #dcdcdc;
}

.head-third{
  display: flex;
  font-size: 1.28em;
  margin: 150px 0 5px;
  color: #c8c8c8;
}

.head-forth{
  display: flex;
  font-size: 1.28em;
  margin: 10px 0 5px;
  color: #c8c8c8;
}

.middle-head{
  margin-top: 50px;
  

}

.middle-head-title{
  margin: 20px 43%;
  /* height: 50px; */
  line-height: 50px;
   background-color: #87B43A;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 2px 2px 2px #87878a;
}

.middle-head-text{
  font-size: 25px;
  color: #3C3E49;
  padding: 15px 0px 60px 0px;
}

.middle-foot{
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
  /* border-bottom: #87B43A 15px solid;
  border-radius:  0 0 36% 36%; */
}

.middle-foot>div{
  width: 33.3%;
}

.foot-left{
  width: 35%;
}

.middle-img{
  width: 30%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.foot-right{
  width: 35%;
}

.middle-phone{
  background: url('~assets/helper/def4c11.png') no-repeat;
  background-size: 240px 480px;
  height: 480px;
  width: 240px;
  position: relative;
  z-index: 1;
}

.middle-img img{
  width: 240px;
  height:480px;
  position: absolute;
  z-index: 0;
  border-radius: 20px;
}

.foot-left ul,.foot-right ul{
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.foot-left li,.foot-right li{
    transition: all 0.4s;
}

.foot-left li:hover,.foot-right li:hover{
  transform: translateY(-10px);
  box-shadow: 2px 2px 2px #87878a;
  border: 2px solid #87B43A;
}

.active{
  transform: translateY(-10px);
  box-shadow: 2px 2px 2px #87878a;
  border: 2px solid #87B43A;
}

.grades{
  margin-left: 15%;
  padding-left: 100px;
  margin-bottom: 20px;
  /* border: 2px solid #87B43A; */
  border-radius: 6px;
  /* height: 80px; */
  line-height: 40px;
  background: url('~assets/helper/成绩.png') no-repeat 20px 10px;
  background-size: 60px;
  cursor: pointer;
}

.gpa{
  margin-left: 15%;
  padding-left: 100px;
  /* border: 2px solid #87B43A; */
  border-radius: 6px;
  /* height: 80px; */
  margin-top: 40px;
  line-height: 40px;
  background: url('~assets/helper/绩点成就.png') no-repeat 20px 10px;
  background-size: 60px;
  cursor: pointer;
}

.schedule{
  margin-right: 15%;
  padding-left: 100px;
  margin-bottom: 20px;
  /* border: 2px solid #87B43A; */
  /* height: 80px; */
  border-radius: 6px;
  line-height: 40px;
  background: url('~assets/helper/课程表.png') no-repeat 20px 10px;
  background-size: 60px;
  cursor: pointer;
}

.volunteer{
  margin-right: 15%;
  padding-left: 100px;
  /* border: 2px solid #87B43A; */
  border-radius: 6px;
  /* height: 80px; */
  margin-top: 40px;
  line-height: 40px;
  background: url('~assets/helper/志愿者.png') no-repeat 20px 10px;
  background-size: 60px;
  cursor: pointer;
}

.title{
  text-align: left;
}

.text{
  text-align: left;
  font-size: 12px;
}

.helper-feet{
  height: 100px;
  background-color: #373737;
  color: #ffffff;
  line-height: 100px;
}

.helper-foot{
  /* margin-top: 100px; */
  display: flex;
  flex-direction: row;
  height: 550px;
  /* background-color: #87B43A; */
  /* border-top: #87B43A 15px solid;
  border-radius: 50% 50% 0 0; */
}

.foot-left2{
  width: 50%;
  /* background: url('../../assets/helper/更多功能.jpg') no-repeat 300px 80px;
  background-size: 250px; */
}

.foot-left2 img{
  /* width: 38%; */
  width: 250px;
  margin-top: 10%;
  margin-left: 30%;
}

.foot-right2{
  width: 50%;
}

.foot-right2>div{
  margin-top: 15%;
  /* background-color: #87B43A; */
  color: #87B43A;
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

.foot-right2>div>div{
  font-size: 36px;
  font-weight: 600;
  font-family: FZYaoti;
}

.foot-right2>div>ul{
  margin-top: 10%;
  
}

.foot-right2>div>ul>li{
  list-style: none;
  padding: 6px 0;
  font-size: 18px;
  color: #3C3E49; 
}

.foot-title{
  margin: 20px 43%;
  /* height: 50px; */
  line-height: 50px;
   background-color: #87B43A;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 2px 2px 2px #87878a;
}

</style>