import React from 'react'
import Logo from '../../assets/logos/logowhite.png'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-yellow-900 font-sans tracking-wide">
            <div className="py-14 px-6 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-[85%] mx-auto">

                    <div className="lg:col-span-2">
                        <a href='#'><img src={Logo} alt="logo"
                            className='w-44 mb-8' /></a>
                        <p className="text-white max-w-[75%] text-sm">Junte-se a nós para descobrir como a fé em Jesus pode transformar sua vida. Através do amor e da graça de Cristo, somos capacitados a enfrentar qualquer desafio e a viver com propósito.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-white">Menu</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white hover:text-white text-sm">Início</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Sobre</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Ofertas</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Missões</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Mensagens</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Galeria</a></li>
                            <li><a href="#" className="text-white hover:text-white text-sm">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-8 text-white">Redes Sociais</h4>

                        <ul className="flex gap-6">
                            <li><a href="#">
                                <FaYoutube className="text-white hover:text-red-500 w-6 h-6" /></a></li>
                            <li><a href="#" className="text-white hover:text-gray-500">
                                <FaFacebook className="text-white inline hover:text-blue-500 w-6 h-6" />
                            </a></li>
                            <li><a href="#" className="text-white hover:text-gray-500">
                                <FaInstagram className="text-white inline hover:text-indigo-500 w-6 h-6" /></a></li>
                        </ul>

                    </div>

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

            <div className="text-center py-5 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600">
                <p className='text-white text-sm'>© Comunidade Cristã Brasileira em Lewisville 2024. All rights reserved. Website criado por Rodrigo Cobos.</p>
            </div>
        </footer>
    )
}

export default Footer