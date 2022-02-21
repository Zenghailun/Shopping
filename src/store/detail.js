import { reqGoodsInfo,reqAddOrUpdateShopCart} from "../api"
const state={
  goodInfo:{}
}
const mutations={
  GETGOODINFO(state,goodInfo)
  {
    state.goodInfo=goodInfo
  }
}
const actions={
  async getGoodInfo({commit}, skuId)
  {
    let result=await reqGoodsInfo(skuId)
    if(result.code==200)
    {
      commit('GETGOODINFO',result.data)
    }
  },
  async addOrUpdateShortCart({commit},{skuId,skuNum})
  {
    let result = await reqAddOrUpdateShopCart(skuId,skuNum)
    if(result.code==200)
    {
      return "ok"
    }
    else{
      //代表p失败
      return Promise.reject(new Error('faile'))
    }
  }
}

//简化数据
const getters={
  categoryView(state)
  {
    return state.goodInfo.categoryView||{};
  },
  skuInfo(state)
  {
    return state.goodInfo.skuInfo||{};
  },
  spuSaleAttrList(state)
  {
    return state.goodInfo.spuSaleAttrList||[];
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}