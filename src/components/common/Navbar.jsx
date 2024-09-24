import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

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

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <section className='py-2 bg-yellow-600 text-white text-right px-10'>
                <p className='text-sm'>2345 S State Hwy 121, Lewisville, TX 75067<span className="mx-3 font-bold">Telefone:</span>1800333665</p>
            </section>
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 min-h-[70px]">
                {/* Logo */}
                <NavLink
                    to="/"
                    className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-yellow-700' : 'text-white'}`}
                    aria-label="Home"
                >
                    MOCOP CHURCH
                </NavLink>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-bg-yellow-600 rounded"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } lg:block w-full lg:w-auto`}
                >
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
                        {['/', '/about', '/giving', '/missions', '/next-steps', '/gallery', '/contact'].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive
                                            ? 'text-yellow-600'
                                            : isScrolled ? 'text-black' : 'text-white'
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {['Início', 'Sobre', 'Ofertas', 'Missões', 'Proximo Passo', 'Galeria', 'Contato'][index]}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar