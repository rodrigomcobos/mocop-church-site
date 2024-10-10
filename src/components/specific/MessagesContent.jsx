import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MessagesContent = () => {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('any');
    const [yearFilter, setYearFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage] = useState(12);

    const API_KEY_1 = import.meta.env.VITE_YOUTUBE_API_KEY_1;
    const API_KEY_2 = import.meta.env.VITE_YOUTUBE_API_KEY_2;
    const CHANNEL_ID_1 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_1;
    const CHANNEL_ID_2 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_2;
    const CACHE_KEY = 'messagesContentVideos';
    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

    const sectionRef = useRef(null);

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

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async (query = '', dateFilter = 'any', year = 'all') => {
        const cacheKey = `${CACHE_KEY}_${query}_${dateFilter}_${year}`;
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            const { timestamp, videos } = JSON.parse(cachedData);
            if (Date.now() - timestamp < CACHE_DURATION) {
                setVideos(videos);
                return;
            }
        }

        try {
            const publishedAfter = getPublishedAfterDate(dateFilter, year);
            const publishedBefore = year !== 'all' ? `${parseInt(year) + 1}-01-01T00:00:00Z` : undefined;

            const [response1, response2] = await Promise.all([
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID_1,
                        maxResults: 50,
                        order: 'date',
                        type: 'video',
                        q: query,
                        key: API_KEY_1,
                        ...(publishedAfter && { publishedAfter }),
                        ...(publishedBefore && { publishedBefore })
                    }
                }),
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID_2,
                        maxResults: 50,
                        order: 'date',
                        type: 'video',
                        q: query,
                        key: API_KEY_2,
                        ...(publishedAfter && { publishedAfter }),
                        ...(publishedBefore && { publishedBefore })
                    }
                })
            ]);

            const videos1 = response1.data.items.map(item => ({ ...item, channelId: CHANNEL_ID_1 }));
            const videos2 = response2.data.items.map(item => ({ ...item, channelId: CHANNEL_ID_2 }));
            const allVideos = [...videos1, ...videos2].sort((a, b) =>
                new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
            );

            setVideos(allVideos);
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: Date.now(),
                videos: allVideos
            }));
            setCurrentPage(1);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const getPublishedAfterDate = (filter, year) => {
        if (year !== 'all') {
            return `${year}-01-01T00:00:00Z`;
        }

        const now = new Date();
        switch (filter) {
            case 'day':
                return new Date(now.setDate(now.getDate() - 1)).toISOString();
            case 'week':
                return new Date(now.setDate(now.getDate() - 7)).toISOString();
            case 'month':
                return new Date(now.setMonth(now.getMonth() - 1)).toISOString();
            case 'year':
                return new Date(now.setFullYear(now.getFullYear() - 1)).toISOString();
            default:
                return null;
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchVideos(searchQuery, dateFilter, yearFilter);
    };

    const handleDateFilterChange = (e) => {
        setDateFilter(e.target.value);
        fetchVideos(searchQuery, e.target.value, yearFilter);
    };

    const handleYearFilterChange = (e) => {
        setYearFilter(e.target.value);
        fetchVideos(searchQuery, dateFilter, e.target.value);
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = currentYear; year >= 2010; year--) {
            years.push(
                <option key={year} value={year.toString()}>
                    {year}
                </option>
            );
        }
        return years;
    };

    const clearFilters = () => {
        setSearchQuery('');
        setDateFilter('any');
        setYearFilter('all');
        fetchVideos('', 'any', 'all');
    };

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to the top of the section
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.section
            ref={sectionRef}
            className='px-6 pb-4'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="max-w-6xl mx-auto text-center my-14" variants={itemVariants}>
                <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-4">Explore Nossas Pregações e Sermões</h2>
                <p className="text-md text-gray-800 mt-6 leading-relaxed">Explore as pregações e sermões da Comunidade Cristã Brasileira em Lewisville, disponíveis desde 2010. Aprofunde-se na palavra de Deus com mensagens inspiradoras e cheias de sabedoria, compartilhadas ao longo dos anos por pastores e líderes da nossa igreja. Acesse nossos vídeos e fortaleça sua fé com ensinamentos bíblicos para todas as fases da vida cristã.</p>
            </motion.div>
            <motion.form
                id='search-form'
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-6xl mx-auto my-14"
                variants={itemVariants}
            >
                <div className="flex rounded-lg border-2 border-bottomBar overflow-hidden w-full sm:w-2/4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Pesquise pregações..."
                        className="w-full outline-none bg-white text-footer text-md px-4 py-3"
                    />
                    <motion.button
                        type='submit'
                        className="flex items-center justify-center bg-bottomBar px-5 m-[.15rem] rounded-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaSearch className="text-white text-lg" />
                    </motion.button>
                </div>
                <div className="relative w-full sm:w-1/4">
                    <select
                        value={dateFilter}
                        onChange={handleDateFilterChange}
                        className="w-full bg-white border-2 border-bottomBar text-footer text-md rounded-lg px-4 py-3 pr-10 outline-none appearance-none"
                    >
                        <option value="any">Todos os Videos</option>
                        <option value="day">Últimos 24 horas</option>
                        <option value="week">Dessa semana</option>
                        <option value="month">Desse mês</option>
                        <option value="year">Desse ano</option>
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-footer pointer-events-none" />
                </div>
                <div className="relative w-full sm:w-1/4">
                    <select
                        value={yearFilter}
                        onChange={handleYearFilterChange}
                        className="w-full bg-white border-2 border-bottomBar text-footer text-md rounded-lg px-4 py-3 pr-10 outline-none appearance-none"
                    >
                        <option value="all">Todos os Anos</option>
                        {generateYearOptions()}
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-footer pointer-events-none" />
                </div>
                <motion.button
                    type="button"
                    onClick={clearFilters}
                    className="w-full sm:w-auto bg-bottomBar text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaTimes className="mr-2" /> Limpar Filtros
                </motion.button>
            </motion.form>

            <motion.div className="bg-white my-4" variants={itemVariants}>
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentVideos.map((video) => (
                                <motion.div
                                    key={video.id.videoId}
                                    className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg relative top-0 hover:-top-2 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-60 object-cover" />
                                    <div className="p-6">
                                        <span className="text-md block text-gray-400 mb-2">
                                            Pregação do dia&nbsp;
                                            {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                            {/* Channel {video.channelId === CHANNEL_ID_1 ? '1' : '2'} */}
                                        </span>
                                        <h3 className="text-xl font-bold text-yellowBtnHover">{video.snippet.title}</h3>
                                        <hr className="my-4" />
                                        <p className="text-footer text-md">
                                            {video.snippet.description
                                                ? video.snippet.description
                                                : "Nenhuma descrição disponível para este vídeo."}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <motion.div className="flex justify-center mt-8 mb-16 px-6" variants={itemVariants}>
                <motion.button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-1 px-4 py-2 bg-bottomBar text-white rounded-md disabled:bg-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaChevronLeft />
                </motion.button>
                {[...Array(Math.ceil(videos.length / videosPerPage)).keys()].map((number) => (
                    <motion.button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`mx-1 px-4 py-2 rounded-md ${currentPage === number + 1 ? 'bg-bottomBar text-white' : 'bg-gray-200'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {number + 1}
                    </motion.button>
                ))}
                <motion.button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(videos.length / videosPerPage)}
                    className="mx-1 px-4 py-2 bg-bottomBar text-white rounded-md disabled:bg-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaChevronRight />
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default MessagesContent;