<template>
  <div>
    <h3>Service List</h3>
    <Details :serviceId="serviceId"/>
  </div>
</template>

<script>
import Details from './Details.vue';
export default {
    name:"Service",
    data(){
        return{
            serviceId:1
        }
    },
    components:{
        Details,
    }
}
</script>

<style>

</style>