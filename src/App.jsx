import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Booking from './Booking'
import MoviesState from './context/MoviesState'
import Theatres from './Theatres'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
function App() {
  return (
   <MoviesState>
     <Router>
        <div>
         <Navbar/>
         <div className="container">
            <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/booking" exact element={<Booking/>}/>
            <Route path="/booking/:selectedCity" exact element={<Theatres/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/signup" exact element={<Signup/>}/>
            <Route path="profile" exact element={<Profile/>}/>
            </Routes>
         </div>
      </div>
     </Router>
   </MoviesState>
  )
}
export default App