import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPlayCircle } from 'react-icons/fa';
import VideoModal from './VideoModal'; // Adjust path as needed

const HomeSermons = () => {
    const [latestVideos, setLatestVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const MotionLink = motion.create(Link);

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY_1;
    const CHANNEL_ID_1 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_1;
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
            }
        };

        fetchVideos();
    }, []);

    const handleVideoClick = (videoId, e) => {
        e.preventDefault(); // Prevent navigation if it's a link
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
                        aria-description='Veja mais messagens na nossa pagina de mensagens'
                        alt="Veja mais messagens na nossa pagina de mensagens"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VEJA MAIS
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
                                    Pregação do dia {new Date(video.snippet.publishedAt).toLocaleDateString()}
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