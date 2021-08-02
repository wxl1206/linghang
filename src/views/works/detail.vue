<template>
  <div>{id}</div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      id: null
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>