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

### 合并params参数和query参数

### mock.js模拟数据

使用步骤：

- src中建立mock文件夹

- 创建JSON文件，记得要格式化

- 将mock中的图片放置到public文件夹中，public文件夹在打包的时候，会把相应的资源原封不动地打包到dist文件夹

- 创建mockServe.js通过插件实现模拟数据

- mockServe在入口文件中引入（main.js)

### P46

* 重新获得面包屑（数据）后，该如何重新展示页面？

   ​	再次跳转至当前页面并携带params参数,这个时候路径的params、query参数就可以被清空了

* 取消搜索框带来的面包屑后，该如何把搜索框中(兄弟组件header）的面包屑置空？

  ​	一个在header组件一个在search组件，配置全局时间总线$bus,同时再次跳转路由，把路由里的params参数清空

  
### P48
* 点击品牌商标，如何再次点击后的页面

  商标是在searchselector子组件中，所以要发送请求（searchparams在父组件中）只能在父组件中发送，通过自定义事件将数据由子组件传递到父组件

  

### P49
* 避免商品重复属性的出现(数组去重)

	往数组push的时候应该去判断，用indexOf判断元素的索引值是否为-1,==js里的删除数组中某一个元素的语法==splice(,)

### P50 对商品进行排序

（价格|综合）||（升序|降序）四种商品排序方式

* 怎么点击哪个模块哪个模块就显示相应的背景颜色

​	通过发送给服务器的属性值（order）来判断，代码写法：

```js
<li :class="{active:searchParams.order.indexOf('1')!=-1}">
```

* computed、methods的区别

	即便是多处多次调用，computed 也只被调用一次，这就是 computed 缓存的优势。所依赖的数据发生变化时，computed:{}又会被再次调用

* 箭头该放在哪里的问题,怎么使用网络图标
	
  也是判断属性值，用v-show,箭头的生成可以使用阿里巴巴图标矢量库，记得在生成的链接中加入协议名称：https://......
  
  ```js
  class="iconfont" :class="{'icon-UP':isAsc}"
  ```
  
  



  

### P55 分页器

* 自定义分页器的时候，开发的时候自己先传家的数据进行测试

* 向上取整==Math.ceil==

* 很重要的事情：算出连续页码的起始数字和结束数字，考虑数据不够页数用的情况，规避bug

* V-for:数组|数字|字符串|对象,v-for遍历数字的时候从1开始

	
### P59 开发产品的详情页

* 代码顺序：静态组件-》发请求-》vuex-》动态展示组件

* 点击商品的图片，需要把商品的id路由传参到详情页面
* 路由跳转时将跳转后的页面的滚轮保持在顶部:滚动行为（官网上有）`scrollBehavior`
* params路由传参时，？表示params可以传递也可以不传递
* this.$router这个属性，是VueRouter类的一个实例，当在入口文件注册路由的时候，给组件添加`$router|$route`属性

#### vuex的操作
```js
//在组件某个生命周期(mounted)里
this.$store.dispatch('x123',parameter)
//在store文件夹里
//引入接口
import {dafsdsaf} from "xxx/api"
//四件套
const state={
    xxx:{}//state的数据类型要由服务器那边决定
}
const mutations={
    X123(state,xxx)
    {
        state.xxx = xxx
    }
}
const actions={
    async x123({commit},parameter)
    {
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200)
        {
            commit('X123',result.data)
        }
    }
}
const getters={
    
}

export default{
    state,
    mutations,
    actions,
    getters
}
//对外暴露
