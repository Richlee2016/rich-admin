import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { Row, Col } from "antd";
import "./Index.less";

@inject("user")
@observer
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.user;
  }

  componentDidMount() {
    this.store.fetchUsers();
  }

  render() {
    const { user } = this.store;
    const arrUser = toJS(user);
    console.log(arrUser);
    const userOne = arrUser.map(o => (
      <Col span={6} key={o.openid}>
        <ul className="user-o">
          <li><img src={o.qqInfo.figureurl} /></li>
          <li>
            <p>{o.qqInfo.nickname}</p>
            <span>{o.qqInfo.province}{o.city}</span>
            <label>{o.qqInfo.gender}</label>
          </li>
        </ul>
      </Col>
    ));
    return (
      <div className="user-box">
        <Row>{userOne}</Row>
      </div>
    );
  }
}
