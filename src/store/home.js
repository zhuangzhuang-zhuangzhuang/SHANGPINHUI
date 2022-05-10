//引入接口请求函数
import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"

//这个是home组件的单独的store
const state = {
    //存数据
    catgorylist: [],
    bannerlist: [],
    floorlist: [],

}
const mutations = {
    //直接修改数据
    //这里大写就是一种约定，方便后期出问题了好找
    RECEIVE_CATGORYLIST(state, catgorylist) {
        state.catgorylist = catgorylist
    },
    RECEIVE_BANNERLIST(state, bannerlist) {
        state.bannerlist = bannerlist
    },
    RECEIVE_FLOORLIST(state, floorlist) {
        state.floorlist = floorlist
    },
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
    async getCatgorylist({ commit }) {
        //这个是接口请求函数,这里是发请求拿数据，然后提交给mutations存储到state中
        //.then.catch也可以用，只是可读性不强，await和async的主要作用就是可以通过同步代码实现异步效果
        const result = await reqCategoryList()
        if (result.code === 200) {
            commit("RECEIVE_CATGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        //这个是接口请求函数,这里是发请求拿数据，然后提交给mutations存储到state中
        //.then.catch也可以用，只是可读性不强，await和async的主要作用就是可以通过同步代码实现异步效果
        const result = await reqBannerList()
        if (result.code === 200) {
            commit("RECEIVE_BANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        //这个是接口请求函数,这里是发请求拿数据，然后提交给mutations存储到state中
        //.then.catch也可以用，只是可读性不强，await和async的主要作用就是可以通过同步代码实现异步效果
        const result = await reqFloorList()
        if (result.code === 200) {
            commit("RECEIVE_FLOORLIST", result.data)
        }
    },

}
const gettes = {

}
export default { state, actions, mutations, gettes }