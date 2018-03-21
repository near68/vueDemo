<template>
  <div class="v-header">
    <div class="title" v-text="title"></div>
  </div>
</template>
<script>
export default {
  name: "v-header",
  data() {
    return {
      message: "header",
      title: ""
    };
  },
  methods: {
    back() {
      history.go(-1);
    }
  },
  created() {
    this.axios
      .get("./static/data.json")
      .then(res => (this.title = res.data.seller.name));
  }
};
</script>
<style>
.v-header {
  font-size: 2em;
}
</style>
