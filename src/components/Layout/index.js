import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {routes} from '../../routers'

import AppLayout  from './App'
import FullLayout from './Full'
import Liff from './Liff'

class Index extends Component {
  render() {
    return (
      this.props.layout === 'app' ? (
        <AppLayout>
          <Liff />

          <Switch>
            {routes.map((route,index) => (
              <Route key={index} path={route.path} component={route.component} exact={route.exact} data={route.pathMatch} />
            ))}
            {/* <Route component={NotFound}/> */}
          </Switch>
        </AppLayout>
      ) : (
        <FullLayout>
          <Liff />
          
          <Switch>
            {routes.map((route,index) => (
              <Route key={index} path={route.path} component={route.component} exact={route.exact} data={route.pathMatch} />
            ))}
          </Switch>
        </FullLayout>
      )
    )
  }
}

export default Index