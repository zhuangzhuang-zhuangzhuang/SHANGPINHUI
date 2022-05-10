import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search"
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"




export default [
    {
        path: "/shopcart",
        component: ShopCart
    },
    {
        path: "/addcartsuccess",
        component: AddCartSuccess
    },
    {
        name: "detail",
        path: "/detail/:goodsId",
        component: Detail
    },
    {
        path: "/home",
        component: Home
    }, {
        path: "/login",
        component: Login,
        //路由中的元配置项，可以配置任何需要的数据
        meta: {
            isHidden: true
        }
    }, {
        path: "/register",
        component: Register,
        meta: {
            isHidden: true
        }
    }, {
        name: "search",
        path: "/search/:keyword?",
        component: Search
    }
]