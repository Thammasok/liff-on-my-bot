import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <section className="hero is-white">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="/img/logo-emoji.png" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    My Room
                  </a>
                  <a className="navbar-item">
                    Finance
                  </a>
                  <a className="navbar-item">
                    Todo
                  </a>
                  <a className="navbar-item">
                    Calendar
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Index