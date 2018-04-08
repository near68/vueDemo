<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
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
            <span class="price">￥{{food.price}}</span>
            <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            <v-button :food="food" class="btn"></v-button>
            <span @click.stop.prevent="addFirst" class="addcart" v-show="!food.count||food.count==0">加入购物车</span>
          </div>
        </div>
        <split></split>
        <div class="info-wrapper" v-show="food.info">
          <div class="info-content">
            <div class="title">商品介绍</div>
          <div class="info">{{food.info}}</div>
          </div>
          <split></split>
        </div>
        <div class="ratings">
          <h1 class="title">商品评价</h1>
          <ratingselect @select="selectRating" @toggle="toggleContent" 
                        :selectType="selectType" :onlyContent="onlyContent"
                        :desc="desc" :ratings="food.ratings"></ratingselect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings"
                  class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import BScroll from "better-scroll";
import button from "../button/button";
import split from "../split/split";
import {formatDate} from '../../common/js/date';
import ratingselect from "../ratingselect/ratingselect"
const ALL = 2;
export default {
  props: {
    food: {
      type: Object
    }
  },
  data(){
    return{
      showFlag:false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  methods:{
    //show方法是在good中调用
    show(){
      this.showFlag = true;
      this.selectType = ALL;
      this.onlyContent = true;
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          })
        }else{
          this.scroll.refresh();
        }
      })
    },
    hide(){
      this.showFlag = false
    },
    addFirst(event){
      if(!event._constructed){
        return;
      }
      this.$emit('add',event.target)
      this.$set(this.food,'count',1)
    },
    needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      addFood(target) {
        this.$emit('add', target);
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
  },
  filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
  components:{
    "v-button": button,
    "split": split,
    "ratingselect": ratingselect
  }
}
</script>
<style lang="stylus">
  .food
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
          top: 5px
          left: 5px
          width 25px
          height 25px
          background-color rgba(7,17,27,.8)
          border-radius 50%
          .icon-back
            line-height 25px
            text-align center
            font-size 20px
            color #fff
            &:hover
              color rgba(255,255,255,.6)
      .message
        position: relative
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
          position relative
          height 24px
          line-height 24px 
          .price
            font-size 14px
            font-weight 700
            color rgb(240,20,20)
            line-height 24px
          .oldPrice
            font-size 10px
            margin-left 12px
            line-height 24px
            color rgb(147,153,159)
            text-decoration line-through
          .addcart
            position absolute
            right 0
            bottom 0
            font-size 10px
            float right
            color #fff
            line-height 12px
            padding 6px 12px
            background-color rgb(0,160,220)
            border-radius 24px
          .btn
            position absolute
            right 0
            bottom 0
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
    .ratings
      padding 18px
      .title
        font-size 14px
        font-weight 500
        margin-bottom 12px
</style>


