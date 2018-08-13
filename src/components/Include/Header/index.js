import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <a href="/" className="btn btn-block" style={{marginRight: '5px'}}>Back</a>
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" tabindex="0">
              Menu <i class="fas fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item"><a href="/">Analytics</a></li>
              <li className="menu-item"><a href="/">My room</a></li>
              <li className="menu-item"><a href="/">Finance</a></li>
              <li className="menu-item"><a href="/">Todo</a></li>
              <li className="menu-item"><a href="/">Calendar</a></li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

export default Index