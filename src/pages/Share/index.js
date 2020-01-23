import React from 'react'
import { Helmet } from 'react-helmet';


const Index = () => {
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

      <h1>Test</h1>
    </div>
  )
}
 
export default Index
