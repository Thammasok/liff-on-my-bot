import React, { Component } from 'react'

import Header from '../../Include/Header'

class Index extends Component {
  render() {    
    return (
      <section className="hero is-medium is-bold">
        <Header />
        { this.props.children }
      </section>
    )
  }
}

export default Index