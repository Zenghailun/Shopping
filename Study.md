## Day1

- public文件夹: 放置一些静态资源(图片)，需要注意是：放在public的静态资源，webpack进行打包时，会原封不动的打包到dist文件夹中

- src文件夹：

  ​	assests文件夹：一般放置静态资源(一般放置多个组件共用的静态资源),需要注意,assets的静态资源在webpack打包时会被当作一个模块，打包到JS文件里

  ​	main.js:程序入口文件,也是整个程序中最先执行的文件

- babel.config.js:配置文件(babel相关)

- package.json文件:为项目身份证,记录项目叫什么，项目中有哪些依赖、项目怎么运行

- package-lock.json:缓存性文件,记录安装包的下载啥的

## Day2

$route:一般获取路由信息，路劲、query、params等等

$router:一般进行编程式路由导航进行路由跳转[push,replace]



路由的跳转有两种形式：

声明式导航router-link,可以进行路由的跳转

编程式导航push|replace,可以进行路由跳转



编程式导航:声明式导航能做的，编程式导航都能做，都是编程式还能做一些其他的业务逻辑

### 编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的错误

- 声明式导航底层已经处理好了，所以没有这类问题

- 编程式导航是因为vue-router引入了promise,可以通过给push方法传递成功、失败的回调函数，也可以修改底部的方法：`this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})`;

## Day 3

整体流程：

- 先把静态页面完成

- 拆分出静态组件

- 获取服务器的数据进行展示

- 动态业务

### 三级联动组件完成

由于三级联动，在Home、Search、Detail,把三级组件注册为全局组件

好处：只需要注册一次就可以在项目的任意地方使用

### POSTMAN测试接口

- 如果服务器返回的数据code字段200，代表服务器返回数据成功

- 整个项目，接口前缀都有/api字样

### axios二次封装

//对于axios二次封装

import axios from "axios";



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

  return config;

})



//响应拦截器:

requests.interceptors.response.use((res)=>{

  //成功的回调函数：

  return res.data;

},(error)=>{

  //响应失败的回调函数

  return Promise.reject(new Error('faile'));

});



export default requests;

### API 统一管理

#### 接口统一管理

项目很小:完全可以在组件的生命周期函数中发请求

项目大:axios.get(‘xxx’)

#### 跨域问题

- 协议、域名、端口号不同请求，称之为跨域

- JSONP、CROS、代理

### nprogress进度条的使用

start:进度条开始

done:进度条结束

进度条颜色是可以修改的

### vuex

如果项目过大，组件过多，接口很多，可以模块式开发

### 显示卡顿

正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）

节流：在规定的时间间隔范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

防抖：前面所有的触发都被取消，最后一次的执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会执行一次。

**防抖**用loadash插件`loadash.js`

```javascript
//1.loadash函数对外暴露_函数
console.log(_.debounce)
let result = _.debounce(function(){
    
},1000);

```

**节流**也是用`loadash.js`

```js
button.onclick = _.throttle(function(){
    count++;
    span.innerHTML = count;
    console.log('执行');
},5000);//5s只操作一次,5s内不会重复触发，给浏览器充裕的时间解析代码
```



### 三级联动组件的路由跳转

可以使用声明式导航router-link,可以实现路由的跳转与传参，但是会出现卡顿现象

router-link:是一个组件，当服务器的数据返回后，循环出很多router-link组件1000+，很耗内存，因此出现了卡顿现象

==最好的解决方法==编程式导航+事件委派

:----:

### 开发search模块中的typenav

可以在App.vue里发出dispatch请求，直接放在vuex里，提高性能
