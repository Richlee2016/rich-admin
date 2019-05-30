import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RoleRouterFilter, MainRoutes } from './config';
import { connect } from 'react-redux';
import { toJS } from '@/store/utils';
import { Actions as AC } from '@/views/Login/model';
// 解析地址数据
// const getRouterData = (location, match) => {
//   let query = /\?(.+)/.test(location.search) ? qs.parse(RegExp.$1) : {}
//   return {
//     params: match.params,
//     query
//   }
// }

// 未登录 --> 登录界面
const ToLoginPage = pathname => {
  const login = MainRoutes.find(r => r.path === '/login');
  return (
    <Switch>
      <Route path="/login" render={() => <login.render />} />
      {pathname === '/login' ? null : <Redirect to="/login" />}
    </Switch>
  );
};

// 已登录 判断权限
const AuthorizedPage = (auth, pathname, routes, addRoutes) => {
  let currentRoutes = routes;
  if (routes.length === 0) {
    currentRoutes = RoleRouterFilter(auth);
    addRoutes(currentRoutes);
    const home = MainRoutes.find(r => r.path === '/');
    return (
      <Switch>
        <Route path="/" exact render={() => <home.render />} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        {currentRoutes.map(r => (
          <Route
            key={r.path}
            path={r.path}
            exact={!!r.exact}
            render={() => <r.render />}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    );
  }
};

const RouteConfig = props => {
  const {
    router: {
      location: { pathname },
    },
    Token,
    Routes,
    Role,
    addRoutes,
  } = props;
  if (!Token) {
    return ToLoginPage(pathname);
  } else {
    return AuthorizedPage(Role, pathname, Routes, addRoutes);
  }
};

export default connect(
  state => ({
    router: state.get('router'),
    Token: state.getIn(['login', 'Token']),
    Routes: state.getIn(['login', 'Routes']),
    Role: state.getIn(['login', 'User', 'role']),
  }),
  {
    addRoutes: AC.addRoutes,
  }
)(toJS(RouteConfig));
