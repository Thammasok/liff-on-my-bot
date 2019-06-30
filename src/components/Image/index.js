import React from 'react'
import ReactImageFallback from "react-image-fallback"

const Index = (props) => {
  return (
    <ReactImageFallback
      src={props.src}
      fallbackImage="https://bulma.io/images/placeholders/1280x960.png"
      initialImage="https://bulma.io/images/placeholders/1280x960.png"
      alt={props.alt}
      className={props.className} />
  )
}
 
export default Index