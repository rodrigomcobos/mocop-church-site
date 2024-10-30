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

// Define responsive slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // Tablet
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768, // Mobile
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const MissionsContent = () => {
    // const [modalOpen, setModalOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

    const missions = [
        {
            name: "AMIS Pá Bissau",
            location: "Guiné-Bissau, África",
            description: "Nossa missão na Guiné-Bissau trabalha para transformar vidas através do evangelho, educação e assistência social. Em parceria com organizações locais, desenvolvemos projetos que impactam comunidades e formam novos líderes, levando esperança e transformação para a região.",
            instagram: "@amispabissau",
            instagramLink: "https://www.instagram.com/amispabissau/",
            images: [
                { src: AmisImg1PNG, webp: AmisImg1WebP, alt: "AMIS Pá Bissau - Imagem 1" },
                { src: AmisImg2PNG, webp: AmisImg2WebP, alt: "AMIS Pá Bissau - Imagem 2" },
                { src: AmisImg3PNG, webp: AmisImg3WebP, alt: "AMIS Pá Bissau - Imagem 3" },
                { src: AmisImg4PNG, webp: AmisImg4WebP, alt: "AMIS Pá Bissau - Imagem 4" },
                { src: AmisImg5PNG, webp: AmisImg5WebP, alt: "AMIS Pá Bissau - Imagem 5" },
                { src: AmisImg6PNG, webp: AmisImg6WebP, alt: "AMIS Pá Bissau - Imagem 6" },
                { src: AmisImg7PNG, webp: AmisImg7WebP, alt: "AMIS Pá Bissau - Imagem 7" },
                { src: AmisImg8PNG, webp: AmisImg8WebP, alt: "AMIS Pá Bissau - Imagem 8" },
                { src: AmisImg9PNG, webp: AmisImg9WebP, alt: "AMIS Pá Bissau - Imagem 9" },
                { src: AmisImg10PNG, webp: AmisImg10WebP, alt: "AMIS Pá Bissau - Imagem 10" },
                { src: AmisImg11PNG, webp: AmisImg11WebP, alt: "AMIS Pá Bissau - Imagem 11" },
                { src: AmisImg12PNG, webp: AmisImg12WebP, alt: "AMIS Pá Bissau - Imagem 12" },
                { src: AmisImg13JPG, webp: AmisImg13WebP, alt: "AMIS Pá Bissau - Imagem 13" },
            ]
        },
        {
            name: "Muito Além de um Câncer",
            location: "Brasil",
            description: "Uma missão dedicada a oferecer apoio, esperança e amor a pessoas que enfrentam o câncer e suas famílias. Através de ações práticas e suporte espiritual, trabalhamos para mostrar que existe vida, propósito e alegria mesmo durante os momentos mais desafiadores da jornada contra o câncer.",
            instagram: "@muitoalemdeumcancer",
            instagramLink: "https://www.instagram.com/muitoalemdeumcancer/",
            images: [
                { src: AmacImg1PNG, webp: AmacImg1WebP, alt: "Muito Além de um Câncer - Imagem 1" },
                { src: AmacImg2PNG, webp: AmacImg2WebP, alt: "Muito Além de um Câncer - Imagem 2" },
                { src: AmacImg3PNG, webp: AmacImg3WebP, alt: "Muito Além de um Câncer - Imagem 3" },
                { src: AmacImg4PNG, webp: AmacImg4WebP, alt: "Muito Além de um Câncer - Imagem 4" },
                { src: AmacImg5PNG, webp: AmacImg5WebP, alt: "Muito Além de um Câncer - Imagem 5" },
                { src: AmacImg6PNG, webp: AmacImg6WebP, alt: "Muito Além de um Câncer - Imagem 6" },
                { src: AmacImg7PNG, webp: AmacImg7WebP, alt: "Muito Além de um Câncer - Imagem 7" },
                { src: AmacImg8PNG, webp: AmacImg8WebP, alt: "Muito Além de um Câncer - Imagem 8" },
                { src: AmacImg9PNG, webp: AmacImg9WebP, alt: "Muito Além de um Câncer - Imagem 9" },
                { src: AmacImg10PNG, webp: AmacImg10WebP, alt: "Muito Além de um Câncer - Imagem 10" },
                { src: AmacImg11PNG, webp: AmacImg11WebP, alt: "Muito Além de um Câncer - Imagem 11" },
                { src: AmacImg12PNG, webp: AmacImg12WebP, alt: "Muito Além de um Câncer - Imagem 12" },
                { src: AmacImg13PNG, webp: AmacImg13WebP, alt: "Muito Além de um Câncer - Imagem 13" },
            ]
        },
        {
            name: "Projeto AMIC",
            location: "Brasil",
            description: "O Projeto AMIC atua no apoio e desenvolvimento de comunidades necessitadas, focando em educação, saúde e desenvolvimento social. Através de ações práticas e programas estruturados, trabalhamos para criar oportunidades e transformar realidades.",
            instagram: "@projeto_amic",
            instagramLink: "https://www.instagram.com/projeto_amic/",
            images: [
                { src: AmicImg1PNG, webp: AmicImg1WebP, alt: "Projeto AMIC - Imagem 1" },
                { src: AmicImg2PNG, webp: AmicImg2WebP, alt: "Projeto AMIC - Imagem 2" },
                { src: AmicImg3PNG, webp: AmicImg3WebP, alt: "Projeto AMIC - Imagem 3" },
                { src: AmicImg4PNG, webp: AmicImg4WebP, alt: "Projeto AMIC - Imagem 4" },
                { src: AmicImg5PNG, webp: AmicImg5WebP, alt: "Projeto AMIC - Imagem 5" },
                { src: AmicImg6PNG, webp: AmicImg6WebP, alt: "Projeto AMIC - Imagem 6" },
                { src: AmicImg7PNG, webp: AmicImg7WebP, alt: "Projeto AMIC - Imagem 7" },
                { src: AmicImg8PNG, webp: AmicImg8WebP, alt: "Projeto AMIC - Imagem 8" },
                { src: AmicImg9PNG, webp: AmicImg9WebP, alt: "Projeto AMIC - Imagem 9" },
                { src: AmicImg10PNG, webp: AmicImg10WebP, alt: "Projeto AMIC - Imagem 10" },
                { src: AmicImg11PNG, webp: AmicImg11WebP, alt: "Projeto AMIC - Imagem 11" },
                { src: AmicImg12PNG, webp: AmicImg12WebP, alt: "Projeto AMIC - Imagem 12" },
                { src: AmicImg13PNG, webp: AmicImg13WebP, alt: "Projeto AMIC - Imagem 13" },
            ]
        }
    ];

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
                                +{images.length - 6}
                            </span>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );


    // const handleImageClick = (mission, slideIndex) => {
    //     setSelectedMission(mission);
    //     setInitialSlide(slideIndex);
    //     setModalOpen(true);
    //     document.body.style.overflow = 'hidden';
    // };

    // const closeModal = () => {
    //     setModalOpen(false);
    //     setSelectedMission(null);
    //     document.body.style.overflow = 'unset';
    // };

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
                    Nossas Missões
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
                                                Seguir no Instagram
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