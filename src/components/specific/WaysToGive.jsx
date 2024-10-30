// src/components/specific/WaysToGive.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Import images
import StripImgJPG from '../../assets/images/churchimg38.jpg';
import StripImgWebP from '../../assets/images/churchimg38.webp';
import Donate from '../../assets/images/donate.svg';

// Translations object
const translations = {
    pt: {
        title: "Maneiras de Doar",
        quote: "Dê a outras pessoas e Deus dará a você. Ele lhe dará ainda mais do que você deu",
        reference: "- Lucas 6:38",
        sections: {
            tithe: {
                title: "Dizíme nos Domingos",
                description: "Aproveite a chance de fazer parte de algo maior e contribua com a nossa igreja durante os cultos dominicais. " +
                    "Sua doação não apenas apoia as atividades da nossa comunidade de fé, mas também fortalece os projetos que " +
                    "espalham amor e esperança."
            },
            volunteer: {
                title: "Seja um Voluntário",
                description: "Venha fazer parte de nossa missão e sirva como voluntário em nossa igreja! Ao dedicar seu tempo e talentos, " +
                    "você estará contribuindo para transformar vidas, fortalecer nossa comunidade de fé e espalhar amor e esperança para todos."
            },
            missionary: {
                title: "Ajude um missionário",
                description: "Estenda suas mãos e ajude um missionário da nossa igreja! Através de suas contribuições, estamos fortalecendo " +
                    "o trabalho de missionários dedicados que, com fé inabalável, levam esperança e amor a pessoas necessitadas em " +
                    "todo o mundo. Juntos, podemos apoiar essa missão sagrada de alcançar os perdidos e transformar vidas."
            }
        },
        button: "Mande uma Oferta",
        imageAlt: "imagem de doação"
    },
    en: {
        title: "Ways to Give",
        quote: "Give to others and God will give to you. He will give you even more than you gave",
        reference: "- Luke 6:38",
        sections: {
            tithe: {
                title: "Sunday Tithes",
                description: "Take the opportunity to be part of something bigger and contribute to our church during Sunday services. " +
                    "Your donation not only supports our faith community's activities but also strengthens projects that " +
                    "spread love and hope."
            },
            volunteer: {
                title: "Become a Volunteer",
                description: "Come be part of our mission and serve as a volunteer in our church! By dedicating your time and talents, " +
                    "you'll be contributing to transform lives, strengthen our faith community, and spread love and hope to all."
            },
            missionary: {
                title: "Help a Missionary",
                description: "Extend your hands and help a missionary from our church! Through your contributions, we are strengthening " +
                    "the work of dedicated missionaries who, with unwavering faith, bring hope and love to people in need " +
                    "around the world. Together, we can support this sacred mission of reaching the lost and transforming lives."
            }
        },
        button: "Send an Offering",
        imageAlt: "giving image"
    },
    es: {
        title: "Formas de Dar",
        quote: "Da a otros y Dios te dará. Él te dará aún más de lo que diste",
        reference: "- Lucas 6:38",
        sections: {
            tithe: {
                title: "Diezmos los Domingos",
                description: "Aprovecha la oportunidad de ser parte de algo más grande y contribuye con nuestra iglesia durante los servicios dominicales. " +
                    "Tu donación no solo apoya las actividades de nuestra comunidad de fe, sino que también fortalece los proyectos que " +
                    "difunden amor y esperanza."
            },
            volunteer: {
                title: "Sé un Voluntario",
                description: "¡Ven a ser parte de nuestra misión y sirve como voluntario en nuestra iglesia! Al dedicar tu tiempo y talentos, " +
                    "estarás contribuyendo a transformar vidas, fortalecer nuestra comunidad de fe y difundir amor y esperanza a todos."
            },
            missionary: {
                title: "Ayuda a un Misionero",
                description: "¡Extiende tus manos y ayuda a un misionero de nuestra iglesia! A través de tus contribuciones, estamos fortaleciendo " +
                    "el trabajo de misioneros dedicados que, con fe inquebrantable, llevan esperanza y amor a personas necesitadas en " +
                    "todo el mundo. Juntos, podemos apoyar esta misión sagrada de alcanzar a los perdidos y transformar vidas."
            }
        },
        button: "Enviar una Ofrenda",
        imageAlt: "imagen de donación"
    }
};

const WaysToGive = () => {
    const { language } = useLanguage();
    const texts = translations[language];
    const MotionLink = motion(Link);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="bg-bottomBar px-6 md:px-8 py-16 md:py-24 font-[sans-serif] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12 relative">
                <img
                    src={Donate}
                    className="absolute right-80 top-[65%] transform -translate-y-1/2 opacity-10"
                    alt={texts.imageAlt}
                    loading="lazy"
                />

                <motion.div className="text-center md:text-left relative z-10" variants={containerVariants}>
                    <motion.h2
                        variants={itemVariants}
                        className="text-white text-5xl md:text-6xl mb-2 font-seaweed"
                    >
                        {texts.title}
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-md text-white mb-10"
                    >
                        "{texts.quote}"
                        <span className='font-thin italic'>{texts.reference}</span>
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-2xl font-extrabold text-white mb-1"
                    >
                        {texts.sections.tithe.title}
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-md text-white mb-5"
                    >
                        {texts.sections.tithe.description}
                    </motion.p>

                    <motion.hr variants={itemVariants} className='border-t-2 border-white my-6 md:my-8' />

                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-2xl font-extrabold text-white mb-1"
                    >
                        {texts.sections.volunteer.title}
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-md text-white mb-5"
                    >
                        {texts.sections.volunteer.description}
                    </motion.p>

                    <motion.hr variants={itemVariants} className='border-t-2 border-white my-6 md:my-8' />

                    <motion.h2
                        variants={itemVariants}
                        className="text-lg md:text-2xl font-extrabold text-white mb-1"
                    >
                        {texts.sections.missionary.title}
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-md text-white mb-5"
                    >
                        {texts.sections.missionary.description}
                    </motion.p>

                    <MotionLink
                        to="/giving"
                        className="btn mt-8"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {texts.button}
                    </MotionLink>
                </motion.div>

                <motion.div
                    className="hidden md:block text-center overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        src={StripImgJPG}
                        webp={StripImgWebP}
                        alt={texts.imageAlt}
                        className="max-w-sm md:max-w-md mx-auto rounded-lg shadow-md"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WaysToGive;