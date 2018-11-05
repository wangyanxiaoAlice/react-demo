import React from 'react'
import { Switch, Route } from 'react-router-dom'
 import  AboutNav from '../ui/aboutNav'



// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
// import AddUserPage from '../pages/AddUserPage'
// import UserProfilePage from '../pages/UserProfilePage'
import Index from '../pages/about/index'
import Business from '../pages/about/business'
import Job from '../pages/about/job'
import Partner from '../pages/about/partner'


const aboutSubMain = ({ match }) => (
  <div className="user-sub-layout">
    <div className="container sub-layout">
      <aside>
        <AboutNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={`${match.path}`}  exact component={Index} />
          {/* <Route path={`${match.path}/add`} exact component={Index} /> */}
          <Route path={`${match.path}/business`}  component={Business} />
          <Route path={`${match.path}/job`}  component={Job} />
          <Route path={`${match.path}/partner`}  component={Partner} />
        </Switch>
      </div>
      </div>
  </div>
)

export default aboutSubMain