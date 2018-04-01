<template>
  <div class="todo">
    <h1>{{intro}}</h1>
    <ul>
        <li v-for="(number, index) in numbers" v-bind:number="number" v-bind:index="index" v-bind:key="number">{{ number }} is on list {{ index +1 }}.</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      intro: 'this is todo page with vuejs',
      numbers: ['jiyoung', 'hong', 'lea', 'estrella']
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
