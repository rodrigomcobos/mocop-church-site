import React from 'react';
import { motion } from 'framer-motion';
import MensGroup from '../../assets/images/mensgroup.png';
import WomenGroup from '../../assets/images/womensgroup.png';
import KidsGroup from '../../assets/images/childrensgroup.jpg';
import WorshipGroup from '../../assets/images/worshipgroup.jpg';

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

const Ministries = () => {
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
                Faça parte de um de nossos Ministérios
            </motion.h2>
            <div className="md:max-w-7xl max-w-xl mx-auto">
                <motion.section
                    className="grid md:grid-cols-2 gap-12"
                    variants={staggerChildren}
                >
                    <motion.div
                        className="text-left"
                        variants={slideIn}
                    >
                        <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Grupo dos Homens</h2>
                        <p className="mb-4 text-sm text-black">O Ministério do Grupo de Homens é um espaço dedicado ao fortalecimento da fé e à construção de relacionamentos significativos entre os homens da nossa comunidade. Acreditamos que a camaradagem e o apoio mútuo são fundamentais para o crescimento espiritual e pessoal. Nossos encontros incluem estudos bíblicos, discussões sobre temas relevantes da vida cotidiana, atividades de serviço comunitário e eventos sociais que promovem a união e o fortalecimento de laços.</p>
                        <p className="text-sm text-black">Estamos comprometidos em inspirar e equipar os homens para serem líderes em suas famílias, igrejas e comunidades. Juntos, buscamos viver uma vida de fé autêntica, servindo ao Senhor e uns aos outros com amor e dedicação. Junte-se a nós para crescer em sabedoria, compartilhar experiências e se encorajar mutuamente em nossa jornada de fé!</p>
                    </motion.div>
                    <motion.div
                        className="h-80 overflow-hidden rounded-lg"
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={MensGroup} alt="Grupo dos Homens" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.section>
                <motion.hr
                    className="border-gray-300 my-12"
                    variants={fadeIn}
                />
                <motion.section
                    className="grid md:grid-cols-2 gap-12"
                    variants={staggerChildren}
                >
                    <motion.div
                        className="h-80 overflow-hidden rounded-lg max-md:order-1"
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={WomenGroup} alt="Grupo das Mulheres" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                        className="text-left"
                        variants={slideIn}
                    >
                        <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Grupo das Mulheres</h2>
                        <p className="mb-4 text-sm text-black">O Ministério do Grupo de Mulheres é um espaço acolhedor e inspirador, onde mulheres de todas as idades se reúnem para crescer espiritualmente e fortalecer suas relações. Aqui, acreditamos que a união e o apoio entre mulheres são essenciais para enfrentar os desafios da vida e promover um ambiente de fé e encorajamento.</p>
                        <p className="mb-4 text-sm text-black">Nossos encontros incluem estudos bíblicos, workshops, palestras e momentos de oração, além de atividades que promovem o desenvolvimento pessoal e espiritual. Também organizamos eventos sociais e de serviço comunitário, permitindo que as participantes se conectem, compartilhem suas histórias e se ajudem mutuamente.</p>
                        <p className="text-sm text-black">Nosso objetivo é capacitar as mulheres a se tornarem líderes em suas famílias, igrejas e comunidades, vivendo a fé de maneira prática e significativa. Junte-se a nós e descubra um espaço seguro para crescer em fé, amizade e propósito, enquanto caminhamos juntas na jornada espiritual!</p>
                    </motion.div>
                </motion.section>
                <motion.hr
                    className="border-gray-300 my-12"
                    variants={fadeIn}
                />
                <motion.section
                    className="grid md:grid-cols-2 gap-12"
                    variants={staggerChildren}
                >
                    <motion.div
                        className="text-left"
                        variants={slideIn}
                    >
                        <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Ministério Infantil</h2>
                        <p className="mb-4 text-sm text-black">O Ministério Infantil de Domingos é um ambiente seguro e divertido onde as crianças podem aprender sobre o amor de Deus e os princípios da fé cristã. Nossos encontros são planejados para crianças de todas as idades, proporcionando uma experiência enriquecedora que combina ensinamentos bíblicos com atividades lúdicas e criativas.</p>
                        <p className="mb-4 text-sm text-black">Durante as reuniões, as crianças participam de histórias bíblicas interativas, jogos, artesanato e músicas que tornam o aprendizado envolvente e memorável. Nossos professores e voluntários são dedicados a cultivar um espaço onde cada criança se sinta valorizada, amada e encorajada a explorar sua fé.</p>
                        <p className="mb-4 text-sm text-black">Além disso, promovemos eventos especiais ao longo do ano, como festivais, acampamentos e atividades de serviço, que ajudam as crianças a desenvolver um senso de comunidade e a aplicar os ensinamentos de Jesus em suas vidas diárias.</p>
                        <p className="text-sm text-black">Nosso objetivo é plantar sementes de fé no coração das crianças, preparando-as para crescer como seguidores de Cristo e impactar o mundo ao seu redor. Junte-se a nós neste ministério, onde as crianças aprendem, brincam e crescem juntas em Cristo todos os domingos!</p>
                    </motion.div>
                    <motion.div
                        className="h-80 overflow-hidden rounded-lg"
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={KidsGroup} alt="Ministério Infantil" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.section>

                <motion.hr
                    className="border-gray-300 my-12"
                    variants={fadeIn}
                />
                <motion.section
                    className="grid md:grid-cols-2 gap-12"
                    variants={staggerChildren}
                >
                    <motion.div
                        className="h-80 overflow-hidden rounded-lg max-md:order-1"
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={WorshipGroup} alt="Grupo das Mulheres" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                        className="text-left"
                        variants={slideIn}
                    >
                        <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Grupo de Louvor</h2>
                        <p className="mb-4 text-sm text-black">O Grupo de Louvor é uma parte essencial dos cultos dominicais, liderando a igreja em momentos de adoração vibrante e transformadora. Com uma equipe de músicos e vocalistas talentosos e dedicados, o grupo tem como objetivo criar uma atmosfera onde todos possam se conectar profundamente com Deus por meio da música. Eles se dedicam a selecionar canções que não apenas elevam o nome de Jesus, mas também que tocam o coração da congregação, levando-a a momentos de reflexão, gratidão e entrega.</p>
                        <p className="mb-4 text-sm text-black">Além de simplesmente cantar, o grupo entende seu papel como ministros de adoração, guiando a igreja em uma jornada espiritual a cada domingo. Com um repertório que inclui tanto músicas contemporâneas quanto hinos tradicionais, eles procuram envolver todos os presentes, independente de idade ou preferências musicais. Através de harmonias bem executadas, letras inspiradoras e um profundo senso de devoção, o Grupo de Louvor busca criar uma experiência de adoração onde a presença de Deus seja sentida de maneira palpável, unindo corações em uma só voz para glorificar o Senhor.</p>
                        <p className="text-sm text-black">Acima de tudo, o foco do grupo é apontar para Cristo em tudo o que fazem, lembrando à igreja que a adoração vai além da música – é um estilo de vida, uma expressão contínua de amor, gratidão e submissão a Deus.</p>
                    </motion.div>
                </motion.section>
            </div>
        </motion.div>
    )
}

export default Ministries