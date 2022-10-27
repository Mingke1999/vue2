import VueRouter from "vue-router";
import Home from '../ModuleE/Home.vue';
import AD from '../ModuleE/AD.vue';

const router = new VueRouter({
    mode:'history',
    routes:[
        // {
        //     path:'/home',
        //     redirect:'/'
        // },
        {
            path:'/',
            components:{
                default:Home,
                ad:AD
            },
            name:'home',
            alias:'/home'
        },
        {
            path:'/dash',
            //async loading
            component:()=>import('../ModuleE/Dashboard.vue'),
            name:'dashboard'
           
        },{
            path:'/details/:id',
            redirect:'/details/:id/booking',
            component:()=>import('../ModuleE/Details.vue'),
            children:[
                {
                    path:'booking',
                    component:()=>import('../ModuleE/Details/Booking.vue')
                },
                {
                    path:'review',
                    component:()=>import('../ModuleE/Details/Review.vue')
                }
            ],
            name:'detail',
            props:true
        },
        {
            path:'/service/:id',
            components:{
                default:()=>import('../ModuleE/Services.vue'),
                ad:AD
            },
            name:'service',
            //Per-Route Guard
            beforeEnter:(to,from,next)=>{
                console.log(from);
                console.log(to);
                next();
            }
        },
        {
            path:'*',
            component:()=>import('../ModuleE/NotFound.vue')
        }
    ]
})
/**
 * global routing guard pre-set
 */
// router.beforeEach((to,from,next)=>{
//     console.log(from);
//     console.log(to);
//     next();
// })
// router.afterEach((to,from)=>{
//     console.log(from);
//     console.log(to);
// })


export default router