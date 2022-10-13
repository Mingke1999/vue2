<template>
  <div>
    <h3>Binding classed and styles</h3>
    <p class="info" :class="active">class binding</p>
    <ul>
        <li @click="clickHandle(index)" 
            :class="{active:index===temp}" 
            v-for="(item,index) in names" :key="index"
        >
            {{item}}
        </li>
    </ul>
    <p :class="[flag?'active':'error','blah']">array binding</p>
    <p :class="[{active:true},flag?'hello':'error','world']">nesting class and array</p>
    <p :style="{color:'pink',fontSize:'2rem'}">Style Bindings</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:"active",
            names:["Java","Python","PHP"],
            temp:0,
            flag:false
        }
    },
    methods:{
        clickHandle(index){
            this.temp  = index;
        }
    }
}
</script>

<style>
.active{
    color:rgb(255, 191, 0);
}
</style>