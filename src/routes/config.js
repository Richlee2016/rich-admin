import ayc from './async'
/** 路由配置 */
export default [
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
  }
]
