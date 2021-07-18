import Vue from 'vue'
import VueRouter from 'vue-router'
import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'
import AddPaymentForm from "@/components/AddPaymentForm";

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
      component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/add/payment/:category',
      name: "AddPaymentFromLink",
      component: AddPaymentForm
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
        path: "*",
        name: "NotFound",
        component: Page404
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


