<template>
  <div class="container">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg: 'Hello world'
      }
    }
  }
</script>
<style lang="stylus" scoped>
.container
  font-size: 88px
</style>
