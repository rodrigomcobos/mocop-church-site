import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import AboutChurchImg1 from '../../assets/images/aboutchurchimg1.png';
import AboutChurchImg2 from '../../assets/images/aboutchurchimg2.png';
import AboutChurchImg3 from '../../assets/images/aboutchurchimg3.png';
import AboutChurchImg4 from '../../assets/images/aboutchurchimg4.png';

import AboutChurchImg1WebP from '../../assets/images/aboutchurchimg1.webp';
import AboutChurchImg2WebP from '../../assets/images/aboutchurchimg2.webp';
import AboutChurchImg3WebP from '../../assets/images/aboutchurchimg3.webp';
import AboutChurchImg4WebP from '../../assets/images/aboutchurchimg4.webp';

const translations = {
    pt: {
        section1: {
            text: "A MOCOP Church, localizada em Lewisville, Texas, nasceu em 2004 como um sonho de Deus que foi tomando forma através do trabalho fiel e dedicado de seus fundadores. Tudo começou com uma multiplicação de células da igreja da qual éramos membros na época. Reuníamos pessoas em casas da comunidade para compartilhar a Palavra de Deus e criar conexões que transformavam vidas. Em pouco tempo, essas reuniões cresceram significativamente, alcançando cerca de 80 pessoas, que participavam ativamente dos cultos realizados em nosso apartamento."
        },
        section2: {
            text: "Com o crescimento contínuo, sentimos o chamado de Deus para dar um passo de fé ainda maior. Após a ordenação do pastor Carlos Oliveira pelo Instituto Cristo para as Nações (CFNI) em Dallas, Texas, e pela igreja local, começamos a buscar um espaço físico onde pudéssemos estabelecer a igreja oficialmente. Esse processo foi marcado por muita oração, desafios e também pela graça de Deus, que nos guiou em cada decisão. A jornada foi fortalecida pela parceria e liderança da co-pastora Kesia Silva, cuja dedicação tem sido essencial no desenvolvimento espiritual e administrativo da nossa igreja."
        },
        section3: {
            text: "Hoje, a MOCOP Church é uma comunidade vibrante e acolhedora, comprometida em ser uma ponte de amor e transformação para pessoas de diferentes origens. Somos abençoados por contar com uma congregação diversa, composta por brasileiros, hispanos e americanos. Para garantir que todos se sintam parte dessa grande família espiritual, oferecemos tradução simultânea durante os cultos de domingo, permitindo que todos compreendam a mensagem e participem plenamente da adoração."
        },
        section4: {
            text: "Nosso ministério vai além das quatro paredes da igreja. Estamos profundamente comprometidos com missões, evangelismo e o discipulado, com a missão de levar a Palavra de Deus a todos aqueles que Ele tem acrescentado ao nosso rebanho. Como igreja, acreditamos no poder do amor, da comunhão e do serviço para transformar vidas e comunidades. Seguimos confiantes no propósito de Deus, trabalhando para impactar vidas e glorificar Seu nome em tudo o que fazemos."
        }
    },
    en: {
        section1: {
            text: "MOCOP Church, located in Lewisville, Texas, was born in 2004 as God's dream that took shape through the faithful and dedicated work of its founders. It all started with cell multiplication from the church where we were members at the time. We gathered people in community homes to share God's Word and create connections that transformed lives. In a short time, these meetings grew significantly, reaching about 80 people who actively participated in services held in our apartment."
        },
        section2: {
            text: "With continuous growth, we felt God's call to take an even greater step of faith. After Pastor Carlos Oliveira's ordination by Christ For The Nations Institute (CFNI) in Dallas, Texas, and the local church, we began searching for a physical space where we could officially establish the church. This process was marked by much prayer, challenges, and also by God's grace, which guided us in every decision. The journey was strengthened by the partnership and leadership of Co-Pastor Kesia Silva, whose dedication has been essential in our church's spiritual and administrative development."
        },
        section3: {
            text: "Today, MOCOP Church is a vibrant and welcoming community, committed to being a bridge of love and transformation for people from different backgrounds. We are blessed to have a diverse congregation, composed of Brazilians, Hispanics, and Americans. To ensure everyone feels part of this great spiritual family, we offer simultaneous translation during Sunday services, allowing everyone to understand the message and fully participate in worship."
        },
        section4: {
            text: "Our ministry goes beyond the four walls of the church. We are deeply committed to missions, evangelism, and discipleship, with the mission of bringing God's Word to all those He has added to our flock. As a church, we believe in the power of love, fellowship, and service to transform lives and communities. We continue confident in God's purpose, working to impact lives and glorify His name in everything we do."
        }
    },
    es: {
        section1: {
            text: "La Iglesia MOCOP, ubicada en Lewisville, Texas, nació en 2004 como un sueño de Dios que tomó forma a través del trabajo fiel y dedicado de sus fundadores. Todo comenzó con la multiplicación de células de la iglesia donde éramos miembros en ese momento. Reuníamos a personas en hogares de la comunidad para compartir la Palabra de Dios y crear conexiones que transformaban vidas. En poco tiempo, estas reuniones crecieron significativamente, alcanzando a cerca de 80 personas que participaban activamente en los servicios realizados en nuestro apartamento."
        },
        section2: {
            text: "Con el crecimiento continuo, sentimos el llamado de Dios para dar un paso de fe aún mayor. Después de la ordenación del Pastor Carlos Oliveira por el Instituto Cristo para las Naciones (CFNI) en Dallas, Texas, y la iglesia local, comenzamos a buscar un espacio físico donde pudiéramos establecer oficialmente la iglesia. Este proceso estuvo marcado por mucha oración, desafíos y también por la gracia de Dios, que nos guió en cada decisión. El viaje se fortaleció con la asociación y el liderazgo de la Co-Pastora Kesia Silva, cuya dedicación ha sido esencial en el desarrollo espiritual y administrativo de nuestra iglesia."
        },
        section3: {
            text: "Hoy, la Iglesia MOCOP es una comunidad vibrante y acogedora, comprometida a ser un puente de amor y transformación para personas de diferentes orígenes. Somos bendecidos de contar con una congregación diversa, compuesta por brasileños, hispanos y estadounidenses. Para asegurar que todos se sientan parte de esta gran familia espiritual, ofrecemos traducción simultánea durante los servicios dominicales, permitiendo que todos comprendan el mensaje y participen plenamente en la adoración."
        },
        section4: {
            text: "Nuestro ministerio va más allá de las cuatro paredes de la iglesia. Estamos profundamente comprometidos con las misiones, el evangelismo y el discipulado, con la misión de llevar la Palabra de Dios a todos aquellos que Él ha añadido a nuestro rebaño. Como iglesia, creemos en el poder del amor, la comunión y el servicio para transformar vidas y comunidades. Seguimos confiados en el propósito de Dios, trabajando para impactar vidas y glorificar Su nombre en todo lo que hacemos."
        }
    }
};

const AboutChurchContent = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    const formatText = (text) => {
        return text.split('**').map((part, index) =>
            index % 2 === 0 ? part : <strong key={index}>{part}</strong>
        );
    };

    return (
        <div className="min-h-[calc(100vh-200px)] bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section 1 */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="md:w-1/2">
                        <Image
                            src={AboutChurchImg1}
                            webp={AboutChurchImg1WebP}
                            alt={texts.section1.imgAlt}
                            className="w-full h-auto"
                            loading="lazy"
                            aria-description={texts.section1.imgDesc}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {formatText(texts.section1.text)}
                        </p>
                    </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="md:w-1/2">
                        <Image
                            src={AboutChurchImg2}
                            webp={AboutChurchImg2WebP}
                            alt={texts.section2.imgAlt}
                            className="w-full h-auto"
                            loading="lazy"
                            aria-description={texts.section2.imgDesc}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {formatText(texts.section2.text)}
                        </p>
                    </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="md:w-1/2">
                        <Image
                            src={AboutChurchImg3}
                            webp={AboutChurchImg3WebP}
                            alt={texts.section3.imgAlt}
                            className="w-full h-auto"
                            loading="lazy"
                            aria-description={texts.section3.imgDesc}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {formatText(texts.section3.text)}
                        </p>
                    </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse items-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="md:w-1/2">
                        <Image
                            src={AboutChurchImg4}
                            webp={AboutChurchImg4WebP}
                            alt={texts.section4.imgAlt}
                            className="w-full h-auto"
                            loading="lazy"
                            aria-description={texts.section4.imgDesc}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {formatText(texts.section4.text)}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutChurchContent;