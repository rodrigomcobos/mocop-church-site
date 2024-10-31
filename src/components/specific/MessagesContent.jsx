import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown, FaTimes, FaPlayCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'react-image-webp';
import VideoModal from './VideoModal';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title: "Explore Nossas Pregações e Sermões",
        description: "Explore as pregações e sermões da Comunidade Cristã Brasileira em Lewisville, disponíveis desde 2010. Aprofunde-se na palavra de Deus com mensagens inspiradoras e cheias de sabedoria, compartilhadas ao longo dos anos por pastores e líderes da nossa igreja. Acesse nossos vídeos e fortaleça sua fé com ensinamentos bíblicos para todas as fases da vida cristã.",
        search: {
            placeholder: "Pesquise pregações...",
            clearFilters: "Limpar Filtros"
        },
        filters: {
            allVideos: "Todos os Videos",
            last24Hours: "Últimas 24 horas",
            thisWeek: "Dessa semana",
            thisMonth: "Desse mês",
            thisYear: "Desse ano",
            allYears: "Todos os Anos"
        },
        video: {
            preachingOf: "Pregação do dia",
            noDescription: "Nenhuma descrição disponível para este vídeo."
        }
    },
    en: {
        title: "Explore Our Preachings and Sermons",
        description: "Explore the preachings and sermons from the Brazilian Christian Community in Lewisville, available since 2010. Dive deep into God's word with inspiring messages full of wisdom, shared over the years by pastors and leaders of our church. Access our videos and strengthen your faith with biblical teachings for all phases of Christian life.",
        search: {
            placeholder: "Search preachings...",
            clearFilters: "Clear Filters"
        },
        filters: {
            allVideos: "All Videos",
            last24Hours: "Last 24 Hours",
            thisWeek: "This Week",
            thisMonth: "This Month",
            thisYear: "This Year",
            allYears: "All Years"
        },
        video: {
            preachingOf: "Preaching of",
            noDescription: "No description available for this video."
        }
    },
    es: {
        title: "Explora Nuestras Predicaciones y Sermones",
        description: "Explora las predicaciones y sermones de la Comunidad Cristiana Brasileña en Lewisville, disponibles desde 2010. Profundiza en la palabra de Dios con mensajes inspiradores llenos de sabiduría, compartidos a lo largo de los años por pastores y líderes de nuestra iglesia. Accede a nuestros videos y fortalece tu fe con enseñanzas bíblicas para todas las fases de la vida cristiana.",
        search: {
            placeholder: "Buscar predicaciones...",
            clearFilters: "Limpiar Filtros"
        },
        filters: {
            allVideos: "Todos los Videos",
            last24Hours: "Últimas 24 Horas",
            thisWeek: "Esta Semana",
            thisMonth: "Este Mes",
            thisYear: "Este Año",
            allYears: "Todos los Años"
        },
        video: {
            preachingOf: "Predicación del",
            noDescription: "No hay descripción disponible para este video."
        }
    }
};

// Animation variants
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

// VideoCard Component
const VideoCard = ({ video, onClick, texts }) => (
    <motion.div
        className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg relative top-0 hover:-top-2 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        onClick={() => onClick(video.id.videoId)}
    >
        <div className="relative group">
            <div className="w-full h-60 relative">
                <Image
                    src={video.snippet.thumbnails.high.url}
                    webp={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
        </div>
        <div className="p-6">
            <span className="text-md block text-gray-400 mb-2">
                {texts.video.preachingOf}&nbsp;
                {new Date(video.snippet.publishedAt).toLocaleDateString()}
            </span>
            <h3 className="text-xl font-bold text-yellowBtnHover">{video.snippet.title}</h3>
            <hr className="my-4" />
            <p className="text-footer text-md">
                {video.snippet.description || texts.video.noDescription}
            </p>
        </div>
    </motion.div>
);

// FilterForm Component
const FilterForm = ({ searchQuery, setSearchQuery, dateFilter, yearFilter, handleSearch, handleDateFilterChange, handleYearFilterChange, clearFilters, generateYearOptions, texts }) => (
    <motion.form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-6xl mx-auto my-14"
        variants={itemVariants}
    >
        <div className="flex rounded-lg border-2 border-bottomBar overflow-hidden w-full sm:w-2/4">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={texts.search.placeholder}
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
                <option value="any">{texts.filters.allVideos}</option>
                <option value="day">{texts.filters.last24Hours}</option>
                <option value="week">{texts.filters.thisWeek}</option>
                <option value="month">{texts.filters.thisMonth}</option>
                <option value="year">{texts.filters.thisYear}</option>
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-footer pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-1/4">
            <select
                value={yearFilter}
                onChange={handleYearFilterChange}
                className="w-full bg-white border-2 border-bottomBar text-footer text-md rounded-lg px-4 py-3 pr-10 outline-none appearance-none"
            >
                <option value="all">{texts.filters.allYears}</option>
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
            <FaTimes className="mr-2" /> {texts.search.clearFilters}
        </motion.button>
    </motion.form>
);
// Pagination Component
const Pagination = ({ currentPage, totalPages, paginate }) => {
    // Calculate the range of page numbers to display
    const getPageRange = () => {
        const delta = 2; // Number of pages to show on each side of current page
        const range = [];
        let start = Math.max(1, currentPage - delta);
        let end = Math.min(totalPages, currentPage + delta);

        // Adjust start and end to always show 5 numbers if possible
        if (end - start + 1 < 5) {
            if (start === 1) {
                end = Math.min(5, totalPages);
            } else if (end === totalPages) {
                start = Math.max(1, totalPages - 4);
            }
        }

        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        return range;
    };

    return (
        <motion.div
            className="flex justify-center items-center mt-8 mb-16 px-6 gap-1"
            variants={itemVariants}
        >
            <motion.button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-2 bg-bottomBar text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaChevronLeft />
            </motion.button>

            {currentPage > 3 && totalPages > 5 && (
                <>
                    <motion.button
                        onClick={() => paginate(1)}
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        1
                    </motion.button>
                    <span className="mx-1">...</span>
                </>
            )}

            {getPageRange().map((number) => (
                <motion.button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`mx-1 px-3 py-1 rounded-md ${currentPage === number
                            ? 'bg-bottomBar text-white'
                            : 'bg-gray-200'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {number}
                </motion.button>
            ))}

            {currentPage < totalPages - 2 && totalPages > 5 && (
                <>
                    <span className="mx-1">...</span>
                    <motion.button
                        onClick={() => paginate(totalPages)}
                        className="mx-1 px-3 py-1 rounded-md bg-gray-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {totalPages}
                    </motion.button>
                </>
            )}

            <motion.button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-1 px-3 py-2 bg-bottomBar text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaChevronRight />
            </motion.button>
        </motion.div>
    );
};

const MessagesContent = () => {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('any');
    const [yearFilter, setYearFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage] = useState(12);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { language } = useLanguage();
    const texts = translations[language];

    const API_KEY_1 = import.meta.env.VITE_YOUTUBE_API_KEY_1;
    const API_KEY_2 = import.meta.env.VITE_YOUTUBE_API_KEY_2;
    const CHANNEL_ID_1 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_1;
    const CHANNEL_ID_2 = import.meta.env.VITE_YOUTUBE_CHANNEL_ID_2;
    const CACHE_KEY = 'messagesContentVideos';
    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

    const sectionRef = useRef(null);

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
                setIsLoading(false);
                return;
            }
        }

        setIsLoading(true);
        try {
            const publishedAfter = getPublishedAfterDate(dateFilter, year);
            const publishedBefore = year !== 'all' ? `${parseInt(year) + 1}-01-01T00:00:00Z` : undefined;

            const requests = [
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
            ];

            const [response1, response2] = await Promise.all(requests);

            const videos1 = response1.data.items.map(item => ({
                ...item,
                channelId: CHANNEL_ID_1,
                snippet: {
                    ...item.snippet,
                    thumbnails: {
                        ...item.snippet.thumbnails,
                        high: {
                            ...item.snippet.thumbnails.high,
                            // Ensure proper aspect ratio for thumbnails
                            width: 480,
                            height: 360
                        }
                    }
                }
            }));

            const videos2 = response2.data.items.map(item => ({
                ...item,
                channelId: CHANNEL_ID_2,
                snippet: {
                    ...item.snippet,
                    thumbnails: {
                        ...item.snippet.thumbnails,
                        high: {
                            ...item.snippet.thumbnails.high,
                            width: 480,
                            height: 360
                        }
                    }
                }
            }));

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
        } finally {
            setIsLoading(false);
        }
    };

    const handleVideoClick = (videoId) => {
        setSelectedVideo(videoId);
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
        const newDateFilter = e.target.value;
        setDateFilter(newDateFilter);
        fetchVideos(searchQuery, newDateFilter, yearFilter);
    };

    const handleYearFilterChange = (e) => {
        const newYearFilter = e.target.value;
        setYearFilter(newYearFilter);
        fetchVideos(searchQuery, dateFilter, newYearFilter);
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

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(videos.length / videosPerPage);

    return (
        <motion.section
            ref={sectionRef}
            className='px-6 pb-4'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="max-w-6xl mx-auto text-center my-14" variants={itemVariants}>
                <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-4">
                    {texts.title}
                </h2>
                <p className="text-md text-gray-800 mt-6 leading-relaxed">
                    {texts.description}
                </p>
            </motion.div>

            <FilterForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                dateFilter={dateFilter}
                yearFilter={yearFilter}
                handleSearch={handleSearch}
                handleDateFilterChange={handleDateFilterChange}
                handleYearFilterChange={handleYearFilterChange}
                clearFilters={clearFilters}
                generateYearOptions={generateYearOptions}
                texts={texts}
            />

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
                                <VideoCard
                                    key={video.id.videoId}
                                    video={video}
                                    onClick={handleVideoClick}
                                    texts={texts}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoId={selectedVideo}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />
        </motion.section>
    );
};

export default MessagesContent;