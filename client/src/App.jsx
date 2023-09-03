import React from "react"
import Landing from "./pages/landing"
import Signup from "./pages/Auth/Signup"
import Login from "./pages/Auth/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHome from "./pages/user/UserHome"
import CelebHome from "./pages/celeb/CelebHome"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
      <Route path={'/'} element={ <Landing />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/celebhome' element={<CelebHome/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
