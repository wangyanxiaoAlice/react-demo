import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import "./nav.css"

const UserNav = ({ match }) => (
  <nav className="context-nav">
    <NavLink to={`${match.path}`} exact activeClassName="active">信用承诺</NavLink>
    <NavLink to={`${match.path}/add`} activeClassName="active">信用评价</NavLink>
    <NavLink to={`${match.path}/selfDiscipline`} activeClassName="active">自律监督</NavLink>
    <NavLink to={`${match.path}/regulations`} activeClassName="active">政策法规</NavLink>
    <NavLink to={`${match.path}/introduction`} activeClassName="active">机构介绍</NavLink>
    <NavLink to={`${match.path}/failure`} activeClassName="active">失信举报</NavLink>

  </nav>
)

export default withRouter(UserNav)

