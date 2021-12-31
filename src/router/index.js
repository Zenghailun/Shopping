//配置路由的地方

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Search from '../pages/Search'

// let originPush = VueRouter.prototype.push;
// console.log(originPush);

export default new VueRouter(
    {
        routes: [
            {
                path:'/home',
                component:Home
            },
            {
                path:'/register',
                component:Register
            },
            {
                path:'/login',
                component:Login
            },
            {
                name:"search",
                path:'/search/:keyword',
                component:Search
            },
            //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
            {
                path:'*',
                redirect:'/home'
            }
        ]
    }
)

