import React from 'react';
import Image from 'react-image-webp';
import Subscribe from '../components/specific/Subscribe';
import ContactForm from '../components/specific/ContactForm';
import { useLanguage } from '../context/LanguageContext';

// Import both PNG and WebP formats
import HeroImgPNG from '../../src/assets/images/headerimg8.png';
import HeroImgWebP from '../../src/assets/images/headerimg8.webp';

const translations = {
    pt: {
        hero: {
            title: "Entre em Contato",
            subtitle: "Envie Suas Perguntas, Solicitações ou Mensagens de Oração",
            imageAlt: "Imagem de Fundo da Página de Contato"
        }
    },
    en: {
        hero: {
            title: "Contact Us",
            subtitle: "Send Your Questions, Requests, or Prayer Messages",
            imageAlt: "Contact Us Background Image"
        }
    },
    es: {
        hero: {
            title: "Contáctenos",
            subtitle: "Envíe Sus Preguntas, Solicitudes o Mensajes de Oración",
            imageAlt: "Imagen de Fondo de Contacto"
        }
    }
};

const Contact = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgPNG}
                        webp={HeroImgWebP}
                        alt={texts.hero.imageAlt}
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"
                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">
                            {texts.hero.title}
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase">
                            {texts.hero.subtitle}
                        </h2>
                    </div>
                </section>
            </header>

            <ContactForm />
            {/* <Subscribe /> */}
        </div>
    );
};

export default Contact;