import React from 'react'
import { Helmet } from 'react-helmet';


const Index = () => {
  return (
    <div className="container">
      <Helmet>
        <meta property="og:url" content="https://eze-liff.herokuapp.com/" />
        <meta property="fb:app_id" content="1552358151700561" /> 
        <meta property="og:type" content="website" /> 
        <meta property="og:title" content="ทดสอบ" />
        <meta property="og:description" content="ต่อยวัดพลังหมัดคัดเลือกห้องเรียน ติดตามตอนต่อๆไปได้ที่เพจแฟนซับนะครับ" />
        <meta property="og:image" content="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <meta property="og:image:secure_url" content="https://images.unsplash.com/photo-1579619272436-7bf4271f0bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1>Test</h1>
      <div>
        <img src="https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg?cs=srgb&dl=pexels-3527542.jpg&fm=jpg" alt="text" />
      </div>
    </div>
  )
}
 
export default Index
