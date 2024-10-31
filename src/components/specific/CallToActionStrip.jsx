import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title1: "DESCUBRA COMO, ONDE E QUANDO NÓS ADORAMOS",
        title2: "ESPERAMOS VER VOCÊ EM BREVE",
        button: "Planeje sua Visita"
    },
    en: {
        title1: "DISCOVER HOW, WHERE AND WHEN WE WORSHIP",
        title2: "WE HOPE TO SEE YOU SOON",
        button: "Plan Your Visit"
    },
    es: {
        title1: "DESCUBRA CÓMO, DÓNDE Y CUÁNDO ADORAMOS",
        title2: "ESPERAMOS VERTE PRONTO",
        button: "Planifica tu Visita"
    }
};

const CallToActionStrip = () => {
    const MotionLink = motion.create(Link);
    const { language } = useLanguage();
    const texts = translations[language];

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
        <div>
            <div className="bg-bottomBar text-white py-16 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                    {/* Text Section */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-2xl text-center sm:text-left font-bold mb-2">
                            {texts.title1}
                        </h2>
                        <h2 className="text-white text-2xl md:text-2xl text-center sm:text-left font-bold mb-4">
                            {texts.title2}
                        </h2>
                    </div>

                    {/* Button Section */}
                    <div>
                        <MotionLink
                            to="/plan-your-visit"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn mt-6 md:mt-4"
                        >
                            {texts.button}
                        </MotionLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToActionStrip;