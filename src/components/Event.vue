<template>
  <div>
    <button v-on:click="countClicks">Trigger</button>
    <p>{{count}}</p>
    <ol>
        <li v-on:click="getValue(movie,$event)"
            v-for="(movie,index) in movies" v-bind:key="index">
            {{movie.name}}->{{movie.duration}}
        </li>
    </ol>
    <a v-on:click.prevent="dontJump" href="https://mingked1999.com">Mingke</a>
    <input v-on:keyup.enter="listenKey" type="text"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
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
            ],
        }
    },
    methods:{
        countClicks(event){
            //console.log(this.count,event); //the object target on currently
            this.count+=1;
            event.target.innerHTML = "Changed element by event innerHTML";
        },getValue(data,event){
            console.log(data);
            event.target.style.background = 'red';
        },dontJump(event){
            console.log(event);
        },listenKey(){
            // console.log(event.keyCode);
            // if(event.keyCode===13){
            //     console.log("User Pressed Enter");
            // }
            console.log("User Pressed Enter");
        }
    }
}
</script>

<style>

</style>