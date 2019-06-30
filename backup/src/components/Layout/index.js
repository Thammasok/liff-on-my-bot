import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {routes} from '../../routers'

import AppLayout  from './App'

const liff = window.liff;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName : '',
      userId : '',
      pictureUrl : '',
      statusMessage : ''
    };
    
    this.initialize = this.initialize.bind(this);
    // this.closeApp = this.closeApp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.initialize);
  }

  initialize() {
    liff.init(async (data) => {
      let profile = await liff.getProfile();

      if(profile.userId === 'Ud6cfdf63ea8a281ab4a9dbd3130f9b5a') {
        this.setState({
          displayName : profile.displayName,
          userId : profile.userId,
          pictureUrl : profile.pictureUrl,
          statusMessage : profile.statusMessage
        });
      } else {
        liff.sendMessages([{
          type: 'text',
          text: "You cannot use this liff."
        }]).then(() => {
          liff.closeWindow();
        });
      }
    }); 
  }

  render() {
    return (
      <AppLayout user={this.state}>
        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} data={route.pathMatch} />
          ))}
        </Switch>
      </AppLayout>
    )
  }
}

export default Index