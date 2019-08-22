import React, { Component } from 'react'
import QrReader from '@s2b/react-qr-scanner'
 
class QrCode extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
  	if(!data.src) {
  		this.setState({
	      result: data,
	    })
  	} else {
  		this.setState({
	      result: 'Scaning...',
	    })
  	}
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 320,
      width: 320,
    }

    return (
      <div>
      	<QrReader
			facingMode="rear"
			delay={this.state.delay}
			style={previewStyle}
			onError={this.handleError}
			onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QrCode