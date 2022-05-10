import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
import router from './router'
//多个组件共用的公共组件，注册在全局，
import Typenav from "@/components/Typenav";
import Carouser from "@/components/Carouser"
//引入vuex
import store from "@/store"
//引入mock让模拟的接口生效
import "@/mock/mockServe"
//引入swiper样式
import "swiper/css/swiper.css"
//验证接口请求函数是否成功
// import "@/api"
// import { reqSearchInfo } from '@/api'

// reqSearchInfo({})
// reqCategoryList() 
Vue.component('Typenav', Typenav);
//全局注册轮播图组件
Vue.component('Carouser', Carouser);

Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app')
 */

new Vue({
  //安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el: '#app',
  render: h => h(App),
  router,
  store
})
