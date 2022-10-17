const myMixin ={
    data(){
        return{
            flag:false
        }
    },
    methods:{
        clickHandle(){
          this.flag = this.flag === false ? true : false;
        },
       
      },
    created(){
        console.log("Component Created");
    }
}
export default myMixin;