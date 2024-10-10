import React from 'react'
import { motion } from 'framer-motion'
import HeroImg from '../../assets/images/churchimg19.jpeg'
import { Link } from 'react-router-dom';


const Hero = () => {
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
    }

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
    }

    return (
        <>
            <div className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[95dvh] sm:h-[1000px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[95dvh] sm:h-[1000px] object-cover object-top opacity-45" />
                </div>

                <motion.section
                    className="absolute inset-0 pt-28 mx-6 flex justify-center items-center z-10 text-center text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col justify-center items-center">
                        <motion.h2 variants={itemVariants} className="text-md md:text-2xl mb-8 uppercase">Um lugar de fé, esperança e comunhão</motion.h2>
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-seaweed mb-4 drop-shadow-md shadow-gray-950">Você é Bem Vindo Aqui</motion.h1>
                        <motion.p variants={itemVariants} className="pt-8 text-sm md:text-lg mb-8 max-w-2xl">Venha fazer parte de uma comunidade que vive e compartilha o amor de Cristo. Aqui, você encontrará acolhimento, propósito e crescimento espiritual. Junte-se a nós para adorar, servir e transformar vidas com a graça de Deus.</motion.p>
                        <MotionLink
                            to="/about"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn mt-0 md:mt-6"
                        >
                            Conheça Nossa Igreja
                        </MotionLink>
                    </div>
                </motion.section>
            </div>
        </>
    )
}

export default Hero