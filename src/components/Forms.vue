<template>
<div>
    <h3>Form</h3>
    <input type="text" v-model="username"/>
    <p>{{username}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            username:''
        }
    }
}
</script>

<style>

</style>