import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logos/logocolor.png'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navItems = [
        { path: '/', name: 'Início' },
        { path: '/about', name: 'Sobre Nós' },
        { path: '/about-the-pastor', name: 'Sobre o Pastor' },
        { path: '/ministry', name: 'Ministério' },
        { path: '/what-do-we-believe', name: 'O Que Cremos' },
        { path: '/giving', name: 'Ofertas' },
        { path: '/missions', name: 'Missões' },
        { path: '/messages', name: 'Mensagens' },
        { path: '/gallery', name: 'Galeria' },
        { path: '/contact', name: 'Contato' },
    ];

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-[#c9b2a0] font-sans tracking-wide">
            {/* Main Content Section with max-w-7xl */}
            <div className="py-14 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Logo, Description, and Social Media */}
                    <div className="lg:col-span-2">
                        <NavLink to='/' onClick={() => handleNavClick('/')}><img src={Logo} alt="logo" className='w-44 mb-8' /></NavLink>
                        <p className="text-footer mr-0 sm:mr-14 text-sm mb-6">Junte-se a nós para descobrir como a fé em Jesus pode transformar sua vida. Através do amor e da graça de Cristo, somos capacitados a enfrentar qualquer desafio e a viver com propósito.</p>
                        <h4 className="text-lg font-semibold mb-4 text-footer">Redes Sociais</h4>
                        <ul className="flex gap-6">
                            <li><a href="#"><FaYoutube className="text-footer hover:text-white w-6 h-6" /></a></li>
                            <li><a href="#" className="text-footer hover:text-white"><FaFacebook className="text-footer hover:text-white w-6 h-6" /></a></li>
                            <li><a href="#" className="text-footer hover:text-white"><FaInstagram className="text-footer hover:text-white w-6 h-6" /></a></li>
                        </ul>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-footer">Menu</h4>
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        className="text-footer hover:text-white hover:underline text-sm"
                                        onClick={() => handleNavClick(item.path)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-footer">Contato</h4>
                        <div className="space-y-4">
                            <p className="text-footer text-sm">2345 State Hwy 121, Lewisville, TX 75067</p>
                            <p className="text-footer text-sm">lewisvillemocop@gmail.com</p>
                            <p className="text-footer text-sm">+1 (214) 677-6646</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center py-5 bg-bottomBar">
                <p className='text-white text-sm'>© Comunidade Cristã Brasileira em Lewisville 2024. All rights reserved. Website criado por Rodrigo Cobos.</p>
            </div>
        </footer>
    )
}

export default Footer