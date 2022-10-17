<template>
  <div>
    <h3>My Directives</h3>
    <div>
        <input type="text" v-focus />
        <p v-red>Hello World</p>
        <p v-green>Local Directives</p>
    </div>
  </div>
</template>

<script>
export default {
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