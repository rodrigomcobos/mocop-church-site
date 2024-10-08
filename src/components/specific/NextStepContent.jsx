import React from 'react'
import { motion } from 'framer-motion'
import BaptismImg from '../../assets/images/baptismimg.jpg'
import MinistryImg from '../../assets/images/churchimg41.jpg'
import ServingImg from '../../assets/images/servingimg.jpg'
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

const NextStepContent = () => {
    const MotionLink = motion(Link);

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
                        <h2 className="text-yellowBtnHover text-3xl font-semibold mb-4 leading-10">Dando os Próximos Passos em Sua Caminhada na Fé</h2>
                    </div>
                    <div className="text-left">
                        <p className="mb-4 text-sm text-black">Nossa jornada espiritual está sempre em movimento, e há momentos em que somos chamados a ir mais fundo. Se você sente esse chamado, seja para se aproximar mais de Deus, fazer parte da nossa comunidade ou descobrir maneiras de servir, estamos aqui para ajudá-lo. </p>
                        <p className="text-sm text-black">Queremos que você saiba que não importa onde você esteja na sua caminhada, há sempre um próximo passo esperando por você. Pode ser pelo batismo, envolvimento em um ministério, ou encontrando uma forma de servir. Aqui na nossa igreja, há espaço para você crescer e fazer a diferença.</p>
                        <MotionLink
                            to="/contact"
                            className="mt-6 btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Entre em Contato
                        </MotionLink>
                    </div>
                </motion.section>

                <motion.section
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-24"
                    variants={staggerChildren}
                >
                    {[
                        { image: BaptismImg, title: "Batismo", color: "bg-red-100", description: "O batismo é um momento significativo de compromisso com Cristo. É uma demonstração pública da sua fé e uma decisão de seguir Jesus. Na nossa igreja, acreditamos que o batismo é um passo importante na jornada espiritual e uma oportunidade para você declarar sua nova vida em Cristo. Se você sente que está pronto para esse momento, entre em contato conosco e prepare-se para uma experiência transformadora." },
                        { image: MinistryImg, title: "Ministérios", color: "bg-blue-100", description: "Fazer parte de um ministério é uma maneira de colocar seus dons e talentos a serviço de Deus e da comunidade. Temos vários ministérios em nossa igreja, como o grupo de louvor, o ministério infantil, o grupo de homens e mulheres, entre outros. Não importa sua idade ou habilidades, sempre há um lugar onde você pode se envolver e fazer a diferença." },
                        { image: ServingImg, title: "Sirva Conosco", color: "bg-green-100", description: "Se você tem o desejo de servir, nós temos muitas oportunidades para que você possa contribuir. Seja ajudando em eventos, colaborando em ações comunitárias, ou apoiando nossos ministérios, sua participação é valiosa. Junte-se a nós e descubra como Deus pode usar você para impactar outras vidas e fazer parte de algo maior." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-primary rounded-lg shadow-md overflow-hidden hover:ring-2 hover:ring-yellowBtnHover"
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`h-64 ${item.color}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
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