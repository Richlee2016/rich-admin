import ayc from './async'
/** 路由配置 */

// 主路由
export const MainRoutes = [
  {
    path: '/',
    exact: true,
    name: 'home',
    render: ayc(() => import('../views/Home/index'))
  },
  {
    path: '/login',
    name: 'login',
    render: ayc(() => import('../views/Login/index'))
  },
  {
    path: '/404',
    name: '404',
    render: ayc(() => import('../views/Error/404'))
  },
  {
    path: '/403',
    name: '403',
    render: ayc(() => import('../views/Error/403'))
  }
]

export const RoleRouterFilter = (auth) => {
  return MainRoutes
}
