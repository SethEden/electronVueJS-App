<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    name: 'electron-app'
    components: {
      Navbar
    }
  }
</script>

<style>
  /* CSS */
</style>
