<template>
  <nav>
    <h1 class="title">Hello<span>World</span>!</h1>
    <ul>
      <li @click="navigate('/')">Feed</li>
      <li @click="navigate('/about')">About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    navigate (router) {
    this.$router.push(route)
    }
  }
}
</script>

<style></style>
