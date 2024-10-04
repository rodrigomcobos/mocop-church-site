import React from 'react'
import { motion } from 'framer-motion'
import CardImg1 from '../../assets/images/churchimg3.jpeg'
import CardImg2 from '../../assets/images/churchimg10.jpeg'
import CardImg3 from '../../assets/images/churchimg8.jpeg'
import CardImg4 from '../../assets/images/churchimg7.jpeg'

const HomeSermons = () => {
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

    const imageHoverVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="p-6 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-12 items-center mx-auto max-w-7xl text-center lg:text-left">
                <motion.section variants={itemVariants}>
                    <h2 className="text-3xl text-yellowBtnHover mb-4 font-bold">Pregações</h2>
                    <hr className="border-t-2 border-yellowBtnHover mb-6 max-w-[15rem] mx-auto lg:mx-0" />
                    <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-800">Revisite nossas pregações de Domingos passados</h2>
                    <motion.button
                        className='btn mt-6 md:mt-8'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VEJA MAIS
                    </motion.button>
                </motion.section>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                    {[
                        { img: CardImg1, date: "10 FEB 2024", pastor: "PR CARLOS OLIVEIRA" },
                        { img: CardImg2, date: "7 JUN 2024", pastor: "PRA KESIA VERAS" },
                        { img: CardImg3, date: "5 OCT 2024", pastor: "PR CARLOS OLIVEIRA" },
                        { img: CardImg4, date: "10 DEC 2024", pastor: "PRA KESIA VERAS" }
                    ].map((sermon, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer rounded overflow-hidden group"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden rounded-md">
                                <motion.img
                                    src={sermon.img}
                                    alt={`Blog Post ${index + 1}`}
                                    className="w-full h-52 object-cover"
                                    whileHover="hover"
                                    variants={imageHoverVariants}
                                />
                            </div>
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">{sermon.date} | {sermon.pastor}</span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">Título da Pregação vai aqui</h3>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </motion.div>
    )
}

export default HomeSermons