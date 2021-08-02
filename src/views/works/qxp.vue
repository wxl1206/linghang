<template>
  <div id="qxp">
    <workpiece :arr="wplist">
      <template #title>一身诗意千寻铺</template>
      <template #author>作者：张晓辉,吴家俊</template>
      <template #text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在互联网时代，如今的“失物招领/寻物启事”早已不是传统时候人们在大街公告栏、电线杆或墙壁上所粘贴的纸质公告，但在校园内，丢失和捡到东西的情况依然十分普遍，使得“失物招领/寻物启事”这一概念将一直存在于校园之中，而在快节奏生活的背景之下，学生在丢失或捡到东西后只希望能快速找到自己丢失的东西或失主，不过多浪费自己的时间和精力，这是传统纸质公告和校园广播等等方式所不可能实现的，为了满足上述需求，我们开发了这款小程序，集成了上述业务需求，旨在方便广大高校学子。“失物招领/寻物启事”公告栏：查看自己学校当前所有的启示，启示列表按照发布的时间排序，同时启示根据生活常用物品进行了分类：钥匙、卡、包类、杯子、电子产品、书本、雨伞、文具、生活用品、证件、衣物、其他这12种分类，用户可以选择查看全部告示，也可以查看某一分类下的告示，用户点击告示列表可以查看所点击的告示详情，以及联系线索提供人。“搜索”：用户可以通过关键字对所有告示进行模糊搜索，快速定位所要找的东西，同时还具有搜索历史记录的功能。“管理告示”：对于发布告示的用户，可以选择重新编辑告示，也可以选择关闭（删除）自己发布的告示。“发布告示”：用户可以快速编辑一条告示发布到告示栏中，只需要提供一些基础信息：物品名称，时间，地点，联系方式，除了这些之外还可以选填补充信息和上传图片
      <br/>
      github地址: https://github.com/WTAufPzIv/lost_and_found</template>
      <template v-slot="scope">
        <img style="width: 100%; height: 100%" :src="scope.row.pic">
      </template>
    </workpiece>
  </div>
</template>

<script>
import imgUrl1 from 'assets/work/qxp/qxp_1.8943bafc.png'
import imgUrl2 from 'assets/work/qxp/qxp_2.4fed97c3.png'
import imgUrl3 from 'assets/work/qxp/qxp_3.7c6b0b35.png'
import imgUrl4 from 'assets/work/qxp/qxp_4.2ed2928d.png'
import Workpiece from 'components/work/workpiece.vue'

export default {
  el: '#qxp',
  name: 'qxp',
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