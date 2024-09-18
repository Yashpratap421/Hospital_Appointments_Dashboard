import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Doctors from './Pages/Doctors.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Myprofile from './Pages/Myprofile.jsx'
import MyAppoinetment from './Pages/MyAppoinetment.jsx'
import Appointment from './Pages/Appointment.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
    <div className="px-20">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:speciality' element={<Doctors/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/my-profile'  element={<Myprofile/>}/>
      <Route path='/my-appointment'  element={<MyAppoinetment/>}/>
      <Route path='/appointment/:docId'  element={<Appointment/>}/>
    </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App