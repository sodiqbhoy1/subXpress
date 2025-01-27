import React, { useState } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate a logged-in user
  return (
    <div>



<Routes>
  <Route path='/' element={<Home/>} />
  <Route path="/dashboard/*" element={isLoggedIn ? <Dashboard /> : <Signin />} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/signin' element={<Signin/>} />
  <Route path='/signup' element={<Signup/>} />

</Routes>

    </div>
  )
}

export default App
