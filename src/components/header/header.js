import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import './header.css'

const Header = () => (
    <header className="header">
        <div className="header-top">
            <div className="top-center">
                <div>
                    <span>Hi欢迎来到全国产权行业信息化综合服务平台</span>
                    {/* <span className="entry"><NavLink>登录</NavLink>|<NavLink>注册</NavLink></span> */}
                </div>
                <div className="top-center-right">
                    <span>小程序</span>
                    <span>公众号</span>
                    <span>APP下载</span>
                </div>
            </div>
        </div>
        <div className="header-center container">
            <div className="logo">
                <img src={logo} alt='' width="400px;" />
            </div>
            <div className="search-box">
                <input
                    type="text"
                    className="search-txt"
                    placeholder="项目可多关键词搜索，关键词用空格分隔" />
                <input
                    type="button"
                    value="搜索"
                    className="search-btn" />
            </div>
            <div className="webMap">
                产权地图
                    </div>
        </div>
        <div className="nav">
            <nav className="container">
                <NavLink to="/app" exact activeClassName="active">首页</NavLink>
                <NavLink to="/app/list" activeClassName="active">项目中心</NavLink>
                <NavLink to="/app/data" activeClassName="active">行业大数据</NavLink>
                <NavLink to="/app/recommend" activeClassName="active">推荐项目</NavLink>
                <NavLink to="/app/selfRegulated" activeClassName="active">行业自律</NavLink>
                <NavLink to="/app/about" activeClassName="active">关于我们</NavLink>
            </nav>
        </div>
    </header>
)

export default Header