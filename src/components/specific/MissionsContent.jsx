import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Image from 'react-image-webp';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import { useLanguage } from '../../context/LanguageContext';


// Import images for Amac (Muito Além de um Câncer)
import AmacImg1PNG from '../../assets/images/amacimg1.png';
import AmacImg1WebP from '../../assets/images/amacimg1.webp';
import AmacImg2PNG from '../../assets/images/amacimg2.png';
import AmacImg2WebP from '../../assets/images/amacimg2.webp';
import AmacImg3PNG from '../../assets/images/amacimg3.png';
import AmacImg3WebP from '../../assets/images/amacimg3.webp';
import AmacImg4PNG from '../../assets/images/amacimg4.png';
import AmacImg4WebP from '../../assets/images/amacimg4.webp';
import AmacImg5PNG from '../../assets/images/amacimg5.png';
import AmacImg5WebP from '../../assets/images/amacimg5.webp';
import AmacImg6PNG from '../../assets/images/amacimg6.png';
import AmacImg6WebP from '../../assets/images/amacimg6.webp';
import AmacImg7PNG from '../../assets/images/amacimg7.png';
import AmacImg7WebP from '../../assets/images/amacimg7.webp';
import AmacImg8PNG from '../../assets/images/amacimg8.png';
import AmacImg8WebP from '../../assets/images/amacimg8.webp';
import AmacImg9PNG from '../../assets/images/amacimg9.png';
import AmacImg9WebP from '../../assets/images/amacimg9.webp';
import AmacImg10PNG from '../../assets/images/amacimg10.png';
import AmacImg10WebP from '../../assets/images/amacimg10.webp';
import AmacImg11PNG from '../../assets/images/amacimg11.png';
import AmacImg11WebP from '../../assets/images/amacimg11.webp';
import AmacImg12PNG from '../../assets/images/amacimg12.png';
import AmacImg12WebP from '../../assets/images/amacimg12.webp';
import AmacImg13PNG from '../../assets/images/amacimg13.png';
import AmacImg13WebP from '../../assets/images/amacimg13.webp';

// Import images for Amic (Projeto AMIC)
import AmicImg1PNG from '../../assets/images/amicimg1.png';
import AmicImg1WebP from '../../assets/images/amicimg1.webp';
import AmicImg2PNG from '../../assets/images/amicimg2.png';
import AmicImg2WebP from '../../assets/images/amicimg2.webp';
import AmicImg3PNG from '../../assets/images/amicimg3.png';
import AmicImg3WebP from '../../assets/images/amicimg3.webp';
import AmicImg4PNG from '../../assets/images/amicimg4.png';
import AmicImg4WebP from '../../assets/images/amicimg4.webp';
import AmicImg5PNG from '../../assets/images/amicimg5.png';
import AmicImg5WebP from '../../assets/images/amicimg5.webp';
import AmicImg6PNG from '../../assets/images/amicimg6.png';
import AmicImg6WebP from '../../assets/images/amicimg6.webp';
import AmicImg7PNG from '../../assets/images/amicimg7.png';
import AmicImg7WebP from '../../assets/images/amicimg7.webp';
import AmicImg8PNG from '../../assets/images/amicimg8.png';
import AmicImg8WebP from '../../assets/images/amicimg8.webp';
import AmicImg9PNG from '../../assets/images/amicimg9.png';
import AmicImg9WebP from '../../assets/images/amicimg9.webp';
import AmicImg10PNG from '../../assets/images/amicimg10.png';
import AmicImg10WebP from '../../assets/images/amicimg10.webp';
import AmicImg11PNG from '../../assets/images/amicimg11.png';
import AmicImg11WebP from '../../assets/images/amicimg11.webp';
import AmicImg12PNG from '../../assets/images/amicimg12.png';
import AmicImg12WebP from '../../assets/images/amicimg12.webp';
import AmicImg13PNG from '../../assets/images/amicimg13.png';
import AmicImg13WebP from '../../assets/images/amicimg13.webp';

// Import images for Amis (AMIS Pá Bissau)
import AmisImg1PNG from '../../assets/images/amisimg1.png';
import AmisImg1WebP from '../../assets/images/amisimg1.webp';
import AmisImg2PNG from '../../assets/images/amisimg2.png';
import AmisImg2WebP from '../../assets/images/amisimg2.webp';
import AmisImg3PNG from '../../assets/images/amisimg3.png';
import AmisImg3WebP from '../../assets/images/amisimg3.webp';
import AmisImg4PNG from '../../assets/images/amisimg4.png';
import AmisImg4WebP from '../../assets/images/amisimg4.webp';
import AmisImg5PNG from '../../assets/images/amisimg5.png';
import AmisImg5WebP from '../../assets/images/amisimg5.webp';
import AmisImg6PNG from '../../assets/images/amisimg6.png';
import AmisImg6WebP from '../../assets/images/amisimg6.webp';
import AmisImg7PNG from '../../assets/images/amisimg7.png';
import AmisImg7WebP from '../../assets/images/amisimg7.webp';
import AmisImg8PNG from '../../assets/images/amisimg8.png';
import AmisImg8WebP from '../../assets/images/amisimg8.webp';
import AmisImg9PNG from '../../assets/images/amisimg9.png';
import AmisImg9WebP from '../../assets/images/amisimg9.webp';
import AmisImg10PNG from '../../assets/images/amisimg10.png';
import AmisImg10WebP from '../../assets/images/amisimg10.webp';
import AmisImg11PNG from '../../assets/images/amisimg11.png';
import AmisImg11WebP from '../../assets/images/amisimg11.webp';
import AmisImg12PNG from '../../assets/images/amisimg12.png';
import AmisImg12WebP from '../../assets/images/amisimg12.webp';
import AmisImg13JPG from '../../assets/images/amisimg13.jpg';
import AmisImg13WebP from '../../assets/images/amisimg13.webp';

const translations = {
    pt: {
        title: "Nossas Missões",
        followOnInstagram: "Seguir no Instagram",
        remainingPhotos: "+{count}",
        missions: [
            {
                name: "AMIS Pá Bissau",
                location: "Guiné-Bissau, África",
                description: "Nossa missão na Guiné-Bissau trabalha para transformar vidas através do evangelho, educação e assistência social. Em parceria com organizações locais, desenvolvemos projetos que impactam comunidades e formam novos líderes, levando esperança e transformação para a região.",
                instagram: "@amispabissau",
                instagramLink: "https://www.instagram.com/amispabissau/",
                imageAltPrefix: "AMIS Pá Bissau - Imagem"
            },
            {
                name: "Muito Além de um Câncer",
                location: "Brasil",
                description: "Uma missão dedicada a oferecer apoio, esperança e amor a pessoas que enfrentam o câncer e suas famílias. Através de ações práticas e suporte espiritual, trabalhamos para mostrar que existe vida, propósito e alegria mesmo durante os momentos mais desafiadores da jornada contra o câncer.",
                instagram: "@muitoalemdeumcancer",
                instagramLink: "https://www.instagram.com/muitoalemdeumcancer/",
                imageAltPrefix: "Muito Além de um Câncer - Imagem"
            },
            {
                name: "Projeto AMIC",
                location: "Brasil",
                description: "O Projeto AMIC atua no apoio e desenvolvimento de comunidades necessitadas, focando em educação, saúde e desenvolvimento social. Através de ações práticas e programas estruturados, trabalhamos para criar oportunidades e transformar realidades.",
                instagram: "@projeto_amic",
                instagramLink: "https://www.instagram.com/projeto_amic/",
                imageAltPrefix: "Projeto AMIC - Imagem"
            }
        ]
    },
    en: {
        title: "Our Missions",
        followOnInstagram: "Follow on Instagram",
        remainingPhotos: "+{count}",
        missions: [
            {
                name: "AMIS Pá Bissau",
                location: "Guinea-Bissau, Africa",
                description: "Our mission in Guinea-Bissau works to transform lives through the gospel, education, and social assistance. In partnership with local organizations, we develop projects that impact communities and form new leaders, bringing hope and transformation to the region.",
                instagram: "@amispabissau",
                instagramLink: "https://www.instagram.com/amispabissau/",
                imageAltPrefix: "AMIS Pá Bissau - Image"
            },
            {
                name: "Beyond Cancer",
                location: "Brazil",
                description: "A mission dedicated to offering support, hope, and love to people facing cancer and their families. Through practical actions and spiritual support, we work to show that there is life, purpose, and joy even during the most challenging moments of the cancer journey.",
                instagram: "@muitoalemdeumcancer",
                instagramLink: "https://www.instagram.com/muitoalemdeumcancer/",
                imageAltPrefix: "Beyond Cancer - Image"
            },
            {
                name: "AMIC Project",
                location: "Brazil",
                description: "The AMIC Project works to support and develop communities in need, focusing on education, health, and social development. Through practical actions and structured programs, we work to create opportunities and transform realities.",
                instagram: "@projeto_amic",
                instagramLink: "https://www.instagram.com/projeto_amic/",
                imageAltPrefix: "AMIC Project - Image"
            }
        ]
    },
    es: {
        title: "Nuestras Misiones",
        followOnInstagram: "Seguir en Instagram",
        remainingPhotos: "+{count}",
        missions: [
            {
                name: "AMIS Pá Bissau",
                location: "Guinea-Bisáu, África",
                description: "Nuestra misión en Guinea-Bisáu trabaja para transformar vidas a través del evangelio, la educación y la asistencia social. En colaboración con organizaciones locales, desarrollamos proyectos que impactan comunidades y forman nuevos líderes, llevando esperanza y transformación a la región.",
                instagram: "@amispabissau",
                instagramLink: "https://www.instagram.com/amispabissau/",
                imageAltPrefix: "AMIS Pá Bissau - Imagen"
            },
            {
                name: "Más Allá del Cáncer",
                location: "Brasil",
                description: "Una misión dedicada a ofrecer apoyo, esperanza y amor a personas que enfrentan el cáncer y sus familias. A través de acciones prácticas y apoyo espiritual, trabajamos para mostrar que existe vida, propósito y alegría incluso durante los momentos más desafiantes del viaje contra el cáncer.",
                instagram: "@muitoalemdeumcancer",
                instagramLink: "https://www.instagram.com/muitoalemdeumcancer/",
                imageAltPrefix: "Más Allá del Cáncer - Imagen"
            },
            {
                name: "Proyecto AMIC",
                location: "Brasil",
                description: "El Proyecto AMIC trabaja en el apoyo y desarrollo de comunidades necesitadas, enfocándose en la educación, la salud y el desarrollo social. A través de acciones prácticas y programas estructurados, trabajamos para crear oportunidades y transformar realidades.",
                instagram: "@projeto_amic",
                instagramLink: "https://www.instagram.com/projeto_amic/",
                imageAltPrefix: "Proyecto AMIC - Imagen"
            }
        ]
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const MissionsContent = () => {
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
    const { language } = useLanguage();
    const texts = translations[language];

    // Keep all existing image arrays and mission data
    const missionData = [
        {
            baseName: "AMIS Pá Bissau",
            images: [
                { src: AmisImg1PNG, webp: AmisImg1WebP },
                { src: AmisImg2PNG, webp: AmisImg2WebP },
                { src: AmisImg3PNG, webp: AmisImg3WebP },
                { src: AmisImg4PNG, webp: AmisImg4WebP },
                { src: AmisImg5PNG, webp: AmisImg5WebP },
                { src: AmisImg6PNG, webp: AmisImg6WebP },
                { src: AmisImg7PNG, webp: AmisImg7WebP },
                { src: AmisImg8PNG, webp: AmisImg8WebP },
                { src: AmisImg9PNG, webp: AmisImg9WebP },
                { src: AmisImg10PNG, webp: AmisImg10WebP },
                { src: AmisImg11PNG, webp: AmisImg11WebP },
                { src: AmisImg12PNG, webp: AmisImg12WebP },
                { src: AmisImg13JPG, webp: AmisImg13WebP }
            ]
        },
        {
            baseName: "Muito Além de um Câncer",
            images: [
                { src: AmacImg1PNG, webp: AmacImg1WebP },
                { src: AmacImg2PNG, webp: AmacImg2WebP },
                { src: AmacImg3PNG, webp: AmacImg3WebP },
                { src: AmacImg4PNG, webp: AmacImg4WebP },
                { src: AmacImg5PNG, webp: AmacImg5WebP },
                { src: AmacImg6PNG, webp: AmacImg6WebP },
                { src: AmacImg7PNG, webp: AmacImg7WebP },
                { src: AmacImg8PNG, webp: AmacImg8WebP },
                { src: AmacImg9PNG, webp: AmacImg9WebP },
                { src: AmacImg10PNG, webp: AmacImg10WebP },
                { src: AmacImg11PNG, webp: AmacImg11WebP },
                { src: AmacImg12PNG, webp: AmacImg12WebP },
                { src: AmacImg13PNG, webp: AmacImg13WebP }
            ]
        },
        {
            baseName: "Projeto AMIC",
            images: [
                { src: AmicImg1PNG, webp: AmicImg1WebP },
                { src: AmicImg2PNG, webp: AmicImg2WebP },
                { src: AmicImg3PNG, webp: AmicImg3WebP },
                { src: AmicImg4PNG, webp: AmicImg4WebP },
                { src: AmicImg5PNG, webp: AmicImg5WebP },
                { src: AmicImg6PNG, webp: AmicImg6WebP },
                { src: AmicImg7PNG, webp: AmicImg7WebP },
                { src: AmicImg8PNG, webp: AmicImg8WebP },
                { src: AmicImg9PNG, webp: AmicImg9WebP },
                { src: AmicImg10PNG, webp: AmicImg10WebP },
                { src: AmicImg11PNG, webp: AmicImg11WebP },
                { src: AmicImg12PNG, webp: AmicImg12WebP },
                { src: AmicImg13PNG, webp: AmicImg13WebP }
            ]
        }
    ];

    // Combine translation data with image data
    const missions = texts.missions.map((mission, index) => ({
        ...mission,
        images: missionData[index].images.map((img, imgIndex) => ({
            ...img,
            alt: `${mission.imageAltPrefix} ${imgIndex + 1}`
        }))
    }));

    const openLightbox = (missionIndex, imageIndex) => {
        setCurrentMissionIndex(missionIndex);
        setLightboxIndex(imageIndex);
    };

    const ImageGrid = ({ images, missionIndex }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 h-[300px] md:h-[400px]">
            {images.slice(0, 6).map((image, index) => (
                <motion.div
                    key={index}
                    className={`relative cursor-pointer overflow-hidden rounded-lg ${index === 0 ? 'col-span-2 row-span-2' : ''
                        }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(missionIndex, index)}
                >
                    <Image
                        src={image.src}
                        webp={image.webp}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {index === 5 && images.length > 6 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xl font-bold">
                                {texts.remainingPhotos.replace("{count}", images.length - 6)}
                            </span>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );

    return (
        <motion.div
            className="bg-white py-8 md:py-16 px-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-footer text-center mb-8 md:mb-12"
                    variants={itemVariants}
                >
                    {texts.title}
                </motion.h1>

                <div className="space-y-12 md:space-y-16">
                    {missions.map((mission, index) => (
                        <React.Fragment key={`mission-section-${index}`}>
                            {index > 0 && (
                                <motion.hr
                                    className="border-gray-200 my-6 md:my-8"
                                    variants={itemVariants}
                                />
                            )}

                            <motion.section
                                className="grid md:grid-cols-2 gap-6 md:gap-12 items-start transition-all duration-300 p-6"
                                variants={itemVariants}
                            >
                                <div className={`space-y-4 md:space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <motion.div
                                        className="space-y-4"
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <h2 className="text-2xl md:text-3xl font-bold text-yellowBtnHover">
                                            {mission.name}
                                        </h2>
                                        <div className="flex items-center text-gray-600 space-x-2">
                                            <FaMapMarkerAlt className="text-bottomBar" />
                                            <span>{mission.location}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {mission.description}
                                        </p>
                                        <div className="flex flex-col gap-4">
                                            <motion.a
                                                href={mission.instagramLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center space-x-2 text-bottomBar hover:text-yellowBtnHover transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaInstagram size={20} />
                                                <span>{mission.instagram}</span>
                                            </motion.a>
                                            <motion.button
                                                type="button"
                                                className="btn mt-6 md:mt-14 w-full md:w-auto"
                                                onClick={() => window.open(mission.instagramLink, '_blank')}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {texts.followOnInstagram}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                                    <ImageGrid images={mission.images} missionIndex={index} />
                                </div>
                            </motion.section>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={missions[currentMissionIndex]?.images.map(img => ({
                    src: img.src,
                    alt: img.alt
                }))}
                plugins={[Thumbnails, Zoom, Fullscreen]}
                thumbnails={{
                    position: "bottom",
                    width: 100,
                    height: 60,
                    gap: 2,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    scrollToZoom: true,
                }}
            />
        </motion.div>
    );
};

export default MissionsContent;