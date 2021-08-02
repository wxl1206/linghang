<template>
  <div id="mind">
    <workpiece :arr="wplist">
      <template #title>心理课代表</template>
      <template #author>作者：田文彪</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一款针对大学生的关于心理问题咨询的app，会有一些非专业的同为大学生的心理课代表(心理辅导员)在线帮助他们进行调解，以及一个群体至今互相交流，互相帮助</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/mind/心理课代表_1.e610191b.jpg'
import imgUrl2 from 'assets/work/mind/心理课代表_2.2ef36780.jpg'
import imgUrl3 from 'assets/work/mind/心理课代表_3.db455aa7.jpg'
// import imgUrl4 from 'assets/work/wt/wt_4.72514f6e.png'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#mind',
  name: 'mind',
  data(){
    return{
      wplist:[
        {pic: imgUrl1},
        {pic: imgUrl2},
        {pic: imgUrl3},
        // {pic: imgUrl4},
      ]
    }
  },
  components:{
    Workpiece
  }
}
</script>