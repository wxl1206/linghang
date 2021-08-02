<template>
  <div class="wustHelper">
    <helper></helper>
    <!-- <download></download> -->
  </div>
</template>

<script>
import helper from './helper/helper.vue'
import download from 'views/helper/download.vue'
import {getHelpData} from 'network/help.js'

export default {
  name: 'wustHelper',
  components: {
    helper
    // download
  },
  data() {
    return {
      result: null
    }
  },
  created() {
    getHelpData().then(res => {
      this.result = res;
    })
  }
}
</script>

<style scoped>
.wustHelper{
  position: relative;
  top: 80px;
  background-color: #3C3E49;
}
</style>
