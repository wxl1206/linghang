<template>
  <div id="rck">
    <workpiece :arr="wplist">
      <template #title>日程快</template>
      <template #author>作者：吴家俊</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于Android的多功能日程管理软件是一款为学生开发的日程管理APP，用户通过使用该APP，可以使用制定本周日程、添加倒计时、进入禁玩手机模式，分享本周日程、查看天气提示等一系列功能，为用户的生活添加便利,软件Android Studio设计应用界面，使用Android手机自带的SQLite数据库管理系统，本地实现数据的存取，方便高效。</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
// import workpiece from 'components/work/workpiece.vue'

import imgUrl1 from 'assets/work/rck/rck_1.dd550b00.jpg'
import imgUrl2 from 'assets/work/rck/rck_2.8dee43c1.jpg'
import imgUrl3 from 'assets/work/rck/rck_3.0e0525b2.jpg'
import imgUrl4 from 'assets/work/rck/rck_4.9ae07c8b.jpg'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#rck',
  name: 'rck',
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