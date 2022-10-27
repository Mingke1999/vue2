<template>
  <div>
    <h3>Dashboard</h3>
    <ul>
      <li v-for="(item,index) in users" :key="index" style="list-style:none;border-bottom: 1px solid #efefef;">
        <!-- <router-link :to="'/details/'+item.userId">  -->
        <router-link :to="{name:'detail',params:{id:item.userId}}"> 
          <div class="users" v-show="item.imagePath!=null&&item.imagePath!=''">
            <p>Username: {{item.userName}}</p>
            <img :src="`https://easyevent.blob.core.windows.net/image/${item.imagePath}`" alt="The image not working">
            <p>UserID: {{item.userId}}</p>
            <p>Email: {{item.email}}</p>
            <button @click="goDetail(item.userId)">Learn More</button>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../ModuleD/request';
export default {
  data(){
    return{
      users:[]
    }
  },
  mounted(){
    axios.get("/api/user/getall").then(
      res=>{
        console.log(res)
        if(res.status===200){
          this.users = res.data.$values
        }
      }
    ).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    goDetail(ID){
      this.$router.push({name:'detail',params:{id:ID}})
    }
  }
}
</script>

<style>
.users img{
  width:100%;
}
</style>