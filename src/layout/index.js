import React from 'react';
import { Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { toJS } from '@/store/utils';
import { Thunks as TH } from '@/views/Login/model';
import './index.less';
const { Sider, Header, Content, Footer } = Layout;
class LayoutIndex extends React.Component {
  render() {
    const { children, Token, logout } = this.props;
    return (
      <div className="container">
        {Token ? (
          <Layout className="layout-box">
            <Sider>Sider</Sider>
            <Layout>
              <Header>
                <Button onClick={logout} />
              </Header>
              <Content>
                <div>{children}</div>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        ) : (
          <div>{children}</div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    Token: state.getIn(['login', 'Token']),
  }),
  {
    logout: TH.LogOut,
  }
)(toJS(LayoutIndex));
