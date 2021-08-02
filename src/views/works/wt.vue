<template>
  <div id="wt">
    <workpiece :arr="wplist">
      <template #title>WeTalk</template>
      <template #author>作者：吴仔健</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wetalk是一个促成行业一般从业者与专家之间，企业与专家之间，企业与企业之间的交流与合作的平台。它将传统的线下技术对接的一部分或大部分工作转 移到线上，打破传统技术对接在时间和空间上的屏障，做到更快，更高效的交流。
       <br/> 
      下载地址: https://www.lanzous.com/i4e31he</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/wt/wt_1.0efe6d6c.png'
import imgUrl2 from 'assets/work/wt/wt_2.9c76ecb5.png'
import imgUrl3 from 'assets/work/wt/wt_3.ae7d5247.png'
import imgUrl4 from 'assets/work/wt/wt_4.72514f6e.png'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#wt',
  name: 'wt',
  data(){
    return{
      wplist:[
        {pic: imgUrl1},
        {pic: imgUrl2},
        {pic: imgUrl3},
        {pic: imgUrl4},
      ]
    }
  },
  components:{
    Workpiece
  }
}
</script>