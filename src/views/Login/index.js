import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toJS } from '@/store/utils'
import { Actions as AC, Thunks as TH } from './model'
import { Button } from 'antd'
class Index extends Component {
  render () {
    const { login, logout } = this.props
    return (
      <div>
        <Button type='primary' onClick={login}>登录</Button><br />
        <Button type='primary' onClick={logout}>退出</Button>
      </div>
    )
  }
}

export default connect(
  state => ({
    num: state.getIn(['login', 'num'])
  }),
  {
    login: TH.FetchToken,
    logout: AC.logout
  }
)(toJS(Index))
