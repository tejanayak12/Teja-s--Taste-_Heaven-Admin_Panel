import React from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo1} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
    )
}

export default NavBar


// 4:41:18 / 10:01:04