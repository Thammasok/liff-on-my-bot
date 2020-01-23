import React, { useContext } from 'react'
import {
  Home,
  Calendar,
  Mail,
  Sliders
} from 'react-feather'
import { Helmet } from 'react-helmet';
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

  return (
    <div className="container">
      <Helmet>
        <meta property="og:url" content="https://eze-liff.herokuapp.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ทดสอบ" />
        <meta property="og:description" content="ต่อยวัดพลังหมัดคัดเลือกห้องเรียน ติดตามตอนต่อๆไปได้ที่เพจแฟนซับนะครับ" />
        <meta property="og:image" content="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <FacebookShareButton
        url="https://eze-liff.herokuapp.com/"
        quote="คอมพิวเตอร์อันยอดเยี่ยม กับ 24 งวดแห่งการผ่อนชําระ"
        hashtag="#worldlifebalance"
      >
        <FacebookIcon size={40} round bgStyle={{ fill: 'black' }} />
      </FacebookShareButton>

      <TwitterShareButton
        url="https://eze-liff.herokuapp.com/"
        title="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
