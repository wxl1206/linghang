<template>
  <div id="ep">
    <workpiece :arr="wplist">
      <template #title>EventParticipant</template>
      <template #author>作者：吴仔健</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一款能够发布活动以及物物交换的app</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/ep/EventParticipant_1.b2d64a11.jpg'
import imgUrl2 from 'assets/work/ep/EventParticipant_2.41020f05.jpg'
import imgUrl3 from 'assets/work/ep/EventParticipant_3.77cd57de.jpg'
// import imgUrl4 from 'assets/work/wt/wt_4.72514f6e.png'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#ep',
  name: 'ep',
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