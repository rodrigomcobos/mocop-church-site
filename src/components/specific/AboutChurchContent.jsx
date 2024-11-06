import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RiTimeLine } from 'react-icons/ri';
import { BsClockHistory } from 'react-icons/bs';
import { FaHourglassHalf } from 'react-icons/fa';

const translations = {
    pt: {
        title: "Em Breve",
        subtitle: "Conteúdo em Desenvolvimento",
        message: "Estamos preparando algo especial para você. Por favor, volte em breve para conhecer mais sobre nossa igreja.",
        updating: "Atualizando..."
    },
    en: {
        title: "Coming Soon",
        subtitle: "Content Under Development",
        message: "We're preparing something special for you. Please check back soon to learn more about our church.",
        updating: "Updating..."
    },
    es: {
        title: "Próximamente",
        subtitle: "Contenido en Desarrollo",
        message: "Estamos preparando algo especial para ti. Por favor, vuelve pronto para conocer más sobre nuestra iglesia.",
        updating: "Actualizando..."
    }
};

const AboutChurchContent = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-white">
            <motion.div
                className="max-w-2xl mx-auto text-center px-4 py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="flex justify-center space-x-4 mb-6 text-4xl text-yellowBtnHover"
                    animate={{
                        rotateX: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <RiTimeLine className="transform -rotate-12" />
                    <BsClockHistory />
                    <FaHourglassHalf className="transform rotate-12" />
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4 text-yellowBtnHover"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {texts.title}
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-2xl font-semibold mb-6 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {texts.subtitle}
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-8 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {texts.message}
                </motion.p>

                <motion.div
                    className="flex justify-center items-center space-x-2 text-yellowBtnHover"
                    animate={{
                        opacity: [1, 0.5, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity
                    }}
                >
                    <FaHourglassHalf className="animate-spin" />
                    <span>{texts.updating}</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutChurchContent;