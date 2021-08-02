<template>
  <div id="kdxd">
    <workpiece :arr="wplist">
      <template #title>科大小店</template>
      <template #author>作者：许志凡</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款校内跳蚤市场的软件，这款软件可以进行二手商品等物品发布与购买，还可以发布活动和报名参加活动。主要是提供一个商品与活动的展示平台。具体的购买和活动报名需要线下进行。</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/kdxd/科大小店_1.2e81328f.jpg'
import imgUrl2 from 'assets/work/kdxd/科大小店_2.b046ba4c.jpg'
import imgUrl3 from 'assets/work/kdxd/科大小店_3.ddde504d.jpg'
import imgUrl4 from 'assets/work/kdxd/科大小店_4.2649b487.jpg'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#kdxd',
  name: 'kdxd',
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