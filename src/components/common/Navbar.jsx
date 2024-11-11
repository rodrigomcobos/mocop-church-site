import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars, FaPhoneAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import LogoWhite from '../../assets/logos/logowhite.png'
import LogoColor from '../../assets/logos/logocolor.png'
import { useLanguage } from '../../context/LanguageContext'
// Import flag-icons CSS
import 'flag-icons/css/flag-icons.min.css'

// Navbar translations
const navTranslations = {
    pt: {
        home: 'Início',
        about: 'Sobre',
        aboutChurch: 'Sobre a Igreja',
        aboutPastor: 'Sobre o Pastor',
        beliefs: 'O Que Cremos',
        ministries: 'Ministérios',
        giving: 'Ofertas',
        missions: 'Missões',
        messages: 'Mensagens',
        nextSteps: 'Próximos Passos',
        contact: 'Contato',
        address: '2345 S State Hwy 121, Lewisville, TX 75067'
    },
    en: {
        home: 'Home',
        about: 'About',
        aboutChurch: 'About the Church',
        aboutPastor: 'About the Pastor',
        beliefs: 'What We Believe',
        ministries: 'Ministries',
        giving: 'Giving',
        missions: 'Missions',
        messages: 'Messages',
        nextSteps: 'Next Steps',
        contact: 'Contact',
        address: '2345 S State Hwy 121, Lewisville, TX 75067'
    },
    es: {
        home: 'Inicio',
        about: 'Acerca',
        aboutChurch: 'Sobre la Iglesia',
        aboutPastor: 'Sobre el Pastor',
        beliefs: 'Qué Creemos',
        ministries: 'Ministerios',
        giving: 'Ofrendas',
        missions: 'Misiones',
        messages: 'Mensajes',
        nextSteps: 'Próximos Pasos',
        contact: 'Contacto',
        address: '2345 S State Hwy 121, Lewisville, TX 75067'
    }
};

// Language configuration with flag codes
const languages = [
    { code: 'pt', name: 'Português', flag: 'br' },  // Brazil flag
    { code: 'en', name: 'English', flag: 'us' },    // USA flag
    { code: 'es', name: 'Español', flag: 'es' }     // Spain flag
];

// Floating Action Buttons Component
const FloatingActionButtons = ({ address }) => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-50 sm:hidden">
            {/* Phone Button */}
            <motion.a
                href="tel:+12146776646"
                className="w-12 h-12 rounded-full bg-bottomBar text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaPhoneAlt className="text-xl" />
            </motion.a>

            {/* Location Button */}
            <motion.a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-bottomBar text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaMapMarkerAlt className="text-xl" />
            </motion.a>
        </div>
    );
};


// Language Selector Component
const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLanguage = languages.find(lang => lang.code === language);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-1 text-white hover:text-gray-200 transition-colors duration-200"
            >
                <span className={`fi fi-${currentLanguage.flag} mr-2`}></span>
                <span className="text-sm">{currentLanguage.name}</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-1 min-w-[150px] z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                changeLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center space-x-2 ${language === lang.code ? 'bg-gray-50 text-bottomBar' : 'text-gray-700'
                                }`}
                        >
                            <span className={`fi fi-${lang.flag}`}></span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { language } = useLanguage();
    const texts = navTranslations[language];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAboutDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isAboutDropdownOpen) setIsAboutDropdownOpen(false);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const navItems = [
        { path: '/', name: texts.home },
        {
            name: texts.about,
            dropdown: [
                { path: '/about', name: texts.aboutChurch },
                { path: '/about-the-pastor', name: texts.aboutPastor },
                { path: '/what-do-we-believe', name: texts.beliefs },
                { path: '/ministry', name: texts.ministries },
            ]
        },
        { path: '/giving', name: texts.giving },
        { path: '/missions', name: texts.missions },
        { path: '/messages', name: texts.messages },
        { path: '/next-step', name: texts.nextSteps },
        { path: '/contact', name: texts.contact },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                {/* Top Bar Section - Modified to show only language selector on mobile */}
                <section className='py-2 bg-bottomBar text-white px-4'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                        <LanguageSelector />
                        {/* Contact info - visible only on desktop */}
                        <p className='text-sm items-center hidden sm:flex'>
                            <FaMapMarkerAlt className="mr-1" />
                            <a href="https://maps.google.com/maps?q=2345+S+State+Hwy+121,+Lewisville,+TX+75067"
                                target="_blank"
                                rel="noopener noreferrer">
                                {texts.address}
                            </a>
                            <span className="mx-2 font-bold flex items-center">
                                <FaPhoneAlt className="ml-2 mr-1" />
                            </span>
                            <a href="tel:+12146776646">
                                (214) 677-6646
                            </a>
                        </p>
                    </div>
                </section>

                {/* Main Navbar Section */}
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 min-h-[70px]">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold transition-colors duration-300" aria-label="Home">
                        <img
                            src={isScrolled ? LogoColor : LogoWhite}
                            alt="MOCOP Church Logo"
                            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8 sm:h-8' : 'h-10 sm:h-10'}`}
                        />
                    </NavLink>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-2xl focus:outline-none rounded"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="text-white" />
                        ) : (
                            <FaBars className={`${isScrolled ? 'text-black' : 'text-white'}`} />
                        )}
                    </button>

                    {/* Navigation Links */}
                    <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 lg:space-y-0 space-y-2">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.dropdown ? (
                                        <div ref={dropdownRef}>
                                            <button
                                                onClick={toggleAboutDropdown}
                                                className={`flex items-center justify-between w-full lg:w-auto px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'
                                                    }`}
                                            >
                                                {item.name}
                                                <FaChevronDown className={`ml-1 transform transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <ul className={`lg:absolute lg:left-0 lg:mt-4 space-y-2 lg:w-48 bg-white lg:shadow-lg ${isAboutDropdownOpen ? 'block' : 'hidden'}`}>
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={subItem.path}
                                                            className="block px-4 py-4 text-sm text-gray-700 hover:bg-bottomBar hover:text-white"
                                                            onClick={() => {
                                                                setIsMenuOpen(false);
                                                                setIsAboutDropdownOpen(false);
                                                            }}
                                                        >
                                                            {subItem.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                                                    ? 'bg-bottomBar text-white'
                                                    : isScrolled || isMenuOpen ? 'text-black' : 'text-white'
                                                }`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Floating Action Buttons - Show only on mobile */}
            <FloatingActionButtons address={texts.address} />
        </>
    );
};

export default Navbar;