import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import WeekEvents from '../components/specific/WeekEvents';
import Subscribe from '../components/specific/Subscribe';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

// Import both JPG and WebP formats
import HeroImgJPG from '../../src/assets/images/churchimg40.jpg';
import HeroImgWebP from '../../src/assets/images/churchimg40.webp';

const translations = {
    pt: {
        hero: {
            title: "Planeje sua Visita",
            subtitle: "É sua Primeira Vez Aqui?"
        },
        sections: {
            welcome: {
                title: "Bem-vindo!",
                content: "Não importa em que fase da vida você se encontre, nós lhe damos as boas-vindas à Comunidade Cristã Brasileira em Lewisville! Nosso objetivo é que você saia encorajado e equipado através da Palavra de Deus."
            },
            whatToExpect: {
                title: "O que Esperar",
                content: "Na Comunidade Cristã Brasileira em Lewisville, acreditamos que a igreja deve ser divertida! Você vai perceber que nossos cultos são energéticos e animados. Nossa experiência de adoração envolve músicas modernas de louvor e adoração, seguidas por um ensino centrado na Bíblia. A igreja é um momento para se reunir com uma comunidade de crentes, ser desafiado, encorajado e equipado através da palavra de Deus. Sabemos que ser novo às vezes pode ser intimidante, mas na Comunidade Cristã Brasileira em Lewisville, é nosso desejo que você se sinta bem-vindo desde o início! Nossa experiência de adoração dura cerca de uma hora à uma hora e meia. Encorajamos você a chegar cedo, passar um tempo conosco para nós se conhecer melhor. Mal podemos esperar para conhecê-lo!"
            },
            comeAsYouAre: {
                title: "Venha Como Você Está",
                content1: "Na Comunidade Cristã Brasileira em Lewisville, nosso objetivo é proporcionar um ambiente acolhedor e inclusivo para todos os que desejam participar de nossas atividades. Acreditamos que a verdadeira essência da adoração e da comunhão não está em como nos vestimos, mas sim na condição de nossos corações e em nossa disposição de buscar a Deus em comunidade.",
                content2: "Por isso, não há um código de vestimenta rígido a ser seguido em nossos encontros. Queremos que você se sinta à vontade para vir como está, seja vestindo roupas casuais ou mais formais. O mais importante para nós é a sua presença e a sua vontade de se conectar com Deus e com os outros membros da nossa família em Cristo. Ao entrar em nossas portas, você encontrará um espaço seguro, onde poderá expressar sua fé livremente e compartilhar sua jornada espiritual, independentemente de sua origem ou estilo de vida. Junte-se a nós e descubra a alegria de fazer parte de uma comunidade que valoriza a autenticidade e o amor fraternal acima de tudo!"
            },
            bringKids: {
                title: "Traga as Crianças",
                content: "A salinha das crianças na Comunidade Cristã Brasileira em Lewisville está disponível para crianças de 6 semanas até o 5º ano. Nosso objetivo é fazer uma parceria com você para ajudar seus filhos a descobrir Deus em um ambiente seguro e amoroso. Oramos para que cada criança aceite Jesus como seu Senhor e Salvador e comece a desenvolver um relacionamento profundo com Ele. A salinha das crianças oferece ambientes acolhedores e apropriados para cada idade, brincadeiras interativas e ensinamentos criativos de princípios bíblicos. A salinha das crianças está disponível durante cada experiência de adoração, para que você possa desfrutar de um ótimo culto sabendo que seu filho está sendo amado e nutrido!"
            }
        },
        button: "Tome o Próximo Passo",
        imageAlt: "Planeje sua Visita Header Image"
    },
    en: {
        hero: {
            title: "Plan Your Visit",
            subtitle: "Is This Your First Time Here?"
        },
        sections: {
            welcome: {
                title: "Welcome!",
                content: "No matter what stage of life you're in, we welcome you to the Brazilian Christian Community in Lewisville! Our goal is for you to leave encouraged and equipped through God's Word."
            },
            whatToExpect: {
                title: "What to Expect",
                content: "At the Brazilian Christian Community in Lewisville, we believe church should be fun! You'll notice our services are energetic and lively. Our worship experience involves modern praise and worship songs, followed by Bible-centered teaching. Church is a time to gather with a community of believers, be challenged, encouraged, and equipped through God's word. We know being new can sometimes be intimidating, but at the Brazilian Christian Community in Lewisville, it's our desire that you feel welcome from the start! Our worship experience lasts about an hour to an hour and a half. We encourage you to arrive early, spend time with us to get to know each other better. We can't wait to meet you!"
            },
            comeAsYouAre: {
                title: "Come As You Are",
                content1: "At the Brazilian Christian Community in Lewisville, our goal is to provide a welcoming and inclusive environment for all who wish to participate in our activities. We believe that the true essence of worship and fellowship isn't in how we dress, but in the condition of our hearts and our willingness to seek God in community.",
                content2: "Therefore, there's no strict dress code to follow in our gatherings. We want you to feel comfortable coming as you are, whether in casual or more formal attire. What's most important to us is your presence and your desire to connect with God and other members of our family in Christ. When you walk through our doors, you'll find a safe space where you can freely express your faith and share your spiritual journey, regardless of your background or lifestyle. Join us and discover the joy of being part of a community that values authenticity and brotherly love above all!"
            },
            bringKids: {
                title: "Bring the Kids",
                content: "The children's room at the Brazilian Christian Community in Lewisville is available for children from 6 weeks to 5th grade. Our goal is to partner with you to help your children discover God in a safe and loving environment. We pray that each child accepts Jesus as their Lord and Savior and begins to develop a deep relationship with Him. The children's room offers welcoming and age-appropriate environments, interactive games, and creative teaching of biblical principles. The children's room is available during each worship experience, so you can enjoy a great service knowing your child is being loved and nurtured!"
            }
        },
        button: "Take the Next Step",
        imageAlt: "Plan Your Visit Header Image"
    },
    es: {
        hero: {
            title: "Planea tu Visita",
            subtitle: "¿Es tu Primera Vez Aquí?"
        },
        sections: {
            welcome: {
                title: "¡Bienvenido!",
                content: "No importa en qué etapa de la vida te encuentres, ¡te damos la bienvenida a la Comunidad Cristiana Brasileña en Lewisville! Nuestro objetivo es que salgas animado y equipado a través de la Palabra de Dios."
            },
            whatToExpect: {
                title: "Qué Esperar",
                content: "¡En la Comunidad Cristiana Brasileña en Lewisville, creemos que la iglesia debe ser divertida! Notarás que nuestros servicios son energéticos y animados. Nuestra experiencia de adoración involucra canciones modernas de alabanza y adoración, seguidas de una enseñanza centrada en la Biblia. La iglesia es un momento para reunirse con una comunidad de creyentes, ser desafiado, animado y equipado a través de la palabra de Dios. Sabemos que ser nuevo a veces puede ser intimidante, ¡pero en la Comunidad Cristiana Brasileña en Lewisville, es nuestro deseo que te sientas bienvenido desde el principio! Nuestra experiencia de adoración dura aproximadamente una hora a una hora y media. Te animamos a llegar temprano, pasar tiempo con nosotros para conocernos mejor. ¡Estamos ansiosos por conocerte!"
            },
            comeAsYouAre: {
                title: "Ven Como Eres",
                content1: "En la Comunidad Cristiana Brasileña en Lewisville, nuestro objetivo es proporcionar un ambiente acogedor e inclusivo para todos los que deseen participar en nuestras actividades. Creemos que la verdadera esencia de la adoración y la comunión no está en cómo nos vestimos, sino en la condición de nuestros corazones y en nuestra disposición de buscar a Dios en comunidad.",
                content2: "Por lo tanto, no hay un código de vestimenta estricto que seguir en nuestras reuniones. Queremos que te sientas cómodo viniendo como eres, ya sea con ropa casual o más formal. Lo más importante para nosotros es tu presencia y tu deseo de conectarte con Dios y con los demás miembros de nuestra familia en Cristo. Cuando entres por nuestras puertas, encontrarás un espacio seguro, donde podrás expresar tu fe libremente y compartir tu viaje espiritual, independientemente de tu origen o estilo de vida. ¡Únete a nosotros y descubre la alegría de ser parte de una comunidad que valora la autenticidad y el amor fraternal por encima de todo!"
            },
            bringKids: {
                title: "Trae a los Niños",
                content: "La sala de niños en la Comunidad Cristiana Brasileña en Lewisville está disponible para niños desde 6 semanas hasta 5º grado. Nuestro objetivo es asociarnos contigo para ayudar a tus hijos a descubrir a Dios en un ambiente seguro y amoroso. Oramos para que cada niño acepte a Jesús como su Señor y Salvador y comience a desarrollar una relación profunda con Él. La sala de niños ofrece ambientes acogedores y apropiados para cada edad, juegos interactivos y enseñanza creativa de principios bíblicos. La sala de niños está disponible durante cada experiencia de adoración, ¡para que puedas disfrutar de un gran servicio sabiendo que tu hijo está siendo amado y nutrido!"
            }
        },
        button: "Da el Siguiente Paso",
        imageAlt: "Imagen de Encabezado de Planea tu Visita"
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

const PlanYourVisit = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgJPG}
                        webp={HeroImgWebP}
                        alt={texts.imageAlt}
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"
                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">
                            {texts.hero.title}
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase">
                            {texts.hero.subtitle}
                        </h2>
                    </div>
                </section>
            </header>

            <motion.div
                className="max-w-6xl mx-auto px-6 py-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">{texts.sections.welcome.title}</h2>
                    <p>{texts.sections.welcome.content}</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">{texts.sections.whatToExpect.title}</h2>
                    <p>{texts.sections.whatToExpect.content}</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">{texts.sections.comeAsYouAre.title}</h2>
                    <p>{texts.sections.comeAsYouAre.content1}</p>
                    <br />
                    <p>{texts.sections.comeAsYouAre.content2}</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">{texts.sections.bringKids.title}</h2>
                    <p>{texts.sections.bringKids.content}</p>
                </motion.section>

                <motion.div
                    variants={itemVariants}
                    className="text-center mt-24"
                >
                    <Link to="/next-step">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn"
                        >
                            {texts.button}
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
            < WeekEvents />
            <Subscribe />
        </div>
    );
};

export default PlanYourVisit;