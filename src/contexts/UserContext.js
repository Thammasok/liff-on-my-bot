import React, { createContext, useState, useEffect } from 'react'

const liff = window.liff;

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState('')
  const [pictureUrl, setPictureUrl] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const initialize = () => {
    // setUserId(1)
    // setDisplayName('thammasok')
    // setPictureUrl('12345')
    // setStatusMessage('it\'s ok')

    // console.log('ok')
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
      console.log(err)
    }); 
  }

  useEffect(() => {
    initialize()
  })

  return (
    <UserContext.Provider value={{ userId, displayName, pictureUrl, statusMessage }}>
      {props.children}
    </UserContext.Provider>
  )
}
 
export default UserContextProvider;