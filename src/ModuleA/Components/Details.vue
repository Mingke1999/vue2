<template>
  <div>
    <h3>Service Details</h3>
    <h3>Service ID: {{serviceId}}</h3>
  </div>
</template>

<script>
export default {
    name:"Details",
    props:{
        serviceId:{
            type:Number, //fix passing type
            default:15, //could give a default value,
            required:true
        },
        values:{
            type:Array, //factory function required
            default:function(){
                return []
            }
        }
    }
}
</script>

<style>

</style>