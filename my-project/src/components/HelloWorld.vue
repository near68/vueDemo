<template>
    <router-link to="new"><h1>{{ msg }}</h1></router-link>
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