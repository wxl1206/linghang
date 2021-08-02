<template>
  <div id="am">
    <workpiece :arr="wplist">
      <template #title>AppMarket</template>
      <template #author>作者：吴仔健</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模仿华为应用市场的一款手机app</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/am/AppMarket_1.8b040861.jpeg'
import imgUrl2 from 'assets/work/am/AppMarket_2.fedcf98f.jpeg'
import imgUrl3 from 'assets/work/am/AppMarket_3.60f07d3d.jpeg'
import imgUrl4 from 'assets/work/am/AppMarket_4.7e4c3085.jpeg'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#am',
  name: 'am',
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