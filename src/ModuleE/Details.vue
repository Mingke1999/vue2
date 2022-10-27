<template>
  <div>
    <h3>User Details</h3>
    <p>UserID {{$route.params.id}}</p>
    <div>
        <p>{{this.details}}</p>
    </div>
  </div>
</template>

<script>
import axios from '../ModuleD/request'
export default {
    data(){
        return{
            details:[]
        }
    },mounted(){
        axios.get(`/api/user/get/${this.$route.params.id}`).then(
            res=>{
                //console.log(res.data)
                this.details = res.data
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>