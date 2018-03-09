import React,{ Component } from 'react'
import { Icon, Menu}  from 'antd'
import "./layout.less"

const SubMenu = Menu.SubMenu;
const Header = ({handleFold,logout,collapsed}) => {

    const handleClickMenu = (e) => {
        if(e.key === 'logout'){
            logout();
        };
    }

    return (
            <div className="header">
                <span className="fold" onClick={handleFold}><Icon type={collapsed?"menu-unfold":"menu-fold"} /></span>
                <div className="headerMenu">
                    <Menu
                    mode="horizontal"
                    onClick={handleClickMenu}
                    >
                        <SubMenu  key="sub1" title={<span><Icon type="user" /></span>}>
                            <Menu.Item key="logout">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
}


export default Header
