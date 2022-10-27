import VueRouter from "vue-router";
import Dash from '../ModuleE/Dashboard.vue';
import Home from '../ModuleE/Home.vue';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/dash',
            component:Dash
        }
    ]
})