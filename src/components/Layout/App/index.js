import React, { Component } from 'react'

import Header from '../../Include/Header'

class Index extends Component {
  render() {    
    return (
      <section>
        <Header /><br />

        { this.props.children }
      </section>
    )
  }
}

export default Index