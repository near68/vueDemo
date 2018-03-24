<template>
  <div id="app">
    <v-header :seller="seller"></v-header><!--header是和HTML5原生调取，同名会导致错误-->
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/good">菜单</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评价</router-link></div>
      <div class="tab-item"><router-link to="/detail">详细</router-link></div>
    </div>
    <transition :name="transition">  
      <router-view class="child-view"></router-view>  
    </transition> 
  </div>
</template>

<script>
import header from "./components/header/header";
// import jsonp from "jsonp";
export default {
  data() {
    return {
      transition: "slide-left",
      seller: {}
    };
  },
  components: {
    "v-header": header
  },
  methods: {},
  created() {
    this.axios
      .get("./static/data.json")
      .then( response => this.seller = response.data.seller  )
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus" scoped >
@import './common/stylus/index.stylus';
#app
  .tab
    display: flex
    height: 40px
    line-height: 40px
    border-1px(#ccc)
    .tab-item
      flex: 1
      text-align: center
      a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-active 
          color: rgb(230, 0, 0)


</style>
