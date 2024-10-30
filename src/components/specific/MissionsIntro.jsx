import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';

// Import both PNG/JPG and WebP formats
import MissionImg1PNG from '../../assets/images/missionsimg1.png';
import MissionImg1WebP from '../../assets/images/missionsimg1.webp';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const MissionsIntro = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto mt-24 px-4"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Column */}
                <motion.div
                    className="relative h-[400px] rounded-xl overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

                    {/* Optimized Image */}
                    <div className="w-full h-full">
                        <Image
                            src={MissionImg1PNG}
                            webp={MissionImg1WebP}
                            alt="Missões"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Optional overlay text */}
                    <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                        <motion.h3
                            className="text-2xl font-bold mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            Impactando Vidas
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-200"
                            whileHover={{ scale: 1.02 }}
                        >
                            Através do amor e da palavra de Deus
                        </motion.p>
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    className="space-y-8"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-yellowBtnHover text-3xl md:text-4xl text-left font-bold mb-4"
                        whileHover={{ scale: 1.02 }}
                    >
                        Nosso Compromisso com as Missões
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 leading-relaxed text-base"
                        whileHover={{ scale: 1.01 }}
                    >
                        Na Comunidade Cristã Brasileira, acreditamos profundamente no poder transformador
                        do evangelho, que tem a capacidade de mudar corações e renovar vidas. Nosso
                        compromisso vai além das fronteiras da nossa igreja local; estamos empenhados
                        em apoiar missões que levam a palavra de Deus a diversos lugares, atingindo
                        comunidades carentes, tanto espiritualmente quanto materialmente.
                    </motion.p>

                    <motion.p
                        className="text-gray-600 leading-relaxed text-base"
                        whileHover={{ scale: 1.01 }}
                    >
                        Com grande alegria, colaboramos com missionários dedicados, que atuam em regiões
                        desafiadoras, compartilhando o amor de Cristo e oferecendo auxílio prático a
                        pessoas em necessidade. Abaixo, você pode conhecer mais sobre as missões que
                        temos o privilégio de apoiar e acompanhar de perto.
                    </motion.p>

                    <motion.button
                        className="btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contactar para Apoiar
                    </motion.button>
                </motion.div>
            </div>
            <hr className='border-gray-300 max-w-7xl mx-auto my-24' />
        </motion.div>
    );
};

export default MissionsIntro;