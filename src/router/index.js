import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user" */ '../views/login.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user" */ '../views/regist.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

router.beforeEach((to,from, next)=>{

  let GetToken = localStorage.getItem('USER_TOKEN');

  console.log(to,from, GetToken);

  // if(to.path !== '/login'){
  //   next({path: '/login'});
  // } else {
  //   next();
  // }
  let whiteList = ['/regist','/login','/','/404'];

  if(GetToken){
    next();
  } else {   // No token

    if(whiteList.indexOf(to.path) !== -1){
      next();
    } else {
      next('/login')
    }
  }

  
  
})

export default router
