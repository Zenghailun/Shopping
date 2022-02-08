import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//注册三级联动的全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
//第一个参数：全局组件的名字，第二个参数：哪一个组件

// import {reqCategoryList} from './api'

// reqCategoryList();
//全局组件：第一个参数 组件名字 第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
//引入MockServe.js
import './mock/mockServe'
import "swiper/css/swiper.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount('#app')
