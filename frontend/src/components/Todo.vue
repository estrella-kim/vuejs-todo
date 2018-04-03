<template>
  <div class="todo">
    <h1>{{intro}}</h1>
    <ul>
        <li v-for="(person, index) of persons" v-bind:key="person.name">
          <strong>{{index}}</strong>
          <dl>
            <dt>{{person.name}}</dt>
            <dd>{{person.age}}</dd>
            <dd>{{person.career}}</dd>
          </dl>
        </li>
      </ul>
    <div>{{ check() }}</div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      intro: 'this is todo page with vuejs',
      persons: [
        {name: 'jiyoung', age: 25, career: 'newbee'},
        {name: 'hong', age: 29, career: 'jinior'},
        {name: 'martin', age: 27, career: 'jununior'}
      ]
    }
  },
  computed: {
    count: function () {
      return this.$store.state.count
    },
    check: function () {
      return this.$store
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
