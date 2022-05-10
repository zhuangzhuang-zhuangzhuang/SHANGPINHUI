//这个是user组件的单独的store
import { reqDetailInfo } from "@/api"
const state = {
    //这里是存放数据
    detailInfo: {}
}
const mutations = {
    //这里是修改数据
    RECEIVE_DETAILINFO(state, detailInfo) {
        return state.detailInfo = detailInfo
    }
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
    async getDeailInfo({ commit }, goodsId) {
        const result = await reqDetailInfo(goodsId)
        if (result.code === 200) {
            commit('RECEIVE_DETAILINFO', result.data)
        }
    }
}

const getters = {
    //用来简化数据操作
    categoryView(state) {
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || []
    }
}
export default { state, actions, mutations, getters }