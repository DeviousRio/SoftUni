<template>
  <div id="app">
    <HelloWorld />
    <Gallery />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Gallery from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Gallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
