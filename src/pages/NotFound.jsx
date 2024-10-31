import React from 'react'
import { TbError404 } from "react-icons/tb";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const translations = {
    pt: {
        title: "Oops! Página não encontrada",
        description: "A página que você está procurando não existe ou ocorreu um erro. Por favor, verifique o URL ou use o botão abaixo para voltar à página inicial.",
        button: "Voltar para o início"
    },
    en: {
        title: "Oops! Page Not Found",
        description: "The page you're looking for doesn't exist or an error occurred. Please check the URL or use the button below to return to the homepage.",
        button: "Back to Home"
    },
    es: {
        title: "¡Ups! Página no encontrada",
        description: "La página que estás buscando no existe o ha ocurrido un error. Por favor, verifica la URL o usa el botón de abajo para volver a la página principal.",
        button: "Volver al inicio"
    }
};

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const NotFound = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <motion.div
            className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 py-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <TbError404 className="text-9xl sm:text-[12rem] text-footer mb-6" />
            </motion.div>
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-footer mb-6"
                variants={itemVariants}
            >
                {texts.title}
            </motion.h1>
            <motion.p
                className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-12"
                variants={itemVariants}
            >
                {texts.description}
            </motion.p>
            <motion.div variants={itemVariants}>
                <Link
                    to="/"
                    className="btn px-8 py-3"
                >
                    {texts.button}
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;