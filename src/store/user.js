//这个是user组件的单独的store
import { reqPassport } from "@/api"
const state = {
    //这里是存放数据
}
const mutations = {
    //这里是修改数据
}
const actions = {
    //与组件当中用户对接，一般是异步发请求，提交mutations
    //请求登录
    async getRegistration({ commit }, Passport) {
        const result = await reqPassport(Passport)
        if (result.code === 200) {
            return 'ok'
        } else {
            return new Promise.reject(new Error('faild'))
            // return new Promise.reject(new Error('请求失败'))
        }
    }
}

const getters = {
    //用来简化数据操作
}
export default { state, actions, mutations, getters }