import React, { createContext, useState, useEffect } from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import Notification from './../components/Shared/Notifications'

const liff = window.liff;

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const initialize = () => {
    liff.init(async (data) => {
      const profile = await liff.getProfile();
      
      if(profile.userId === 'Ud6cfdf63ea8a281ab4a9dbd3130f9b5a') {
        setUserId(profile.userId)
        setDisplayName(profile.displayName)
        setPictureUrl(profile.pictureUrl)
        setStatusMessage(profile.statusMessage)
      } else {
        liff.sendMessages([{
          type: 'text',
          text: "You cannot use this liff."
        }]).then(() => {
          liff.closeWindow();
        });
      }
    },
    err => {
      setUserId(1)
      setDisplayName('Temp')
      setPictureUrl('https://random.cat/view/1539')
      setStatusMessage('it\'s ok')
      console.log(err.message)
    }); 
  }

  useEffect(() => {
    initialize()
  })

  return (
    <UserContext.Provider value={{ userId, displayName, pictureUrl, statusMessage }}>
      <section>
        <Header />
        
        <Notification />

        <div style={{margin: '15px'}}>
          {props.children}
        </div>
        <Footer />
      </section>
      
    </UserContext.Provider>
  )
}
 
export default UserContextProvider;