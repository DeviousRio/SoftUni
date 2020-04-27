<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppRegister />
  </div>
</template>

<script>
import AppRegister from './components/Register.vue'

export default {
  name: 'App',
  components: {
    AppRegister
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
  margin-top: 60px;
}
</style>
