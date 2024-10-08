import React from 'react'
import { TbError404 } from "react-icons/tb";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
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
                Oops! Página não encontrada
            </motion.h1>
            <motion.p
                className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-12"
                variants={itemVariants}
            >
                A página que você está procurando não existe ou ocorreu um erro.
                Por favor, verifique o URL ou use o botão abaixo para voltar à página inicial.
            </motion.p>
            <motion.div variants={itemVariants}>
                <Link
                    to="/"
                    className="btn px-8 py-3"
                >
                    Voltar para o início
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;