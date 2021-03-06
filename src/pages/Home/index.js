import React, { useContext } from 'react'
import {
  Home,
  Calendar,
  Mail,
  Sliders
} from 'react-feather'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import { UserContext } from './../../contexts/UserContext'

import Card from '../../components/Cards'

const Index = () => {
  const { userId, displayName, pictureUrl, statusMessage } = useContext(UserContext)
  document.getElementsByTagName('meta')[8].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  document.getElementsByTagName('meta')[14].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  return (
    <div className="container">
      <FacebookShareButton
        url="https://eze-liff.herokuapp.com/share"
        hashtag="#worldlifebalance"
      >
        <FacebookIcon size={40} round bgStyle={{ fill: 'black' }} />
      </FacebookShareButton>

      <TwitterShareButton
        url="https://eze-liff.herokuapp.com/share"
        title="คุณเป็นใครกันนะ"
        hashtags={['aday', 'worldlifebalance']}
      >
        <TwitterIcon size={40} round bgStyle={{ fill: 'black' }} />
      </TwitterShareButton>

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
      <p>{userId}</p>
      <p>{displayName}</p>
      <p>{pictureUrl}</p>
      <p>{statusMessage}</p>
    </div>
  )
}
 
export default Index
