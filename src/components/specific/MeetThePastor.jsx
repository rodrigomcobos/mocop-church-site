import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';
import PastorImagePNG from '../../assets/images/pastor.png';
import PastorImageWebP from '../../assets/images/pastor.webp';

const MeetThePastor = () => {
    const MotionLink = motion.create(Link);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="bg-white pt-36 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-6">
                {/* Left Column - Image with WebP support */}
                <div className="relative order-2 md:order-1 mt-8 md:mt-0">
                    <Image
                        src={PastorImagePNG}
                        webp={PastorImageWebP}
                        alt="Pastor Carlos Oliveira"
                        className="w-[90%] md:w-[90%] h-auto mx-auto"
                        loading="lazy"
                    />
                </div>

                {/* Right Column - Text Content with Animations */}
                <motion.div
                    className="flex flex-col justify-center text-center md:text-center order-1 md:order-2 -mt-10 md:-mt-38 sm:-mt-44"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-xl font-bold text-gray-800 uppercase"
                    >
                        O Poder de
                    </motion.h2>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-bold text-gray-800 uppercase"
                    >
                        Jesus Muda
                    </motion.h2>
                    <motion.h2
                        variants={itemVariants}
                        className="text-8xl md:text-8xl sm:text-8xl font-bold bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text font-seaweed -mt-3"
                    >
                        Tudo
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-gray-600 text-md md:text-md text-left"
                    >
                        Igreja é um momento para se reunir com uma comunidade de crentes, ser desafiado, encorajado e equipado pela palavra de Deus.
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-gray-600 text-md md:text-md text-left"
                    >
                        Nossa experiência de adoração envolve louvor moderno e canções de adoração seguidas por um ensino centrado na Bíblia. Como uma igreja interdenominacional, damos boas-vindas a pessoas de todas as esferas da vida para se juntarem a nós.
                    </motion.p>
                    <MotionLink
                        to="/what-do-we-believe"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn mt-8"
                    >
                        No que acreditamos
                    </MotionLink>
                </motion.div>
            </div>
        </div>
    );
};

export default MeetThePastor;