<template>
<div class="download">
  <div id="download-content">
    <div class="download-title">
      <div>武科大助手</div>
      <div class="intro">武科大教务处唯一授权</div>
      <div class="intro">武科大青年志愿者服务总队合作伙伴</div>
      <div class="intro">武科大图书馆官方合作伙伴</div>
    </div>
    <div class="download-img">
      <img src="~assets/helper/samsung_android.4435b423.png">
    </div>
    <div class="download-title">
      <div>丰富齐全的功能</div>
      <div class="intro">课表、成绩、工时、学分、倒计时...</div>
    </div>
    <div class="download-img">
      <img src="~assets/helper/download/mobile3.b517a3d8.png">
    </div>
    <div class="download-title">
      <div>武科大领航工作室出品</div>
      <div class="intro">随时随地，开启校园之旅</div>
    </div>
    <div class="download-img">
      <img src="~assets/helper/download/mobile4.816153ee.png">
    </div>
  </div>
  <div class="download-foot">
    <img class="logo-img" src="../../assets/helper/download/logo2.8b71f2a1.png">
    <div class="download-btn">
      <div class="btn">立即下载</div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'download',
}
</script>

<style scoped>
*{
  padding: 0;
}

#download-content{
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 80vh;
  padding-bottom: 3rem;
}

.download-title{
  background: #f4f5f7;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  color: #3f4650;
}

.intro{
  padding-top: .4rem;
  font-size: 1rem;
  color: #a0a0a0;
  font-weight: 400;
}

.download-img{
  background: #f4f5f7;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.download-img>img{
  display: block;
  width: 100%;
}

.download-foot{
  display: flex;
  justify-content: space-between;
  align-content: center;
  opacity: .9;
  padding: .4rem;
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
}

.download-foot img{
  display: block;
  width: 40%;
}

.download-btn{
  width: 48%;
  padding: 0;
}

.btn{
  font-weight: 700;
  width: 80%;
  box-sizing: border-box;
  padding: .6rem .2rem;
  text-align: center;
  background-color: #1fc88c;
  border-radius: .6rem;
  margin: 0 auto;
  color: #ffffff;
}



</style>