<template>
  <div id="shoppingcart">
    <header>
      <p>购物车</p>
    </header>
    <div class="container">
      <section v-for="(item, index) in proList">
        <input type="checkbox" v-model="item.checked" id="checkbox">
        <img :src="item.pro_img">
        <span class="proMsg" v-text="item.pro_name"></span>
        <span>{{ item.pro_brand }}</span>
        <button @click="item.pro_num <= 1 ? 1 : item.pro_num--">-</button>
        <input type="text" v-model="item.pro_num">
        <button @click="item.pro_num++">+</button>
        <span>价格：{{ item.pro_price * item.pro_num}}</span>
        <button @click="del(index)">删除</button>
      </section>
      <footer>
        <span>已选商品：{{ getTotal.totalNum }} 总价：{{ getTotal.totalPrice }}</span>
      </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "shoppingcart",
  data() {
    return {
      msg: "",
      proList: [
        {
          pro_name: "【斯文】甘油 | 丙三醇", //产品名称
          pro_brand: "skc", //品牌名称
          pro_place: "韩国", //产地
          pro_purity: "99.7%", //规格
          pro_min: "215千克", //最小起订量
          pro_depot: "上海仓海仓储", //所在仓库
          pro_num: 0, //数量
          pro_img: "../static/images/1.png", //图片链接
          pro_price: 800 //单价
        },
        {
          pro_name: "【斯文】甘油 | 丙三醇", //产品名称
          pro_brand: "skc", //品牌名称
          pro_place: "韩国", //产地
          pro_purity: "99.7%", //规格
          pro_min: "215千克", //最小起订量
          pro_depot: "上海仓海仓储", //所在仓库
          pro_num: 0, //数量
          pro_img: "../static/images/1.png", //图片链接
          pro_price: 800 //单价
        }
      ]
    };
  },
  computed: {
    getTotal: function() {
      var checkedpro = this.proList.filter(item => item.checked);
      var totalPrice = 0,
        totalNum = 0;
      for (var i = 0; i < checkedpro.length; i++) {
        totalPrice += checkedpro[i].pro_num * checkedpro[i].pro_price;
      }
      return { totalPrice: totalPrice, totalNum: checkedpro.length };
    }
  },
  methods: {
    del(index) {
      this.proList.splice(index, 1);
    }
  },
  mounted: function() {
    //为List添加select（是否选中）字段，初始值为true
    this.proList.map(
      function(item) {
        this.$set(item, "checked", true);
      }.bind(this)
    );
  }
};
</script>

<style>
section {
  display: inline-block;
  width: 50%;
}
@media screen and (max-width: 1200px) {
  section {
    width: 100%;
    display: block;
  }
}

</style>
