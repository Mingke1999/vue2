<template>
  <div>
    <p>{{name.split('').reverse().join('')}}</p>
    <p>{{reverseString}}</p>
    <p>{{reverseStringM()}}</p>
  </div>
</template>

<script>

export default {
    data(){
        return{
            name:"Hello"
        }
    },
    computed:{
            reverseString(){
                return this.name.split('').reverse().join('')
            }
    },
    //although computed and methods show same result,
    //methods are functions, functions will be called upon new renders
    //computed only compute again when value changed
    methods:{
        reverseStringM(){
            return this.name.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>