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
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <a href="/room?zone=living" className="tag is-light">Living</a>
              <span className="tag is-warning">27 °C</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a href="/room?zone=bedroom" className="tag is-light">Bedroom</a>
              <span className="tag is-success">24 °C</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a href="/room?zone=bathroom" className="tag is-light">Bathroom</a>
              <span className="tag is-success">26 °C</span>
            </div>
          </div>
          
          <div className="control">
            <div className="tags has-addons">
              <a href="/room?zone=kitchen" className="tag is-light">Kitchen</a>
              <span className="tag is-warning">27 °C</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-6">
            <Card
              image="https://eze-line-bot.herokuapp.com/images/bear-rectangle.png"
              title="Analytics"
              desc="Show analytical results And summarize the results."
            />
          </div>
          <div className="column is-6">
            <Card
              image="https://eze-line-bot.herokuapp.com/images/kukkuk-rectangle.png"
              title="My Room"
              desc="IoT and Control console."
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <Card
              image="https://eze-line-bot.herokuapp.com/images/moo-rectangle.png"
              title="Finance"
              desc="Income, expenditure, financial goals and investment."
            />
          </div>
          <div className="column">
            <Card
              image="https://eze-line-bot.herokuapp.com/images/bee-rectangle.png"
              title="Todo"
              desc="What to do today?"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
          <Card
            image="https://eze-line-bot.herokuapp.com/images/bear-rectangle.png"
            title="Schedule appointments."
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