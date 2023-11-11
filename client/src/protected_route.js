import React from 'react'
import {Navigate} from 'react-router-dom'
import {UserAuth} from './context/AuthContext'

const protected_route = ({children}) => {
  const {user}=UserAuth()
  if(!user){
    return <Navigate to="/SignIn"/>
  }
  return (
    children
  )
}

export default protected_route