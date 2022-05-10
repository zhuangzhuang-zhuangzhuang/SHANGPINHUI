//这个是search组件的单独的store
//引入搜索页面定义好的接口请求函数
import { reqSearchInfo } from "@/api"
const state = {
    //这里是存放数据
    searchInfo: {}
}
const mutations = {
    //这里是修改数据
    RECEIVE_SEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
    async getsearchInfo({ commit }, searchParams) {
        const result = await reqSearchInfo(searchParams)
        if (result.code === 200) {
            commit('RECEIVE_SEARCHINFO', result.data)
        }
    }
}

const getters = {
    //在这里可以简化数据的操作
    //后面用来简化数据的操作
    // 为什么要getters,是因为我们获取的数据内部结构比较复杂，使用起来不方便，甚至会出现小问题（假报错）
    // 所以我们拿到复杂的数据之后，会把这个数据先做计算，计算出来我们要直接使用的数据，简化数据操作
    attrsList(state) {
        return state.searchInfo.attrsList || []
    },
    goodsList(state) {
        return state.searchInfo.goodsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    }
}
export default { state, actions, mutations, getters }

