import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserNav from '../ui/nav'


// Sub Layouts
// import BrowseUsersPage from '../pages/BrowseUsersPage'
// import AddUserPage from '../pages/AddUserPage'
// import UserProfilePage from '../pages/UserProfilePage'
import SelfRegulated from '../pages/self-regulated/index'
import CreditEvaluation from '../pages/self-regulated/credit-evaluation'
import selfDiscipline from '../pages/self-regulated/index2'
import Regulations from '../pages/self-regulated/regulations'
import Failure from '../pages/self-regulated/failure'
import Introduction from '../pages/self-regulated/introduction'


const subLayout = ({ match }) => (
  <div className="user-sub-layout">
    <div className="container sub-layout">
      <aside>
        <UserNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={match.path} exact component={SelfRegulated} />
          {/* <Route path={`${match.path}/add`} exact component={Index} /> */}
          <Route path={`${match.path}/add`} component={CreditEvaluation} />
          <Route path={`${match.path}/selfDiscipline`} component={selfDiscipline} />
          <Route path={`${match.path}/regulations`} component={Regulations} />
          <Route path={`${match.path}/introduction`} component={Introduction} />
          <Route path={`${match.path}/failure`} component={Failure} />

        </Switch>
      </div>
    </div>
  </div>
)

export default subLayout

