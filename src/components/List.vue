<template>
  <div>
    <ol>
        <li v-for="(movie,index) in movies" v-bind:key="index">
            {{movie.name}}->{{movie.duration}}
        </li>
    </ol>
    <ul>
        <li v-for="(info,key,index) in user" v-bind:key="index">
            {{key}}:{{info}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            movies:[
                {
                    name:"Ticket to Paradise",
                    duration: 150
                },
                {
                    name:"DC League of Super-Pets",
                    duration: 170
                },
                {
                    name:"Paws of Fury: The Legend of Hank",
                    duration: 155
                }
            ],user:{
                name:'mingke',
                age:23,
                major:'cybersecurity'
            }
        }
    }
}
</script>

<style>

</style>