import React, { Component } from 'react'
import { Menu} from 'antd'
import {NavLink} from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu    

export default class NavLeft extends Component{
    UNSAFE_componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu =(data)=>{
        return data.map(item =>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img src={require("./imgs/logo-ant.svg")} alt="首页图标"/>
                    <h1>imooc MS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}