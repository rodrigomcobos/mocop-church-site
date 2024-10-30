import React from 'react';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import Subscribe from '../components/specific/Subscribe';

// Import both JPG and WebP formats
import HeroImgJPG from '../../src/assets/images/churchimg40.jpg';
import HeroImgWebP from '../../src/assets/images/churchimg40.webp';

const PlanYourVisit = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

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
    }

    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgJPG}
                        webp={HeroImgWebP}
                        alt="Planeje sua Visita Header Image"
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"

                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">
                            Planeje sua Visita
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase">
                            É sua Primeira Vez Aqui?
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
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">Bem-vindo!</h2>
                    <p>Não importa em que fase da vida você se encontre, nós lhe damos as boas-vindas à Comunidade Cristã Brasileira em Lewisville! Nosso objetivo é que você saia encorajado e equipado através da Palavra de Deus.</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">O que Esperar</h2>
                    <p>Na Comunidade Cristã Brasileira em Lewisville, acreditamos que a igreja deve ser divertida! Você vai perceber que nossos cultos são energéticos e animados. Nossa experiência de adoração envolve músicas modernas de louvor e adoração, seguidas por um ensino centrado na Bíblia. A igreja é um momento para se reunir com uma comunidade de crentes, ser desafiado, encorajado e equipado através da palavra de Deus. Sabemos que ser novo às vezes pode ser intimidante, mas na Comunidade Cristã Brasileira em Lewisville, é nosso desejo que você se sinta bem-vindo desde o início! Nossa experiência de adoração dura cerca de uma hora à uma hora e meia. Encorajamos você a chegar cedo, passar um tempo conosco para nós se conhecer melhor. Mal podemos esperar para conhecê-lo!</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">Venha Como Você Está</h2>
                    <p>Na Comunidade Cristã Brasileira em Lewisville, nosso objetivo é proporcionar um ambiente acolhedor e inclusivo para todos os que desejam participar de nossas atividades. Acreditamos que a verdadeira essência da adoração e da comunhão não está em como nos vestimos, mas sim na condição de nossos corações e em nossa disposição de buscar a Deus em comunidade.</p>
                    <br />
                    <p>Por isso, não há um código de vestimenta rígido a ser seguido em nossos encontros. Queremos que você se sinta à vontade para vir como está, seja vestindo roupas casuais ou mais formais. O mais importante para nós é a sua presença e a sua vontade de se conectar com Deus e com os outros membros da nossa família em Cristo. Ao entrar em nossas portas, você encontrará um espaço seguro, onde poderá expressar sua fé livremente e compartilhar sua jornada espiritual, independentemente de sua origem ou estilo de vida. Junte-se a nós e descubra a alegria de fazer parte de uma comunidade que valoriza a autenticidade e o amor fraternal acima de tudo!</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-yellowBtnHover">Traga as Crianças</h2>
                    <p>A salinha das crianças na Comunidade Cristã Brasileira em Lewisville está disponível para crianças de 6 semanas até o 5º ano. Nosso objetivo é fazer uma parceria com você para ajudar seus filhos a descobrir Deus em um ambiente seguro e amoroso. Oramos para que cada criança aceite Jesus como seu Senhor e Salvador e comece a desenvolver um relacionamento profundo com Ele. A salinha das crianças oferece ambientes acolhedores e apropriados para cada idade, brincadeiras interativas e ensinamentos criativos de princípios bíblicos. A salinha das crianças está disponível durante cada experiência de adoração, para que você possa desfrutar de um ótimo culto sabendo que seu filho está sendo amado e nutrido!</p>
                </motion.section>

                <motion.div
                    variants={itemVariants}
                    className="text-center mt-24"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn"
                    >
                        Tome o Próximo Passo
                    </motion.button>
                </motion.div>
            </motion.div>
            < Subscribe />
        </div>
    )
}

export default PlanYourVisit