import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/dtcommon/Dthome'
import Dashboard from '@/components/dtdashboard/Dtdashboard.vue'
import Inbox from '@/components/dtinbox/Dtinbox.vue'
import Charts from '@/components/dtcharts/Dtcharts.vue'
import Ui from '@/components/dtui/Dtui.vue'
import Table from '@/components/dttable/Dttable.vue'
import Forms from '@/components/dtforms/Dtforms.vue'
import Quxiantu from '@/components/dtdashboard/Dtquxiantu.vue'
import Yonghuxinxi from '@/components/dtformslist/Dtyonghuxinxi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/dashboard'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/quxiantu',
          component: Quxiantu
        },
        {
          path: '/inbox',
          component: Inbox
        },
        {
          path: '/charts',
          component: Charts
        },
        {
          path: '/ui',
          component: Ui
        },
        {
          path: '/table',
          component: Table
        },
        {
          path: '/forms',
          component: Forms
        },
        {
          path: '/yonghuxinxi',
          component: Yonghuxinxi
        }
      ]
    }
  ]
})
