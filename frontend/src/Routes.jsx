import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SignupContainer } from './components/auth/SignupContainer'
import Home from './pages/Home'
import { SigninContainer } from './pages/SigninContainer'

const AppRoutes = () => {
  return (
    <Routes>
       <Route path='/home' element={<Home/>}/>
        <Route path='/users/signup' element={<SignupContainer/>}/>
        <Route path='/users/signin' element={<SigninContainer/>}/>
    </Routes>
  )
}


export default AppRoutes
