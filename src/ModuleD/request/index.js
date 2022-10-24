import axios from "axios";
/**
 * 
 */
const instance =  axios.create({
    baseURL:"/api",
    timeout:7000,
    //withCredentials:true
})

/**
 * convert request request string post
 */

instance.interceptors.request.use(
    config=>{
        if(config.method === 'post'){
            config.headers =  {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        }
        return config
    },
    error=> Promise.reject(error)
)
/**
 * handle http response
 */
 instance.interceptors.response.use(
   response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
   error =>{
    const {response} = error;
    if(response){
        errorHandle(response.status,response.info)
    }else{
        console.log("Http Request Failed")
    }
   }
)

/**
 * error handle
 */
const errorHandle = (status,info) =>{
    switch(status){
        case 400:
            console.log("Bad Request")
            break;
        case 401:
            console.log("Unauthorized")
            break;
        case 402:
            console.log("Payment Required")
            break;
        case 403:
            console.log("Forbidden")
            break;
        case 404:
            console.log("Not Found")
            break;
        case 500:
            console.log("Internal Server Error")
            break;
        case 502:
            console.log("Bad Gateway")
            break;
        default:
            console.lop(info);
            break;
    }
}

export default instance