import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

import home from "./home";
import search from './search'
import detail from "./detail"
import shopcart from "./shopcart"

//mutation:修改state的唯一手段
// const mutations = {}
// const state = {}//state是仓库存储数据的地方
// const actions = {}//处理action，可以书写自己的业务逻辑，也可以处理异步
// const getters = {}//计算属性，用于简化仓库数据

//对外暴露Store类的一个实例
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters
    modules:{
        home,
        search,
        detail,
        shopcart
    }
});