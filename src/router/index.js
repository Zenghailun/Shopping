//配置路由的地方

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
//需要先重写VueRouter.prototype原型对象身上的push|replace方法
//先把vuerouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法
// 第一个参数：告诉原来push方法，你往哪里跳
// resolve成功的回调
// reject失败的回调
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject)
    {
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
};
// 重写replace方法
VueRouter.prototype.replace = function(loaction, resolve, reject){
    if(resolve && reject)
    {
        originReplace.call(this,location,resolve,reject)
    }
    else{
        originReplace.call(this,location,()=>{},()=>{})
    }
};

//对外暴露vuerouter实例
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {y: 0};
    }
})