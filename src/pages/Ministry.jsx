import React from 'react';
import Image from 'react-image-webp';
import Ministries from '../components/specific/Ministries';
import Subscribe from '../components/specific/Subscribe';
import { useLanguage } from '../context/LanguageContext';

// Import both JPG and WebP formats
import HeroImgJPG from '../../src/assets/images/headerimg3.jpg';
import HeroImgWebP from '../../src/assets/images/headerimg3.webp';

const translations = {
    pt: {
        hero: {
            title: "Ministérios",
            subtitle: "Servindo o Reino de Deus desde 2004",
            imageAlt: "Imagem de Fundo dos Ministérios"
        }
    },
    en: {
        hero: {
            title: "Ministries",
            subtitle: "Serving God's Kingdom since 2004",
            imageAlt: "Ministries Header Image"
        }
    },
    es: {
        hero: {
            title: "Ministerios",
            subtitle: "Sirviendo al Reino de Dios desde 2004",
            imageAlt: "Imagen de Fondo de Ministerios"
        }
    }
};

const Ministry = () => {
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

            <Ministries />
            {/* <Subscribe /> */}
        </div>
    );
};

export default Ministry;