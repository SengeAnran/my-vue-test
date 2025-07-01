export const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: '首页',
        components: {
          default:() => import('@/pages/home.vue'),
          nav:() => import('@/pages/nav.vue')
        },
      },
      // {
      //   path: 'about',
      //   name: '关于',
      //   component: () => import('../pages/about.vue'),
      // },
      {
        path: 'DataAlignment',
        name: '数据对齐',
        component: () => import('../pages/DataAlignment/index.vue'),
      },
      {
        path: 'DataHandling',
        name: '数据处理',
        component: () => import('../pages/DataHandling/index.vue'),
      },
      {
        path: 'DataClause',
        name: '数据分句',
        component: () => import('../pages/DataClause/index.vue'),
      },
      {
        path: 'SmartMeeting',
        name: '智能会议',
        component: () => import('../pages/SmartMeeting/index.vue'),
      },
      {
        path: 'IntelligentErrorCorrection',
        name: '智能纠错',
        component: () => import('../pages/IntelligentErrorCorrection/index.vue'),
      },
      {
        path: 'user(/key)?/:id/:username',
        name: '用户',
        meta: {
          id: 12,
        },
        component: () => import('@/pages/user.vue'),
      },
      {
        path: 'echarts',
        name: '图表',
        meta: {
          id: 14,
        },
        component: () => import('@/pages/Echart/index.vue'),
      },
      // {
      //   path: '',
      //   name: '空',
      //   meta: {
      //     id: 14,
      //   },
      //   component: () => import('@/pages/about.vue'),
      // },
      {
        path: 'vuex',
        name: '状态管理',
        component: () => import('@/pages/Vuex/index.vue'),
      },
      {
        path: 'quill',
        name: '富文本',
        component: () => import('@/pages/vueQuill/index.vue'),
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404.vue'),
  },
]
;
