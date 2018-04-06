<template>
  <transition name="move">
    <div id="food" v-show="showFlag">
      <div class="content">
        <div class="header-img">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="iconfont icon-back"></i>
          </div>
        </div>
        <div class="message">
          <h1 class="name">{{food.name}}</h1>
          <div class="description">
            <span class="sellCount">月售{{food.sellCount}}</span><span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price-wrapper">
            <span>￥</span><span class="price">{{food.price}}</span><span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span><span class="addcart">加入购物车</span>
          </div>
        </div>
        <div class="line-block"></div>
        <div class="info-wrapper" v-show="food.info">
          <div class="info-content">
            <div class="title">商品介绍</div>
          <div class="info">{{food.info}}</div>
          </div>
          <div class="line-block"></div>
        </div>
        
      </div>
    </div>
  </transition>
</template>
<script>
export default{
   props: {
    food: {}
  },
  data(){
    return{
      showFlag:false
    }
  },
  methods:{
    //show方法是在good中调用
    show(){
      this.showFlag = true
    },
    hide(){
      this.showFlag = false
    }
  }
}
</script>
<style lang="stylus">
  #food
    z-index 5
    position fixed
    top 0
    left 0
    bottom 48px
    width 100%
    transform translateX(0)
    &.move-enter-active,&.move-leave-active
      transition all .2s linear
    &.move-enter,&.move-leave-to
      transform translateX(100%)
    .content
      width 100%
      height 100%
      background-color #fff
      .header-img
        position relative
        width 100%
        height 0
        padding-bottom 100%
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
        .back
          z-index 30
          position: absolute
          top: 0
          left: 0
          width 25px
          height 25px
          color rgba(7,17,27,.8)
          border-radius 50%
          .icon-back
            font-size 25px
            color #fff
      .message
        padding 18px
        .name
          font-size 14px
          font-weight 700
          line-height 14px
          color rgb(7,17,27)
        .description
          padding 8px 0 18px
          font-size 10px
          line-height 10px
          color rgb(147,153,159)
          .sellCount
            margin-right 12px
        .price-wrapper
          height 24px
          line-height 24px
          span 
            font-size 10px
            color rgb(240,20,20)
            line-height 24px
          .price
            font-size 14px
            font-weight 700
          .oldPrice
            margin-left 12px
            color rgb(147,153,159)
            text-decoration line-through
          .addcart
            float right
            color #fff
            line-height 12px
            padding 6px 12px
            background-color rgb(0,160,220)
            border-radius 24px
      .line-block
        height 16px
        width 100%
        background-color #f3f5f7
        border 1px solid rgba(7,17,27,.1)
        border-left 0
        border-right 0
      .info-content
        padding 18px 26px 18px 18px
        .title
          font-size 14px
          font-weight 500
          margin-bottom 6px
        .info
          font-size 12px
          font-weight 200
          color rgb(77,85,93)
          line-height 24px
</style>


