import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeSermons = () => {
    const [latestVideos, setLatestVideos] = useState([]);
    const MotionLink = motion.create(Link);

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY_1;
    const CHANNEL_ID = 'UCrbGrH-d7Gwr1lAGE6hcIrA';
    const CACHE_KEY = 'homeSermonVideos';
    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

    useEffect(() => {
        const fetchVideos = async () => {
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const { timestamp, videos } = JSON.parse(cachedData);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setLatestVideos(videos);
                    return;
                }
            }

            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID,
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
            }
        };

        fetchVideos();
    }, []);

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

    const imageHoverVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

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
                    <h2 className="text-3xl text-yellowBtnHover mb-4 font-bold">Mensagens</h2>
                    <hr className="border-t-2 border-yellowBtnHover mb-6 max-w-[15rem] mx-auto lg:mx-0" />
                    <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-800">Revisite nossas pregações de Domingos passados</h2>
                    <MotionLink
                        to="/messages"
                        className='btn mt-6 md:mt-8'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VEJA MAIS
                    </MotionLink>
                </motion.section>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                    {latestVideos.map((video, index) => (
                        <motion.div
                            key={video.id.videoId}
                            className="cursor-pointer rounded overflow-hidden group"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden rounded-md">
                                <motion.img
                                    src={video.snippet.thumbnails.high.url}
                                    alt={video.snippet.title}
                                    className="w-full h-52 object-cover"
                                    whileHover="hover"
                                    variants={imageHoverVariants}
                                />
                            </div>
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">
                                    Pregação do dia                                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">
                                    {video.snippet.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </motion.div>
    );
};

export default HomeSermons;