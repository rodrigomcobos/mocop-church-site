import React from 'react';
import Image from 'react-image-webp';
import GivingSection from '../components/specific/GivingSection';
import Subscribe from '../components/specific/Subscribe';
import GivingFaq from '../components/specific/GivingFaq';
import { useLanguage } from '../context/LanguageContext';

// Import both JPEG and WebP formats
import HeroImgJPEG from '../../src/assets/images/headerimg4.jpeg';
import HeroImgWebP from '../../src/assets/images/headerimg4.webp';

const translations = {
    pt: {
        hero: {
            title: "Ofertas",
            subtitle: "Comprometa-se a doar e vamos mudar vidas juntos.",
            imageAlt: "Imagem de Fundo das Ofertas"
        }
    },
    en: {
        hero: {
            title: "Giving",
            subtitle: "Commit to giving and let's change lives together.",
            imageAlt: "Giving Header Image"
        }
    },
    es: {
        hero: {
            title: "Ofrendas",
            subtitle: "Comprométase a donar y cambiemos vidas juntos.",
            imageAlt: "Imagen de Fondo de Ofrendas"
        }
    }
};

const Giving = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgJPEG}
                        webp={HeroImgWebP}
                        alt={texts.hero.imageAlt}
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"
                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold font-sanfrancisco">
                            {texts.hero.title}
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase font-sanfrancisco">
                            {texts.hero.subtitle}
                        </h2>
                    </div>
                </section>
            </header>

            <GivingSection />
            <GivingFaq />
            {/* <Subscribe /> */}
        </div>
    );
};

export default Giving;