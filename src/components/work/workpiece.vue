<template>
<div id="workpiece">
    <div class="workp-title">
      <div class="workp-title1"><p>Member Works</p></div>
      <div class="workp-title-p"><slot tag="p" name="title"></slot></div>
      <div class="work-title-author"><slot name="author"></slot></div>
      <div class="work-title-text"><slot name="text"></slot></div>
    </div>
    <div class="workp-content">
      <ul class="wp-pic">
        <!-- <li><img src="../../assets/work/rck/rck_1.dd550b00.jpg"><div></div></li>
        <li><img src="../../assets/work/rck/rck_2.8dee43c1.jpg"><div></div></li>
        <li><img src="../../assets/work/rck/rck_3.0e0525b2.jpg"><div></div></li>
        <li><img src="../../assets/work/rck/rck_4.9ae07c8b.jpg"><div></div></li> -->
        <li v-for="(item,index) in arr" :key="index">
          <slot :row="item"></slot>
          <div></div>
        </li>
      </ul>
    </div> 
    <div class="workp-foot">
      <div>©2021 LingHang Studio.武汉科技大学 领航工作室</div>
    </div>
  </div>
  
</template>

<script>
import imgUrl1 from 'assets/work/rck/rck_1.dd550b00.jpg'
import imgUrl2 from 'assets/work/rck/rck_2.8dee43c1.jpg'
import imgUrl3 from 'assets/work/rck/rck_3.0e0525b2.jpg'
import imgUrl4 from 'assets/work/rck/rck_4.9ae07c8b.jpg'

export default {
  el: '#workpiece',
  name: 'workpiece',
  // data(){
  //   return{
  //     wplist:[
  //       {pic: imgUrl1},
  //       {pic: imgUrl2},
  //       {pic: imgUrl3},
  //       {pic: imgUrl4},
  //     ]
  //   }
  // }
  props: {
    arr : Array
  }
}
</script>

<style scoped>
#workpiece{
  background-color: white;
  /* margin: 0px 50px ; */
  padding-top: 80px;
  border-radius: 5px;
  background: url('../../assets/work/5b8abc339a62b.jpg') no-repeat;
}

.workp-title1{ 
  padding: 50px 44% 25px 44%;
}

.workp-title1 p{
  /* height: 50px; */
  line-height: 50px;
  background-color: #87B43A;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 2px 2px 2px #87878a;
}

.workp-title-p{
  font-size: 25px;
  color: #3C3E49;
  padding: 10px 0px 40px 0px;
}

.work-title-author{
  font-size: 18px;
  color: #3C3E49;
  padding: 0px 0px 30px 0px;
}

.work-title-text{
  font-size: 15px;
  color: #3C3E49;
  border: 1px solid #3C3E49;
  margin: 0px 200px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30px / 90px;
  text-align: left;
}



.wp-pic{
  margin-top: 40px;
  height: 600px;
  list-style: none;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.wp-pic>li{
  cursor: pointer;
  width: 20%;
  height: 550px;
  overflow: hidden;
  position: relative;
}

.wp-pic>li>img{
  width: 100%;
  height: 100%;
}

.wp-pic>li>div{
  position: absolute;
  top: 0;
  background-color: #000000;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.wp-pic>li>div:hover{
  opacity: 0.5;
}


.workp-foot{
  margin-top: 40px;
  height: 100px;
  background-color: #373737;
  color: #ffffff;
  line-height: 100px;
}
</style>