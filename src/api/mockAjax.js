
//对axiaos的二次封装，二次封装是为了实现更多的功能
//首先需要安装 axios。然后引入
import axios from 'axios'
//引入nprogress，进度条的效果
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'


//使用axios的create方法创建一个新的axios的实例
const service = axios.create({
    baseURL: '/mock',//设置请求头的公共部分
    timeout: 1000,
})
//设置请求拦截器
service.interceptors.request.use(
    //请求成功状态的拦截器
    //config就是请求报文，一定要返回去，因为还要继续往下去
    (config) => {
        NProgress.start();
        return config
    },
    //请求失败的拦截器一般不写，因为请求失败了也就没下文了 () => { }
);
//响应拦截器
service.interceptors.response.use(
    (response) => {
        //response是整个的响应报文，data是响应报文中的数据
        NProgress.done();
        return response.data
    },
    (error) => {
        NProgress.done();
        //统一处理错误
        alert('ajax请求失败' + error.message || '未知错误')
        //也可以统一处理完成之后，后面继续处理
        // return Promise.reject(new Error('发送Ajax请求失败'))
        //也可以返回一个pending状态的promise,代表中断promise链，后期也就没办法处理
        return new Promise(() => { })
    });
//把二次封装好的axios暴露出去，方便后期使用
export default service