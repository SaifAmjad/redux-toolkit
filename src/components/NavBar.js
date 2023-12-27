import React from 'react'
import {
  Link
} from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <button><Link to='/'>Dragons</Link></button>
      <button><Link to='/missions'>Missions</Link></button>
      <button><Link to='/myprofile'>My Profile</Link></button>
      
    </div>
  )
}

export default NavBar
