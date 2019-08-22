import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
class QrCode extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      error: ''
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
  	this.setState({
      result: data,
    })
  }
  handleError(err){
    // console.error(err)
    this.setState({
    	error: err
    })
  }
  render(){
    const previewStyle = {
      height: 320,
      width: 320,
    }

    return (
      <div>
      	<QrReader
			facingMode="user"
			delay={this.state.delay}
			style={previewStyle}
			onError={this.handleError}
			onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
          {this.state.error}
      </div>
    )
  }
}

export default QrCode