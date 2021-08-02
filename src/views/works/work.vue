<template>
  <div id="work">
    <div class="work-title">
      <div class="work-title1"><p>Member Works</p></div>
      <div class="work-title-p"><p>成员练手的小demo</p></div>
    </div>
    <div class="work-content">
      <workitem path="/works/music"></workitem>
    </div> 
    <div class="work-foot">
      <div>©2021 LingHang Studio.武汉科技大学 领航工作室</div>
    </div>
  </div>
</template>

<script>
import workitem from 'components/work/workitem.vue'

export default {
  name: 'work',
  components: {
    workitem
  }
}


</script>

<style scoped>

#work{
  /* background-color: white; */
  /* margin: 0px 50px ; */
  padding-top: 80px;
  border-radius: 5px;
  background: url('~assets/work/5b8abc339a62b.jpg') no-repeat;
}

.work-title1{ 
  padding: 50px 44% 25px 44%;
}

.work-title1 p{
  /* height: 50px; */
  line-height: 50px;
  background-color: #87B43A;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 2px 2px 2px #87878a;
}

.work-title-p{
  font-size: 25px;
  color: #3C3E49;
  padding: 10px 0px 60px 0px;
}

/* .work-content{
  background-color: #3C3E49;
} */



.work-foot{
  margin-top: 40px;
  height: 100px;
  background-color: #373737;
  color: #ffffff;
  line-height: 100px;
}

/* .v-enter,.v-leave-to{
  transform: translateY(10px);
}

.v-enter-active,.v-leave-active{
  transition: all 0.4s;
}

.v-leave,.v-enter-to{
  transform: translate(0,0);
} */



</style>