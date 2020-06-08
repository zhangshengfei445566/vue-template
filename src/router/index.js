import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/notFind'
    },
    {
      path: '/notFind',
      name: 'notFind',
      component: ()=>import('../common/notFind')
    },
/*  {
    path: '/about',
    name: 'About',
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
    {
      path: '/tree',
      name: "tree",
      component: ()=>import('../components/common/tree')
    },
    {
      path: '/form',
      name: 'form',
      component: ()=>import('../components/common/form')
    },
    {
      path: '/page',
      name: 'page',
      component: ()=>import('../common/page'),
      /*children: [{
        path: 'menu',
        name: 'menu',
        component: ()=>import('../common/menu')
      },
      ]*/
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
