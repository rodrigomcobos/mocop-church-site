import React from 'react';
import { motion } from 'framer-motion';
import Image from 'react-image-webp';
import { PiNumberSquareOneFill, PiNumberSquareTwoFill, PiNumberSquareThreeFill, PiNumberSquareFourFill, PiNumberSquareFiveFill, PiNumberSquareSixFill } from "react-icons/pi";
import ImgJPG from '../../assets/images/churchimg44.jpg';
import ImgWebP from '../../assets/images/churchimg44.webp';

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
    const values = [
        { icon: PiNumberSquareOneFill, text: "Cremos que o sangue de Jesus pode purificar o homem de todo o pecado. (I Joao 1:7-9)" },
        { icon: PiNumberSquareTwoFill, text: "Que a palavra de Deus é apta para discernir, exortar e ensinar. (I Corintios 14:3)" },
        { icon: PiNumberSquareThreeFill, text: "Deus é triuno: Pai, Filho e Espirito Santo." },
        { icon: PiNumberSquareFourFill, text: "Deus é o unico criador do universo e governa através de seu próprio querer." },
        { icon: PiNumberSquareFiveFill, text: "Jesus Cristo é totalmente homem, totalmente Deus, nasceu da virgem Maria através do milagre da geração do Espirito Santo." },
        { icon: PiNumberSquareSixFill, text: "Jesus se deu na cruz morrendo nela por nossos pecados e ressucitou ao terceiro dia para nos dar a vida eterna." },
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
                    VALORES
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
                        alt="Core Values"
                        loading="lazy"
                    />
                </motion.div>

                <motion.div
                    className="xl:col-span-2 max-md:px-6"
                    variants={slideIn}
                >
                    <div>
                        <h2 className="text-white sm:text-4xl text-2xl font-extrabold">Nossos valores fundamentais</h2>
                        <p className="text-sm text-white leading-relaxed mt-6">A base da nossa fé está firmemente alicerçada na Bíblia, a Palavra de Deus. Acreditamos que a Bíblia é divinamente inspirada, viva, e eternamente relevante para todas as gerações. Ela é mais do que um livro de ensinamentos; é a manifestação da vontade de Deus para a humanidade, sendo ativa e operante no mundo.
                        </p>
                        <p className="text-sm text-white leading-relaxed mt-6">Cremos que através das Escrituras, Deus se revela ao Seu povo, oferecendo direção, consolo, e transformação espiritual. A Bíblia não apenas nos guia em nossos momentos de dúvida e dificuldade, mas também nos exorta a viver de acordo com os Seus preceitos. Ela ilumina o caminho para uma vida plena em Cristo, mostrando-nos como amar, servir, e seguir os passos de Jesus.</p>
                        <p className="text-sm text-white leading-relaxed mt-6">Cada página das Escrituras é rica em sabedoria e verdade, e nela encontramos o alicerce da nossa fé. Desde Gênesis até Apocalipse, a Bíblia nos conta a grande história da redenção, o amor incondicional de Deus por Sua criação, e o plano de salvação que culmina em Jesus Cristo.</p>
                        <p className="text-sm text-white leading-relaxed mt-6">Portanto, não apenas vemos a Bíblia como um documento histórico ou religioso, mas como a Palavra viva de Deus, sempre presente, moldando nossas vidas, nossa igreja, e a missão que nos foi dada. Ela é infalível, imutável e eterna — o fundamento sobre o qual tudo em nossa fé é construído.</p>
                    </div>

                    <motion.section
                        className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12"
                        variants={staggerChildren}
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                variants={fadeIn}
                                whileHover={{ scale: 1.05 }}
                            >
                                <value.icon size={28} className="text-white text-2xl flex-shrink-0 mt-1" />
                                <h6 className="text-base text-white font-bold">{value.text}</h6>
                            </motion.div>
                        ))}
                    </motion.section>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CoreValues;