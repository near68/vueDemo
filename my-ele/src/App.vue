<template>
  <div id="app">
    <v-header></v-header><!--header是和HTML5原生调取，同名会导致错误-->
    <div class="tab">
      <div class="tab-item"><router-link to="/good">菜单</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tab-item"><router-link to="/detail">详细</router-link></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from "./components/header/header";
export default {
  components: {
    "v-header": header
  }
};
</script>

<style lang="less" scoped >
@bgc: #ccc;
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active{
          color: #007acc;
        }
      }
      
    }
  }
}
</style>
