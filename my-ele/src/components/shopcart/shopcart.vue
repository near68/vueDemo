<template>
  <div>
    <div id="shopcart">
      <div class="shopcart-bg"></div>  
      <div class="shopcart-logo">
        <div class="inner" :class="{heightlight: totalCount > 0}" @click="togglelist">
            <i class="iconfont icon-cart" :class="{heightlight: totalCount > 0}"></i>
        </div>
        <div class="totlecount" v-show="totalCount>0">{{ totalCount }}</div>
      </div>
      <div class="totlepay" :class="{'heightlight': totalCount > 0}">￥{{ totalPrice }}</div>
      <div class="deliveryPrice">另需配送费￥{{ deliveryPrice }}</div>
      <div class="pay" :class="{'heightlight': totalPrice > minPrice}" @click="pay">
        {{payDesc}}
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listshow">
          <div class="backgroud"></div>
          <div class="title">
            <h1 class="cart">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <ul class="content" ref="listContent">
            <li v-for="(food,index) in selectFoods" class="food">
              <span class="name">{{ food.name }}</span>
              <div class="price">
                ￥<span>{{food.price * food.count}}</span>
              </div>
              <div class="button">
                <v-button :food="food"></v-button>
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <transition name="mask">
      <div class="cartmask" @click="hideMask" v-show="listshow"></div>
    </transition>
   </div> 
</template>
<script>
import BScroll from "better-scroll";
import button from "../button/button";
export default {
  props: {
    selectFoods: {},
    minPrice: {
      default: 0
    },
    deliveryPrice: {
      default: 0
    }
  },
  data() {
    return {
      balls: [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ],
      dropBalls: [],
      fold: true
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return "￥" + this.minPrice + "起送";
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return "还差 ￥" + diff + "起送";
      } else {
        return "去结算";
      }
    },
    listshow() {
      if (!this.totalCount) {
        //没东西的时候
        this.fold = true; //true表示折叠,没东西永远是折叠隐藏状态
        return false;
      }
      let show = !this.fold; //show变量是个控制，买东西后给show一个false，依然是隐藏的，在methods里，点击就可以给show取反，从而控制显示隐藏
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
      return show;
    }
  },
  methods: {
    togglelist() {
      if (!this.totalCount) {
        //如果购物车是空的，直接返回
        return;
      }
      this.fold = !this.fold; //购物车非空，给fold取反，初始是true变false,show又和fold取反，就是show，这样购物车就展示出来
    },
    empty() {
      this.selectFoods.forEach(item => {
        item.count = 0;
      });
    },
    pay(){
      if(this.totalPrice<this.minPrice){
        return false
      }
      alert('支付' + this.totalPrice+'元')
    },
    hideMask() {
      this.fold = true;
    }
  },
  components: {
    "v-button": button
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.stylus';

#shopcart {
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 58px;
  font-size: 0;

  .shopcart-bg {
    z-index -1
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background-color: #161c24;
  }

  .shopcart-logo {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 56px;
    margin: 0 0 2px 12px;
    border-radius: 50%;
    background-color: #141d27;

    .totlecount {
      position: absolute;
      top: 0;
      right: 0;
      width: 24px;
      height: 16px;
      line-height: 16px;
      background-color: rgb(240, 20, 20);
      border-radius: 12px;
      color: #fff;
      text-align: center;
      font-size: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      font-weight: 700;
    }

    .inner {
      width: 44px;
      height: 44px;
      margin: 6px;
      background-color: #282f36;
      border-radius: 50%;
      text-align: center;

      &.heightlight {
        background-color: #00a0dc;
      }

      .icon-cart {
        line-height: 44px;
        font-size: 28px;
        font-weight: 700;
        color: #777c80;

        &.heightlight {
          color: #fff;
        }
      }
    }
  }

  .totlepay {
    display: inline-block;
    margin: 22px 0 12px 12px;
    padding-right: 12px;
    color: #979a9c;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    &.heightlight {
      color: #fff;
    }
  }

  .deliveryPrice {
    display: inline-block;
    height: 48px;
    padding-left: 12px;
    color: #979a9c;
    line-height: 48px;
    font-size: 12px;
    font-weight: 700;
  }

  .pay {
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    width: 105px;
    height: 48px;
    background-color: #282e35;
    color: #979a9c;
    text-align: center;
    line-height: 48px;
    font-size: 12px;
    font-weight: 700;

    &.heightlight {
      background-color: rgb(0, 180, 20);
      color: #fff;
    }
  }

  .shopcart-list {
    z-index: -20;
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    background-color: #fff;
    transform: translateY(-100%)
    &.fold-enter-active,&.fold-leave-active{
      transition: all .5s ease
      
    }
    &.fold-enter,&.fold-leave-to{
      transform: translateY(0)
    }
    .backgroud {
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.6);
      filter: blur(10px);
    }

    .title {
      width: 100%;
      height: 40px;
      background-color: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

      .cart {
        float: left;
        width: 100px;
        margin-left: 18px;
        line-height: 40px;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        margin-right: 18px;
        line-height: 40px;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }
  }

  .content {
    padding: 0 18px 24px;
    max-height 264px
    overflow scroll
    .food {
      height: 48px;
      border-1px(rgba(7, 17, 27, 0.1));

      .name {
        font-size: 14px;
        color: rbg(7, 17, 27);
        line-height: 48px;
      }

      .price {
        position: absolute;
        right: 90px;
        bottom: 12px;
        font-size: 10px;
        font-weight: normal;
        color: rgb(240, 20, 20);
        line-height: 24px;

        span {
          font-size: 14px;
          font-weight: 700;
        }
      }

      .button {
        position: absolute;
        right: 0;
        bottom: 12px;
      }
    }
  }
}

.cartmask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity 1
  background-color: rgba(7, 17, 27, 0.6);
  &.mask-enter-active,&.mask-leave-active{
    transition all .4s ease
  }
  &.mask-enter,&.mask-leave-to{
    opacity 0
  }
}
</style>


