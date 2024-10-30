// src/components/common/Footer.jsx
import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { useLanguage } from '../../context/LanguageContext'
import Logo from '../../assets/logos/logocolor.png'

// Translations object
const translations = {
    pt: {
        description: "Junte-se a nós para descobrir como a fé em Jesus pode transformar sua vida. Através do amor e da graça de Cristo, somos capacitados a enfrentar qualquer desafio e a viver com propósito.",
        socialMedia: "Redes Sociais",
        menu: "Menu",
        contact: "Contato",
        copyright: "© Comunidade Cristã Brasileira em Lewisville 2024. Todos os direitos reservados.",
        websiteBy: "Website criado por Rodrigo Cobos.",
        privacyPolicy: "Política de Privacidade",
        navItems: [
            { path: '/', name: 'Início' },
            { path: '/about', name: 'Sobre Nós' },
            { path: '/about-the-pastor', name: 'Sobre o Pastor' },
            { path: '/ministry', name: 'Ministério' },
            { path: '/what-do-we-believe', name: 'O Que Cremos' },
            { path: '/giving', name: 'Ofertas' },
            { path: '/missions', name: 'Missões' },
            { path: '/messages', name: 'Mensagens' },
            { path: '/gallery', name: 'Galeria' },
            { path: '/contact', name: 'Contato' }
        ]
    },
    en: {
        description: "Join us to discover how faith in Jesus can transform your life. Through Christ's love and grace, we are empowered to face any challenge and live with purpose.",
        socialMedia: "Social Media",
        menu: "Menu",
        contact: "Contact",
        copyright: "© Brazilian Christian Community in Lewisville 2024. All rights reserved.",
        websiteBy: "Website created by Rodrigo Cobos.",
        privacyPolicy: "Privacy Policy",
        navItems: [
            { path: '/', name: 'Home' },
            { path: '/about', name: 'About Us' },
            { path: '/about-the-pastor', name: 'About the Pastor' },
            { path: '/ministry', name: 'Ministry' },
            { path: '/what-do-we-believe', name: 'What We Believe' },
            { path: '/giving', name: 'Giving' },
            { path: '/missions', name: 'Missions' },
            { path: '/messages', name: 'Messages' },
            { path: '/gallery', name: 'Gallery' },
            { path: '/contact', name: 'Contact' }
        ]
    },
    es: {
        description: "Únete a nosotros para descubrir cómo la fe en Jesús puede transformar tu vida. A través del amor y la gracia de Cristo, somos capacitados para enfrentar cualquier desafío y vivir con propósito.",
        socialMedia: "Redes Sociales",
        menu: "Menú",
        contact: "Contacto",
        copyright: "© Comunidad Cristiana Brasileña en Lewisville 2024. Todos los derechos reservados.",
        websiteBy: "Sitio web creado por Rodrigo Cobos.",
        privacyPolicy: "Política de Privacidad",
        navItems: [
            { path: '/', name: 'Inicio' },
            { path: '/about', name: 'Sobre Nosotros' },
            { path: '/about-the-pastor', name: 'Sobre el Pastor' },
            { path: '/ministry', name: 'Ministerio' },
            { path: '/what-do-we-believe', name: 'Lo Que Creemos' },
            { path: '/giving', name: 'Ofrendas' },
            { path: '/missions', name: 'Misiones' },
            { path: '/messages', name: 'Mensajes' },
            { path: '/gallery', name: 'Galería' },
            { path: '/contact', name: 'Contacto' }
        ]
    }
};

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const texts = translations[language];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleNavClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-[#c9b2a0] font-sans tracking-wide">
            {/* Main Content Section */}
            <div className="py-14 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo, Description, and Social Media */}
                    <div className="lg:col-span-2">
                        <NavLink to='/' onClick={() => handleNavClick('/')}>
                            <img src={Logo} alt="logo" className='w-44 mb-8' />
                        </NavLink>
                        <p className="text-footer mr-0 sm:mr-14 text-sm mb-6">
                            {texts.description}
                        </p>
                        <h2 className="text-lg font-semibold mb-4 text-footer">
                            {texts.socialMedia}
                        </h2>
                        <ul className="flex gap-6">
                            <li>
                                <a
                                    href="https://www.youtube.com/@mocopchurchinlewisville7125"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-footer hover:text-white"
                                    aria-label="YouTube channel"
                                >
                                    <FaYoutube className="text-footer hover:text-white w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/igrejabrasileiratexas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-footer hover:text-white"
                                    aria-label="Facebook page"
                                >
                                    <FaFacebook className="text-footer hover:text-white w-6 h-6" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/ccbltx/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-footer hover:text-white"
                                    aria-label="Instagram profile"
                                >
                                    <FaInstagram className="text-footer hover:text-white w-6 h-6" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-8 text-footer">
                            {texts.menu}
                        </h2>
                        <ul className="space-y-4">
                            {texts.navItems.map((item, index) => (
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
                        <h2 className="text-lg font-semibold mb-8 text-footer">
                            {texts.contact}
                        </h2>
                        <div className="space-y-4">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=2345+State+Hwy+121,+Lewisville,+TX+75067"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-footer text-sm block"
                            >
                                2345 State Hwy 121, Lewisville, TX 75067
                            </a>
                            <a href="mailto:lewisvillemocop@gmail.com" className="text-footer text-sm block">
                                lewisvillemocop@gmail.com
                            </a>
                            <a href="tel:+12146776646" className="text-footer text-sm block">
                                +1 (214) 677-6646
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center py-5 bg-bottomBar">
                <p className='text-white text-sm'>
                    {texts.copyright}
                    <a
                        href="https://rodrigomcobos.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:no-underline text-white"
                    >
                        {texts.websiteBy}
                    </a>
                    <NavLink to="/privacy-policy" className="hover:no-underline text-white ml-2">
                        {texts.privacyPolicy}
                    </NavLink>
                </p>
            </div>
        </footer>
    );
};

export default Footer;