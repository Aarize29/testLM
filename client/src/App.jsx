import React from "react"
import Landing from "./pages/landing"
import Signup from "./pages/Auth/Signup"
import Login from "./pages/Auth/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserHome from "./pages/user/UserHome"
import CelebHome from "./pages/celeb/CelebHome"
import UserProfile from "./pages/user/UserProfile"
import CelebProfile from "./pages/celeb/CelebProfile"
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
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/celebprofile' element={<CelebProfile/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
