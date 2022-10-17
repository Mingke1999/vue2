<template>
  <div>
    <h3>My Directives</h3>
    <div>
        <input type="text" v-focus />
        <p v-red>Hello World</p>
        <p v-green>Local Directives</p>
        <button @click="message = 'Mounted'">Change Hooks</button>
        <p v-myShow="flag">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"Hook Functions",
            flag: false
        }
    },
    directives:{
        green:{
            //hook function
            inserted(el){
                el.style.color ='green'
            }
        }
    }
}
</script>

<style>

</style>