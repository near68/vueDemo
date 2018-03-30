<template>
  <div id="button">
    <span class="btn-sub" v-show="food.count" @click.stop.prevent="subCart">
      <i class="iconfont icon-subtract"></i>
    </span>
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
      console.log(this.food)
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
        this.food.count--;
      }
    }
  }
};
</script>
<style lang="stylus">
#button {
  display: inline-block;

  .btn-sub, .btn-add {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #2099d5;
    border-radius: 50%;
    font-weight: 900;
    text-align: center;
    line-height: 20px;
  }

  .btn-sub {
    color: #2099d5;
  }

  .btn-add {
    background-color: #2099d5;
    color: #fff;
  }

  .count {
    display inline-block
    width: 24px;
    height 24px
    text-align: center;
    color: #bbb;
    font-size 10px
    line-height: 24px;
  }
}
</style>

