// src/components/specific/WhyUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';

// Import both formats for each image
import StripImg2JPG from '../../assets/images/churchimg39.jpg';
import StripImg2WebP from '../../assets/images/churchimg39.webp';
import StripImg3JPG from '../../assets/images/churchimg40.jpg';
import StripImg3WebP from '../../assets/images/churchimg40.webp';

// Translations object
const translations = {
    pt: {
        title: "Porque participar de nossa igreja?",
        quote: "Tu és a Rocha e sobre esta rocha edificarei a minha Igreja",
        reference: "- Mateus 16:18",
        content: {
            paragraph1: "Ser membro de uma igreja e frequentá-la semanalmente é fundamental para quem pretende seguir ao Senhor de forma plena, " +
                "ou seja, fazendo e cumprindo convênios sagrados e guardando Seus mandamentos. Precisamos da igreja por muitas razões.",
            paragraph2: "Como vemos, a igreja não é apenas um lugar físico, mas um espaço abençoado e repleto de significado, onde somos " +
                "acolhidos pela graça divina e podemos nos conectar profundamente com Deus e com nossos irmãos e irmãs na fé. " +
                "É mais do que apenas encontrar nossos amigos — é onde nossas vozes se unem em louvor, nossos corações se abrem " +
                "em oração, e nossa alma se enriquece com o aprendizado e o ensino das palavras sagradas.",
            paragraph3: "É neste ambiente de amor e comunhão que vivenciamos o Evangelho em sua plenitude. A igreja nos oferece a oportunidade " +
                "de nos nutrirmos espiritualmente através da santa ceia, de renascermos pelo batismo e de cumprirmos com alegria os " +
                "ensinamentos e mandamentos que Deus nos confiou nas sagradas escrituras. Cada momento vivido dentro da comunidade " +
                "de fé é uma oportunidade de crescer espiritualmente e fortalecer nossa caminhada com Cristo."
        },
        imageAlt1: "Imagem da Igreja",
        imageAlt2: "Imagem Sobreposta da Igreja"
    },
    en: {
        title: "Why join our church?",
        quote: "You are the Rock and on this rock I will build my Church",
        reference: "- Matthew 16:18",
        content: {
            paragraph1: "Being a church member and attending weekly is fundamental for those who intend to follow the Lord fully, " +
                "that is, making and keeping sacred covenants and keeping His commandments. We need the church for many reasons.",
            paragraph2: "As we can see, the church is not just a physical place, but a blessed space full of meaning, where we are " +
                "welcomed by divine grace and can connect deeply with God and with our brothers and sisters in faith. " +
                "It's more than just meeting our friends — it's where our voices unite in praise, our hearts open " +
                "in prayer, and our souls are enriched with the learning and teaching of sacred words.",
            paragraph3: "It is in this environment of love and communion that we experience the Gospel in its fullness. The church offers us the opportunity " +
                "to nourish ourselves spiritually through holy communion, to be reborn through baptism, and to joyfully fulfill the " +
                "teachings and commandments that God has entrusted to us in the holy scriptures. Every moment lived within the community " +
                "of faith is an opportunity to grow spiritually and strengthen our walk with Christ."
        },
        imageAlt1: "Church Image",
        imageAlt2: "Overlapping Church Image"
    },
    es: {
        title: "¿Por qué unirse a nuestra iglesia?",
        quote: "Tú eres la Roca y sobre esta roca edificaré mi Iglesia",
        reference: "- Mateo 16:18",
        content: {
            paragraph1: "Ser miembro de una iglesia y asistir semanalmente es fundamental para quienes pretenden seguir al Señor plenamente, " +
                "es decir, haciendo y cumpliendo convenios sagrados y guardando Sus mandamientos. Necesitamos la iglesia por muchas razones.",
            paragraph2: "Como podemos ver, la iglesia no es solo un lugar físico, sino un espacio bendecido y lleno de significado, donde somos " +
                "acogidos por la gracia divina y podemos conectarnos profundamente con Dios y con nuestros hermanos y hermanas en la fe. " +
                "Es más que simplemente encontrarnos con nuestros amigos — es donde nuestras voces se unen en alabanza, nuestros corazones se abren " +
                "en oración, y nuestras almas se enriquecen con el aprendizaje y la enseñanza de las palabras sagradas.",
            paragraph3: "Es en este ambiente de amor y comunión donde experimentamos el Evangelio en su plenitud. La iglesia nos ofrece la oportunidad " +
                "de nutrirnos espiritualmente a través de la santa cena, de renacer por el bautismo y de cumplir con alegría las " +
                "enseñanzas y mandamientos que Dios nos confió en las sagradas escrituras. Cada momento vivido dentro de la comunidad " +
                "de fe es una oportunidad para crecer espiritualmente y fortalecer nuestro caminar con Cristo."
        },
        imageAlt1: "Imagen de la Iglesia",
        imageAlt2: "Imagen Superpuesta de la Iglesia"
    }
};

const WhyUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { language } = useLanguage();
    const texts = translations[language];

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
    };

    return (
        <div className="font-sans px-4 py-24">
            <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-14 sm:mb-16">
                {texts.title}
            </h2>
            <div ref={ref} className="grid lg:grid-cols-2 gap-20 md:gap-y-36 sm:gap-y-12 lg:max-w-6xl max-w-2xl mx-auto">
                {/* Image container with overlapping images */}
                <motion.section
                    className="relative mb-12 md:mb-24 sm:mb-12"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={imageVariants}
                >
                    {/* Larger Image */}
                    <motion.div className="w-full">
                        <Image
                            src={StripImg2JPG}
                            webp={StripImg2WebP}
                            alt={texts.imageAlt1}
                            className="object-contain w-full max-h-[675px] rounded-lg shadow-lg"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Smaller Overlapping Image */}
                    <motion.div
                        className="absolute top-[40%] sm:top-[50%] right-1/4 w-[90%]"
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Image
                            src={StripImg3JPG}
                            webp={StripImg3WebP}
                            alt={texts.imageAlt2}
                            className="rounded-lg shadow-lg w-full"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.section>

                <motion.section
                    className="text-left px-4"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={textVariants}
                >
                    <h2 className="text-yellowBtnHover text-2xl font-bold mb-2">
                        "{texts.quote}"
                    </h2>
                    <p className='text-black italic text-lg font-thin mb-6'>
                        {texts.reference}
                    </p>

                    <hr className="border-t-2 border-yellowBtnHover mb-6" />

                    <p className="mb-4 text-md text-gray-500">
                        {texts.content.paragraph1}
                    </p>

                    <p className="mb-4 text-md text-gray-500">
                        {texts.content.paragraph2}
                    </p>

                    <p className="mb-4 text-md text-gray-500">
                        {texts.content.paragraph3}
                    </p>
                </motion.section>
            </div>
        </div>
    );
};

export default WhyUs;