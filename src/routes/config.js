import ayc from './async';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/** 路由配置 */

// 登陆路由
export const LoginRoute = {
  path: '/login',
  name: 'login',
  component: ayc(() => import('../views/Login/index')),
};

// 主路由
export const MainRoutes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: ayc(() => import('../views/Home/index')),
  },
  {
    path: '/404',
    name: '404',
    component: ayc(() => import('../views/Error/404')),
  },
  {
    path: '/403',
    name: '403',
    component: ayc(() => import('../views/Error/403')),
  },
  {
    path: '/movie',
    name: 'movie',
    exact: true,
    component: ayc(() => import('../views/Home/index')),
  },
  {
    path: '/movie/box',
    name: 'moviebox',
    component: ayc(() => import('../views/Home/index')),
  },
];

// 权限过滤
export const RoleRouterFilter = auth => {
  return MainRoutes;
};

// 路由反射
export const RouterRender = (r, { Token, ...props }, redirect) => {
  let ShowRoute = Token ? <r.component /> : <Redirect to={redirect} />;
  return (
    <Route
      key={r.path}
      path={r.path}
      exact={!!r.exact}
      render={() => ShowRoute}
    />
  );
};
