import React from "react";
import LazyRoute from "lazy-route";
import { inject, observer } from "mobx-react";
import config from "@/config";
import { Route, Link, Switch } from "react-router-dom";
import RouterCom from '@/router'
import {Menus} from '@cop/Layout'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import "./App.less"

@inject("app")
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.app;
    this.state = {
      menuCollapsed:true
    }
  }

  render() {
    const {menuCollapsed} = this.state;
    return (
    <div className="container">
      <Layout>
        <Sider>
        <Menus collapsed={menuCollapsed} menus={config.menus} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <RouterCom />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>);
  }
}
