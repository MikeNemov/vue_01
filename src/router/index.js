import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  props: {
    page: String,
  },
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import( /* webpackChunkName: "PageDashboard" */'../page/PageDashboard.vue')
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: () => import( /* webpackChunkName: "PageDashboard" */'../page/PageDashboard.vue')
    },
    {
      path: '/add/payment/:category',
      name: "AddPaymentFromLink",
      component: () => import('@/components/AddPaymentForm')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "PageAbout" */'../page/PageAbout')
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
        path: "*",
        name: "NotFound",
        component: () => import( /* webpackChunkName: "Page404" */'../page/Page404')
    },
      ]
})

const getTitleTemplatesName = routeName => {
  return {
    'dashboard': "My personal Cost",
    'about': "About Page",
    'NotFound': 'Page Not Found'
  }[routeName]
}

router.afterEach((to)=>{
  document.title = getTitleTemplatesName(to.name)

})

export default router


