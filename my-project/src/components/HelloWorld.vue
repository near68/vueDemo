<template>
    <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>
<style scoped>
h1 {
  font-weight: normal; 
}
</style>