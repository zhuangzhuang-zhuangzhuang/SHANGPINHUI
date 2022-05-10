//接口请求函数全部放在这个文件夹里边。先把封装好的axios引入进来
import request from './ajax'
//把封装好的mockAjax引入进来
import mockAjax from './mockAjax'
//配置三级联动菜单的接口请求函数,
//无参
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'GET'
    })
}
export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'GET'
    })
}
//请求搜索页面的接口,这个函数里边参数searchParams必须传，即使是一个空对象
export const reqSearchInfo = (searchParams) => {
    return request({
        url: '/list',
        method: 'POST',
        data: searchParams//这个是指定接收一个对象
    })
}

// reqSearchInfo({})测试接口是否可用
//详情页面的请求函数/item/{ skuId }
export const reqDetailInfo = (skuId) => {
    return request({
        url: `/item/${skuId}`,
        method: 'GET'
    })
}
// reqDetailInfo(1)
//请求购物车列表的回调函数
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddToCart = (skuId, skuNum) => {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'POST'
    })
}
///api/cart/cartList请求购物车
export const reqCarTlist = () => {
    return request({
        url: '/cart/cartList',
        method: 'GET'
    })

}
///api/user/passport/login，登录的函数
export const reqPassport = (passport) => {
    return request({
        url: '/user/passport/login',
        method: "POST",
        data: passport
    })
}