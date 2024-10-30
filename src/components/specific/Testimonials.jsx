// src/components/specific/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { useLanguage } from '../../context/LanguageContext';

// Original images
import ReviewPhoto1PNG from '../../assets/images/review1.png';
import ReviewPhoto2PNG from '../../assets/images/review2.png';
import ReviewPhoto3PNG from '../../assets/images/review3.png';

// WebP versions
import ReviewPhoto1WebP from '../../assets/images/review1.webp';
import ReviewPhoto2WebP from '../../assets/images/review2.webp';
import ReviewPhoto3WebP from '../../assets/images/review3.webp';

// Translations object
const translations = {
    pt: {
        title: "Depoimentos dos Membros",
        description: "Veja o que nossos membros e visitantes dizem sobre a nossa igreja. Suas palavras nos inspiram e fortalecem nossa comunidade de fé. Compartilhe sua experiência conosco!",
        reviewButton: "Deixe sua avaliação",
        testimonials: [
            {
                name: "Paulo Lima",
                text: "A primeira vez que eu, minha esposa e minha filha entramos lá, nos sentimos em casa, um ótimo lugar para adorar e se conectar. Se você é brasileiro, americano ou de qualquer outro país, você será bem-vindo."
            },
            {
                name: "Anastacio Mesquita",
                text: "Culto maravilhoso, muitos receptivos."
            },
            {
                name: "Rodrigo Cobos",
                text: "Ótimo lugar para servir a Deus. Louvor muito bom, igreja bem atenciosa."
            }
        ],
        photoAlt: "Foto de perfil de"
    },
    en: {
        title: "Member Testimonials",
        description: "See what our members and visitors say about our church. Their words inspire us and strengthen our faith community. Share your experience with us!",
        reviewButton: "Leave your review",
        testimonials: [
            {
                name: "Paulo Lima",
                text: "The first time my wife, daughter and I walked in there, we felt at home, a great place to worship and connect. Whether you're Brazilian, American, or from any other country, you'll be welcome."
            },
            {
                name: "Anastacio Mesquita",
                text: "Wonderful service, very receptive."
            },
            {
                name: "Rodrigo Cobos",
                text: "Great place to serve God. Very good worship, very attentive church."
            }
        ],
        photoAlt: "Profile photo of"
    },
    es: {
        title: "Testimonios de los Miembros",
        description: "Mira lo que nuestros miembros y visitantes dicen sobre nuestra iglesia. Sus palabras nos inspiran y fortalecen nuestra comunidad de fe. ¡Comparte tu experiencia con nosotros!",
        reviewButton: "Deja tu evaluación",
        testimonials: [
            {
                name: "Paulo Lima",
                text: "La primera vez que entramos allí mi esposa, mi hija y yo, nos sentimos como en casa, un gran lugar para adorar y conectar. Si eres brasileño, estadounidense o de cualquier otro país, serás bienvenido."
            },
            {
                name: "Anastacio Mesquita",
                text: "Servicio maravilloso, muy receptivos."
            },
            {
                name: "Rodrigo Cobos",
                text: "Excelente lugar para servir a Dios. Muy buena alabanza, iglesia muy atenta."
            }
        ],
        photoAlt: "Foto de perfil de"
    }
};

const Testimonials = () => {
    const { language } = useLanguage();
    const texts = translations[language];

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

    const testimonialPhotos = [
        { png: ReviewPhoto1PNG, webp: ReviewPhoto1WebP },
        { png: ReviewPhoto2PNG, webp: ReviewPhoto2WebP },
        { png: ReviewPhoto3PNG, webp: ReviewPhoto3WebP }
    ];

    return (
        <motion.div
            className="mt-6 py-24 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    variants={itemVariants}
                >
                    <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-4">
                        {texts.title}
                    </h2>
                    <p className="text-md text-gray-800 mt-6 leading-relaxed">
                        {texts.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center mt-16">
                    {texts.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="max-w-[350px] h-auto shadow-md lg:p-8 p-6 rounded-md bg-white relative hover:shadow-xl transition duration-300 hover:ring-2 hover:ring-yellow-600"
                            variants={itemVariants}
                        >
                            <div className="bg-yellowBtnHover flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                <FaQuoteRight size={24} className="text-white" />
                            </div>

                            <div className="flex items-center">
                                <Image
                                    src={testimonialPhotos[index].png}
                                    webp={testimonialPhotos[index].webp}
                                    className="w-14 h-14"
                                    alt={`${texts.photoAlt} ${testimonial.name}`}
                                    loading="lazy"
                                />

                                <div className="ml-4">
                                    <h2 className="text-md font-extrabold">{testimonial.name}</h2>
                                    <div className="flex space-x-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="w-4 fill-yellow-600" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-md leading-relaxed">{testimonial.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    href="https://www.google.com/search?q=igreja+brasileira+em+lewisville"
                    target="_blank"
                    rel="noreferrer"
                    type="button"
                    className="btn flex mt-24"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {texts.reviewButton}
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Testimonials;