import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UserContextProvider from './../contexts/UserContext'
import { routes } from './../routes'

function Root() {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <Switch>
            {routes.map((route,index) => (
              <Route key={index} path={route.path} component={route.component} exact={route.exact} data={route.pathMatch} />
            ))}
          </Switch>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default Root
