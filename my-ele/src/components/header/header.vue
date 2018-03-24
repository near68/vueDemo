<template>
  <div class="v-header">
    <div class="container">
      <div class="avatar">
        <a href="#"><img :src="seller.avatar" width="64" height="64"></a>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name}}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text" v-text="seller.supports[0].description"></span>
        </div>
      </div>
    </div>
    <div class="bulletin"></div>
  </div>
</template>
<script>
export default {
  name: "v-header",
  props: {
    seller: {}
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.stylus';
.v-header 
  color: #fff
  background-color: #000
  .container
    font-size: 0
    padding: 24px 12px 12px 24px
    .avatar
      display: inline-block
      vertical-align: top
    .content
      display: inline-block
      margin-left: 16px
      font-size: 0
      .title
        margin: 2px 0 8px 0
        font-size: 0
        .brand
          display: inline-block
          width: 30px
          height: 18px
          bg-img('brand')
          background-size: 30px 18px
          background-repeat: no-repeat
          vertical-align: top
        .name
          display: inline-block
          height: 18px
          margin-left: 6px
          font-size: 16px
      .description
        margin-bottom: 10px
        line-height: 12px
        font-size: 12px
      .supports
        .icon
          display: inline-block
          width: 12px
          height: 12px
          bg-img('decrease_1')
          background-size: 12px 12px
          vertical-align: top
        .text
          margin-left: 4px
          font-size: 10px
          font-weight: 200
          line-height: 12px
</style>
