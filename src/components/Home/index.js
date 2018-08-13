import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLocalStorage } from '../../actions/example'

import Card from './card'

class Index extends Component {
  constructor(props) {
    super(props)
    this.testCall()
  }

  testCall(){
    // this.props.dispatch(addLocalStorage("Thammasok"))
    this.props.dispatch(getLocalStorage())
  }

  render() {
    return (
      <div className="container">
        <div class="columns">
          <div class="column col-6">
            <Card
              icon="https://image.flaticon.com/icons/svg/1055/1055646.svg"
              title="Analytics"
            />
          </div>
          <div class="column col-6">
            <Card
              icon="https://image.flaticon.com/icons/svg/1055/1055648.svg"
              title="My Room"
            />
          </div>
        </div>
        <div class="columns" style={{marginTop: '10px'}}>
          <div class="column col-6">
            <Card
              icon="https://image.flaticon.com/icons/svg/1055/1055659.svg"
              title="Finance"
            />
          </div>
          <div class="column col-6">
            <Card
              icon="https://image.flaticon.com/icons/svg/1055/1055680.svg"
              title="Todo"
            />
          </div>
        </div>
        <div class="columns" style={{marginTop: '10px'}}>
          <div class="column col-6">
          <Card
            icon="https://image.flaticon.com/icons/svg/1055/1055650.svg"
            title="Calendar"
          />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

Index.propTypes = {
  messages: PropTypes.object
}

export default connect(mapStateToProps)(Index)