import React, { useContext } from 'react';

import { UserContext } from './../../contexts/UserContext'

const Index = () => {
  const { userId, displayName, pictureUrl, statusMessage } = useContext(UserContext)

  return (
    <div>
      <h1>Home</h1>
      <p>{userId}</p>
      <p>{displayName}</p>
      <p>{pictureUrl}</p>
      <p>{statusMessage}</p>
    </div>
  )
}
 
export default Index
