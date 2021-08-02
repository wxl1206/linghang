<template>
<div id="workpiece">
    <div class="workp-title">
      <div class="workp-title1"><p>Member Works</p></div>
      <div class="workp-title-p"><p>仿网易云音乐桌面音乐播放器</p></div>
      <div class="work-title-author">作者：张晓辉</div>
      <div class="work-title-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这款应用基于桌面跨平台框架electron进行开发，开发时使用react，redux，react-router全家桶框架进行开发，可以支持在Windows，linux，mac三大操作系统上面安装运行。本项目由github著名项目NeteaseCloudMusicApi提供后台服务，使用的后台语言为nodejs，可以使用该软件直接登陆用户的网易云音乐账号进行使用。基本模块涵盖有：登录注册、绑定/换绑手机网易云音乐账号，访问用户信息，用户歌单。支持播放本地音乐和在线音乐，播放在线mv，查看歌手，歌曲榜单，mv，专辑，电台，以及上述所有资源的评论，点赞，平台资源模糊搜索等等.
      <br />
      github地址: https://github.com/WTAufPzIv/neteasymusic</div>
    </div>
    <div class="workp-content">
      <ul class="wp-pic">
        <!-- <li><img src="../../assets/work/music/wyy_0.c2fbfbf8.png"><div></div></li>
        <li><img src="../../assets/work/music/wyy_1.cfbbdea8.png"><div></div></li>
        <li><img src="../../assets/work/music/wyy_2.5716bb76.png"><div></div></li>
        <li><img src="../../assets/work/music/wyy_3.e968dbfa.png"><div></div></li> -->
        <li v-for="item in wplist" :key="item.id">
          <img :src="item.pic">
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
import imgUrl1 from 'assets/work/music/wyy_0.c2fbfbf8.png'
import imgUrl2 from 'assets/work/music/wyy_1.cfbbdea8.png'
import imgUrl3 from 'assets/work/music/wyy_2.5716bb76.png'
import imgUrl4 from 'assets/work/music/wyy_3.e968dbfa.png'

export default {
  el: '#workpiece',
  name: 'music',
  data(){
    return{
      wplist:[
        {id: 1, pic: imgUrl1},
        {id: 2, pic: imgUrl2},
        {id: 3, pic: imgUrl3},
        {id: 4, pic: imgUrl4},
      ]
    }
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
  margin-top: 50px;
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
  width: 40%;
  height: 300px;
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