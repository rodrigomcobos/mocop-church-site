// src/components/specific/WeekEvents.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BiSolidBible } from "react-icons/bi"
import { LuBookOpen } from "react-icons/lu"
import { PiHandsPrayingDuotone } from "react-icons/pi"
import { useLanguage } from '../../context/LanguageContext'

// Translations object
const translations = {
    pt: {
        weekSchedule: "Programação da Semana",
        description: "Junte-se a nós em um ambiente acolhedor, onde a fé e a comunhão se encontram. Nossas reuniões oferecem a oportunidade perfeita para adorar, aprender e crescer juntos na palavra de Deus. Venha participar e fortalecer sua caminhada espiritual com nossa comunidade.",
        events: {
            prayer: {
                time: "QUARTAS as 7:00PM",
                title: "Dia de Oração",
                description: "Em nossas quartas-feiras, dedicamos um tempo especial para buscar a presença de Deus através da oração. Este é um momento para interceder uns pelos outros, compartilhar testemunhos e fortalecer nossa fé em comunidade. Todos são bem-vindos!"
            },
            bibleStudy: {
                time: "SEXTAS as 7:00PM",
                title: "Estudo Bíblico",
                description: "As sextas-feiras são reservadas para um estudo aprofundado das Escrituras. Juntos, exploramos a Palavra de Deus, discutimos temas relevantes e aplicamos os ensinamentos em nossas vidas. Não perca a oportunidade de crescer espiritualmente e fazer novas amizades!"
            },
            service: {
                time: "DOMINGOS as 6:00PM",
                title: "Culto",
                description: "Todos os domingos, nos reunimos para celebrar e adorar a Deus em comunhão. É uma oportunidade para ouvir a Palavra, louvar e adorar juntos, e renovar nosso compromisso de fé. Traga sua família e amigos e venha experimentar a alegria de estar na casa do Senhor!"
            }
        }
    },
    en: {
        weekSchedule: "Weekly Schedule",
        description: "Join us in a welcoming environment where faith and fellowship meet. Our meetings offer the perfect opportunity to worship, learn, and grow together in God's word. Come participate and strengthen your spiritual journey with our community.",
        events: {
            prayer: {
                time: "WEDNESDAYS at 7:00PM",
                title: "Prayer Meeting",
                description: "On Wednesdays, we dedicate special time to seek God's presence through prayer. This is a moment to intercede for one another, share testimonies, and strengthen our faith in community. Everyone is welcome!"
            },
            bibleStudy: {
                time: "FRIDAYS at 7:00PM",
                title: "Bible Study",
                description: "Fridays are reserved for in-depth study of the Scriptures. Together, we explore God's Word, discuss relevant topics, and apply the teachings to our lives. Don't miss the opportunity to grow spiritually and make new friendships!"
            },
            service: {
                time: "SUNDAYS at 6:00PM",
                title: "Service",
                description: "Every Sunday, we gather to celebrate and worship God in communion. It's an opportunity to hear the Word, praise and worship together, and renew our commitment of faith. Bring your family and friends and come experience the joy of being in the Lord's house!"
            }
        }
    },
    es: {
        weekSchedule: "Programa Semanal",
        description: "Únete a nosotros en un ambiente acogedor donde la fe y la comunión se encuentran. Nuestras reuniones ofrecen la oportunidad perfecta para adorar, aprender y crecer juntos en la palabra de Dios. Ven a participar y fortalecer tu camino espiritual con nuestra comunidad.",
        events: {
            prayer: {
                time: "MIÉRCOLES a las 7:00PM",
                title: "Día de Oración",
                description: "Los miércoles, dedicamos un tiempo especial para buscar la presencia de Dios a través de la oración. Este es un momento para interceder unos por otros, compartir testimonios y fortalecer nuestra fe en comunidad. ¡Todos son bienvenidos!"
            },
            bibleStudy: {
                time: "VIERNES a las 7:00PM",
                title: "Estudio Bíblico",
                description: "Los viernes están reservados para un estudio profundo de las Escrituras. Juntos, exploramos la Palabra de Dios, discutimos temas relevantes y aplicamos las enseñanzas en nuestras vidas. ¡No pierdas la oportunidad de crecer espiritualmente y hacer nuevas amistades!"
            },
            service: {
                time: "DOMINGOS a las 6:00PM",
                title: "Servicio",
                description: "Todos los domingos nos reunimos para celebrar y adorar a Dios en comunión. Es una oportunidad para escuchar la Palabra, alabar y adorar juntos, y renovar nuestro compromiso de fe. ¡Trae a tu familia y amigos y ven a experimentar la alegría de estar en la casa del Señor!"
            }
        }
    }
};

const AnimatedCard = ({ children, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
        >
            {children}
        </motion.div>
    );
};

const WeekEvents = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <>
            <div className="bg-primary py-10">
                <div className="max-w-7xl mx-auto py-8 md:py-16 px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-4"
                    >
                        {texts.weekSchedule}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-black text-center mb-10 md:mb-16 text-base md:text-md max-w-5xl mx-auto"
                    >
                        {texts.description}
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-md md:max-w-none mx-auto min-h-[240px]">
                        <AnimatedCard delay={0.3}>
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-bottomBar font-semibold text-sm md:text-base'>
                                    {texts.events.prayer.time}
                                </p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">
                                    {texts.events.prayer.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    {texts.events.prayer.description}
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-bottomBar opacity-20">
                                <PiHandsPrayingDuotone className="text-9xl md:text-9xl" />
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.4}>
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-bottomBar font-semibold text-sm md:text-base'>
                                    {texts.events.bibleStudy.time}
                                </p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">
                                    {texts.events.bibleStudy.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    {texts.events.bibleStudy.description}
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-bottomBar opacity-20">
                                <LuBookOpen className="text-9xl md:text-9xl" />
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.5}>
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-bottomBar font-semibold text-sm md:text-base'>
                                    {texts.events.service.time}
                                </p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">
                                    {texts.events.service.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    {texts.events.service.description}
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-bottomBar opacity-20">
                                <BiSolidBible className="text-9xl md:text-9xl" />
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeekEvents;