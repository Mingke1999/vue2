<template>
  <div id="app">
    <Event/>
  </div>
</template>

<script>
import Event from './components/Event.vue';
export default {
  name: 'App',
  components: {
    Event
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
