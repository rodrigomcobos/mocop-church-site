import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { FaQuoteRight, FaStar } from "react-icons/fa";

// Original images
import ReviewPhoto1PNG from '../../assets/images/review1.png';
import ReviewPhoto2PNG from '../../assets/images/review2.png';
import ReviewPhoto3PNG from '../../assets/images/review3.png';

// WebP versions
import ReviewPhoto1WebP from '../../assets/images/review1.webp';
import ReviewPhoto2WebP from '../../assets/images/review2.webp';
import ReviewPhoto3WebP from '../../assets/images/review3.webp';

const Testimonials = () => {
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

    const testimonials = [
        {
            photo: { png: ReviewPhoto1PNG, webp: ReviewPhoto1WebP },
            name: "Paulo Lima",
            text: "A primeira vez que eu, minha esposa e minha filha entramos lá, nos sentimos em casa, um ótimo lugar para adorar e se conectar. Se você é brasileiro, americano ou de qualquer outro país, você será bem-vindo."
        },
        {
            photo: { png: ReviewPhoto2PNG, webp: ReviewPhoto2WebP },
            name: "Anastacio Mesquita",
            text: "Culto maravilhoso, muitos receptivos."
        },
        {
            photo: { png: ReviewPhoto3PNG, webp: ReviewPhoto3WebP },
            name: "Rodrigo Cobos",
            text: "Ótimo lugar para servir a Deus. Louvor muito bom, igreja bem atenciosa."
        }
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
                        Depoimentos dos Membros
                    </h2>
                    <p className="text-md text-gray-800 mt-6 leading-relaxed">
                        Veja o que nossos membros e visitantes dizem sobre a nossa igreja. Suas palavras nos inspiram e fortalecem nossa comunidade de fé. Compartilhe sua experiência conosco!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center mt-16">
                    {testimonials.map((testimonial, index) => (
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
                                    src={testimonial.photo.png}
                                    webp={testimonial.photo.webp}
                                    className="w-14 h-14"
                                    alt={testimonial.name}
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
                    href="https://www.google.com/search?q=igreja+brasileira+em+lewisville&sca_esv=210a01dbe07330e6&sxsrf=ADLYWIKDjnkT0bZTbbH4qocPhUb8Hsv92Q%3A1728089586196&source=hp&ei=8o0AZ8q7Cbi40PEPrNHS-Aw&iflsig=AL9hbdgAAAAAZwCcAvcVFjKGICKJnLHmIEGyp5JGMc7D&oq=igre&gs_lp=Egdnd3Mtd2l6IgRpZ3JlKgIIADIEECMYJzIKECMYgAQYJxiKBTIEECMYJzILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIQEC4YgAQYFBiHAhjHARivATIFEAAYgAQyBRAAGIAEMhAQLhiABBgUGIcCGMcBGK8BSIgQUJ0EWKsHcAF4AJABAJgBZqAB8wKqAQMzLjG4AQPIAQD4AQGYAgWgAoADqAIKwgIHECMYJxjqAsICCxAuGIAEGJECGIoFwgILEAAYgAQYsQMYgwHCAggQLhiABBixA8ICCBAuGIAEGNQCwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBjHARiOBRivAcICDRAAGIAEGLEDGBQYhwLCAggQABiABBixA5gDBJIHAzQuMaAH1jQ&sclient=gws-wiz#"
                    target="_blank"
                    rel="noreferrer"
                    type="button"
                    className="btn flex mt-24"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Deixe sua avaliação
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Testimonials;