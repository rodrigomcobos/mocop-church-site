import React from 'react';
import { FaPeopleRoof, FaBookBible } from "react-icons/fa6";
import { FaGlobeAfrica, FaHands, FaHandsHelping } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title: "Nossa Visão e Missão",
        introduction: "Nossa igreja foi fundada em 2004, na vibrante cidade de Lewisville, Texas. Nossa jornada começou de maneira humilde, quando nos reunimos inicialmente como uma célula em uma igreja brasileira. Durante esse período, fomos abençoados com a presença de Deus e experimentamos um crescimento significativo, tanto espiritual quanto em número de membros.",
        missionsButton: "Veja mais sobre Missões",
        cards: [
            {
                title: "Sustentar a Obra Missionária Global",
                content: "Acreditamos firmemente na importância da missão de levar a mensagem do Evangelho a todos os cantos da Terra. Para isso, nos comprometemos a sustentar obras missionárias através de doações e recursos. Além de enviar novos obreiros para áreas onde a necessidade é maior, buscamos também apoiar e manter os missionários que já estão atuando no campo, garantindo que eles tenham o suporte necessário para continuar seu trabalho vital."
            },
            {
                title: "Exaltar o Nome do Senhor",
                content: "Nossa visão é glorificar o nome do Senhor em todas as situações e contextos. Isso se reflete em nosso testemunho pessoal, nas ministrações da Palavra, nos louvores e nas nossas orações. Acreditamos que nossa vida deve ser um reflexo da fé que professamos, e por isso nos esforçamos para viver de maneira que honre a Deus em todas as nossas interações, mostrando Sua bondade e amor aos outros."
            },
            {
                title: "Apoio aos necessitados",
                content: "Inspirados pelo exemplo da igreja primitiva, conforme descrito em Atos, dedicamos nossos esforços a ajudar os necessitados, famintos e viúvas, com especial atenção para aqueles que compartilham da nossa fé. Estamos comprometidos em ser uma comunidade que se preocupa com o bem-estar do próximo, colocando a compaixão em ação e oferecendo apoio prático e espiritual a quem precisa. Acreditamos que, ao ajudar os menos afortunados, estamos não apenas atendendo a uma necessidade física, mas também vivendo a essência do evangelho."
            },
            {
                title: "Fazer Discipulos e Promover o Crescimento Espiritual",
                content: "Em Mateus 28:19, somos chamados a \"fazer discípulos de todas as nações\". Nossa missão é mais do que apenas batizar; é sobre discipular cada indivíduo, conduzindo-os a um relacionamento profundo e obediente com Deus. Na nossa igreja, priorizamos o estudo constante da Palavra de Deus, pois acreditamos que esse é o fundamento para um crescimento espiritual saudável. Nosso objetivo é equipar os membros da nossa congregação para que eles possam não apenas compreender os princípios bíblicos, mas também aplicá-los em suas vidas diárias, tornando-se verdadeiros testemunhos do amor de Cristo e produzindo frutos em suas comunidades."
            }
        ]
    },
    en: {
        title: "Our Vision and Mission",
        introduction: "Our church was founded in 2004 in the vibrant city of Lewisville, Texas. Our journey began humbly, when we first gathered as a cell group in a Brazilian church. During this period, we were blessed with God's presence and experienced significant growth, both spiritually and in number of members.",
        missionsButton: "Learn More About Missions",
        cards: [
            {
                title: "Support Global Missionary Work",
                content: "We firmly believe in the importance of the mission to bring the Gospel message to all corners of the Earth. To this end, we are committed to supporting missionary work through donations and resources. In addition to sending new workers to areas where the need is greatest, we also seek to support and maintain missionaries already working in the field, ensuring they have the necessary support to continue their vital work."
            },
            {
                title: "Exalt the Name of the Lord",
                content: "Our vision is to glorify the Lord's name in all situations and contexts. This is reflected in our personal testimony, in the ministration of the Word, in our praises, and in our prayers. We believe that our lives should reflect the faith we profess, and therefore we strive to live in a way that honors God in all our interactions, showing His goodness and love to others."
            },
            {
                title: "Support for Those in Need",
                content: "Inspired by the example of the early church, as described in Acts, we dedicate our efforts to helping the needy, hungry, and widows, with special attention to those who share our faith. We are committed to being a community that cares for the well-being of others, putting compassion into action and offering practical and spiritual support to those in need. We believe that by helping the less fortunate, we are not only meeting a physical need but also living out the essence of the gospel."
            },
            {
                title: "Make Disciples and Promote Spiritual Growth",
                content: "In Matthew 28:19, we are called to \"make disciples of all nations.\" Our mission is more than just baptizing; it's about discipling each individual, leading them into a deep and obedient relationship with God. In our church, we prioritize the constant study of God's Word, as we believe this is the foundation for healthy spiritual growth. Our goal is to equip the members of our congregation so they can not only understand biblical principles but also apply them in their daily lives, becoming true witnesses of Christ's love and bearing fruit in their communities."
            }
        ]
    },
    es: {
        title: "Nuestra Visión y Misión",
        introduction: "Nuestra iglesia fue fundada en 2004 en la vibrante ciudad de Lewisville, Texas. Nuestro viaje comenzó humildemente, cuando nos reunimos por primera vez como un grupo celular en una iglesia brasileña. Durante este período, fuimos bendecidos con la presencia de Dios y experimentamos un crecimiento significativo, tanto espiritual como en número de miembros.",
        missionsButton: "Ver más sobre Misiones",
        cards: [
            {
                title: "Apoyar el Trabajo Misionero Global",
                content: "Creemos firmemente en la importancia de la misión de llevar el mensaje del Evangelio a todos los rincones de la Tierra. Para ello, nos comprometemos a apoyar la obra misionera a través de donaciones y recursos. Además de enviar nuevos obreros a las áreas donde la necesidad es mayor, también buscamos apoyar y mantener a los misioneros que ya están trabajando en el campo, asegurando que tengan el apoyo necesario para continuar su trabajo vital."
            },
            {
                title: "Exaltar el Nombre del Señor",
                content: "Nuestra visión es glorificar el nombre del Señor en todas las situaciones y contextos. Esto se refleja en nuestro testimonio personal, en la ministración de la Palabra, en nuestras alabanzas y en nuestras oraciones. Creemos que nuestras vidas deben reflejar la fe que profesamos, y por eso nos esforzamos por vivir de una manera que honre a Dios en todas nuestras interacciones, mostrando Su bondad y amor a los demás."
            },
            {
                title: "Apoyo a los Necesitados",
                content: "Inspirados por el ejemplo de la iglesia primitiva, como se describe en Hechos, dedicamos nuestros esfuerzos a ayudar a los necesitados, hambrientos y viudas, con especial atención a aquellos que comparten nuestra fe. Estamos comprometidos a ser una comunidad que se preocupa por el bienestar de los demás, poniendo la compasión en acción y ofreciendo apoyo práctico y espiritual a quienes lo necesitan. Creemos que al ayudar a los menos afortunados, no solo estamos satisfaciendo una necesidad física, sino también viviendo la esencia del evangelio."
            },
            {
                title: "Hacer Discípulos y Promover el Crecimiento Espiritual",
                content: "En Mateo 28:19, somos llamados a \"hacer discípulos de todas las naciones.\" Nuestra misión es más que solo bautizar; se trata de discipular a cada individuo, guiándolos hacia una relación profunda y obediente con Dios. En nuestra iglesia, priorizamos el estudio constante de la Palabra de Dios, ya que creemos que esta es la base para un crecimiento espiritual saludable. Nuestro objetivo es equipar a los miembros de nuestra congregación para que no solo puedan entender los principios bíblicos, sino también aplicarlos en su vida diaria, convirtiéndose en verdaderos testigos del amor de Cristo y dando fruto en sus comunidades."
            }
        ]
    }
};

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
    const MotionLink = motion.create(Link);
    const { language } = useLanguage();
    const texts = translations[language];

    const icons = [FaGlobeAfrica, FaHands, FaHandsHelping, FaPeopleRoof];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="bg-white flex max-lg:flex-col px-6 my-14 sm:my-24 gap-12 max-w-7xl mx-auto">
                <motion.div variants={slideIn}>
                    <h2 className="text-yellowBtnHover text-3xl sm:text-4xl font-extrabold mb-6">
                        {texts.title}
                    </h2>
                    <p className="text-black text-sm leading-relaxed">
                        {texts.introduction}
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto"
                    variants={staggerChildren}
                >
                    {texts.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="text-left bg-primary hover:ring-2 ring-yellow-700 transition duration-300 rounded-lg shadow p-8 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeIn}
                        >
                            {React.createElement(icons[index], {
                                className: "absolute bottom-6 right-6 text-footer text-[180px] opacity-10 transform translate-x-1/8 translate-y-1/8"
                            })}
                            <h3 className="text-footer text-xl font-semibold mt-6 mb-3 relative z-10">
                                {card.title}
                            </h3>
                            <p className="text-black text-sm leading-relaxed relative z-10">
                                {card.content}
                            </p>
                            {index === 0 && (
                                <MotionLink
                                    to="/missions"
                                    className="btn mt-8 relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {texts.missionsButton}
                                </MotionLink>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutContent;