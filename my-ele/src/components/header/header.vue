<template>
  <div class="v-header">
    <div class="container">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
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
          <span v-text="seller.supports[0].description"></span>
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
<style lang="less">
@import url('../../common/less/mixin.less');
.v-header {
  color: #fff;
  background-color: #000;
  .container {
    font-size: 0;
    padding: 24px 12px 12px 24px;
    .avatar {
      display: inline-block;
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title{
        margin: 2px 0 8px 0;
        font-size: 16px;
        .brand{
          display: inline-block;
          width: 30px;
          height: 18px;
          .bg-img('brand');
          background-size: 30px 18px;
        }
      }
      .description{
        margin-bottom: 10px;
        font-size: 12px;
      }
      .supports{
        height: 12px;
        line-height: 12px;
        font-size: 10px;
      }
    }
  }
}
</style>
