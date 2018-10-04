<template>
  <ul class="list">
    <li v-for="post in posts" :key="post.id">
      <a :href="link(post.id)">{{ post.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.getters.posts
    }
  },
  methods: {
    link (id) {
      return `/${id}`
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

