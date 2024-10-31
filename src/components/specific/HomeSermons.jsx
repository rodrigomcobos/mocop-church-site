// src/components/specific/HomeSermons.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPlayCircle } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import VideoModal from './VideoModal';

// Translations object
const translations = {
    pt: {
        messages: "Mensagens",
        title: "Revisite nossas pregações de Domingos passados",
        viewAllButton: "VER TODAS AS MENSAGENS",
        viewAllAriaLabel: "Ver todas as mensagens disponíveis",
        sermonFrom: "Pregação do dia",
        loadingText: "Carregando mensagens...",
        errorText: "Erro ao carregar mensagens. Por favor, tente novamente mais tarde."
    },
    en: {
        messages: "Messages",
        title: "Revisit our past Sunday sermons",
        viewAllButton: "VIEW ALL MESSAGES",
        viewAllAriaLabel: "View all available messages",
        sermonFrom: "Sermon from",
        loadingText: "Loading messages...",
        errorText: "Error loading messages. Please try again later."
    },
    es: {
        messages: "Mensajes",
        title: "Revive nuestros sermones de domingos pasados",
        viewAllButton: "VER TODOS LOS MENSAJES",
        viewAllAriaLabel: "Ver todos los mensajes disponibles",
        sermonFrom: "Sermón del día",
        loadingText: "Cargando mensajes...",
        errorText: "Error al cargar los mensajes. Por favor, inténtelo de nuevo más tarde."
    }
};

// Date formatting options for each language
const dateFormatOptions = {
    pt: { dateStyle: 'long' },
    en: { dateStyle: 'long' },
    es: { dateStyle: 'long' }
};

const HomeSermons = () => {
    const [latestVideos, setLatestVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const texts = translations[language];
    const MotionLink = motion.create(Link);

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY_1;
    const CHANNEL_ID_1 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_1;
    const CACHE_KEY = 'homeSermonVideos';
    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            setError(null);

            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const { timestamp, videos } = JSON.parse(cachedData);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setLatestVideos(videos);
                    setIsLoading(false);
                    return;
                }
            }

            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID_1,
                        maxResults: 4,
                        order: 'date',
                        type: 'video',
                        key: API_KEY
                    }
                });
                const videos = response.data.items;
                setLatestVideos(videos);
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    timestamp: Date.now(),
                    videos
                }));
            } catch (error) {
                console.error('Error fetching videos:', error);
                setError(texts.errorText);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const formatDate = (dateString) => {
        try {
            return new Date(dateString).toLocaleDateString(
                language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'pt-BR',
                dateFormatOptions[language]
            );
        } catch (error) {
            console.error('Error formatting date:', error);
            return dateString;
        }
    };

    const handleVideoClick = (videoId, e) => {
        e.preventDefault();
        setSelectedVideo(videoId);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    if (isLoading) {
        return (
            <div className="p-6 py-24 text-center">
                <p>{texts.loadingText}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 py-24 text-center text-red-600">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <motion.div
            className="p-6 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-12 items-center mx-auto max-w-7xl text-center lg:text-left">
                <motion.section variants={itemVariants}>
                    <h2 className="text-3xl text-yellowBtnHover mb-4 font-bold">{texts.messages}</h2>
                    <hr className="border-t-2 border-yellowBtnHover mb-6 max-w-[15rem] mx-auto lg:mx-0" />
                    <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-800">
                        {texts.title}
                    </h2>
                    <MotionLink
                        to="/messages"
                        className='btn mt-6 md:mt-8'
                        aria-label={texts.viewAllAriaLabel}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {texts.viewAllButton}
                    </MotionLink>
                </motion.section>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                    {latestVideos.map((video) => (
                        <motion.div
                            key={video.id.videoId}
                            className="cursor-pointer rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                            variants={itemVariants}
                            onClick={(e) => handleVideoClick(video.id.videoId, e)}
                        >
                            <div className="relative group">
                                <motion.img
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <FaPlayCircle className="text-white text-7xl m-auto" />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">
                                    {`${texts.sermonFrom} ${formatDate(video.snippet.publishedAt)}`}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellowBtnHover transition-all">
                                    {video.snippet.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoId={selectedVideo}
            />
        </motion.div>
    );
};

export default HomeSermons;