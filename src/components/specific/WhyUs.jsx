import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StripImg from '../../assets/images/churchimg35.png';
import StripImg2 from '../../assets/images/churchimg39.jpg';
import StripImg3 from '../../assets/images/churchimg40.jpg';

const WhyUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
    };

    return (
        <>
            <div className="font-sans px-4 py-24">
                <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-14 sm:mb-16">Porque participar de nossa igreja?</h2>
                <div ref={ref} className="grid lg:grid-cols-2 gap-20 md:gap-y-36 sm:gap-y-12 lg:max-w-6xl max-w-2xl mx-auto">
                    {/* Image container with overlapping images */}
                    <motion.section
                        className="relative mb-12 md:mb-24 sm:mb-12"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        {/* Larger Image */}
                        <motion.img
                            src={StripImg2}
                            alt="Placeholder Image"
                            className="object-contain w-full max-h-[675px] rounded-lg shadow-lg"
                        />

                        {/* Smaller Overlapping Image */}
                        <motion.img
                            src={StripImg3}
                            alt="Overlapping Image"
                            className="absolute top-[40%] sm:top-[50%] right-1/4 w-[90%] rounded-lg shadow-lg lg:block"
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                    </motion.section>

                    <motion.section
                        className="text-left px-4"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <h2 className="text-yellowBtnHover text-2xl font-bold mb-2">"Tu és a Rocha e sobre esta rocha edificarei a minha Igreja"</h2>
                        <p className='text-black italic text-lg font-thin mb-6'>- Mateus 16:18</p>

                        <hr className="border-t-2 border-yellowBtnHover mb-6" />

                        <p className="mb-4 text-md text-gray-500">Ser membro de uma igreja e frequentá-la semanalmente é fundamental para quem pretende seguir ao Senhor de forma plena, ou seja, fazendo e cumprindo convênios sagrados e guardando Seus mandamentos. Precisamos da igreja por muitas razões.</p>

                        <p className="mb-4 text-md text-gray-500">Como vemos, a igreja não é apenas um lugar físico, mas um espaço abençoado e repleto de significado, onde somos acolhidos pela graça divina e podemos nos conectar profundamente com Deus e com nossos irmãos e irmãs na fé. É mais do que apenas encontrar nossos amigos — é onde nossas vozes se unem em louvor, nossos corações se abrem em oração, e nossa alma se enriquece com o aprendizado e o ensino das palavras sagradas.</p>

                        <p className="mb-4 text-md text-gray-500">É neste ambiente de amor e comunhão que vivenciamos o Evangelho em sua plenitude. A igreja nos oferece a oportunidade de nos nutrirmos espiritualmente através da santa ceia, de renascermos pelo batismo e de cumprirmos com alegria os ensinamentos e mandamentos que Deus nos confiou nas sagradas escrituras. Cada momento vivido dentro da comunidade de fé é uma oportunidade de crescer espiritualmente e fortalecer nossa caminhada com Cristo.</p>
                    </motion.section>
                </div>
            </div>
        </>
    );
}

export default WhyUs;