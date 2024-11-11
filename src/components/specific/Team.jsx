import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG and WebP formats for each team member
import CarlosPNG from '../../assets/images/carlos.png';
import CarlosWebP from '../../assets/images/carlos.webp';
import KesiaPNG from '../../assets/images/kesia.png';
import KesiaWebP from '../../assets/images/kesia.webp';
import MariaPNG from '../../assets/images/maria.png';
import MariaWebP from '../../assets/images/maria.webp';
import OcdPNG from '../../assets/images/ocd.png';
import OcdWebP from '../../assets/images/ocd.webp';

const translations = {
    pt: {
        title: "Conheça a Nossa Liderança",
        subtitle: "Unidos pela fé e pelo propósito de servir, nossa equipe está comprometida em liderar, guiar e fortalecer nossa comunidade em cada passo da jornada espiritual.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastora / Líder de Louvor",
            worshipLeader: "Tesoureira",
            cameraman: "Cameraman",
            coordinator: "Coordenadora",
            webDesigner: "Web Designer",
            auxpastor: "Pastor Auxiliar",
        },
        teamMembers: [
            {
                name: "Pr. Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Pra. Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Pra. Maria Vale",
                role: "auxpastor"
            },
            {
                name: "Pr. Ocidi Vale",
                role: "auxpastor"
            }
        ]
    },
    en: {
        title: "Meet Our Leadership",
        subtitle: "United by faith and the purpose to serve, our team is committed to leading, guiding, and strengthening our community in every step of the spiritual journey.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastor / Worship Leader",
            worshipLeader: "Treasurer",
            cameraman: "Cameraman",
            coordinator: "Coordinator",
            webDesigner: "Web Designer",
            auxpastor: "Auxiliary Pastor",
        },
        teamMembers: [
            {
                name: "Pr. Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Pra. Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Pra. Maria Vale",
                role: "auxpastor"
            },
            {
                name: "Pr. Ocidi Vale",
                role: "auxpastor"
            }
        ]
    },
    es: {
        title: "Conoce a Nuestro Liderazgo",
        subtitle: "Unidos por la fe y el propósito de servir, nuestro equipo está comprometido a liderar, guiar y fortalecer nuestra comunidad en cada paso del camino espiritual.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastora / Líder de Alabanza",
            worshipLeader: "Tesorera",
            cameraman: "Camarógrafo",
            coordinator: "Coordinadora",
            webDesigner: "Diseñador Web",
            auxpastor: "Pastor Auxiliar",
        },
        teamMembers: [
            {
                name: "Pr. Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Pra. Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Pra. Maria Vale",
                role: "auxpastor"
            },
            {
                name: "Pr. Ocidi Vale",
                role: "auxpastor"
            }
        ]
    }
};

const memberImages = {
    "Pr. Carlos Oliveira": { png: CarlosPNG, webp: CarlosWebP },
    "Pra. Kesia Veras": { png: KesiaPNG, webp: KesiaWebP },
    "Pra. Maria Vale": { png: MariaPNG, webp: MariaWebP },
    "Pr. Ocidi Vale": { png: OcdPNG, webp: OcdWebP }
};

const TeamMemberCard = ({ member, roles, index }) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 0.9, // Changed from 1.05 to 0.9 to make it smaller on hover
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="rounded-md overflow-hidden max-md:max-w-[300px] text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.div
                className="relative w-full pb-[100%] rounded-full border-2 border-yellowBtnHover overflow-hidden"
                variants={imageVariants}
            >
                <Image
                    src={memberImages[member.name].png}
                    webp={memberImages[member.name].webp}
                    className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-full border-2 border-yellowBtnHover"
                    alt={member.name}
                    loading="lazy"
                />
            </motion.div>
            <motion.div
                className="p-4 bg-white text-center"
                variants={textVariants}
            >
                <h4 className="text-yellowBtnHover text-lg font-bold">{member.name}</h4>
                <p className="text-gray-600 text-md mt-1">{roles[member.role]}</p>
            </motion.div>
        </motion.div>
    );
};

const Team = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="font-[sans-serif] my-24 px-6">
            <div className="max-w-4xl lg:max-w-7xl mx-auto">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                >
                    <h2 className="text-yellowBtnHover text-4xl font-extrabold">
                        {texts.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        {texts.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 max-md:justify-center mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {texts.teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            member={member}
                            roles={texts.roles}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Team;