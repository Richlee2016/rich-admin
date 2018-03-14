import React, { Component } from "react";
import { Menu, Icon } from "antd";
import profil from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;

const Menus = ({ collapsed, menus }) => {

  const handleSelect = e => {
    console.log(0);
  };
  const MenuJsx = menus =>
    menus.map(m => {
      if(m.navs){
        return (
          <SubMenu
            key={m.name}
            title={
              <span>
                <Icon type={m.icon} />
                <span>{m.title}</span>
              </span>
            }
          >
            {m.navs.map(n => (
              <Menu.Item key={n.href}>
                <Link to={n.href}>
                  <Icon type={n.icon} />
                  {n.title}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        )
      }else{
        return (
          <Menu.Item key={m.href}>
          <Link to={m.href}>
            <Icon type={m.icon} />
            {m.title}
          </Link>
          </Menu.Item>
        )
      }
    });
  return <div className="la-menu">
      <div className="la-icon">

      </div>
      <Menu 
      style={{ border: "none" }} 
      mode="inline" 
      inlineCollapsed={collapsed} 
      onSelect={handleSelect}
      theme={"dark"}>
        {MenuJsx(menus)}
      </Menu>
    </div>;
};

export default Menus;
