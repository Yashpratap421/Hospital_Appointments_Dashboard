import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets-frontend/assets';

function Navbar() {
    const navigate = useNavigate()
    
    const [showMenu, setshoeMenu] = useState();
    const [token , setToken]= useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border border-b-emerald-900  px-4'>
        <img className='w-48' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-8 font-medium'>
          <NavLink to='/'>
            <li  className='py-1'>Home
                <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden'/>
            </li>
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS
                <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden'/>
            </li>
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1'>ABOUT
                <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden'/>
            </li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>CONTACT
                <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden'/>
            </li>
          </NavLink>
        </ul>
    <div className="flex items-center justify-center mr-3">
      {
        (token) ? <div className='flex items-center gap-2 cursor-pointer group relative '>
          <img className='w-12 rounded-full ' src={assets.profile_pic} alt="" />
          <div className="absolute top-5 right-0 pt-12 text-base font-mono z-20 hidden group-hover:block">
            <div className="px-2 py-2 flex flex-col gap-2 text-nowrap border border-gray-300 bg-white rounded-xl">
              <p onClick={()=>{navigate('my-profile')}} className='py-1 text-zinc-600 font-semibold'>My Profile</p>
              <p onClick={()=>{navigate('my-appointment')}} className='py-1 text-zinc-600 font-semibold'>My Appointments</p>
              <p onClick={()=>{ setToken(false)}} className='py-1 text-zinc-600 font-semibold'>Logout</p>
            </div>
            
          </div>

        </div>
         :
         <button onClick={()=>{navigate('/login')}} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
      }
      <img onClick={()=>setshoeMenu(true)} className='w-6 ml-4 md:hidden' src={assets.menu_icon} alt="" />
      {
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
          <div className="flex items-center justify-between px-5 py-6 ">
            <img className='w-36' src={assets.logo} alt="" /><img className='w-7' onClick={()=>setshoeMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink  onClick={()=>setshoeMenu(false)} to='/'>Home</NavLink>
            <NavLink onClick={()=>setshoeMenu(false)} to='/doctors'>ALL DOCTORS</NavLink>
            <NavLink onClick={()=>setshoeMenu(false)} to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setshoeMenu(false)} to='/contact'>CONTACT</NavLink>
          </ul>
        </div>
      }

    </div>
   
    </div>

  )
}

export default Navbar