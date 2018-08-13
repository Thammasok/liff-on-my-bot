import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div className="notification is-success">
        <button className="delete"></button>
        <strong>Washing</strong> finished.
      </div>
    );
  }
}

export default Index