<template>
  <div><button @click="increment">{{ msga }}+</button></div>
</template>
<script>
export default {
  name: 'testa',
  data() {
    return {
      msga: "testa"
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  }
};
</script>