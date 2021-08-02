<template>
  <ul class="work-content-main">
        <!-- <li class="work-content-item" @click='toMusic()' path='/works/music'>
            <div class="work-content-pic">
              <img src='../../assets/work/1.89d1ee22.png'>
            </div>
            <div class='work-content-p1'>
              仿网易云桌面音乐播放器
            </div>
            <div class='work-content-p2'>
              一个模仿网易云音乐windows端UI界面制作的跨平台桌面音乐播放器，可以实现本地音乐播放，在线音乐播放，登录网易云音乐账号播放自己的歌单，专辑。以及网易云音乐特色的歌曲评论模块等等功能
            </div>
          </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/rck_m.dd550b00.jpg'>
          </div>
          <div class='work-content-p1'>
            日程快
          </div>
          <div class='work-content-p2'>
            基于Android的多功能日程管理工具，可以制定本周日程、添加倒计时、分享本周日程、查看天气提示等一系列功能，为用户的生活添加便利
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/wt.fd207f12.jpg'>
          </div>
          <div class='work-content-p1'>
            WeTalk
          </div>
          <div class='work-content-p2'>
            WeTalk是一款致力于为领域专家和普通工业从业者提供便利交流的平台。当前主要包含话题、需求、文章、动态等模块，同时也涵盖聊天、付费咨询等功能!
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/qxp.41157069.jpg'>
          </div>
          <div class='work-content-p1'>
            一身诗意千寻铺
          </div>
          <div class='work-content-p2'>
            “一身诗意千寻铺”，简称“千寻铺”，是一个全国高校校园失物招领信息服务平台，为中国高校学生提供自己学校范围内的“失物招领/寻物启事”服务。
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/AppMarket_1.8b040861.jpeg'>
          </div>
          <div class='work-content-p1'>
            AppMarket
          </div>
          <div class='work-content-p2'>
            模仿华为应用市场的一款手机app
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/EventParticipant_1.b2d64a11.jpg'>
          </div>
          <div class='work-content-p1'>
            EventParticipant
          </div>
          <div class='work-content-p2'>
            一款能够发布活动以及物物交换的app
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/科大小店_1.2e81328f.jpg'>
          </div>
          <div class='work-content-p1'>
            科大小店
          </div>
          <div class='work-content-p2'>
            这是一款校内跳蚤市场的软件，这款软件可以进行二手商品等物品发布与购买，还可以发布活动和报名参加活动
          </div>
        </li>
        <li class="work-content-item">
          <div class="work-content-pic">
            <img src='../../assets/work/心理课代表_1.e610191b.jpg'>
          </div>
          <div class='work-content-p1'>
            心理课代表
          </div>
          <div class='work-content-p2'>
            一款针对大学生的关于心理问题咨询的app
          </div>
        </li> -->
        <li class="work-content-item" v-for="item in worklist" :key="item.id" @click='toDetail(item.index)' >
          <div class="work-content-pic">
            <img :src='item.pic'>
          </div>
          <div class='work-content-p1'>
            {{item.title}}
          </div>
          <div class='work-content-p2'>
            {{item.text}}
          </div>
        </li>
        
      </ul> 
</template>

<script>
import imgUrl1 from 'assets/work/1.89d1ee22.png'
import imgUrl2 from 'assets/work/rck_m.dd550b00.jpg'
import imgUrl3 from 'assets/work/wt.fd207f12.jpg'
import imgUrl4 from 'assets/work/qxp.41157069.jpg'
import imgUrl5 from 'assets/work/AppMarket_1.8b040861.jpeg'
import imgUrl6 from 'assets/work/EventParticipant_1.b2d64a11.jpg'
import imgUrl7 from 'assets/work/科大小店_1.2e81328f.jpg'
import imgUrl8 from 'assets/work/心理课代表_1.e610191b.jpg'

export default {
  el: '.work-content-main',
  name: 'workitem',
  data(){
      return {
      worklist: [
        {index: 0, id: 'music', pic: imgUrl1, title: '仿网易云桌面音乐播放器', text: '一个模仿网易云音乐windows端UI界面制作的跨平台桌面音乐播放器，可以实现本地音乐播放，在线音乐播放，登录网易云音乐账号播放自己的歌单，专辑。以及网易云音乐特色的歌曲评论模块等等功能'},
        {index: 1, id: 'rck', pic: imgUrl2, title: '日程快', text: '基于Android的多功能日程管理工具，可以制定本周日程、添加倒计时、分享本周日程、查看天气提示等一系列功能，为用户的生活添加便利'},
        {index: 2, id: 'wt', pic: imgUrl3, title: 'WeTalk', text: 'WeTalk是一款致力于为领域专家和普通工业从业者提供便利交流的平台。当前主要包含话题、需求、文章、动态等模块，同时也涵盖聊天、付费咨询等功能!'},
        {index: 3, id: 'qxp', pic: imgUrl4, title: '一身诗意千寻铺', text: '“一身诗意千寻铺”，简称“千寻铺”，是一个全国高校校园失物招领信息服务平台，为中国高校学生提供自己学校范围内的“失物招领/寻物启事”服务。'},
        {index: 4, id: 'am', pic: imgUrl5, title: 'AppMarket', text: '模仿华为应用市场的一款手机app'},
        {index: 5, id: 'ep', pic: imgUrl6, title: 'EventParticipant', text: '一款能够发布活动以及物物交换的app'},
        {index: 6, id: 'kdxd', pic: imgUrl7, title: '科大小店', text: '这是一款校内跳蚤市场的软件，这款软件可以进行二手商品等物品发布与购买，还可以发布活动和报名参加活动'},
        {index: 7, id: 'mind', pic: imgUrl8, title: '心理课代表', text: '一款针对大学生的关于心理问题咨询的app'}
    ],
    }
  },
  mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
  },
  props:{
    path: String,
  },
  methods:{
    toDetail(i){
        this.$router.push('/detail/' + this.worklist[i].id);
        let top = document.documentElement.scrollTop || document.body.scrollTop
        const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 0);
    }
  }
  }
</script>

<style scoped>
.work-content-main{
  height: 950px;
  /* background-color: #ffffff; */
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.work-content-item{
  background-color: #ffffff;
  height: 400px;
  /* border: 1px solid #3C3E49; */
  width: 20%;
  margin: 2.5%;
  border-radius: 8px;
  box-shadow: 0px 0px 8px #c2c2c5;
  overflow: hidden;
  cursor: pointer;
  transition:all 0.3s;
}

.work-content-item:hover{
  transform: translateY(-10px);
}


.work-content-pic{
  overflow: hidden;
  height: 50%;
}

.work-content-pic img{
  width: 100%;
}

.work-content-p1{
  padding: 15px;
  color: #3C3E49;
  font-weight: 600;
  font-size: 18px;
}

.work-content-p2{
  padding: 0px 10px;
  color: #87878a;
  font-weight: 100;
  font-size: 15px;
}
</style>