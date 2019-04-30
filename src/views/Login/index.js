import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toJS } from '@/store/utils'
import { Actions as AC, Thunks as TH } from './model'
class Index extends Component {
  render () {
    const { add, num, Go, AsyncAdd } = this.props
    return (
      <div>
        <span>{num}</span>
        <button onClick={add}>+++</button>
        <button onClick={Go}>到首页</button>
        <button onClick={AsyncAdd}>来啊</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    num: state.getIn(['login', 'num'])
  }),
  {
    add: AC.add,
    Go: TH.GoIndex,
    AsyncAdd: TH.AsyncAdd
  }
)(toJS(Index))
