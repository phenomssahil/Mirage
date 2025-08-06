import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
const Description = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1 className='text-3xl sm:text-4xl text-white font font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
                <img src={assets.sampleImg} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div>
                    <h2 className='text-3xl text-white font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                    <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                    <p className='text-gray-600'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
                </div>
            </div>
            <motion.div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center mt-[150px] '
                initial={{ opacity: 0.2, y: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <div>
                    <h2 className='text-3xl text-white font-medium max-w-lg mb-4'>Generate Unique Image Styles With Text To Image</h2>
                    <p className='text-gray-600 mb-4'>Explore a world of creativity with Mirage's unique style options, designed to transform your images into captivating works of art. Whether you're looking to add a touch of anime, digital art, neon punk, cinematic, photographic, or simply enhance your photos, there's a style to suit every mood and theme. Feeling dramatic?</p>
                    <p className='text-gray-600'>The cinematic style adds a rich, movie-like flair to your images, perfect for creating striking visuals. For a futuristic and edgy feel, the neon punk style infuses vibrant, bold colors that make your creations stand out. Each style is meticulously crafted to elevate your photos, providing you with the flexibility to align your visuals with any aesthetic or purpose.</p>
                </div>
                <img src={assets.cybercity} alt="" className='w-80 xl:w-96 rounded-lg' />
            </motion.div>
        </motion.div>
    )
}

export default Description