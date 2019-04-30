import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './config'
import { connect } from 'react-redux'
import { toJS } from '@/store/utils'
// 解析地址数据
// const getRouterData = (location, match) => {
//   let query = /\?(.+)/.test(location.search) ? qs.parse(RegExp.$1) : {}
//   return {
//     params: match.params,
//     query
//   }
// }

const RouteWithSubRoutes = (r) => (
  <Route path={r.path} exact={!!r.exact} render={() => <r.render />} />
)
const RouteConfig = (props) => {
  const { router: { location }, Token } = props
  const login = routes.find(r => r.path === '/login')
  if (!Token) {
    console.log(111)
    return <Route path='/login' render={() => <login.render />} />
  } else {
    return (
      <Switch>
        {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
      </Switch>
    )
  }
}

export default connect(
  state => ({
    router: state.get('router'),
    Token: state.getIn(['login', 'Token'])
  }),
  {}
)(toJS(RouteConfig))
