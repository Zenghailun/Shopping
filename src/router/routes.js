import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'

// let originPush = VueRouter.prototype.push;
// console.log(originPush);

export default  [
  {
      path:'/home',
      component:Home,
      // 路由元信息不能瞎写，只能叫做detail
      meta:{isShow:true}
  },
  {
      path:'/register',
      component:Register
  },
  {
      path:'/login',
      component:Login
  },
  {
      name:"search",
      path:'/search/:keyword?',
      component:Search,
      props:(route) => ({
        keyword: route.params.keyword,
        big:route.query.big
      }),
  },
  {
      name:"detail",
      path:"/detail/:skuid",
      component:Detail
  },
  //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
  {
      path:'*',
      redirect:'/home'
  },
  {
			path:'/addcartsuccess',
			name:'addcartsuccess',
			component:AddCartSuccess,
			meta:{isShow:true},
	}
]