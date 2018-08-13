import React, { Component } from 'react'


class Card extends Component {
  render() {   
    return (
      <a href="/">
        <div className="card">
          <div className="card-body">
            {this.props.icon === undefined ? (
              null
            ) : (
              <img src={this.props.icon} alt="icon" />
            )}
          </div>
          <div class="card-footer text-center">
            {this.props.title === undefined ? (
              <div class="card-title h5">Link</div>
            ) : (
              <div class="card-title h5">{this.props.title}</div>
            )}
            
          </div>
        </div>
      </a>
    )
  }
}

export default Card