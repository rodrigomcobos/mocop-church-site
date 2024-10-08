import React from 'react'
import { FaPeopleRoof, FaBookBible } from "react-icons/fa6";
import { FaGlobeAfrica, FaHands, FaHandsHelping } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AboutContent = () => {
    const MotionLink = motion(Link);

    const cards = [
        { icon: FaGlobeAfrica, title: "Sustentar a Obra Missionária Global", content: "Acreditamos firmemente na importância da missão de levar a mensagem do Evangelho a todos os cantos da Terra. Para isso, nos comprometemos a sustentar obras missionárias através de doações e recursos. Além de enviar novos obreiros para áreas onde a necessidade é maior, buscamos também apoiar e manter os missionários que já estão atuando no campo, garantindo que eles tenham o suporte necessário para continuar seu trabalho vital.", hasButton: true },
        { icon: FaHands, title: "Exaltar o Nome do Senhor", content: "Nossa visão é glorificar o nome do Senhor em todas as situações e contextos. Isso se reflete em nosso testemunho pessoal, nas ministrações da Palavra, nos louvores e nas nossas orações. Acreditamos que nossa vida deve ser um reflexo da fé que professamos, e por isso nos esforçamos para viver de maneira que honre a Deus em todas as nossas interações, mostrando Sua bondade e amor aos outros." },
        { icon: FaHandsHelping, title: "Apoio aos necessitados", content: "Inspirados pelo exemplo da igreja primitiva, conforme descrito em Atos, dedicamos nossos esforços a ajudar os necessitados, famintos e viúvas, com especial atenção para aqueles que compartilham da nossa fé. Estamos comprometidos em ser uma comunidade que se preocupa com o bem-estar do próximo, colocando a compaixão em ação e oferecendo apoio prático e espiritual a quem precisa. Acreditamos que, ao ajudar os menos afortunados, estamos não apenas atendendo a uma necessidade física, mas também vivendo a essência do evangelho." },
        { icon: FaPeopleRoof, title: "Fazer Discipulos e Promover o Crescimento Espiritual", content: "Em Mateus 28:19, somos chamados a \"fazer discípulos de todas as nações\". Nossa missão é mais do que apenas batizar; é sobre discipular cada indivíduo, conduzindo-os a um relacionamento profundo e obediente com Deus. Na nossa igreja, priorizamos o estudo constante da Palavra de Deus, pois acreditamos que esse é o fundamento para um crescimento espiritual saudável. Nosso objetivo é equipar os membros da nossa congregação para que eles possam não apenas compreender os princípios bíblicos, mas também aplicá-los em suas vidas diárias, tornando-se verdadeiros testemunhos do amor de Cristo e produzindo frutos em suas comunidades." }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="bg-white flex max-lg:flex-col px-6 my-14 sm:my-24 gap-12 max-w-7xl mx-auto">
                <motion.div variants={slideIn}>
                    <h2 className="text-yellowBtnHover text-3xl sm:text-4xl font-extrabold mb-6">Nossa Visão e Missão</h2>
                    <p className="text-black text-sm leading-relaxed">Nossa igreja foi fundada em 2004, na vibrante cidade de Lewisville, Texas. Nossa jornada começou de maneira humilde, quando nos reunimos inicialmente como uma célula em uma igreja brasileira. Durante esse período, fomos abençoados com a presença de Deus e experimentamos um crescimento significativo, tanto espiritual quanto em número de membros. </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto"
                    variants={staggerChildren}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="text-left bg-primary hover:ring-2 ring-yellow-700 transition duration-300 rounded-lg shadow p-8 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeIn}
                        >
                            <card.icon className="absolute bottom-6 right-6 text-footer text-[180px] opacity-10 transform translate-x-1/8 translate-y-1/8" />
                            <h3 className="text-footer text-xl font-semibold mt-6 mb-3 relative z-10">{card.title}</h3>
                            <p className="text-black text-sm leading-relaxed relative z-10">{card.content}</p>
                            {card.hasButton && (
                                <MotionLink
                                    to="/missions"
                                    className="btn mt-8 relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Veja mais sobre Missões
                                </MotionLink>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default AboutContent