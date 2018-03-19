<template>
  <div class="goods">{{ msg }}</div>
</template>
<script>
  export default {
    name: 'goods',
    data () {
    return {
      msg: 'Welcome to goods'
    }
  }
  }
</script>
<style lang="less" scoped>
.goods{
  background-color: aquamarine
}
</style>
