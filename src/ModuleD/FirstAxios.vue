<template>
  <div>
    <h3>AXIOS</h3>
  <div>
    <p>{{product.title}}</p>
    <p>{{product.content}}</p>
  </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            product:{
                content:"",
                title:""
            }
        }
    },
    mounted(){
        axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
        .then(res=>{
            console.log(res.data)
            if(res.status === 200){
                this.product.content = res.data.chengpinDetails[0].content
                this.product.title = res.data.chengpinDetails[0].title
            }
        })
        .catch(res=>{
            console.log(res)
        })

        axios.post("http://iwenwiki.com/api/blueberrypai/login.php",{
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
        },
        { 
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
    }
    ).then(res=>{
            console.log(res.data)
        }).catch(res=>{
            console.log(res)
        })
    }
}
</script>

<style>

</style>