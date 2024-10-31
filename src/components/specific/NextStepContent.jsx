import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Image from 'react-image-webp'
import { useLanguage } from '../../context/LanguageContext'

// Import both JPG and WebP formats for each image
import BaptismImgJPG from '../../assets/images/baptismimg.jpg'
import BaptismImgWebP from '../../assets/images/baptismimg.webp'
import MinistryImgJPG from '../../assets/images/churchimg41.jpg'
import MinistryImgWebP from '../../assets/images/churchimg41.webp'
import ServingImgJPG from '../../assets/images/servingimg.jpg'
import ServingImgWebP from '../../assets/images/servingimg.webp'

const translations = {
    pt: {
        title: "Dando os Próximos Passos em Sua Caminhada na Fé",
        description1: "Nossa jornada espiritual está sempre em movimento, e há momentos em que somos chamados a ir mais fundo. Se você sente esse chamado, seja para se aproximar mais de Deus, fazer parte da nossa comunidade ou descobrir maneiras de servir, estamos aqui para ajudá-lo.",
        description2: "Queremos que você saiba que não importa onde você esteja na sua caminhada, há sempre um próximo passo esperando por você. Pode ser pelo batismo, envolvimento em um ministério, ou encontrando uma forma de servir. Aqui na nossa igreja, há espaço para você crescer e fazer a diferença.",
        contactButton: "Entre em Contato",
        cards: {
            baptism: {
                title: "Batismo",
                description: "O batismo é um momento significativo de compromisso com Cristo. É uma demonstração pública da sua fé e uma decisão de seguir Jesus. Na nossa igreja, acreditamos que o batismo é um passo importante na jornada espiritual e uma oportunidade para você declarar sua nova vida em Cristo. Se você sente que está pronto para esse momento, entre em contato conosco e prepare-se para uma experiência transformadora."
            },
            ministry: {
                title: "Ministérios",
                description: "Fazer parte de um ministério é uma maneira de colocar seus dons e talentos a serviço de Deus e da comunidade. Temos vários ministérios em nossa igreja, como o grupo de louvor, o ministério infantil, o grupo de homens e mulheres, entre outros. Não importa sua idade ou habilidades, sempre há um lugar onde você pode se envolver e fazer a diferença."
            },
            serving: {
                title: "Sirva Conosco",
                description: "Se você tem o desejo de servir, nós temos muitas oportunidades para que você possa contribuir. Seja ajudando em eventos, colaborando em ações comunitárias, ou apoiando nossos ministérios, sua participação é valiosa. Junte-se a nós e descubra como Deus pode usar você para impactar outras vidas e fazer parte de algo maior."
            }
        }
    },
    en: {
        title: "Taking the Next Steps in Your Faith Journey",
        description1: "Our spiritual journey is always in motion, and there are times when we are called to go deeper. If you feel this calling, whether it's to get closer to God, become part of our community, or discover ways to serve, we are here to help you.",
        description2: "We want you to know that no matter where you are in your journey, there's always a next step waiting for you. It might be through baptism, getting involved in a ministry, or finding a way to serve. Here at our church, there's room for you to grow and make a difference.",
        contactButton: "Contact Us",
        cards: {
            baptism: {
                title: "Baptism",
                description: "Baptism is a significant moment of commitment to Christ. It's a public demonstration of your faith and a decision to follow Jesus. In our church, we believe baptism is an important step in the spiritual journey and an opportunity for you to declare your new life in Christ. If you feel ready for this moment, contact us and prepare for a transformative experience."
            },
            ministry: {
                title: "Ministries",
                description: "Being part of a ministry is a way to put your gifts and talents in service of God and the community. We have various ministries in our church, such as the worship team, children's ministry, men's and women's groups, among others. Regardless of your age or abilities, there's always a place where you can get involved and make a difference."
            },
            serving: {
                title: "Serve With Us",
                description: "If you have a desire to serve, we have many opportunities for you to contribute. Whether helping at events, collaborating in community actions, or supporting our ministries, your participation is valuable. Join us and discover how God can use you to impact other lives and be part of something greater."
            }
        }
    },
    es: {
        title: "Dando los Siguientes Pasos en Tu Camino de Fe",
        description1: "Nuestro viaje espiritual está siempre en movimiento, y hay momentos en los que somos llamados a profundizar. Si sientes este llamado, ya sea para acercarte más a Dios, ser parte de nuestra comunidad o descubrir formas de servir, estamos aquí para ayudarte.",
        description2: "Queremos que sepas que no importa dónde estés en tu camino, siempre hay un siguiente paso esperándote. Puede ser a través del bautismo, involucrándote en un ministerio o encontrando una forma de servir. Aquí en nuestra iglesia, hay espacio para que crezcas y hagas la diferencia.",
        contactButton: "Contáctanos",
        cards: {
            baptism: {
                title: "Bautismo",
                description: "El bautismo es un momento significativo de compromiso con Cristo. Es una demostración pública de tu fe y una decisión de seguir a Jesús. En nuestra iglesia, creemos que el bautismo es un paso importante en el viaje espiritual y una oportunidad para declarar tu nueva vida en Cristo. Si sientes que estás listo para este momento, contáctanos y prepárate para una experiencia transformadora."
            },
            ministry: {
                title: "Ministerios",
                description: "Ser parte de un ministerio es una manera de poner tus dones y talentos al servicio de Dios y la comunidad. Tenemos varios ministerios en nuestra iglesia, como el grupo de alabanza, el ministerio infantil, el grupo de hombres y mujeres, entre otros. Sin importar tu edad o habilidades, siempre hay un lugar donde puedes involucrarte y hacer la diferencia."
            },
            serving: {
                title: "Sirve Con Nosotros",
                description: "Si tienes el deseo de servir, tenemos muchas oportunidades para que puedas contribuir. Ya sea ayudando en eventos, colaborando en acciones comunitarias o apoyando nuestros ministerios, tu participación es valiosa. Únete a nosotros y descubre cómo Dios puede usarte para impactar otras vidas y ser parte de algo más grande."
            }
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const NextStepContent = () => {
    const MotionLink = motion.create(Link)
    const { language } = useLanguage();
    const texts = translations[language];

    const cardData = [
        {
            imageJPG: BaptismImgJPG,
            imageWebP: BaptismImgWebP,
            title: texts.cards.baptism.title,
            color: "bg-red-100",
            description: texts.cards.baptism.description
        },
        {
            imageJPG: MinistryImgJPG,
            imageWebP: MinistryImgWebP,
            title: texts.cards.ministry.title,
            color: "bg-blue-100",
            description: texts.cards.ministry.description
        },
        {
            imageJPG: ServingImgJPG,
            imageWebP: ServingImgWebP,
            title: texts.cards.serving.title,
            color: "bg-green-100",
            description: texts.cards.serving.description
        }
    ]

    return (
        <motion.div
            className="py-12 sm:py-24 px-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="md:max-w-7xl max-w-lg mx-auto">
                <motion.section className="grid md:grid-cols-2 gap-6" variants={slideIn}>
                    <div className="max-w-sm">
                        <h2 className="text-yellowBtnHover text-3xl font-semibold mb-4 leading-10">
                            {texts.title}
                        </h2>
                    </div>
                    <div className="text-left">
                        <p className="mb-4 text-sm text-black">
                            {texts.description1}
                        </p>
                        <p className="text-sm text-black">
                            {texts.description2}
                        </p>
                        <MotionLink
                            to="/contact"
                            className="mt-6 btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {texts.contactButton}
                        </MotionLink>
                    </div>
                </motion.section>

                <motion.section
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-24"
                    variants={staggerChildren}
                >
                    {cardData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-primary rounded-lg shadow-md overflow-hidden hover:ring-2 hover:ring-yellowBtnHover"
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`h-64 ${item.color}`}>
                                <Image
                                    src={item.imageJPG}
                                    webp={item.imageWebP}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-yellowBtnHover mb-4">{item.title}</h3>
                                <p className="text-black text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>
            </div>
        </motion.div>
    )
}

export default NextStepContent