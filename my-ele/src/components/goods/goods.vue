<template>
  <div class="goods">
    <p>{{ msg }}</p>
    <p>{{ count }}</p>
    <testa></testa>
    <testb></testb>
    <ul>
      <li v-for="item in shopname">{{ item }}</li>
    </ul>
  </div>
  
</template>
<script>
import testa from "@/components/testa";
import testb from "@/components/testb";
export default {
  name: "goods",
  data() {
    return {
      msg: "Welcome to goods",
      shopname: []
    };
  },
  components: {
    testa,
    testb
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  created() {
    this.axios
      .get("./static/data.json")
      .then(res => {
        res.data.goods.forEach(val => {
          this.shopname.push(val.name);
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.goods {
  background-color: aquamarine;
}
</style>
