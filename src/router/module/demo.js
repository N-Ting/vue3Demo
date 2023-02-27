export const protectionAcceptance = {
  path: '/protectionAcceptance',
  meta: { title: '案例', notLogin: true },
  component: () => import('@/views/ProtectionAcceptance/index.vue'),
}

export const demo = {
  path: '/demo',
  name: 'demo',
  meta: { title: '案例', notLogin: true },
  component: () => import('@/views/demo/index.vue'),
  redirect: '/application-information', //重定向路由
  children: [
    {
      path: '/application-information',
      name: 'application-information',
      meta: { title: '申请信息', notLogin: true },
      component: () => import('@/views/demo/components/applicationInformation/index.vue'),
    },
  ],
}
