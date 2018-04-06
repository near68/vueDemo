<template>
  <div id="button">
    <transition name="move">
        <div class="btn-sub" v-show="food.count" @click.stop.prevent="subCart">
          <i class="iconfont icon-subtract"></i>
        </div>
    </transition>
    <span class="count" v-show="food.count">{{ food.count }}</span>
    <span class="btn-add" @click.stop.prevent="addCart">
      <i class="iconfont icon-add"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    food: {}
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        this.$set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    subCart(event) {
      
      if (!event._constructed) {
        return;
      } else {
        if (this.food.count > 0) {
          this.food.count--;
        }
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#button {
  width: 72px;
  height: 24px;

  .btn-sub, .btn-add {
    width: 20px;
    height: 20px;
    border: 2px solid #2099d5;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }

  .btn-sub {
    float: left;
    color: #2099d5;
    opacity: 1;
    transition: all .4s linear
    transform: translate3d(0, 0, 0)
    .icon-subtract {
      display: inline-block
      height: 20px;
      line-height: 20px;
      font-weight: 900;
      color: rgb(0, 160, 220);
      transition: all .4s linear
      transform: rotate(0);
    }
    &.move-enter-active, &.move-leave-active {
      transition: all .4s linear;
    }
    &.move-enter, &.move-leave-active {
      opacity: 0;
      transform: translate3d(24px, 0, 0)
      .icon-subtract{
        transform: rotate(180deg);
      }
    }
      
  }

  .btn-add {
    float: right;
    background-color: #2099d5;
    color: #fff;
  }

  .count {
    display: inline-block;
    width: 24px;
    height: 24px;
    color: #bbb;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
  }
}
</style>

