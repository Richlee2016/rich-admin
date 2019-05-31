import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { toJS } from '@/store/utils';
import { Thunks as TH } from '@/views/Login/model';
class Layout extends React.Component {
  render() {
    const { children, Token, logout } = this.props;
    return (
      <div>
        {Token ? (
          <>
            <Button onClick={logout}>quit</Button>
            <div>{children}</div>
          </>
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
)(toJS(Layout));
