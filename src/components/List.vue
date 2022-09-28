<template>
  <div>
    <ol>
        <li v-for="(movie,index) in movies" :key="index">
            {{movie.name}}->{{movie.duration}}
        </li>
    </ol>
    <ul>
        <li v-for="(info,key,index) in user" :key="index">
            {{key}}:{{info}}
        </li>
    </ul>
    <button @click="newEvent">New Events</button>
    <button @click="concatEvent">Concat Events</button>
    <!-- @click event click -->
    <ul>
        <li v-for="(item,index) in venues" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="changeBoss">Change Boss</button>
    <ol>
        <li v-for="(value,key,index) in Commander" :key="index">
            {{key}}->{{value}}
        </li>
    </ol>
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
            },venues:[
                "Glen Albyn Estate",
                "Searoads Shed",
                "Derwent Scout Hall"
            ],concats:[
                "One Great Rune carrier",
                "Godfrey, First Elden Lord",
                "Godskin Duo"
            ],Commander:{
                recommend:"summon",
                damage:"lightning",
                attack:"aoe"
            }
        }
    },
    //at methods we could define functions
    methods:{
        newEvent(){
            this.venues.push('elden rings');
        },
        concatEvent(){
            this.venues = this.venues.concat(this.concats)
            //to update value with replace method, need to assign value again
        },changeBoss(){
            //this one no working
            //this.Commander.damage = "frostbite";
            //method 1
            //Vue.set(this.Commander,"damage","frostbite")
            //method 2
            this.$set(this.Commander,"damage","frostbite")
        }
    }
}
</script>

<style>

</style>