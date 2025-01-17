"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue, useTransform, animate } from 'framer-motion';
import headerData from './header.json';
import { titleVariants, imageVariants, sentenceVariants } from './animation';

const Header: React.FC = () => {
    const { title, images, sentences } = headerData;
    const { scrollYProgress } = useScroll();
    const backgroundPosition = useMotionValue(0);
    const sentencesRef = useRef(null);

    const gradientTextAnimation = useTransform(
        backgroundPosition,
        [0, 1],
        ["0% center", "75% center"]
    );

    useEffect(() => {
        const animation = animate(backgroundPosition, 1, {
            duration: 3,
            ease: [0.33, 1, 0.68, 1],
            repeat: Infinity,
            repeatType: "reverse"
        });

        return () => animation.stop();
    }, [backgroundPosition]);

     const imagePositions = [
        { bottom: '0%', right: '60%', width: '100%' },     // iPad
        { top: '10%', right: '60%', width: '35%' },   // AirPods
        { top: '0%', right: '25%', width: '50%' },   // iPhone
        { top: '10%', right: '-5%', width: '50%' },    // Apple Watch
        { bottom: '5%', right: '-35%', width: '80%' }, // Apple TV Remote
        { bottom: '0%', left: '25%', width: '50%' }  // HomePod
    ];
    
    const responsiveImagePositions = [
        { bottom: '-85%', right: '70%', width: '100%' },     // iPad
        { top: '5%', right: '70%', width: '15%' },   // AirPods
        { bottom: '75%', right: '33%', width: '35%' },   // iPhone
        { top: '5%', right: '5%', width: '20%' },    // Apple Watch
        { bottom: '-20%', right: '0%', width: '30%' }, // Apple TV Remote
        { bottom: '-30%', left: '35%', width: '30%' }  // HomePod
    ];

    return (
        <div className="overflow-hidden">
        <div className="mb-[20%] relative bg-white">
            <div className="h-screen flex flex-col items-center justify-center">
                <motion.h1
                    className="text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-extrabold bg-clip-text text-transparent z-10"
                    style={{
                        backgroundImage: "linear-gradient(121deg, #FE0576 24%, #EA12B6 40%, #38CBFF 60%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: 'text',
                        backgroundPosition: gradientTextAnimation,
                    }}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                >
                    {title}
                </motion.h1>

                <div className="absolute inset-0">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={`/Header/${image}`}
                            alt={image}
                            className="absolute object-contain"
                             style={
                                 
                                  window.innerWidth < 768 ? imagePositions[index] : responsiveImagePositions[index]
                                
                              }
                            variants={imageVariants[index]}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: index * 0.2 }} />
                    ))}
                </div>
            </div>
        </div>
        <div className="relative">
                <section ref={sentencesRef} className="min-h-screen flex flex-col items-center justify-center">
                    {sentences.map((sentence, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="text-center mb-8"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl px-[10%] sm:px-[15%] md:px-[20%] font-bold pb-[25px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE0576] via-[#EA12B6] to-[#38CBFF]">{sentence}</p>
                            </motion.div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default Header;