import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Log In')
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if (state == 'Log In') {
                const { data } = await axios.post(backendUrl + '/api/user/login',
                    { email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }
            }
            else {
                const { data } = await axios.post(backendUrl + '/api/user/register',
                    { name, email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(data.message)
        }
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form className='relative bg-white p-10 rounded-xl text-slate-500'
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={onSubmitHandler}>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p>Welcome back! Please sign in to continue</p>

                {state !== 'Log In' && <div className='border border-slate-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.profile_icon} alt="" className='w-6 lg:w-6 sm:w-6' />
                    <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Full Name' required className='outline-none text-sm' />
                </div>}

                <div className='border border-slate-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.email_icon} alt="" className='w-4 lg:w-4 sm:w-4' />
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email Id' required className='outline-none text-sm' />
                </div>
                <div className='border border-slate-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.lock_icon} alt="" className='w-3 lg:w-3 sm:w-3' />
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required className='outline-none text-sm' />
                </div>
                <p className='text-sm text-blue-600 my-4 cursor-pointer'> Forgot Password</p>
                <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state == 'Log In' ? 'Log In' : 'Create Account'}</button>
                {
                    state == 'Log In' ?
                        <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
                        :
                        <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Log In')}>Log In</span></p>
                }
                <img src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' onClick={() => setShowLogin(false)} />
            </motion.form>
        </div>
    )
}

export default Login