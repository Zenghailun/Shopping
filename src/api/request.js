//对于axios二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
import store from '@/store'

//1.利用axios对象的方法create，去创建axios实例
//request就是axios
const requests = axios.create({
    //配置对象
    //基础路劲，发请求的时候，路劲中出现api
    baseURL:"/api",
    //代表请求超时的时间为5s
    timeout:5000,
});

//请求拦截器:在发请求之前，请求拦截器可以检测的到，可以在请求发出去之前做一些事
requests.interceptors.request.use((config)=>{
    //config:配置对象，配置对象有一个属性很重要，headers请求头
    //进度条开始
    if(store.state.detail.uuid_token)
    {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    nprogress.start();
    return config;
})

//响应拦截器:
requests.interceptors.response.use((res)=>{
    //成功的回调函数：
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调函数
    let Error = error
    return Promise.reject(new Error('faile'));
});

export default requests;