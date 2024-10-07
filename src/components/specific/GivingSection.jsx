import React from 'react'
import GivingImg from '../../assets/images/givingimg.jpg'
import Venmo from '../../assets/images/venmo.png'
import Zelle from '../../assets/images/zelle.png'
import Donate from '../../assets/images/donation.png'
import { motion } from 'framer-motion'

const GivingSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

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
    }

    return (
        <div>
            <motion.section
                className="grid md:grid-cols-2 items-center md:gap-8 lg:gap-12 gap-8 max-w-7xl max-md:max-w-md mx-auto py-24 px-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="max-md:order-1 max-md:text-center" variants={itemVariants}>
                    <h3 className="text-yellowBtnHover md:text-3xl text-2xl md:leading-10 font-bold">Veja o que Deus pode fazer através da sua generosidade.</h3>
                    <p className="mt-10 text-sm text-gray-600">Contribuir é muito mais do que simplesmente entregar uma quantia em dinheiro; é uma profunda expressão de fé e gratidão a Deus. Quando devolvemos a Ele uma parte do que nos foi confiado, estamos reconhecendo Sua generosidade e soberania sobre nossas vidas. A prática de ofertar não apenas demonstra nossa confiança em Sua provisão, mas também reflete nossa disposição de participar ativamente em Sua obra.</p>
                    <p className="mt-4 text-sm text-gray-600">Ao ofertar, estamos fazendo um investimento no avanço do Reino de Deus, apoiando projetos e ministérios que têm o potencial de impactar vidas de maneira significativa. Seja através de missões, ajuda a necessitados, ou suporte a atividades da igreja, cada contribuição se torna um instrumento de transformação. É uma oportunidade de ser parte de algo maior do que nós mesmos, de unir forças com outros crentes e criar um legado de fé e amor.</p>
                </motion.div>
                <motion.div
                    className="w-full h-auto md:h-[470px] overflow-hidden rounded-md md:pl-4 lg:pl-8"
                    variants={itemVariants}
                >
                    <img
                        src={GivingImg}
                        className="w-full h-full object-cover object-center rounded-md"
                        alt="Giving"
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
                        <h2 className="text-3xl font-extrabold text-white uppercase">Maneiras de Contribuir</h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12"
                        variants={containerVariants}
                    >
                        {/* Card 1, 2, 3 */}
                        {[
                            { img: Venmo, title: "Contribua pelo Venmo", content: "Facilite sua contribuição enviando ofertas rapidamente pelo Venmo. Uma maneira prática e segura de apoiar nossa missão e fortalecer a obra de Deus.", link: "https://venmo.com/u/MOCOP-church", linkText: "Venmo" },
                            { img: Zelle, title: "Contribua pelo Zelle", content: "Contribua de forma simples e segura usando o Zelle. Apoie nossa comunidade e ajude a expandir o reino de Deus com facilidade.", link: "https://zelle.com/", linkText: "Zelle" },
                            { img: Donate, title: "Durante o Culto", content: "Quer trazer sua oferta pessoalmente? Você pode contribuir durante o culto de domingo. Sua presença e apoio são muito importantes para nós!", additionalInfo: "Domingos às 6:00PM" }
                        ].map((card, index) => (
                            <motion.div key={index} className="group overflow-hidden p-4 rounded-md hover:bg-primary transition-all duration-300" variants={itemVariants}>
                                <div className={`bg-${index === 0 ? 'blue' : index === 1 ? 'purple' : 'stone'}-300 rounded-md`}>
                                    <img src={card.img} alt={card.title} className="w-full h-64 object-cover object-top rounded-md" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white group-hover:text-black mb-4 mt-10 transition-colors duration-300">{card.title}</h3>
                                    <p className="text-white group-hover:text-black text-sm transition-colors duration-300">{card.content}</p>
                                    {card.link ? (
                                        <motion.a
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={card.link}
                                            className="btn mt-6 md:mt-8 mb-0 md:mb-8"
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            {card.linkText}
                                        </motion.a>
                                    ) : (
                                        <p className="group-hover:text-black text-sm transition-colors duration-300 mt-6 md:mt-8 py-4 px-4 w-fit rounded-md mx-auto bg-yellowBtn text-footer uppercase font-bold">{card.additionalInfo}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

export default GivingSection