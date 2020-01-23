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
        <meta property="fb:app_id" content="1552358151700561" />
        <meta property="og:url" content="https://eze-liff.herokuapp.com/share/share" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="คุณเป็นใคร ในโลก (ไร้) บาลานซ์" />
        <meta property="og:description" content="asdasdasdada" />
        <meta property="og:image" content="https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg?cs=srgb&dl=pexels-3527542.jpg&fm=jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" data-react-helmet="true" />
        <meta name="twitter:creator" content="" data-react-helmet="true" />
        <meta name="twitter:title" content="ฟังเพลง Thailand Top 100 - ชาร์ตเพลงฮิต 2020 | JOOX" />
        <meta name="twitter:description" content="ฟังเพลงล่าสุดบนชาร์ตเพลง Thailand Top 100 บน JOOX รักได้ป่าว ของ Gavin D" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg?cs=srgb&dl=pexels-3527542.jpg&fm=jpg" />
      </Helmet>

      <FacebookShareButton
        url="https://eze-liff.herokuapp.com/share"
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
