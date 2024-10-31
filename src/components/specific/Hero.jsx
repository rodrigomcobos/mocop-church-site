// src/components/specific/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';
import { heroTranslations } from '../../translations/hero';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HeroImgJPG from '../../assets/images/churchimg19.jpeg';
import HeroImgWebP from '../../assets/images/churchimg19.webp';

const Hero = () => {
    const { language } = useLanguage();
    const texts = heroTranslations[language];
    const MotionLink = motion.create(Link);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[95dvh] sm:h-[1000px]">
            <div className="absolute inset-0">
                <Image
                    src={HeroImgJPG}
                    webp={HeroImgWebP}
                    alt={language === 'en' ? "Image of a church on a sunny day" :
                        language === 'es' ? "Imagen de una iglesia en un día soleado" :
                            "Imagem de uma igreja em um dia ensolarado"}
                    className="w-full h-[95dvh] sm:h-[1000px] object-cover object-top opacity-45"
                    loading="lazy"
                />
            </div>

            <motion.section
                className="absolute inset-0 pt-28 mx-4 flex justify-center items-center z-10 text-center text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col justify-center items-center">
                    <motion.h2
                        variants={itemVariants}
                        className="text-md md:text-2xl mb-8 uppercase"
                    >
                        {texts.subtitle}
                    </motion.h2>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-seaweed mb-4 drop-shadow-md shadow-gray-950"
                    >
                        {texts.title}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="pt-8 text-sm md:text-lg mb-8 max-w-2xl"
                    >
                        {texts.description}
                    </motion.p>

                    <MotionLink
                        to="/about"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn mt-0 md:mt-6"
                    >
                        {texts.button}
                    </MotionLink>
                </div>
            </motion.section>
        </div>
    );
};

export default Hero;