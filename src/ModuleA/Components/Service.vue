<template>
  <div>
    <h3>Service List</h3>
    <Details :serviceId="serviceId"/>
    <Capacity @onEvent="messageHandle"/>
    <p>{{capacity}}</p>
  </div>
</template>

<script>
import Details from './Details.vue';
import Capacity from './Capacity.vue';

export default {
    name:"Service",
    data(){
        return{
            serviceId:1,
            capacity:""
        }
    },
    methods:{
        messageHandle(data){
            this.capacity = data;
        }
    },
    components:{
        Details,
        Capacity
    }
}
</script>

<style>

</style>