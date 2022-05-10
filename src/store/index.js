//引入vue和vuex。并且使用插件注册使用
import Vue from "vue";
import Vuex from "vuex"
import home from "./home"
import user from "./user"
import search from "./search"
import detail from "./detail"
import shopcar from "./shopCar"


Vue.use(Vuex)
const state = {
    //存数据
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
}
const mutations = {
    //直接修改数据
}
const gettes = {
    //后面用来简化数据的操作
}
//把store暴露出去
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    gettes,
    modules: {
        home,
        user,
        search,
        detail,
        shopcar
    }
})
export default store