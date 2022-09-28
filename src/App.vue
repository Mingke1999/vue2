<template>
  <div id="app">
    <Forms/>
    <Computed/>
    <List/>
    <Templates/>
    <Event/>
    <Condition/>
  </div>
</template>

<script>
import Forms from './components/Forms.vue';
import Computed from './components/Computed.vue';
import List from './components/List.vue';
import Template from './components/Templates.vue';
import Event from './components/Event.vue';
import Condition from './components/Condition.vue';

export default {
  name: 'App',
  components: {
    Forms,
    Computed,
    List,
    Template,
    Event,
    Condition
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
