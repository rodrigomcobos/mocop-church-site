import React from 'react';
import Image from 'react-image-webp';
import MissionsIntro from '../components/specific/MissionsIntro';
import MissionsContent from '../components/specific/MissionsContent';
import Subscribe from '../components/specific/Subscribe';
import { useLanguage } from '../context/LanguageContext';

// Import both JPG and WebP formats
import HeroImgJPG from '../../src/assets/images/headerimg7.jpg';
import HeroImgWebP from '../../src/assets/images/headerimg7.webp';

const translations = {
    pt: {
        hero: {
            title: "Missões que Apoiamos",
            subtitle: "Servindo o Reino de Deus desde 2004",
            imageAlt: "Imagem de Fundo das Missões"
        }
    },
    en: {
        hero: {
            title: "Missions We Support",
            subtitle: "Serving God's Kingdom since 2004",
            imageAlt: "Missions Header Image"
        }
    },
    es: {
        hero: {
            title: "Misiones que Apoyamos",
            subtitle: "Sirviendo al Reino de Dios desde 2004",
            imageAlt: "Imagen de Fondo de Misiones"
        }
    }
};

const Missions = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgJPG}
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

            <MissionsIntro />
            <MissionsContent />
            {/* <Subscribe /> */}
        </div>
    );
};

export default Missions;