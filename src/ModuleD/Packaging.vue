<template>
  <div>
    <h3>HTTP REQUEST PACKAGING</h3>
  </div>
</template>

<script>
import axios from './request'
export default {
    mounted(){
        axios.get("/user/getall")
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>