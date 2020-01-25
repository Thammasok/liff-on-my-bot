import React from 'react'
import Helmet from 'react-helmet'

// link เฉพาะ character เลย
const Index = () => {
  document.getElementsByTagName('meta')[4].content = 'https://eze-liff.herokuapp.com/share'
  document.getElementsByTagName('meta')[6].content = 'ชีวิตคือการเดินทาง'
  document.getElementsByTagName('meta')[7].content = 'อุปสรรคคือสิ่งที่ต้องพบเจอ อุปสรรคคือสิ่งที่ต้องพบเจอ'
  document.getElementsByTagName('meta')[8].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  // document.getElementsByTagName('meta')[12].content = 'ชีวิตคือการเดินทาง'
  // document.getElementsByTagName('meta')[13].content = 'อุปสรรคคือสิ่งที่ต้องพบเจอ อุปสรรคคือสิ่งที่ต้องพบเจอ'
  // document.getElementsByTagName('meta')[14].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  return (
    <div className="container">
      <Helmet>
        {/* <meta property="og:url" content="https://eze-liff.herokuapp.com/share" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ชีวิตคือการเดินทาง" />
        <meta property="og:description" content="อุปสรรคคือสิ่งที่ต้องพบเจอ ทำมานานแล้วยังไม่ได้สักทั" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        */}
        {/*
        
        */}
        <meta name="twitter:title" content="ชีวิตคือการเดินทาง" />
        <meta name="twitter:description" content="อุปสรรคคือสิ่งที่ต้องพบเจอ ทำมานานแล้วยังไม่ได้สักทั" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </Helmet>
      <h1>Test</h1>
      <div>
        <img src="https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg?cs=srgb&dl=pexels-3527542.jpg&fm=jpg" alt="text" />
      </div>
    </div>
  )
}
 
export default Index
