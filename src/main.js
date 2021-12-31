import Vue from 'vue'
import App from './App.vue'
import router from './router'
//注册三级联动的全局组件
import TypeNav from './components/TypeNav';
//第一个参数：全局组件的名字，第二个参数：哪一个组件

// import {reqCategoryList} from './api'
import store from './store'

// reqCategoryList();
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
