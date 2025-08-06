import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { ThreeDMarqueeDemo } from './Gallery'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const onClickHandler = () => {
        if (!user) {
            setShowLogin(true)
        } else {
            window.location.href = '/result'
        }
    }
    const navigate = useNavigate();
    return (
        <motion.div className='flex flex-col justify-center items-center gap-5 text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <motion.div className='flex bg-slate-400 gap-2 px-6 py-1 rounded-full'
                initial={{ opacity: 0.2, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                <p className=''>Best text to image generator</p>
                <img src={assets.rating_star} />
            </motion.div>
            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-500'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}>
                image</span>, in seconds.</motion.h1>
            <motion.p className='text-center max-w-xl text-slate-400 mx-auto mt-5'
                initial={{ opacity: 0.2, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}>
                Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>

            <motion.button className='sm:text-lg bg-black text-white flex text-center w-auto mt-8 px-12 py-2.5 items-center gap-2 rounded-full'
                onClick={onClickHandler}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>Generate Images
                <img src={assets.star_group} className='h-6' />
            </motion.button>

            <motion.div className='flex flex-wrap justify-center mt-16 gap-5'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}>
                {Array(6).fill('').map((item, index) => (
                    <motion.img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                        src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                        alt="" key={index} width={70}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.55 }} />
                ))}
            </motion.div>
            <motion.p className='mt-1 text-slate-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}>Generated images from Mirage</motion.p>
            <motion.button className='sm:text-lg bg-black text-white flex text-center w-auto mt-10 px-12 py-2.5 items-center gap-2 rounded-full'
                onClick={() => navigate('/gallery')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>Explore Mirage's Gallery 🪄 </motion.button>
        </motion.div>
    )
}

export default Header