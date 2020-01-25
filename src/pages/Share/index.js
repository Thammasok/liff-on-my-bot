import React from 'react'


const Index = () => {
  document.getElementsByName("og:url")[0].content = 'https://eze-liff.herokuapp.com/share'
  document.getElementsByName("og:title")[0].content = 'ชีวิตคือการเดินทาง'
  document.getElementsByName("og:description")[0].content = 'อุปสรรคคือสิ่งที่ต้องพบเจอ อุปสรรคคือสิ่งที่ต้องพบเจอ'
  document.getElementsByName("og:image")[0].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  document.getElementsByName("twitter:title")[0].content = 'ชีวิตคือการเดินทาง'
  document.getElementsByName("twitter:description")[0].content = 'อุปสรรคคือสิ่งที่ต้องพบเจอ อุปสรรคคือสิ่งที่ต้องพบเจอ'
  document.getElementsByName("twitter:image")[0].content = 'https://images.unsplash.com/photo-1579653125967-df28fcdc2eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  return (
    <div className="container">
      <h1>Test</h1>
      <div>
        <img src="https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg?cs=srgb&dl=pexels-3527542.jpg&fm=jpg" alt="text" />
      </div>
    </div>
  )
}
 
export default Index
