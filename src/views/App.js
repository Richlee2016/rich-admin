import React from "react";
import LazyRoute from "lazy-route";
import { inject, observer } from "mobx-react";
import "./App.less"
import { Layout } from 'antd';
import { Route, Link, Switch } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
@inject("app")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
  }
  render() {
    return (
    <div className="container">
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
          <Route
            path="/movie/home"
            render={props => (
              <LazyRoute {...props} component={import("@/views/Movie/home")} />
            )}
          />
          <Route
            path="/movie/log"
            render={props => (
              <LazyRoute {...props} component={import("@/views/Movie/log")} />
            )}
          />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>);
  }
}
