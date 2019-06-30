import React from 'react'
import Image from './../Image'
const Index = (props) => {
  return (
    <a href="/">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image
              src={props.image ? props.image : "https://bulma.io/images/placeholders/1280x960.png"} 
              alt={props.title ? props.title : ""} 
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {props.title === undefined ? (
                  "Link"
                ) : (
                  props.title
                )}
              </p>
              <p className="subtitle is-6">
                {props.desc === undefined ? (
                  "Keep Your Passion Alive."
                ) : (
                  props.desc
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
 
export default Index;