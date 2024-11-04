import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG/JPG and WebP formats
import MissionImg1PNG from '../../assets/images/pastorimg2.jpg';
import MissionImg1WebP from '../../assets/images/pastorimg2.webp';

const translations = {
    pt: {
        overlayTitle: "Impactando Vidas",
        overlaySubtitle: "Através do amor e da palavra de Deus",
        mainTitle: "Nosso Compromisso com as Missões",
        content: {
            p1: "Na Comunidade Cristã Brasileira, acreditamos profundamente no poder transformador do evangelho, que tem a capacidade de mudar corações e renovar vidas. Nosso compromisso vai além das fronteiras da nossa igreja local; estamos empenhados em apoiar missões que levam a palavra de Deus a diversos lugares, atingindo comunidades carentes, tanto espiritualmente quanto materialmente.",
            p2: "Com grande alegria, colaboramos com missionários dedicados, que atuam em regiões desafiadoras, compartilhando o amor de Cristo e oferecendo auxílio prático a pessoas em necessidade. Abaixo, você pode conhecer mais sobre as missões que temos o privilégio de apoiar e acompanhar de perto."
        },
        button: "Contactar para Apoiar",
        imageAlt: "Missões"
    },
    en: {
        overlayTitle: "Impacting Lives",
        overlaySubtitle: "Through God's love and word",
        mainTitle: "Our Commitment to Missions",
        content: {
            p1: "At the Brazilian Christian Community, we deeply believe in the transforming power of the gospel, which has the ability to change hearts and renew lives. Our commitment extends beyond the boundaries of our local church; we are dedicated to supporting missions that bring God's word to various places, reaching communities in need, both spiritually and materially.",
            p2: "With great joy, we collaborate with dedicated missionaries who work in challenging regions, sharing Christ's love and offering practical help to people in need. Below, you can learn more about the missions we have the privilege of supporting and following closely."
        },
        button: "Contact to Support",
        imageAlt: "Missions"
    },
    es: {
        overlayTitle: "Impactando Vidas",
        overlaySubtitle: "A través del amor y la palabra de Dios",
        mainTitle: "Nuestro Compromiso con las Misiones",
        content: {
            p1: "En la Comunidad Cristiana Brasileña, creemos profundamente en el poder transformador del evangelio, que tiene la capacidad de cambiar corazones y renovar vidas. Nuestro compromiso va más allá de las fronteras de nuestra iglesia local; estamos dedicados a apoyar misiones que llevan la palabra de Dios a diversos lugares, alcanzando comunidades necesitadas, tanto espiritual como materialmente.",
            p2: "Con gran alegría, colaboramos con misioneros dedicados que trabajan en regiones desafiantes, compartiendo el amor de Cristo y ofreciendo ayuda práctica a personas necesitadas. A continuación, puedes conocer más sobre las misiones que tenemos el privilegio de apoyar y seguir de cerca."
        },
        button: "Contactar para Apoyar",
        imageAlt: "Misiones"
    }
};

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
    const { language } = useLanguage();
    const texts = translations[language];

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
                            alt={texts.imageAlt}
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
                            {texts.overlayTitle}
                        </motion.h3>
                        <motion.p
                            className="text-sm text-gray-200"
                            whileHover={{ scale: 1.02 }}
                        >
                            {texts.overlaySubtitle}
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
                        {texts.mainTitle}
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 leading-relaxed text-base"
                        whileHover={{ scale: 1.01 }}
                    >
                        {texts.content.p1}
                    </motion.p>

                    <motion.p
                        className="text-gray-600 leading-relaxed text-base"
                        whileHover={{ scale: 1.01 }}
                    >
                        {texts.content.p2}
                    </motion.p>

                    <Link to="/contact">
                        <motion.button
                            className="btn mt-14"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {texts.button}
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            <hr className='border-gray-300 max-w-7xl mx-auto my-24' />
        </motion.div>
    );
};

export default MissionsIntro;