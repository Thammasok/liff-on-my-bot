import React from 'react'

const Index = () => {
  return (
    <section className="hero is-white">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-burger burger" data-target="navbarMenu" style={{ marginRight: 'auto', paddingLeft: '50%', paddingRight: '50%' }}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="navbar-item is-active">
                  Home
                </a>
                <a href="/" className="navbar-item">
                  My Room
                </a>
                <a href="/" className="navbar-item">
                  Finance
                </a>
                <a href="/" className="navbar-item">
                  Todo
                </a>
                <a href="/" className="navbar-item">
                  Calendar
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
 
export default Index