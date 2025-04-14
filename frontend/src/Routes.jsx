import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SignupContainer } from './components/auth/SignupContainer'
import Home from './pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/users/signup' element={<SignupContainer/>}/>
    </Routes>
  )
}

export default AppRoutes
