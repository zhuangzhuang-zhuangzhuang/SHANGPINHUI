//引入vue和路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
// import router from "vue-router";
//引入组件
/* import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search" */
//使用插件
Vue.use(VueRouter)
//修改路由的push方法解决NavigationDuplicated问题
//1先把原型的push方法保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.push

// //修改原型的push方法并作出判断
//可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function (location, onResolved, onRejected) {
    //location就是我们调用 this.$router.push，传递过来的对象
    // {
    //   name: "search",
    //   params: { keyword: this.keyword || undefined},
    //   query: { keyword1: this.keyword.toUpperCase() },
    // }
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        return originPush.call(this, location).catch(() => { })
    } else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    //location就是我们调用 this.$router.push，传递过来的对象
    // {
    //   name: "search",
    //   params: { keyword: this.keyword || undefined},
    //   query: { keyword1: this.keyword.toUpperCase() },
    // }
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
        return originReplace.call(this, location).catch(() => { })
    } else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return originReplace.call(this, location, onResolved, onRejected)
    }
}



//向外暴露一个路由器对象
export default new VueRouter({
    //配置路由
    routes,
    //跳转到新的路由界面，滚动条的位置
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    }
})