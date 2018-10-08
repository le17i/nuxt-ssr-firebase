<template>
  <ul class="list">
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="{ name: 'id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.posts
    }
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

