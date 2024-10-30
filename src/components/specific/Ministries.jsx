import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG/JPG and WebP formats for all images
import MensGroupPNG from '../../assets/images/mensgroup.png';
import MensGroupWebP from '../../assets/images/mensgroup.webp';
import WomenGroupPNG from '../../assets/images/womensgroup.png';
import WomenGroupWebP from '../../assets/images/womensgroup.webp';
import KidsGroupJPG from '../../assets/images/childrensgroup.jpg';
import KidsGroupWebP from '../../assets/images/childrensgroup.webp';
import WorshipGroupJPG from '../../assets/images/worshipgroup.jpg';
import WorshipGroupWebP from '../../assets/images/worshipgroup.webp';

const translations = {
    pt: {
        mainTitle: "Faça parte de um de nossos Ministérios",
        ministries: [
            {
                title: "Grupo dos Homens",
                imageAlt: "Grupo dos Homens",
                description: [
                    "O Ministério do Grupo de Homens é um espaço dedicado ao fortalecimento da fé e à construção de relacionamentos significativos entre os homens da nossa comunidade. Acreditamos que a camaradagem e o apoio mútuo são fundamentais para o crescimento espiritual e pessoal. Nossos encontros incluem estudos bíblicos, discussões sobre temas relevantes da vida cotidiana, atividades de serviço comunitário e eventos sociais que promovem a união e o fortalecimento de laços.",
                    "Estamos comprometidos em inspirar e equipar os homens para serem líderes em suas famílias, igrejas e comunidades. Juntos, buscamos viver uma vida de fé autêntica, servindo ao Senhor e uns aos outros com amor e dedicação. Junte-se a nós para crescer em sabedoria, compartilhar experiências e se encorajar mutuamente em nossa jornada de fé!"
                ]
            },
            {
                title: "Grupo das Mulheres",
                imageAlt: "Grupo das Mulheres",
                description: [
                    "O Ministério do Grupo de Mulheres é um espaço acolhedor e inspirador, onde mulheres de todas as idades se reúnem para crescer espiritualmente e fortalecer suas relações. Aqui, acreditamos que a união e o apoio entre mulheres são essenciais para enfrentar os desafios da vida e promover um ambiente de fé e encorajamento.",
                    "Nossos encontros incluem estudos bíblicos, workshops, palestras e momentos de oração, além de atividades que promovem o desenvolvimento pessoal e espiritual. Também organizamos eventos sociais e de serviço comunitário, permitindo que as participantes se conectem, compartilhem suas histórias e se ajudem mutuamente.",
                    "Nosso objetivo é capacitar as mulheres a se tornarem líderes em suas famílias, igrejas e comunidades, vivendo a fé de maneira prática e significativa. Junte-se a nós e descubra um espaço seguro para crescer em fé, amizade e propósito, enquanto caminhamos juntas na jornada espiritual!"
                ]
            },
            {
                title: "Ministério Infantil",
                imageAlt: "Ministério Infantil",
                description: [
                    "O Ministério Infantil de Domingos é um ambiente seguro e divertido onde as crianças podem aprender sobre o amor de Deus e os princípios da fé cristã. Nossos encontros são planejados para crianças de todas as idades, proporcionando uma experiência enriquecedora que combina ensinamentos bíblicos com atividades lúdicas e criativas.",
                    "Durante as reuniões, as crianças participam de histórias bíblicas interativas, jogos, artesanato e músicas que tornam o aprendizado envolvente e memorável. Nossos professores e voluntários são dedicados a cultivar um espaço onde cada criança se sinta valorizada, amada e encorajada a explorar sua fé.",
                    "Além disso, promovemos eventos especiais ao longo do ano, como festivais, acampamentos e atividades de serviço, que ajudam as crianças a desenvolver um senso de comunidade e a aplicar os ensinamentos de Jesus em suas vidas diárias.",
                    "Nosso objetivo é plantar sementes de fé no coração das crianças, preparando-as para crescer como seguidores de Cristo e impactar o mundo ao seu redor. Junte-se a nós neste ministério, onde as crianças aprendem, brincam e crescem juntas em Cristo todos os domingos!"
                ]
            },
            {
                title: "Grupo de Louvor",
                imageAlt: "Grupo de Louvor",
                description: [
                    "O Grupo de Louvor é uma parte essencial dos cultos dominicais, liderando a igreja em momentos de adoração vibrante e transformadora. Com uma equipe de músicos e vocalistas talentosos e dedicados, o grupo tem como objetivo criar uma atmosfera onde todos possam se conectar profundamente com Deus por meio da música. Eles se dedicam a selecionar canções que não apenas elevam o nome de Jesus, mas também que tocam o coração da congregação, levando-a a momentos de reflexão, gratidão e entrega.",
                    "Além de simplesmente cantar, o grupo entende seu papel como ministros de adoração, guiando a igreja em uma jornada espiritual a cada domingo. Com um repertório que inclui tanto músicas contemporâneas quanto hinos tradicionais, eles procuram envolver todos os presentes, independente de idade ou preferências musicais. Através de harmonias bem executadas, letras inspiradoras e um profundo senso de devoção, o Grupo de Louvor busca criar uma experiência de adoração onde a presença de Deus seja sentida de maneira palpável, unindo corações em uma só voz para glorificar o Senhor.",
                    "Acima de tudo, o foco do grupo é apontar para Cristo em tudo o que fazem, lembrando à igreja que a adoração vai além da música – é um estilo de vida, uma expressão contínua de amor, gratidão e submissão a Deus."
                ]
            }
        ]
    },
    en: {
        mainTitle: "Join One of Our Ministries",
        ministries: [
            {
                title: "Men's Group",
                imageAlt: "Men's Group",
                description: [
                    "The Men's Group Ministry is a space dedicated to strengthening faith and building meaningful relationships among the men in our community. We believe that fellowship and mutual support are fundamental for spiritual and personal growth. Our meetings include Bible studies, discussions about relevant everyday life topics, community service activities, and social events that promote unity and strengthen bonds.",
                    "We are committed to inspiring and equipping men to be leaders in their families, churches, and communities. Together, we seek to live a life of authentic faith, serving the Lord and one another with love and dedication. Join us to grow in wisdom, share experiences, and encourage one another in our faith journey!"
                ]
            },
            {
                title: "Women's Group",
                imageAlt: "Women's Group",
                description: [
                    "The Women's Group Ministry is a welcoming and inspiring space where women of all ages gather to grow spiritually and strengthen their relationships. Here, we believe that unity and support among women are essential for facing life's challenges and promoting an environment of faith and encouragement.",
                    "Our meetings include Bible studies, workshops, lectures, and prayer times, as well as activities that promote personal and spiritual development. We also organize social events and community service, allowing participants to connect, share their stories, and help one another.",
                    "Our goal is to empower women to become leaders in their families, churches, and communities, living out their faith in practical and meaningful ways. Join us and discover a safe space to grow in faith, friendship, and purpose as we walk together on the spiritual journey!"
                ]
            },
            {
                title: "Children's Ministry",
                imageAlt: "Children's Ministry",
                description: [
                    "The Sunday Children's Ministry is a safe and fun environment where children can learn about God's love and the principles of Christian faith. Our meetings are planned for children of all ages, providing an enriching experience that combines biblical teachings with playful and creative activities.",
                    "During meetings, children participate in interactive Bible stories, games, crafts, and songs that make learning engaging and memorable. Our teachers and volunteers are dedicated to cultivating a space where each child feels valued, loved, and encouraged to explore their faith.",
                    "Additionally, we promote special events throughout the year, such as festivals, camps, and service activities, which help children develop a sense of community and apply Jesus' teachings in their daily lives.",
                    "Our goal is to plant seeds of faith in children's hearts, preparing them to grow as followers of Christ and impact the world around them. Join us in this ministry, where children learn, play, and grow together in Christ every Sunday!"
                ]
            },
            {
                title: "Worship Group",
                imageAlt: "Worship Group",
                description: [
                    "The Worship Group is an essential part of Sunday services, leading the church in vibrant and transformative worship moments. With a team of talented and dedicated musicians and vocalists, the group aims to create an atmosphere where everyone can deeply connect with God through music. They dedicate themselves to selecting songs that not only lift up Jesus' name but also touch the congregation's heart, leading to moments of reflection, gratitude, and surrender.",
                    "Beyond simply singing, the group understands their role as worship ministers, guiding the church on a spiritual journey every Sunday. With a repertoire that includes both contemporary songs and traditional hymns, they seek to engage everyone present, regardless of age or musical preferences. Through well-executed harmonies, inspiring lyrics, and a deep sense of devotion, the Worship Group seeks to create a worship experience where God's presence is tangibly felt, uniting hearts in one voice to glorify the Lord.",
                    "Above all, the group's focus is to point to Christ in everything they do, reminding the church that worship goes beyond music – it's a lifestyle, a continuous expression of love, gratitude, and submission to God."
                ]
            }
        ]
    },
    es: {
        mainTitle: "Únete a uno de nuestros Ministerios",
        ministries: [
            {
                title: "Grupo de Hombres",
                imageAlt: "Grupo de Hombres",
                description: [
                    "El Ministerio del Grupo de Hombres es un espacio dedicado a fortalecer la fe y construir relaciones significativas entre los hombres de nuestra comunidad. Creemos que el compañerismo y el apoyo mutuo son fundamentales para el crecimiento espiritual y personal. Nuestras reuniones incluyen estudios bíblicos, discusiones sobre temas relevantes de la vida cotidiana, actividades de servicio comunitario y eventos sociales que promueven la unidad y fortalecen los lazos.",
                    "Estamos comprometidos a inspirar y equipar a los hombres para ser líderes en sus familias, iglesias y comunidades. Juntos, buscamos vivir una vida de fe auténtica, sirviendo al Señor y unos a otros con amor y dedicación. ¡Únete a nosotros para crecer en sabiduría, compartir experiencias y animarnos mutuamente en nuestro camino de fe!"
                ]
            },
            {
                title: "Grupo de Mujeres",
                imageAlt: "Grupo de Mujeres",
                description: [
                    "El Ministerio del Grupo de Mujeres es un espacio acogedor e inspirador, donde mujeres de todas las edades se reúnen para crecer espiritualmente y fortalecer sus relaciones. Aquí, creemos que la unidad y el apoyo entre mujeres son esenciales para enfrentar los desafíos de la vida y promover un ambiente de fe y aliento.",
                    "Nuestras reuniones incluyen estudios bíblicos, talleres, conferencias y momentos de oración, además de actividades que promueven el desarrollo personal y espiritual. También organizamos eventos sociales y de servicio comunitario, permitiendo que las participantes se conecten, compartan sus historias y se ayuden mutuamente.",
                    "Nuestro objetivo es capacitar a las mujeres para que sean líderes en sus familias, iglesias y comunidades, viviendo la fe de manera práctica y significativa. ¡Únete a nosotras y descubre un espacio seguro para crecer en fe, amistad y propósito mientras caminamos juntas en el viaje espiritual!"
                ]
            },
            {
                title: "Ministerio Infantil",
                imageAlt: "Ministerio Infantil",
                description: [
                    "El Ministerio Infantil de los domingos es un ambiente seguro y divertido donde los niños pueden aprender sobre el amor de Dios y los principios de la fe cristiana. Nuestras reuniones están planificadas para niños de todas las edades, proporcionando una experiencia enriquecedora que combina enseñanzas bíblicas con actividades lúdicas y creativas.",
                    "Durante las reuniones, los niños participan en historias bíblicas interactivas, juegos, manualidades y canciones que hacen que el aprendizaje sea atractivo y memorable. Nuestros maestros y voluntarios están dedicados a cultivar un espacio donde cada niño se sienta valorado, amado y animado a explorar su fe.",
                    "Además, promovemos eventos especiales durante todo el año, como festivales, campamentos y actividades de servicio, que ayudan a los niños a desarrollar un sentido de comunidad y aplicar las enseñanzas de Jesús en su vida diaria.",
                    "Nuestro objetivo es plantar semillas de fe en el corazón de los niños, preparándolos para crecer como seguidores de Cristo e impactar el mundo que los rodea. ¡Únete a nosotros en este ministerio, donde los niños aprenden, juegan y crecen juntos en Cristo todos los domingos!"
                ]
            },
            {
                title: "Grupo de Alabanza",
                imageAlt: "Grupo de Alabanza",
                description: [
                    "El Grupo de Alabanza es una parte esencial de los servicios dominicales, guiando a la iglesia en momentos de adoración vibrante y transformadora. Con un equipo de músicos y vocalistas talentosos y dedicados, el grupo tiene como objetivo crear una atmósfera donde todos puedan conectarse profundamente con Dios a través de la música. Se dedican a seleccionar canciones que no solo elevan el nombre de Jesús, sino que también tocan el corazón de la congregación, llevándola a momentos de reflexión, gratitud y entrega.",
                    "Más allá de simplemente cantar, el grupo entiende su papel como ministros de adoración, guiando a la iglesia en un viaje espiritual cada domingo. Con un repertorio que incluye tanto canciones contemporáneas como himnos tradicionales, buscan involucrar a todos los presentes, independientemente de su edad o preferencias musicales. A través de armonías bien ejecutadas, letras inspiradoras y un profundo sentido de devoción, el Grupo de Alabanza busca crear una experiencia de adoración donde la presencia de Dios se sienta de manera palpable, uniendo corazones en una sola voz para glorificar al Señor.",
                    "Sobre todo, el enfoque del grupo es señalar a Cristo en todo lo que hacen, recordando a la iglesia que la adoración va más allá de la música – es un estilo de vida, una expresión continua de amor, gratitud y sumisión a Dios."
                ]
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

const ministryImages = {
    "Grupo dos Homens": { src: MensGroupPNG, webp: MensGroupWebP },
    "Men's Group": { src: MensGroupPNG, webp: MensGroupWebP },
    "Grupo de Hombres": { src: MensGroupPNG, webp: MensGroupWebP },
    "Grupo das Mulheres": { src: WomenGroupPNG, webp: WomenGroupWebP },
    "Women's Group": { src: WomenGroupPNG, webp: WomenGroupWebP },
    "Grupo de Mujeres": { src: WomenGroupPNG, webp: WomenGroupWebP },
    "Ministério Infantil": { src: KidsGroupJPG, webp: KidsGroupWebP },
    "Children's Ministry": { src: KidsGroupJPG, webp: KidsGroupWebP },
    "Ministerio Infantil": { src: KidsGroupJPG, webp: KidsGroupWebP },
    "Grupo de Louvor": { src: WorshipGroupJPG, webp: WorshipGroupWebP },
    "Worship Group": { src: WorshipGroupJPG, webp: WorshipGroupWebP },
    "Grupo de Alabanza": { src: WorshipGroupJPG, webp: WorshipGroupWebP }
};

const MinistrySection = ({ ministry, index }) => {
    const imageFirst = index % 2 !== 0;

    const ImageComponent = (
        <motion.div
            className="h-80 overflow-hidden rounded-lg"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
        >
            <Image
                src={ministryImages[ministry.title].src}
                webp={ministryImages[ministry.title].webp}
                alt={ministry.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </motion.div>
    );

    const TextComponent = (
        <motion.div
            className="text-left"
            variants={slideIn}
        >
            <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">{ministry.title}</h2>
            {ministry.description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-sm text-black">{paragraph}</p>
            ))}
        </motion.div>
    );

    return (
        <motion.section
            className="grid md:grid-cols-2 gap-12"
            variants={staggerChildren}
        >
            {imageFirst ? (
                <>
                    <div className={`${imageFirst ? 'max-md:order-1' : ''}`}>
                        {ImageComponent}
                    </div>
                    {TextComponent}
                </>
            ) : (
                <>
                    {TextComponent}
                    {ImageComponent}
                </>
            )}
        </motion.section>
    );
};

const Ministries = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-sans bg-white px-6 py-24"
        >
            <motion.h2
                className="text-yellowBtnHover text-4xl font-extrabold text-center mb-20"
                variants={slideIn}
            >
                {texts.mainTitle}
            </motion.h2>
            <div className="md:max-w-7xl max-w-xl mx-auto">
                {texts.ministries.map((ministry, index) => (
                    <React.Fragment key={index}>
                        <MinistrySection ministry={ministry} index={index} />
                        {index < texts.ministries.length - 1 && (
                            <motion.hr
                                className="border-gray-300 my-12"
                                variants={fadeIn}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    );
};

export default Ministries;