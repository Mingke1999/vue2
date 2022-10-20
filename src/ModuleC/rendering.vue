<script>
export default {
    data(){
        return{
            message:"Use Component Render",
            items:[1,2,3]
        }
    },

    render(createElement){
        if(this.items.length){
            // return createElement("h3","Array length: "+this.items.length)
           return createElement("ul",this.items.map((ele)=>{
            return createElement('li',ele)
           }))
        }else{
            return createElement("h3","Array is empty")
        }
    }

}
</script>

<style>

</style>