<template>
  <div class="works">
  <work></work>
  <!-- <music></music> -->
  <!-- <rck></rck> -->
  <!-- <wt></wt> -->
  <!-- <qxp></qxp> -->
  <!-- <am></am> -->
  <!-- <ep></ep> -->
  <!-- <kdxd></kdxd> -->
  <mind></mind>
  </div>
</template>

<script>
import work from './works/work.vue'
import music from 'views/works/music.vue'
import rck from 'views/works/rck.vue'
import wt from 'views/works/wt.vue'
import qxp from 'views/works/qxp.vue'
import am from 'views/works/am.vue'
import ep from 'views/works/ep.vue'
import kdxd from 'views/works/kdxd.vue'
import mind from 'views/works/mind.vue'

export default {
  name: 'works',
  components: {
    work
    // music
    // rck
    // wt
    //qxp
    // am
    // ep
    // kdxd
    // mind
  }
}
</script>

<style scoped>
.works{
  background-color: #3C3E49;
}
</style>