import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagesContent = () => {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('any');

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UCrbGrH-d7Gwr1lAGE6hcIrA';

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async (query = '', dateFilter = 'any') => {
        try {
            const publishedAfter = getPublishedAfterDate(dateFilter);
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    channelId: CHANNEL_ID,
                    maxResults: 50,
                    order: 'date',
                    type: 'video',
                    q: query,
                    key: API_KEY,
                    ...(publishedAfter && { publishedAfter })
                }
            });
            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const getPublishedAfterDate = (filter) => {
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
        fetchVideos(searchQuery, dateFilter);
    };

    const handleDateFilterChange = (e) => {
        setDateFilter(e.target.value);
        fetchVideos(searchQuery, e.target.value);
    };

    return (
        <div>
            {/* Search Bar and Date Filter */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto my-14">
                <div className="flex rounded-lg border-2 border-bottomBar overflow-hidden w-full sm:w-2/3">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search videos..."
                        className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                    />
                    <button type='submit' className="flex items-center justify-center bg-bottomBar px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                    </button>
                </div>
                <select
                    value={dateFilter}
                    onChange={handleDateFilterChange}
                    className="w-full sm:w-auto bg-white border-2 border-bottomBar text-gray-600 text-sm rounded-lg px-4 py-3 outline-none appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1em', paddingRight: '2.5rem' }}
                >
                    <option value="any">Any time</option>
                    <option value="day">Last 24 hours</option>
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="year">This year</option>
                </select>
            </form>

            {/* Cards Section */}
            <div className="bg-white my-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                        {videos.map((video) => (
                            <div key={video.id.videoId} className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-lg relative top-0 hover:-top-2 transition-all duration-300">
                                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-60 object-cover" />
                                <div className="p-6">
                                    <span className="text-sm block text-gray-400 mb-2">{new Date(video.snippet.publishedAt).toLocaleDateString()}</span>
                                    <h3 className="text-xl font-bold text-gray-800">{video.snippet.title}</h3>
                                    <hr className="my-4" />
                                    <p className="text-gray-400 text-sm">{video.snippet.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesContent;