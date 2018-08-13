import React, { Component } from 'react'


class Card extends Component {
  render() {   
    return (
      <a href="/">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
            <img 
              src={this.props.image !== undefined ? this.props.image : "https://bulma.io/images/placeholders/1280x960.png"} 
              alt={this.props.title !== undefined ? this.props.title : ""} 
            />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.props.title === undefined ? (
                    "Link"
                  ) : (
                    this.props.title
                  )}
                </p>
                <p className="subtitle is-6">
                  {this.props.desc === undefined ? (
                    "Keep Your Passion Alive."
                  ) : (
                    this.props.desc
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Card