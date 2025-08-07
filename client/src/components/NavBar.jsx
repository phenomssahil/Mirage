import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const NavBar = () => {
    const { user, setShowLogin, loadCreditsData, credit, logOut } = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'><img src={assets.logo2} className='w-18 sm:w-18 lg:w-18 mt-2' alt="logo" /></Link>
            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <button onClick={() => { navigate('/buy') }} className='flex items-center justify-center gap-2 px-4 sm:px-6 py-1.5 sm:py-3 hover:scale-105 transition-all duratiob-700  bg-[#D7EBFF] rounded-full text-[#4A4A4A]'>
                            <img className='w-5' src={assets.credit_star} />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
                        </button>
                        <p className='text-gray-200 max-sm:hidden pl-4'>Hi , {user.name}</p>
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 rounded-full drop-shadow' />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='bg-white flex items-center justify-center m-0 p-2 rounded-md border-0 text-sm'>
                                    <li className='flex items-center justify-center cursor-pointer'
                                        onClick={logOut}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p onClick={() => { navigate('/buy') }} className='cursor-pointer text-white'>Pricing</p>
                        <button className='bg-zinc-800 text-white py-2 sm:px-10 text-sm rounded-full' onClick={() => setShowLogin(true)}>Login</button>
                    </div>
                }
            </div>
        </div>


    )
}

export default NavBar