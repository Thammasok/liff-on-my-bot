import React, { Component } from 'react'

import Header from '../../Include/Header'
import Footer from '../../Include/Footer'
import Notification from '../../Other/Notification'

class Index extends Component {
  render() {    
    return (
      <section>
        <Header />
        
        <Notification />

        <div style={{margin: '15px'}}>
          { this.props.children }
        </div>
        <Footer />
      </section>
    )
  }
}

export default Index