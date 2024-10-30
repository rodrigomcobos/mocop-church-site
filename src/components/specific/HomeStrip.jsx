// src/components/specific/HomeStrip.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

// Interface translations
const translations = {
    pt: {
        title: "Verso do Dia",
        loading: "Carregando..."
    },
    en: {
        title: "Verse of the Day",
        loading: "Loading..."
    },
    es: {
        title: "Versículo del Día",
        loading: "Cargando..."
    }
};

// Fallback verses for each language
const fallbackVerses = {
    pt: [
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
            text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
            reference: "Provérbios 3:5"
        }
    ],
    en: [
        {
            text: "The Lord is my shepherd; I shall not want.",
            reference: "Psalms 23:1"
        },
        {
            text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
            reference: "John 3:16"
        },
        {
            text: "I can do all things through Christ who strengthens me.",
            reference: "Philippians 4:13"
        },
        {
            text: "Trust in the Lord with all your heart and lean not on your own understanding.",
            reference: "Proverbs 3:5"
        }
    ],
    es: [
        {
            text: "El Señor es mi pastor; nada me faltará.",
            reference: "Salmos 23:1"
        },
        {
            text: "Porque de tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo aquel que cree en él no se pierda, sino que tenga vida eterna.",
            reference: "Juan 3:16"
        },
        {
            text: "Todo lo puedo en Cristo que me fortalece.",
            reference: "Filipenses 4:13"
        },
        {
            text: "Confía en el Señor con todo tu corazón y no te apoyes en tu propio entendimiento.",
            reference: "Proverbios 3:5"
        }
    ]
};

// API configurations for different languages
const apiConfigs = {
    pt: { version: 'nvi', baseUrl: 'https://www.abibliadigital.com.br/api' },
    en: { version: 'kjv', baseUrl: 'https://www.abibliadigital.com.br/api' },
    es: { version: 'rvr', baseUrl: 'https://www.abibliadigital.com.br/api' }
};

const HomeStrip = () => {
    const [verse, setVerse] = useState({
        text: '',
        reference: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const { language } = useLanguage();
    const texts = translations[language];

    useEffect(() => {
        const checkAndFetchVerse = async () => {
            try {
                setIsLoading(true);

                // Check localStorage with language key
                const storageKey = `dailyVerse_${language}`;
                const cachedData = localStorage.getItem(storageKey);

                if (cachedData) {
                    const { verse: cachedVerse, timestamp } = JSON.parse(cachedData);
                    const now = new Date().getTime();

                    if (now - timestamp < 24 * 60 * 60 * 1000) {
                        setVerse(cachedVerse);
                        setIsLoading(false);
                        return;
                    }
                }

                // Attempt to fetch from API with timeout
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                const { version, baseUrl } = apiConfigs[language];
                const response = await fetch(`${baseUrl}/verses/${version}/random`, {
                    signal: controller.signal,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const newVerse = {
                    text: data.text,
                    reference: `${data.book.name} ${data.chapter}:${data.number}`
                };

                setVerse(newVerse);
                localStorage.setItem(storageKey, JSON.stringify({
                    verse: newVerse,
                    timestamp: new Date().getTime()
                }));
            } catch (error) {
                console.warn('Using fallback verse due to:', error.message);
                const languageFallbacks = fallbackVerses[language];
                const randomVerse = languageFallbacks[Math.floor(Math.random() * languageFallbacks.length)];
                setVerse(randomVerse);

                // Cache the fallback verse
                const storageKey = `dailyVerse_${language}`;
                localStorage.setItem(storageKey, JSON.stringify({
                    verse: randomVerse,
                    timestamp: new Date().getTime()
                }));
            } finally {
                setIsLoading(false);
            }
        };

        checkAndFetchVerse();
    }, [language]); // Re-run when language changes

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
                        {texts.title}
                    </h1>
                    {isLoading ? (
                        <p className="text-xl text-gray-600">{texts.loading}</p>
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
};

export default HomeStrip;