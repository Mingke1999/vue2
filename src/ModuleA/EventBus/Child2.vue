<template>
<div>
    <h3>Child2</h3>
    <p>{{msg}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            msg:""
        }
    },
    mounted(){
        this.$bus.$on("onMsg",data=>{
            this.msg = data;
        })
    }
}
</script>

<style>

</style>