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
          <span class="icon" :class="iconClassMap[seller.supports[1].type]"></span><span class="text" v-text="seller.supports[1].description"></span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="detailshow =! detailshow">
        <span class="count">{{seller.supports.length}}个</span><i class="iconfont icon-more"></i>
      </div>
    </div>
    <div class="bulletin">
      <span class="icon"></span><span class="text">{{ seller.bulletin }}</span>
      <i class="iconfont icon-more" @click="detailshow =! detailshow"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailshow" class="detail">
      <div class="detail-box clearfix">
        <div class="content">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li v-for="(item, index) in seller.supports" class="support-item">
              <span class="icon" :class="iconClassMap[seller.supports[index].type]"></span>
              <span class="text">{{ seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin-content">
            <div class="content-text">{{ seller.bulletin }}</div>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="detailshow =! detailshow">
        <i class="iconfont icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
import star from "../star/star";
export default {
  name: "v-header",
  props: {
    seller: {}
  },
  data() {
    return {
      detailshow: false
    };
  },
  methods: {},
  created() {
    this.iconClassMap = [
      "decrease",
      "discount",
      "special",
      "invoice",
      "guarantee"
    ];
  },
  components: {
    star
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/index.stylus';

.v-header {
  position: relative;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;

  .container {
    position: relative;
    font-size: 0;
    padding: 24px 12px 18px 24px;

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      width: 36px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;

      .count {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.8);
      }

      .icon-more {
        font-size: 10px;
      }
    }

    .avatar {
      display: inline-block;
      vertical-align: top;
    }

    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 0;

      .title {
        margin: 2px 0 8px 0;
        font-size: 0;

        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          bg-img('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
          vertical-align: top;
        }

        .name {
          display: inline-block;
          height: 18px;
          margin-left: 6px;
          font-size: 16px;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .supports {
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: middle;

          &.decrease {
            bg-img('decrease_1');
          }

          &.discount {
            bg-img('discount_1');
          }

          &.guarantee {
            bg-img('guarantee_1');
          }

          &.invoice {
            bg-img('invoice_1');
          }

          &.special {
            bg-img('special_1');
          }
        }

        .text {
          display: inline-block;
          margin-left: 4px;
          line-height: 12px;
          font-size: 10px;
          margin-top: 1px;
          vertical-align: middle;
        }
      }
    }
  }

  .bulletin {
    position: relative;
    height: 28px;
    padding: 0 22px 0 12px;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
    .icon {
      display: inline-block;
      width: 22px;
      height: 12px;
      margin-top 8px;
      bg-img('bulletin');
      background-size: 22px 12px;
      vertical-align: top;
    }

    .text {
      margin: 0 4px;
      font-size: 10px;
      font-weight: 200;
      vertical-align:middle;
    }

    .icon-more {
      position: absolute;
      top: 2px
      right: 12px;
      font-size: 10px;
      color: #fff;
    }
  }

  .background {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(12px);
  }

  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);

    .detail-box {
      width: 100%;
      min-height: 100%;

      .content {
        margin-top: 64px;
        padding-bottom: 64px;

        .name {
          display: inline-block;
          width: 100%;
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          text-align: center;
        }

        .star-wrapper {
          margin: 16px 0 28px;
          text-align: center;
        }

        .title {
          display: flex;
          width: 85%;
          margin: 28px auto 24px;

          .line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .text {
            font-size: 14px;
            font-weight: 700;
            line-height: 14px;
            padding: 0 12px;
          }
        }

        .supports {
          width: 85%;
          margin: 0 auto;
          font-size: 0;

          .support-item {
            margin-bottom: 12px;
            padding: 0 12px;

            .icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-size: 16px 16px;
              background-repeat: no-repeat;
              vertical-align: middle;

              &.decrease {
                bg-img('decrease_2');
              }

              &.discount {
                bg-img('discount_2');
              }

              &.guarantee {
                bg-img('guarantee_2');
              }

              &.invoice {
                bg-img('invoice_2');
              }

              &.special {
                bg-img('special_2');
              }
            }

            .text {
              margin-left: 6px;
              font-size: 12px;
              font-weight: 200;
              line-height: 12px;
              vertical-align: middle;
            }
          }
        }

        .bulletin-content {
          width: 85%;
          margin: 0 auto;
          .content-text {
            padding: 0 12px;
            font-size: 12px;
            font-weight: 200;
            line-height: 24px;
          }
        }
      }
    }

    .detail-close {
      width: 32px;
      height: 32px;
      margin: -64px auto 0;

      .icon-close {
        font-size: 32px;
      }
    }
  }
}
</style>

