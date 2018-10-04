<template>
  <article>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </article>
</template>

<script>
export default {
  computed: {
    post () {
      var id = parseInt(this.$route.params.id)
      return this.$store.getters.postById(id)
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

