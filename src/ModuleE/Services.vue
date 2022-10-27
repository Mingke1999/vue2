<template>
  <div>
    <h3>Services</h3>
    <button @click="goHome">Home page</button>
  </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            //this.$router.push('/'); //1 2 1 2 3 1
            this.$router.push({name:'home'}); //named router
            //this.$router.replace('/'); //1 2 -> 1 2 3 no go back function
        }
    }
}
</script>

<style>

</style>