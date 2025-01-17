// components/CTA/CTA.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ctaData from './cta.json';
import { fadeIn } from './animation';

const CTA: React.FC = () => {
    const { title, mainText, subtext, linkText, link, badgeText, image } = ctaData;

    return (
        <motion.div 
            className="relative bg-black rounded-b-[70px] overflow-hidden flex flex-col items-center"
             variants={fadeIn}
             initial="initial"
             animate="animate"
        >
            <div className="md:p-16 md:px-[20%] p-8 relative z-10 flex flex-col items-start w-full">
                <h2 className="text-gray-200 md:text-5xl text-2xl font-bold md:my-4">{title}</h2>
                <p className="md:text-[200px] text-[60px] font-bold py-8 bg-clip-text text-transparent md:leading-[150px] leading-[60px]"
                   style={{backgroundImage: "linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004)", WebkitBackgroundClip: 'text'}}>
                   {mainText}
                </p>
                <div className="md:px-[10%] md:mr-[15%]">
                    <p className="text-gray-400 md:text-2xl font-bold mb-6">{subtext}</p>
                    <a href={link} className="text-blue-300 md:text-lg text-sm font-semibold hover:underline">{linkText}</a>
                    <div className="bg-[#f5620057] text-[#ff791b] md:text-md text-sm font-bold py-1 px-2 rounded-md mt-4 w-fit">{badgeText}</div>
                </div>
            </div>
            <motion.img
                src={`/CTA/${image}`}
                alt="Call to Action Image"
                className="md:max-w-[70%] md:h-auto md:object-cover max-w-[500px]"
                   variants={fadeIn}
                   initial="initial"
                   animate="animate"
            />
        </motion.div>
    );
};

export default CTA;