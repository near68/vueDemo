<template>
  <div id="app">
    <v-header :seller="seller"></v-header><!--header是和HTML5原生调取，同名会导致错误-->
    <div class="tab">
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
@bgc: #ccc;
#app
  .tab
    display: flex
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-active 
          color: #007acc;

.child-view 
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1)

.slide-left-enter,
.slide-right-leave-active 
  opacity: 0;
  -webkit-transform: translate(30px, 0)
  transform: translate(30px, 0);

.slide-left-leave-active,
.slide-right-enter 
  opacity: 0;
  -webkit-transform: translate(-30px, 0)
  transform: translate(-30px, 0)

</style>
