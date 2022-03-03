import {
  reqCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo
} from '@/api'

const state = {
  code: '',
  token:'',
  userInfo:{}
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state,token)
  {
    state.token=token
  },
  GETUSERINFO(state,userInfo)
  {
    state.userInfo=userInfo
  }
}
const actions = {
  async getCode({
    commit
  }, phone) {
    let result = await reqCode(phone)
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else
      return Promise.reject(new Error('faile'))
  },

  async userRegister({
    commit
  }, user) {
    let result = await reqUserRegister(user)
    if (result.code == 200) {
      return 'ok'
    } else
      return Promise.reject(new Error('faile'))
  },

  async userLogin({commit}, user)
  {
    let result = await reqUserLogin(user)
    if(result.code==200)
    {
      commit('USERLOGIN',result.data.token)
      return 'ok'
    }
    else
      return Promise.reject(new Error('faile'))
  },
  async getUserInfo({commit})
  {
    let result = await reqUserInfo()
    commit('GETUSERINFO',result.data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}