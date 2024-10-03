import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logos/logowhite.png'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
        <footer className="bg-yellow-900 font-sans tracking-wide">
            {/* Main Content Section with max-w-7xl */}
            <div className="py-14 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Logo and Description */}
                    <div className="lg:col-span-2">
                        <NavLink to='/'><img src={Logo} alt="logo" className='w-44 mb-8' /></NavLink>
                        <p className="text-white mr-0 sm:mr-14 text-sm">Junte-se a nós para descobrir como a fé em Jesus pode transformar sua vida. Através do amor e da graça de Cristo, somos capacitados a enfrentar qualquer desafio e a viver com propósito.</p>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-white">Menu</h4>
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className="text-white hover:text-yellow-500 hover:underline text-sm"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-white">Redes Sociais</h4>
                        <ul className="flex gap-6">
                            <li><a href="#"><FaYoutube className="text-white hover:text-yellow-500 w-6 h-6" /></a></li>
                            <li><a href="#" className="text-white hover:text-yellow-500"><FaFacebook className="text-white hover:text-yellow-500 w-6 h-6" /></a></li>
                            <li><a href="#" className="text-white hover:text-yellow-500"><FaInstagram className="text-white hover:text-yellow-500 w-6 h-6" /></a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-white">Contato</h4>
                        <div className="space-y-4">
                            <p className="text-white text-sm">2345 State Hwy 121, Lewisville, TX 75067</p>
                            <p className="text-white text-sm">lewisvillemocop@gmail.com</p>
                            <p className="text-white text-sm">+1 (214) 677-6646</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center py-5 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600">
                <p className='text-white text-sm'>© Comunidade Cristã Brasileira em Lewisville 2024. All rights reserved. Website criado por Rodrigo Cobos.</p>
            </div>
        </footer>
    )
}

export default Footer