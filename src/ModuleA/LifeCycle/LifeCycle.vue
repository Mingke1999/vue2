<template>
  <div>
    <h3>Life Cycle</h3>
    <button @click="message='New message'">Change component</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    name:"lifeCycle",
    data(){
        return{
            message:"Hello World",
        }
    },
    beforeCreate(){
        console.log("Before Create");
    },
    created(){
        console.log("Created");
    },
    beforeMount(){
        console.log("Before Mount");
    },
    mounted(){
        console.log("Mounted");
    },


    beforeUpdate(){
        console.log("Before Update");
    },
    updated(){
        console.log("Updated");
    },
    beforeDestroy(){
        console.log("Before Destroy");
    },
    destroyed(){
        console.log("Destroyed")
    }
}
</script>

<style>

</style>