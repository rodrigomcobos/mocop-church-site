import React from 'react';
import AboutThePastorContent from '../components/specific/AboutThePastorContent';
import PastorTimeline from '../components/specific/PastorTimeline';
import Subscribe from '../components/specific/Subscribe';
import Image from 'react-image-webp';
import { useLanguage } from '../context/LanguageContext';

// Import both PNG and WebP formats
import HeroImgPNG from '../../src/assets/images/headerimg2.png';
import HeroImgWebP from '../../src/assets/images/headerimg2.webp';

const translations = {
    pt: {
        hero: {
            title: "Conheçendo o Pastor",
            subtitle: "Servindo o Reino de Deus desde 2004",
            imageAlt: "Pastor Carlos Oliveira - Imagem de Fundo"
        }
    },
    en: {
        hero: {
            title: "Meet the Pastor",
            subtitle: "Serving God's Kingdom since 2004",
            imageAlt: "Pastor Carlos Oliveira - Background Image"
        }
    },
    es: {
        hero: {
            title: "Conociendo al Pastor",
            subtitle: "Sirviendo al Reino de Dios desde 2004",
            imageAlt: "Pastor Carlos Oliveira - Imagen de Fondo"
        }
    }
};

const AboutThePastor = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
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

            <AboutThePastorContent />
            <PastorTimeline />
            <Subscribe />
        </div>
    );
};

export default AboutThePastor;