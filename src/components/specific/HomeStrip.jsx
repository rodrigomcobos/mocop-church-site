import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';

const HomeStrip = () => {
    const [verse, setVerse] = useState({
        text: '',
        reference: ''
    });

    useEffect(() => {
        const fetchDailyVerse = async () => {
            try {
                const response = await fetch('https://www.abibliadigital.com.br/api/verses/nvi/random');
                const data = await response.json();
                setVerse({
                    text: data.text,
                    reference: `${data.book.name} ${data.chapter}:${data.number}`
                });
            } catch (error) {
                console.error('Erro ao buscar o versículo:', error);
                setVerse({
                    text: 'Não foi possível carregar o versículo do dia.',
                    reference: ''
                });
            }
        };

        fetchDailyVerse();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-[150px] py-6 px-6 md:py-8 md:px-16 bg-primary font-sans overflow-hidden -mt-20 z-10 max-w-[90%] lg:max-w-[80%] mx-auto rounded-lg mb-0 md:mb-24 lg:mb-8"
        >
            <FaQuoteRight className="absolute top-4 right-4 text-yellow-600 opacity-20 text-6xl md:text-7xl" />

            <div className="flex flex-col md:flex-row justify-between align-middle items-center gap-6 md:gap-10">
                <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-xl lg:text-xl text-gray-800 font-semibold">
                        Verso do Dia
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-2xl text-yellow-800 font-bold mt-2">
                        "{verse.text}"
                        <span className="block md:inline text-gray-800 font-normal text-lg md:text-lg lg:text-lg italic">
                            &nbsp; &nbsp; - {verse.reference}
                        </span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default HomeStrip;