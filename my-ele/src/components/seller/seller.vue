<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">
          {{ seller.name }}
        </h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score" class="star"></star>
          <span class="ratingCount">({{ seller.ratingCount}})</span>
          <span class="sellCount">{{ seller.sellCount}}</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{ seller.minPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{ seller.deliveryPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{ seller.deliveryTime}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from "../star/star";
import BScroll from "better-scroll";
  export default {
    name: 'seller',
    data(){
      return {
        seller: {}
      }
    },
    computed:{
      ratings(){
        
      }
    },
    created(){
      this.axios.get("./static/data.json")
      .then((res)=>{
        this.seller = res.data.seller
      })
      .catch(err=>console.log(err))
    },
    components:{
      "star": star
    }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.stylus';
.seller
  position: absolute
  top: 174px
  bottom: 0
  left: 0
  width: 100%
  overflow: hidden
  .seller-content
    .overview
      padding 18px
      .title
        font-size 14px
        line-height 17px
        color rgb(7,17,27)
      .desc
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        .star
          display inline-block
      .remark
        padding-top 18px
        display flex
        .block
          flex 1
          text-align center
          border-right 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border none


</style>
