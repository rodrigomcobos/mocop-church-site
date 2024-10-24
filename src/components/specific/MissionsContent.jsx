import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images for Amic
import AmacImg1 from '../../assets/images/amacimg1.png';
import AmacImg2 from '../../assets/images/amacimg2.png';
import AmacImg3 from '../../assets/images/amacimg3.png';
import AmacImg4 from '../../assets/images/amacimg4.png';
import AmacImg5 from '../../assets/images/amacimg5.png';
import AmacImg6 from '../../assets/images/amacimg6.png';
import AmacImg7 from '../../assets/images/amacimg7.png';
import AmacImg8 from '../../assets/images/amacimg8.png';
import AmacImg9 from '../../assets/images/amacimg9.png';
import AmacImg10 from '../../assets/images/amacimg10.png';
import AmacImg11 from '../../assets/images/amacimg11.png';
import AmacImg12 from '../../assets/images/amacimg12.png';
import AmacImg13 from '../../assets/images/amacimg13.png';

// Import images for Amic
import AmicImg1 from '../../assets/images/amicimg1.png';
import AmicImg2 from '../../assets/images/amicimg2.png';
import AmicImg3 from '../../assets/images/amicimg3.png';
import AmicImg4 from '../../assets/images/amicimg4.png';
import AmicImg5 from '../../assets/images/amicimg5.png';
import AmicImg6 from '../../assets/images/amicimg6.png';
import AmicImg7 from '../../assets/images/amicimg7.png';
import AmicImg8 from '../../assets/images/amicimg8.png';
import AmicImg9 from '../../assets/images/amicimg9.png';
import AmicImg10 from '../../assets/images/amicimg10.png';
import AmicImg11 from '../../assets/images/amicimg11.png';
import AmicImg12 from '../../assets/images/amicimg12.png';
import AmicImg13 from '../../assets/images/amicimg13.png';

// Import images for Amis
import AmisImg1 from '../../assets/images/amisimg1.png';
import AmisImg2 from '../../assets/images/amisimg2.png';
import AmisImg3 from '../../assets/images/amisimg3.png';
import AmisImg4 from '../../assets/images/amisimg4.png';
import AmisImg5 from '../../assets/images/amisimg5.png';
import AmisImg6 from '../../assets/images/amisimg6.png';
import AmisImg7 from '../../assets/images/amisimg7.png';
import AmisImg8 from '../../assets/images/amisimg8.png';
import AmisImg9 from '../../assets/images/amisimg9.png';
import AmisImg10 from '../../assets/images/amisimg10.png';
import AmisImg11 from '../../assets/images/amisimg11.png';
import AmisImg12 from '../../assets/images/amisimg12.png';
import AmisImg13 from '../../assets/images/amisimg13.jpg';

const MissionsContent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMission, setSelectedMission] = useState(null);
    const [initialSlide, setInitialSlide] = useState(0);

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const modalSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: initialSlide,
        arrows: true
    };

    const missions = [
        {
            name: "AMIS Pá Bissau",
            location: "Guiné-Bissau, África",
            description: "Nossa missão na Guiné-Bissau trabalha para transformar vidas através do evangelho, educação e assistência social. Em parceria com organizações locais, desenvolvemos projetos que impactam comunidades e formam novos líderes, levando esperança e transformação para a região.",
            instagram: "@amispabissau",
            instagramLink: "https://www.instagram.com/amispabissau/",
            images: [
                AmisImg1, AmisImg2, AmisImg3, AmisImg4, AmisImg5, AmisImg6, AmisImg7,
                AmisImg8, AmisImg9, AmisImg10, AmisImg11, AmisImg12, AmisImg13
            ]
        },
        {
            name: "Muito Além de um Câncer",
            location: "Brasil",
            description: "Uma missão dedicada a oferecer apoio, esperança e amor a pessoas que enfrentam o câncer e suas famílias. Através de ações práticas e suporte espiritual, trabalhamos para mostrar que existe vida, propósito e alegria mesmo durante os momentos mais desafiadores da jornada contra o câncer.",
            instagram: "@muitoalemdeumcancer",
            instagramLink: "https://www.instagram.com/muitoalemdeumcancer/",
            images: [
                AmacImg1, AmacImg2, AmacImg3, AmacImg4, AmacImg5, AmacImg6, AmacImg7,
                AmacImg8, AmacImg9, AmacImg10, AmacImg11, AmacImg12, AmacImg13
            ]
        },
        {
            name: "Projeto AMIC",
            location: "Brasil",
            description: "O Projeto AMIC atua no apoio e desenvolvimento de comunidades necessitadas, focando em educação, saúde e desenvolvimento social. Através de ações práticas e programas estruturados, trabalhamos para criar oportunidades e transformar realidades.",
            instagram: "@projeto_amic",
            instagramLink: "https://www.instagram.com/projeto_amic/",
            images: [
                AmicImg1, AmicImg2, AmicImg3, AmicImg4, AmicImg5, AmicImg6, AmicImg7,
                AmicImg8, AmicImg9, AmicImg10, AmicImg11, AmicImg12, AmicImg13
            ]
        }
    ];

    const handleImageClick = (mission, slideIndex) => {
        setSelectedMission(mission);
        setInitialSlide(slideIndex);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedMission(null);
        document.body.style.overflow = 'unset';
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

    return (
        <>
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
                                    className="grid md:grid-cols-2 gap-6 md:gap-12 items-starttransition-all duration-300 p-6"
                                    variants={itemVariants}
                                >
                                    <div className={`space-y-4 md:space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <motion.div
                                            className="space-y-4"
                                            whileHover={{ scale: 1.01 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <motion.h2
                                                className="text-2xl md:text-3xl font-bold text-yellowBtnHover"
                                            >
                                                {mission.name}
                                            </motion.h2>

                                            <motion.div className="flex items-center text-gray-600 space-x-2">
                                                <FaMapMarkerAlt className="text-bottomBar" />
                                                <span>{mission.location}</span>
                                            </motion.div>

                                            <motion.p className="text-gray-600 leading-relaxed">
                                                {mission.description}
                                            </motion.p>

                                            <motion.div className="flex flex-col gap-4">
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
                                                    onClick={() => window.open(mission.instagramLink, '_blank', 'noopener,noreferrer')}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Seguir no Instagram
                                                </motion.button>
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className={`relative h-[300px] md:h-[400px] ${index % 2 === 1 ? 'md:order-1' : ''}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="h-full rounded-lg overflow-hidden">
                                            <Slider {...slickSettings}>
                                                {mission.images.map((image, imageIndex) => (
                                                    <div
                                                        key={imageIndex}
                                                        className="outline-none"
                                                        onClick={() => handleImageClick(mission, imageIndex)}
                                                    >
                                                        <div className="h-[300px] md:h-[400px]">
                                                            <img
                                                                src={image}
                                                                alt={`${mission.name} - Imagem ${imageIndex + 1}`}
                                                                className="w-full h-full object-cover"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </motion.div>
                                </motion.section>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            {modalOpen && selectedMission && (
                <div className="fixed inset-0 z-50 bg-black">
                    <div className="absolute top-4 right-4 z-[60]">
                        <button
                            onClick={closeModal}
                            className="p-2 rounded-full bg-black bg-opacity-50 text-white"
                            aria-label="Close modal"
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>

                    <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-full max-w-4xl">
                            <Slider {...modalSettings}>
                                {selectedMission.images.map((image, imageIndex) => (
                                    <div key={imageIndex} className="outline-none">
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={image}
                                                alt={`${selectedMission.name} - Imagem ${imageIndex + 1}`}
                                                className="max-w-full max-h-[80vh] object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .slick-dots {
                    bottom: 16px;
                }

                .slick-dots li button:before {
                    color: white;
                    opacity: 0.5;
                }

                .slick-dots li.slick-active button:before {
                    opacity: 1;
                }

                .slick-prev,
                .slick-next {
                    z-index: 10;
                }

                .slick-prev {
                    left: 15px;
                }

                .slick-next {
                    right: 15px;
                }

                @media (max-width: 767px) {
                    .slick-prev,
                    .slick-next {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default MissionsContent;