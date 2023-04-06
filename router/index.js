import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter)      

const routes=[
    {
    path: '/',
    name: 'Main',
    component: ()=>import('../views/Main.vue'),
    redirect:'/home',
    children:[
        {
            path:'/home',
            name:'home',
            meta: { title: "教学质量展示" } ,
            component:()=>import('../views/home')
        },
        
        {
            path:'/login',
            name:'login',
            meta: { title: "学生登录" } ,
            component:()=>import('../views/stu/login')
        },
        {
            path:'/stu',
            name:'stu',
            meta: { title: "成绩提交" } ,
            component:()=>import('../views/stu/stu')
        }
    ]
    }
   
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router