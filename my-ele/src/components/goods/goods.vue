<template>
  <div id="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item">
          <span class="text border-1px">
            <span v-if="item.type > 0" class="icon" :class="iconClassMap[item.type]"></span><span>{{ item.name }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>
<script>
export default {
  name: "goods",
  props: {
    seller: {}
  },
  data() {
    return {
      goods: {}
    };
  },
  components: {},
  created() {
    this.axios
      .get("./static/data.json")
      .then(res => (this.goods = res.data.goods))
      .catch(err => console.log(err));
    this.iconClassMap = [
      "decrease",
      "discount",
      "special",
      "invoice",
      "guarantee"
    ];
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.stylus';
#goods {
  position: absolute;
  top: 174px;
  bottom: 46px;
  display: flex;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f4;

    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      padding-left 12px
      font-size: 12px;
      line-height: 14px;
      font-weight: 200;

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        border-1px(rgba(7, 17, 27, 0.1))

        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: middle;

          &.decrease {
            bg-img('decrease_3');
          }

          &.discount {
            bg-img('discount_3');
          }

          &.guarantee {
            bg-img('guarantee_3');
          }

          &.invoice {
            bg-img('invoice_3');
          }

          &.special {
            bg-img('special_3');
          }
        }
      }
    }
  }

  .foods-wrapper {
    flex: 1;
  }
}
</style>
