import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// JPG/PNG imports
import GivingImgJPG from '../../assets/images/givingimg.jpg';
import VenmoImgPNG from '../../assets/images/venmo.png';
import ZelleImgPNG from '../../assets/images/zelle.png';
import DonateImgPNG from '../../assets/images/donation.png';

// WebP imports
import GivingImgWebP from '../../assets/images/givingimg.webp';
import VenmoImgWebP from '../../assets/images/venmo.webp';
import ZelleImgWebP from '../../assets/images/zelle.webp';
import DonateImgWebP from '../../assets/images/donation.webp';

const translations = {
    pt: {
        mainHeading: "Veja o que Deus pode fazer através da sua generosidade.",
        mainContent: {
            p1: "Contribuir é muito mais do que simplesmente entregar uma quantia em dinheiro; é uma profunda expressão de fé e gratidão a Deus. Quando devolvemos a Ele uma parte do que nos foi confiado, estamos reconhecendo Sua generosidade e soberania sobre nossas vidas. A prática de ofertar não apenas demonstra nossa confiança em Sua provisão, mas também reflete nossa disposição de participar ativamente em Sua obra.",
            p2: "Ao ofertar, estamos fazendo um investimento no avanço do Reino de Deus, apoiando projetos e ministérios que têm o potencial de impactar vidas de maneira significativa. Seja através de missões, ajuda a necessitados, ou suporte a atividades da igreja, cada contribuição se torna um instrumento de transformação. É uma oportunidade de ser parte de algo maior do que nós mesmos, de unir forças com outros crentes e criar um legado de fé e amor."
        },
        imageAlt: "Contribuição",
        waysToGive: {
            title: "Maneiras de Contribuir",
            cards: [
                {
                    title: "Contribua pelo Venmo",
                    content: "Facilite sua contribuição enviando ofertas rapidamente pelo Venmo. Uma maneira prática e segura de apoiar nossa missão e fortalecer a obra de Deus.",
                    linkText: "Venmo"
                },
                {
                    title: "Contribua pelo Zelle",
                    content: "Contribua de forma simples e segura usando o Zelle. Apoie nossa comunidade e ajude a expandir o reino de Deus com facilidade.",
                    linkText: "Zelle @ (469) 810-5158"
                },
                {
                    title: "Durante o Culto",
                    content: "Quer trazer sua oferta pessoalmente? Você pode contribuir durante o culto de domingo. Sua presença e apoio são muito importantes para nós!",
                    additionalInfo: "Domingos às 6:00PM"
                }
            ]
        }
    },
    en: {
        mainHeading: "See what God can do through your generosity.",
        mainContent: {
            p1: "Contributing is much more than simply giving an amount of money; it's a profound expression of faith and gratitude to God. When we return to Him a portion of what was entrusted to us, we are acknowledging His generosity and sovereignty over our lives. The practice of giving not only demonstrates our trust in His provision but also reflects our willingness to actively participate in His work.",
            p2: "When we give, we are investing in the advancement of God's Kingdom, supporting projects and ministries that have the potential to impact lives in meaningful ways. Whether through missions, helping those in need, or supporting church activities, each contribution becomes an instrument of transformation. It's an opportunity to be part of something bigger than ourselves, to join forces with other believers and create a legacy of faith and love."
        },
        imageAlt: "Giving",
        waysToGive: {
            title: "Ways to Give",
            cards: [
                {
                    title: "Give through Venmo",
                    content: "Simplify your giving by sending offerings quickly through Venmo. A practical and secure way to support our mission and strengthen God's work.",
                    linkText: "Venmo"
                },
                {
                    title: "Give through Zelle",
                    content: "Contribute simply and securely using Zelle. Support our community and help expand God's kingdom with ease.",
                    linkText: "Zelle @ (469) 810-5158"
                },
                {
                    title: "During Service",
                    content: "Want to bring your offering in person? You can contribute during Sunday service. Your presence and support are very important to us!",
                    additionalInfo: "Sundays at 6:00PM"
                }
            ]
        }
    },
    es: {
        mainHeading: "Mira lo que Dios puede hacer a través de tu generosidad.",
        mainContent: {
            p1: "Contribuir es mucho más que simplemente entregar una cantidad de dinero; es una profunda expresión de fe y gratitud a Dios. Cuando le devolvemos una parte de lo que nos fue confiado, estamos reconociendo Su generosidad y soberanía sobre nuestras vidas. La práctica de ofrendar no solo demuestra nuestra confianza en Su provisión, sino que también refleja nuestra disposición a participar activamente en Su obra.",
            p2: "Al ofrendar, estamos haciendo una inversión en el avance del Reino de Dios, apoyando proyectos y ministerios que tienen el potencial de impactar vidas de manera significativa. Ya sea a través de misiones, ayuda a necesitados, o apoyo a actividades de la iglesia, cada contribución se convierte en un instrumento de transformación. Es una oportunidad de ser parte de algo más grande que nosotros mismos, de unir fuerzas con otros creyentes y crear un legado de fe y amor."
        },
        imageAlt: "Ofrenda",
        waysToGive: {
            title: "Formas de Contribuir",
            cards: [
                {
                    title: "Contribuye por Venmo",
                    content: "Facilita tu contribución enviando ofrendas rápidamente por Venmo. Una manera práctica y segura de apoyar nuestra misión y fortalecer la obra de Dios.",
                    linkText: "Venmo"
                },
                {
                    title: "Contribuye por Zelle",
                    content: "Contribuye de forma simple y segura usando Zelle. Apoya nuestra comunidad y ayuda a expandir el reino de Dios con facilidad.",
                    linkText: "Zelle @ (469) 810-5158"
                },
                {
                    title: "Durante el Servicio",
                    content: "¿Quieres traer tu ofrenda en persona? Puedes contribuir durante el servicio dominical. ¡Tu presencia y apoyo son muy importantes para nosotros!",
                    additionalInfo: "Domingos a las 6:00PM"
                }
            ]
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const GivingSection = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    const cardImages = [
        { src: VenmoImgPNG, webp: VenmoImgWebP },
        { src: ZelleImgPNG, webp: ZelleImgWebP },
        { src: DonateImgPNG, webp: DonateImgWebP }
    ];

    const cardBackgrounds = ["bg-blue-300", "bg-purple-300", "bg-stone-300"];
    const cardLinks = [
        "https://venmo.com/u/MOCOP-church",
        "https://enroll.zellepay.com/register",
        null
    ];

    return (
        <div>
            <motion.section
                className="grid md:grid-cols-2 items-center md:gap-8 lg:gap-12 gap-8 max-w-7xl max-md:max-w-md mx-auto py-24 px-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="max-md:order-1 max-md:text-center" variants={itemVariants}>
                    <h3 className="text-yellowBtnHover md:text-3xl text-2xl md:leading-10 font-bold">
                        {texts.mainHeading}
                    </h3>
                    <p className="mt-10 text-sm text-gray-600">
                        {texts.mainContent.p1}
                    </p>
                    <p className="mt-4 text-sm text-gray-600">
                        {texts.mainContent.p2}
                    </p>
                </motion.div>
                <motion.div
                    className="w-full h-auto md:h-[470px] overflow-hidden rounded-md md:pl-4 lg:pl-8"
                    variants={itemVariants}
                >
                    <Image
                        src={GivingImgJPG}
                        webp={GivingImgWebP}
                        className="w-full h-full object-cover object-center rounded-md"
                        alt={texts.imageAlt}
                        loading="lazy"
                    />
                </motion.div>
            </motion.section>

            <motion.section
                className="px-6 py-24 mb-24 bg-bottomBar"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center" variants={itemVariants}>
                        <h2 className="text-3xl font-extrabold text-white uppercase">
                            {texts.waysToGive.title}
                        </h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12"
                        variants={containerVariants}
                    >
                        {texts.waysToGive.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="group overflow-hidden p-4 rounded-md hover:bg-primary transition-all duration-300"
                                variants={itemVariants}
                            >
                                <div className={`${cardBackgrounds[index]} rounded-md`}>
                                    <Image
                                        src={cardImages[index].src}
                                        webp={cardImages[index].webp}
                                        alt={card.title}
                                        className="w-full h-64 object-cover object-top rounded-md"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white group-hover:text-black mb-4 mt-10 transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-white group-hover:text-black text-sm transition-colors duration-300">
                                        {card.content}
                                    </p>
                                    {cardLinks[index] ? (
                                        <motion.a
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={cardLinks[index]}
                                            className="btn mt-6 md:mt-8 mb-0 md:mb-8"
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            {card.linkText}
                                        </motion.a>
                                    ) : (
                                        <p className="group-hover:text-black text-sm transition-colors duration-300 mt-6 md:mt-8 py-4 px-4 w-fit rounded-md mx-auto bg-yellowBtn text-footer uppercase font-bold">
                                            {card.additionalInfo}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default GivingSection;