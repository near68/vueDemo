<template>
  <div class="goods">
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

      shopname: []
    }
  },
  components: {
    testa,
    testb
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
<style lang="less" scoped>
.goods {
  background-color: aquamarine;
}
</style>
