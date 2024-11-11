import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG/JPG and WebP formats
import PastorImg1PNG from '../../assets/images/pastorimg1.png';
import PastorImg1WebP from '../../assets/images/pastorimg1.webp';

// Translations object
const translations = {
    pt: {
        title: "Pastor Carlos Oliveira",
        paragraphs: [
            "Carlos Oliveira nasceu em 1962, em Salvador, Bahia, e viveu uma trajetória de fé marcante. Em 1994, ele e sua esposa, Tereza Cristina, encontraram Cristo na Igreja Batista do Caminho das Árvores. Em 1997, mudaram-se para os EUA, fortalecendo sua caminhada espiritual na Shady Grove Brazilian Church, em Texas. Ambos cursaram o Christ for the Nations, onde foram consagrados pastores.",
            "Em 2004, fundaram a Comunidade Cristã Brasileira em Lewisville, Texas, com a missão de construir uma comunidade de fé acolhedora. Pastor Carlos tem um forte compromisso com missões, realizando viagens a Cuba e Guiné-Bissau, enquanto Tereza visitou Recife e Cuba. Atualmente, ele lidera a igreja com o apoio de Pastora Kesia Silva e os pastores auxiliares Ocidi e Maria, dedicados a compartilhar o evangelho e servir à comunidade."
        ],
        imageAlt: "Pastor Carlos Jorge"
    },
    en: {
        title: "Pastor Carlos Oliveira",
        paragraphs: [
            "Carlos Oliveira was born in 1962 in Salvador, Bahia, and has lived a remarkable journey of faith. In 1994, he and his wife, Tereza Cristina, found Christ at the Baptist Church of Caminho das Árvores. In 1997, they moved to the United States, where they strengthened their spiritual walk at Shady Grove Brazilian Church in Texas. Both attended Christ for the Nations, where they were ordained as pastors.",
            "In 2004, they founded the Brazilian Christian Community in Lewisville, Texas, with the mission of building a welcoming community of faith. Pastor Carlos has a strong commitment to missions, undertaking trips to Cuba and Guinea-Bissau, while Tereza visited Recife and Cuba. Today, he leads the church with the support of Pastor Kesia Silva and assistant pastors Ocidi and Maria, dedicated to sharing the gospel and serving the community."
        ],
        imageAlt: "Pastor Carlos Jorge"
    },
    es: {
        title: "Pastor Carlos Oliveira",
        paragraphs: [
            "Carlos Oliveira nació en 1962 en Salvador, Bahía, y ha vivido una notable trayectoria de fe. En 1994, él y su esposa, Tereza Cristina, encontraron a Cristo en la Iglesia Bautista del Camino de los Árboles. En 1997, se mudaron a los Estados Unidos, donde fortalecieron su camino espiritual en la Iglesia Brasileña Shady Grove en Texas. Ambos asistieron al instituto Christ for the Nations, donde fueron consagrados como pastores.",
            "En 2004, fundaron la Comunidad Cristiana Brasileña en Lewisville, Texas, con la misión de construir una comunidad de fe acogedora. El Pastor Carlos tiene un fuerte compromiso con las misiones, realizando viajes a Cuba y Guinea-Bisáu, mientras que Tereza visitó Recife y Cuba. Actualmente, lidera la iglesia con el apoyo de la Pastora Kesia Silva y los pastores asistentes Ocidi y María, dedicados a compartir el evangelio y servir a la comunidad."
        ],
        imageAlt: "Pastor Carlos Jorge"
    }
};

const contentVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const paragraphVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const AboutThePastorContent = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto my-12 sm:my-24 px-6">
                <motion.div
                    className="max-md:order-1 max-md:text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={contentVariants}
                >
                    <motion.h2
                        className="md:text-3xl text-3xl md:leading-10 font-extrabold text-yellowBtnHover mb-4"
                    >
                        {texts.title}
                    </motion.h2>
                    {texts.paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed"
                            variants={paragraphVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2
                            }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </motion.div>
                <motion.div
                    className="md:h-[450px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                >
                    <Image
                        src={PastorImg1PNG}
                        webp={PastorImg1WebP}
                        alt={texts.imageAlt}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutThePastorContent;