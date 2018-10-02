<template>
  <ul class="list">
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return { todos: data }
  }  
}
</script>

<style>
body {
  background: #EFEFEF;
  margin: 0;
  padding: 0;
}

.list {
  list-style: none;
}

.list li {
  padding: 24px 0;
}
</style>

