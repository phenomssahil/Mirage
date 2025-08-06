"use client";
import { ThreeDMarquee } from "./3d-marquee";
import { motion } from 'framer-motion'
export function ThreeDMarqueeDemo() {
    const images = [

        "https://i.postimg.cc/q73jP6nP/cybercity.png",
        "https://i.postimg.cc/MT0tTk9t/download-2.png",
        "https://i.postimg.cc/02Xnr0Cg/download-3.png",
        " https://i.postimg.cc/d1TPS0t3/preview-5.webp",
        "https://i.postimg.cc/jj2rPXpz/preview-2.webp",
        "https://i.postimg.cc/mgb42RVp/preview-1.webp",
        "https://i.postimg.cc/N0nv4XtZ/preview-3.webp",
        " https://i.postimg.cc/bw3hZMBy/preview-4.webp",
        " https://i.postimg.cc/d1TPS0t3/preview-5.webp",
        "https://i.postimg.cc/x8DDrScR/preview-6.webp",
        "https://i.postimg.cc/jj2rPXpz/preview-2.webp",
        "https://i.postimg.cc/mgb42RVp/preview-1.webp",
        "https://i.postimg.cc/N0nv4XtZ/preview-3.webp",
        " https://i.postimg.cc/HsmDBdGW/preview-9.webp",
        " https://i.postimg.cc/bw3hZMBy/preview-4.webp",
        "https://i.postimg.cc/x805Ns7Q/sample-img.png",
        "https://i.postimg.cc/x8DDrScR/preview-6.webp",
        "https://i.postimg.cc/brxXpFnj/preview-7.webp",
        "https://i.postimg.cc/zDKYC3cP/preview-8.webp",
        "https://i.postimg.cc/gkK97QdV/preview-10.webp",
        "https://i.postimg.cc/fRHGzdVk/preview-11.webp",
        "https://i.postimg.cc/q73jP6nP/cybercity.png",
        " https://i.postimg.cc/d1TPS0t3/preview-5.webp",
        "https://i.postimg.cc/MT0tTk9t/download-2.png",
        "https://i.postimg.cc/02Xnr0Cg/download-3.png",
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
        "https://assets.aceternity.com/multi-step-loader.png",
        "https://assets.aceternity.com/vortex.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://assets.aceternity.com/world-map.webp",
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1 className="text-slate-200 text-4xl font-semibold text-center">Mirage's Image Gallery</h1>
            <div
                className="mx-auto my-10 h-fit max-w-8xl rounded-3xl bg-slate-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-black">
                <ThreeDMarquee images={images} />
            </div>
        </motion.div>
    );
}
