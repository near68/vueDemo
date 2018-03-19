<template>
  <div class="v-header">
    <p>{{message}}</p>
    <button @click="back">返回</button>
  </div>
  
</template>
<script>
export default {
  name: 'v-header',
  data() {
    return {
      message: 'header'
    }
  },
  methods: {
    back(){
      history.go(-1)
    }
  }
}

</script>
<style>
.v-header {
  font-size: 2em;
}
</style>
