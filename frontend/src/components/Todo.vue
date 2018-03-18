<template>
  <div class="todo">{{intro}}</div>
</template>

<script>
  export default {
    name: 'Todo',
    data () {
      return {
        intro: 'this is todo page with vuejs'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo{
    color: orange;
  }
</style>
