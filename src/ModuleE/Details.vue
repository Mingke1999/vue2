<template>
  <div>
    <h3>User Details</h3>
    <p>UserID {{$route.params.id}}</p>
    <p>props id -> {{id}}</p>
    <div>
        <p>{{this.details}}</p>
    </div>
    <div>
        <router-link :to="`/details/${$route.params.id}/booking`">Booking</router-link>
        <router-link :to="`/details/${$route.params.id}/review`">Review</router-link>
    </div>
    <router-view></router-view>
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
    },
    props:{
        id:{
            type:[String,Number],
            default:0
        }
    },
    
}
</script>

<style>

</style>