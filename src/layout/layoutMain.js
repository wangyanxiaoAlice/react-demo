import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import Index from '../pages/index/index'
import ProjectList from '../pages/lists/lists'
import IndustyBigData from '../pages/big-data/index'
import Recommend from '../pages/recommend/index'
import News from '../pages/news/index'

// Sub Layouts
import SubMain from './subMain'
import AboutSubMain from './aboutSubMain'

const LayoutMain = ({ match }) => (
  <div className="primary-layout">
    <Header />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={Index} />
        <Route path={`${match.path}/list`} component={ProjectList} />
        <Route path={`${match.path}/data`} component={IndustyBigData} />
        <Route path={`${match.path}/recommend`} component={Recommend} />
        <Route path={`${match.path}/selfRegulated`} component={SubMain} />
        <Route path={`${match.path}/about`} component={AboutSubMain} />
        <Route to={`${match.url}/news/:id`} component={News}/>
      </Switch> 
    </main>
    <Footer />
  </div>
)

export default LayoutMain