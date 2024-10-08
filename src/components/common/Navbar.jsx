import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars, FaPhoneAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'
import LogoWhite from '../../assets/logos/logowhite.png'
import LogoColor from '../../assets/logos/logocolor.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAboutDropdownOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        if (isAboutDropdownOpen) setIsAboutDropdownOpen(false)
    }

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen)
    }

    const navItems = [
        { path: '/', name: 'Início' },
        {
            name: 'Sobre',
            dropdown: [
                { path: '/about', name: 'Sobre a Igreja' },
                { path: '/about-the-pastor', name: 'Sobre o Pastor' },
                { path: '/what-do-we-believe', name: 'O Que Cremos' },
                { path: '/ministry', name: 'Ministérios' },

            ]
        },
        { path: '/giving', name: 'Ofertas' },
        { path: '/missions', name: 'Missões' },
        { path: '/messages', name: 'Mensagens' },
        { path: '/next-step', name: 'Próximos Passos' },
        { path: '/contact', name: 'Contato' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                {/* Top Bar Section */}
                <section className='py-2 bg-bottomBar text-white px-2'>
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
                    <NavLink to="/" className="text-2xl font-bold transition-colors duration-300" aria-label="Home">
                        <img src={isScrolled ? LogoColor : LogoWhite} alt="MOCOP Church Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-14'}`} />
                    </NavLink>

                    {/* Mobile Menu Toggle Button */}
                    <button onClick={toggleMenu} className="lg:hidden text-2xl focus:outline-none rounded" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
                        {isMenuOpen ? (
                            <FaTimes className="text-black" />
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
                                                className={`flex items-center justify-between w-full lg:w-auto px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}`}
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
                                                                setIsMenuOpen(false)
                                                                setIsAboutDropdownOpen(false)
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
        </>
    )
}

export default Navbar