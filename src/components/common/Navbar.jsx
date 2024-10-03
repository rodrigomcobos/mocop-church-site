import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import LogoWhite from '../../assets/logos/logowhite.png'
import LogoColor from '../../assets/logos/logocolor.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Handle scroll to change navbar background and link colors
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { path: '/', name: 'Início' },
        { path: '/about', name: 'Sobre' },
        { path: '/giving', name: 'Ofertas' },
        { path: '/missions', name: 'Missões' },
        { path: '/messages', name: 'Mensagens' },
        { path: '/gallery', name: 'Galeria' },
        { path: '/contact', name: 'Contato' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`}
            >
                {/* Top Bar Section */}
                <section className='py-2 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 text-white px-2'>
                    <p className='text-xs sm:text-sm flex items-center justify-center md:justify-end'>
                        <FaMapMarkerAlt className="mr-1" />
                        <span>2345 S State Hwy 121, Lewisville, TX 75067</span>
                        <span className="mx-2 font-bold flex items-center">
                            <FaPhoneAlt />
                        </span>
                        <span>(214) 677-6646</span>
                    </p>
                </section>

                {/* Navbar Section */}
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 min-h-[70px]">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl font-bold transition-colors duration-300"
                        aria-label="Home"
                    >
                        <img
                            src={isScrolled ? LogoColor : LogoWhite}
                            alt="MOCOP Church Logo"
                            className="w-auto h-8 sm:h-12 transition-all duration-300"
                        />
                    </NavLink>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-2xl focus:outline-none focus:ring-yellow-bg-yellow-600 rounded"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="text-black" />
                        ) : (
                            <FaBars className={`${isScrolled ? 'text-black' : 'text-white'}`} />
                        )}
                    </button>

                    {/* Navigation Links */}
                    <nav
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } lg:block w-full lg:w-auto`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 lg:space-y-0 space-y-2">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                                                ? 'text-yellow-600'
                                                : isScrolled || isMenuOpen ? 'text-black' : 'text-white'
                                            }`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar