<template>
  <div id="shopcart">
    <div class="shopcart-bg"></div>  
    <div class="shopcart-logo">
      <div class="inner">
          <i class="iconfont icon-cart"></i>
      </div>
    </div>
    <div class="totlepay">￥{{ totlePrice }}</div>
    <div class="deliveryPrice">另需配送费￥{{ seller.deliveryPrice }}</div>
    <div class="minPrice">￥{{ seller.minPrice }}起送</div>
  </div>
</template>
<script>
export default {
  props: {
    selectFoods: {
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ];
      }
    },
    seller: {}
  },
  computed: {
    totlePrice() {
      let totle = 0;
      this.selectFoods.forEach(food => {
        totle += food.price * food.count;
      });
      return totle;
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
    display: inline-block;
    width: 56px;
    height: 56px;
    margin: 0 0 2px 12px;
    border-radius: 50%;
    background-color: #141d27;

    .inner {
      width: 44px;
      height: 44px;
      margin: 6px;
      background-color: #282f36;
      border-radius: 50%;
      text-align: center;

      .icon-cart {
        line-height: 44px;
        font-size: 28px;
        font-weight: 700;
        color: #777c80;
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

  .minPrice {
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
  }
}
</style>


