<template>
  <div><button @click="decrement">{{ msgb }}-</button></div>
</template>
<script>
export default {
  name: 'testb',
  data() {
    return {
      msgb: "testb"
    };
  },
  methods: {
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>