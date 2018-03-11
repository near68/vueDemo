<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="seachbook">seach</button>
    <p>{{books}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      books: ''
    }
  },
  methods: {
    seachbook: function(){
      this.axios.get('./static/test.json').then(response=>
        this.books = response.data.title
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
