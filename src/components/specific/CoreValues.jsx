import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill, PiNumberSquareFourFill, PiNumberSquareFiveFill, PiNumberSquareSixFill } from "react-icons/pi";
import { useLanguage } from '../../context/LanguageContext';
import ImgJPG from '../../assets/images/churchimg44.jpg';
import ImgWebP from '../../assets/images/churchimg44.webp';

const translations = {
    pt: {
        backgroundText: "VALORES",
        title: "Nossos valores fundamentais",
        imageAlt: "Valores Fundamentais",
        description: {
            p1: "A base da nossa fé está firmemente alicerçada na Bíblia, a Palavra de Deus. Acreditamos que a Bíblia é divinamente inspirada, viva, e eternamente relevante para todas as gerações. Ela é mais do que um livro de ensinamentos; é a manifestação da vontade de Deus para a humanidade, sendo ativa e operante no mundo.",
            p2: "Cremos que através das Escrituras, Deus se revela ao Seu povo, oferecendo direção, consolo, e transformação espiritual. A Bíblia não apenas nos guia em nossos momentos de dúvida e dificuldade, mas também nos exorta a viver de acordo com os Seus preceitos. Ela ilumina o caminho para uma vida plena em Cristo, mostrando-nos como amar, servir, e seguir os passos de Jesus.",
            p3: "Cada página das Escrituras é rica em sabedoria e verdade, e nela encontramos o alicerce da nossa fé. Desde Gênesis até Apocalipse, a Bíblia nos conta a grande história da redenção, o amor incondicional de Deus por Sua criação, e o plano de salvação que culmina em Jesus Cristo.",
            p4: "Portanto, não apenas vemos a Bíblia como um documento histórico ou religioso, mas como a Palavra viva de Deus, sempre presente, moldando nossas vidas, nossa igreja, e a missão que nos foi dada. Ela é infalível, imutável e eterna — o fundamento sobre o qual tudo em nossa fé é construído."
        },
        values: [
            "Cremos que o sangue de Jesus pode purificar o homem de todo o pecado. (I Joao 1:7-9)",
            "Que a palavra de Deus é apta para discernir, exortar e ensinar. (I Corintios 14:3)",
            "Deus é triuno: Pai, Filho e Espirito Santo.",
            "Deus é o unico criador do universo e governa através de seu próprio querer.",
            "Jesus Cristo é totalmente homem, totalmente Deus, nasceu da virgem Maria através do milagre da geração do Espirito Santo.",
            "Jesus se deu na cruz morrendo nela por nossos pecados e ressucitou ao terceiro dia para nos dar a vida eterna."
        ]
    },
    en: {
        backgroundText: "VALUES",
        title: "Our Core Values",
        imageAlt: "Core Values",
        description: {
            p1: "The foundation of our faith is firmly rooted in the Bible, God's Word. We believe that the Bible is divinely inspired, living, and eternally relevant for all generations. It is more than a book of teachings; it is the manifestation of God's will for humanity, being active and operative in the world.",
            p2: "We believe that through Scripture, God reveals Himself to His people, offering direction, comfort, and spiritual transformation. The Bible not only guides us in our moments of doubt and difficulty but also exhorts us to live according to His precepts. It illuminates the path to a full life in Christ, showing us how to love, serve, and follow in Jesus' footsteps.",
            p3: "Every page of Scripture is rich in wisdom and truth, and in it we find the foundation of our faith. From Genesis to Revelation, the Bible tells us the great story of redemption, God's unconditional love for His creation, and the plan of salvation that culminates in Jesus Christ.",
            p4: "Therefore, we do not just see the Bible as a historical or religious document, but as the living Word of God, ever-present, shaping our lives, our church, and the mission we have been given. It is infallible, unchangeable, and eternal — the foundation upon which everything in our faith is built."
        },
        values: [
            "We believe that the blood of Jesus can purify mankind from all sin. (1 John 1:7-9)",
            "That God's word is suitable for discerning, exhorting, and teaching. (1 Corinthians 14:3)",
            "God is triune: Father, Son, and Holy Spirit.",
            "God is the sole creator of the universe and governs through His own will.",
            "Jesus Christ is fully man, fully God, born of the virgin Mary through the miracle of the Holy Spirit's generation.",
            "Jesus gave Himself on the cross, dying for our sins, and rose on the third day to give us eternal life."
        ]
    },
    es: {
        backgroundText: "VALORES",
        title: "Nuestros Valores Fundamentales",
        imageAlt: "Valores Fundamentales",
        description: {
            p1: "El fundamento de nuestra fe está firmemente arraigado en la Biblia, la Palabra de Dios. Creemos que la Biblia es divinamente inspirada, viva y eternamente relevante para todas las generaciones. Es más que un libro de enseñanzas; es la manifestación de la voluntad de Dios para la humanidad, siendo activa y operante en el mundo.",
            p2: "Creemos que a través de las Escrituras, Dios se revela a Su pueblo, ofreciendo dirección, consuelo y transformación espiritual. La Biblia no solo nos guía en nuestros momentos de duda y dificultad, sino que también nos exhorta a vivir de acuerdo con Sus preceptos. Ilumina el camino hacia una vida plena en Cristo, mostrándonos cómo amar, servir y seguir los pasos de Jesús.",
            p3: "Cada página de las Escrituras es rica en sabiduría y verdad, y en ella encontramos el fundamento de nuestra fe. Desde Génesis hasta Apocalipsis, la Biblia nos cuenta la gran historia de la redención, el amor incondicional de Dios por Su creación y el plan de salvación que culmina en Jesucristo.",
            p4: "Por lo tanto, no vemos la Biblia simplemente como un documento histórico o religioso, sino como la Palabra viva de Dios, siempre presente, moldeando nuestras vidas, nuestra iglesia y la misión que se nos ha encomendado. Es infalible, inmutable y eterna — el fundamento sobre el cual se construye todo en nuestra fe."
        },
        values: [
            "Creemos que la sangre de Jesús puede purificar al hombre de todo pecado. (1 Juan 1:7-9)",
            "Que la palabra de Dios es apta para discernir, exhortar y enseñar. (1 Corintios 14:3)",
            "Dios es trino: Padre, Hijo y Espíritu Santo.",
            "Dios es el único creador del universo y gobierna a través de su propia voluntad.",
            "Jesucristo es totalmente hombre, totalmente Dios, nació de la virgen María a través del milagro de la generación del Espíritu Santo.",
            "Jesús se entregó en la cruz muriendo por nuestros pecados y resucitó al tercer día para darnos vida eterna."
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

const CoreValues = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    const icons = [
        PiNumberSquareOneFill,
        PiNumberSquareTwoFill,
        PiNumberSquareThreeFill,
        PiNumberSquareFourFill,
        PiNumberSquareFiveFill,
        PiNumberSquareSixFill
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mx-auto py-24 bg-bottomBar relative overflow-hidden"
        >
            <motion.div
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="text-white text-[20dvh] translate-x-[-60%] font-extrabold transform -rotate-90 whitespace-nowrap select-none">
                    {texts.backgroundText}
                </div>
            </motion.div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-14 items-center max-w-7xl max-md:max-w-xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={slideIn}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        src={ImgJPG}
                        webp={ImgWebP}
                        className="max-width-[400px] rounded-lg"
                        alt={texts.imageAlt}
                        loading="lazy"
                    />
                </motion.div>

                <motion.div
                    className="xl:col-span-2 max-md:px-6"
                    variants={slideIn}
                >
                    <div>
                        <h2 className="text-white sm:text-4xl text-2xl font-extrabold">
                            {texts.title}
                        </h2>
                        <p className="text-sm text-white leading-relaxed mt-6">
                            {texts.description.p1}
                        </p>
                        <p className="text-sm text-white leading-relaxed mt-6">
                            {texts.description.p2}
                        </p>
                        <p className="text-sm text-white leading-relaxed mt-6">
                            {texts.description.p3}
                        </p>
                        <p className="text-sm text-white leading-relaxed mt-6">
                            {texts.description.p4}
                        </p>
                    </div>

                    <motion.section
                        className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12"
                        variants={staggerChildren}
                    >
                        {texts.values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                variants={fadeIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                {React.createElement(icons[index], {
                                    size: 28,
                                    className: "text-white text-2xl flex-shrink-0 mt-1"
                                })}
                                <h6 className="text-base text-white font-bold">{value}</h6>
                            </motion.div>
                        ))}
                    </motion.section>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CoreValues;