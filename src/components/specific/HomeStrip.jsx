import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';

const HomeStrip = () => {
    const [verse, setVerse] = useState({
        text: '',
        reference: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    const fallbackVerses = [
        {
            text: "O Senhor é o meu pastor; nada me faltará.",
            reference: "Salmos 23:1"
        },
        {
            text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
            reference: "João 3:16"
        },
        {
            text: "Tudo posso naquele que me fortalece.",
            reference: "Filipenses 4:13"
        },
        {
            text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
            reference: "Isaías 41:10"
        },
        {
            text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
            reference: "Provérbios 3:5"
        },
        {
            text: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
            reference: "Mateus 6:33"
        },
        {
            text: "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará.",
            reference: "Deuteronômio 31:6"
        },
        {
            text: "Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
            reference: "Isaías 40:31"
        }
    ];

    useEffect(() => {
        const checkAndFetchVerse = async () => {
            try {
                setIsLoading(true);

                // Check localStorage for cached verse
                const cachedData = localStorage.getItem('dailyVerse');
                if (cachedData) {
                    const { verse: cachedVerse, timestamp } = JSON.parse(cachedData);
                    const now = new Date().getTime();

                    // Check if the cached verse is less than 24 hours old
                    if (now - timestamp < 24 * 60 * 60 * 1000) {
                        setVerse(cachedVerse);
                        setIsLoading(false);
                        return;
                    }
                }

                // If no cache or cache is expired, fetch new verse
                const response = await fetch('https://www.abibliadigital.com.br/api/verses/nvi/random');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (!data || !data.text || !data.book || !data.book.name || !data.chapter || !data.number) {
                    throw new Error('Invalid API response format');
                }

                const newVerse = {
                    text: data.text,
                    reference: `${data.book.name} ${data.chapter}:${data.number}`
                };

                // Cache the new verse with timestamp
                localStorage.setItem('dailyVerse', JSON.stringify({
                    verse: newVerse,
                    timestamp: new Date().getTime()
                }));

                setVerse(newVerse);
            } catch (error) {
                console.error('Erro ao buscar o versículo:', error);

                // Check if there's a cached verse to use before falling back
                const cachedData = localStorage.getItem('dailyVerse');
                if (cachedData) {
                    const { verse: cachedVerse } = JSON.parse(cachedData);
                    setVerse(cachedVerse);
                } else {
                    // Use fallback verse if no cache available
                    const randomIndex = Math.floor(Math.random() * fallbackVerses.length);
                    setVerse(fallbackVerses[randomIndex]);

                    // Cache the fallback verse
                    localStorage.setItem('dailyVerse', JSON.stringify({
                        verse: fallbackVerses[randomIndex],
                        timestamp: new Date().getTime()
                    }));
                }
            } finally {
                setIsLoading(false);
            }
        };

        checkAndFetchVerse();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-[150px] py-6 px-6 md:py-8 md:px-16 bg-primary font-sans overflow-hidden -mt-20 z-10 max-w-[90%] lg:max-w-[80%] mx-auto rounded-lg mb-0 md:mb-24 lg:mb-8"
        >
            <FaQuoteRight className="absolute top-4 right-4 text-footer opacity-20 text-6xl md:text-7xl" />

            <div className="flex flex-col md:flex-row justify-between align-middle items-center gap-6 md:gap-10">
                <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-xl lg:text-xl text-gray-800 font-semibold">
                        Verso do Dia
                    </h1>
                    {isLoading ? (
                        <p className="text-xl text-gray-600">Carregando...</p>
                    ) : (
                        <p className="text-xl md:text-2xl lg:text-2xl text-yellowBtnHover font-bold mt-2">
                            "{verse.text}"
                            <span className="block md:inline text-footer font-normal text-lg md:text-lg lg:text-lg italic">
                                &nbsp; &nbsp; - {verse.reference}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default HomeStrip;