import React, { Component } from "react";
import { Header, Menus,Card } from "@/components/Layout";
import { inject, observer } from "mobx-react";
import config from "@/config";
// import RouterCom from "@/router"
import "./Index.less";
import { Switch } from "react-router-dom";

@inject("app")
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="page-box">
        // <RouterCom />
      </div>
    );
  }
}
