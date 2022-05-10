//这个是购物车组件的单独的store
import { reqAddToCart } from "@/api"
import { reqCarTlist } from "@/api"
const state = {
    //这里是存放数据
    cartInfo: []
}
const mutations = {
    //这里是修改数据
    RECEIVE_CARTINFO(state, cartInfo) {
        state.cartInfo = cartInfo
    }
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
    async getShopCar({ commit }, { skuId, skuNum }) {
        const result = await reqAddToCart(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return new Promise.reject(new Error('faild'))
        }
    },
    async getCartInfo({ commit }) {
        const result = await reqCarTlist()
        if (result === 200) {
            commit('RECEIVE_CARTINFO', result.data)
        }
    }
}

const getters = {
    //用来简化数据操作
}
export default { state, actions, mutations, getters }