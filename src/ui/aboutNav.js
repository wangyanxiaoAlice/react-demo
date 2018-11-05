import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import "./nav.css"

const AboutNav = ({ match }) => (
  <nav className="context-nav">
    <NavLink to={`${match.path}`} exact activeClassName="active">关于我们</NavLink>
    <NavLink to={`${match.path}/business`} activeClassName="active">业务范围</NavLink>
     <NavLink to={`${match.path}/job`} activeClassName="active">人才招聘</NavLink>
    <NavLink to={`${match.path}/partner`} activeClassName="active">合作伙伴</NavLink>
   {/* <NavLink to={`${match.path}/add`} activeClassName="active">机构介绍</NavLink>
    <NavLink to={`${match.path}/add`} activeClassName="active">失信举报</NavLink> */}

  </nav>
)

export default withRouter(AboutNav)