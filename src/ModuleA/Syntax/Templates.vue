<template>
  <div class="hello">
   <p>{{ message }}</p>
   <div v-html="mingked"></div>
   <button v-bind:class="testing">Testing...</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      message:"Hello World",
      mingked:"<a href='http://mingked1999.com'>Mingke Deng</a>",
      testing:'active'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
