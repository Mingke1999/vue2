<template>
  <div>
    <h3>Component B</h3>
    <button @click="message='This new message B'">Switch B</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"This is component B"
        }
    }
}
</script>

<style>

</style>