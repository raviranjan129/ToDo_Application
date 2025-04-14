import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { SignupContainer } from './pages/signupContainer'
import { SigninContainer } from './pages/SigninContainer'
import Todo from './pages/Todo'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='users'>
          <Route path='signup' element={<SignupContainer/>}/>
          <Route path='signin' element={<SigninContainer/>}/>
        </Route>
        <Route path='todo' element={<Todo/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
