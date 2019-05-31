import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouterRender, MainRoutes, LoginRoute } from './config';
import { connect } from 'react-redux';
import { toJS } from '@/store/utils';
import { Actions as AC } from '@/views/Login/model';
import Layout from '../layout';

// {MainRoutes.map(r => RouterRender(r, this.props, '/login'))}

class RouteConfig extends React.Component {
  render() {
    const { Token } = this.props;
    return (
      <Layout>
        <Switch>
          {RouterRender(LoginRoute, { ...this.props, Token: !Token }, '/')}
          {MainRoutes.map(r => RouterRender(r, this.props, '/login'))}
          <Redirect to="/404" />
        </Switch>
      </Layout>
    );
  }
}

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
