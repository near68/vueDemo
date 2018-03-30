<template>
  <div id="shopcart">
    <div class="shopcart-bg"></div>  
    <div class="shopcart-logo">
      <div class="inner" :class="{heightlight: totalCount > 0}">
          <i class="iconfont icon-cart" :class="{heightlight: totalCount > 0}"></i>
      </div>
      <div class="totlecount" v-show="totalCount>0">{{ totalCount }}</div>
    </div>
    <div class="totlepay" :class="{'heightlight': totalCount > 0}">￥{{ totalPrice }}</div>
    <div class="deliveryPrice">另需配送费￥{{ deliveryPrice }}</div>
    <div class="pay" :class="{'heightlight': totalPrice > minPrice}">
      {{payDesc}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectFoods: {
      default() {
        return [
          {
            price: 1,
            count: 1
          },

        ];
      }
    },
    minPrice:{
      default: 0
    },
    deliveryPrice:{
      default: 0
    }
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

    }
  }
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.stylus';

#shopcart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 58px;
  font-size: 0;

  .shopcart-bg {
    z-index: -1;
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
      min-width: 12px;
      height: 16px;
      padding: 0 6px;
      line-height: 16px;
      background-color: rgb(240, 20, 20);
      border-radius: 15px;
      color: #fff;
      text-align: center;
      font-size: 9px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
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
}
</style>


