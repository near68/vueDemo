<template>
  <div id="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex===index}">
          <span class="text border-1px">
            <span v-if="item.type > 0" class="icon" :class="iconClassMap[item.type]"></span><span>{{ item.name }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list" ref="foodlisthook">
          <h1 class="goodsname">{{ item.name }}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="img"><img :src="food.icon" width="57" height="57"></div>
              <div class="food-content">
                <h2 class="name">{{ food.name }}</h2>
                <span v-show="food.description" class="description">{{ food.description }}</span>
                <div class="sellcontent">
                  <span class="sellcount">月售{{ food.sellCount}}份</span>
                  <span class="rating">好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="nowprice"><i>￥</i>{{ food.price }}</span>
                  <span v-show=" food.oldPrice" class="oldprice">￥{{ food.oldPrice}}</span>
                </div>
              </div>
              <v-button class="good-button" :food="food"></v-button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods="selectFoods" :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice"></shopcart>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import button from "../button/button";
import shopcart from "../shopcart/shopcart";

export default {
  name: "goods",
  props: {
    seller: {}
  },
  components: {
    "v-button": button,
    "shopcart": shopcart
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
    },
    selectFoods(){
      let foods = []
      this.goods.forEach((item)=>{
        item.foods.forEach((item)=>{
          if(item.count){
            foods.push(item)
          }
        })
      })
      return foods
    }
  },
  created() {
    this.iconClassMap = [
      "decrease",
      "discount",
      "special",
      "invoice",
      "guarantee"
    ];
    this.axios
      .get("./static/data.json")
      .then(res => {
        this.goods = res.data.goods;
        this.$nextTick(function() {
        this._initScroll();
        this._calculateHeight();
        });
        
      })
      .catch(err => console.log(err));
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, { click: true });
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
      this.foodScroll.on("scroll", pos => {
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodlisthook;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
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
      padding: 0 12px;
      font-size: 12px;
      line-height: 14px;
      font-weight: 200;

      &.current {
        position: relative;
        z-z-index: 10;
        background-color: #fff;
        font-weight: 700;
        margin-top: -1px;

        .text {
          border-none();
        }
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        border-1px(rgba(7, 17, 27, 0.1));

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

    .food-list {
      .goodsname {
        height: 26px;
        padding-left: 14px;
        background-color: #f3f4f5;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        line-height: 26px;
        color: rgb(147, 153, 159);
      }

      .food-item {
        display: flex;
        margin: 18px;
        margin-bottom: 0;
        padding-bottom: 18px;
        font-size: 0;
        border-1px(rgba(7, 17, 27, 0.1));

        &:last-child {
          border-none();
        }

        .good-button {
          position: absolute;
          right: 0;
          bottom: 18px;
        }

        .img {
          display: inline-block;
          vertical-align: top;

          img {
            display: block;
          }
        }

        .food-content {
          display: inline-block;
          margin: 2px 0 0 10px;

          .name {
            font-size: 14px;
            color: rgb(7, 17, 27);
            line-height: 14px;
            font-weight: 700;
          }

          .description {
            display: inline-block;
            margin-top: 8px;
            font-size: 10px;
            color: rgb(147, 153, 159);
            line-height: 12px;
          }

          .sellcontent {
            margin-top: 8px;
            font-size: 10px;
            color: rgb(147, 153, 159);
            line-height: 10px;

            .sellcount {
              margin-right: 12px;
            }
          }

          .price {
            display: inline-block;

            .nowprice {
              font-size: 14px;
              color: #f01414;
              font-weight: 700;
              line-height: 28px;

              i {
                font-size: 10px;
                font-weight: normal;
              }
            }

            .oldprice {
              margin-left: 8px;
              font-size: 10px;
              color: rgb(147, 153, 159);
              font-weight: 700;
              line-height: 24px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>
