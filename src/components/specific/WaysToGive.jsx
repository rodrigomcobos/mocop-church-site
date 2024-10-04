import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import StripImg from '../../assets/images/churchimg38.jpg';
import Donate from '../../assets/images/donate.svg';

const WaysToGive = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="bg-bottomBar px-6 md:px-8 py-16 md:py-24 font-[sans-serif] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12 relative">
                <img src={Donate} className="absolute right-80 top-[65%] transform -translate-y-1/2 opacity-10" alt="donate image" />

                <motion.div className="text-center md:text-left relative z-10" variants={containerVariants}>
                    <motion.h2 variants={itemVariants} className="text-white text-5xl md:text-5xl font-bold mb-4 font-seaweed">Maneiras de Doar</motion.h2>
                    <motion.p variants={itemVariants} className="text-sm md:text-md text-white mb-5">"Dê a outras pessoas e Deus dará a você. Ele lhe dará ainda mais do que você deu". <span className='font-thin italic'>- Lucas 6:38</span></motion.p>
                    <motion.h4 variants={itemVariants} className="text-lg md:text-2xl font-extrabold text-white mb-1">Dizíme nos Domingos</motion.h4>
                    <motion.p variants={itemVariants} className="text-sm md:text-md text-white mb-5">Aproveite a chance de fazer parte de algo maior e contribua com a nossa igreja durante os cultos dominicais. Sua doação não apenas apoia as atividades da nossa comunidade de fé, mas também fortalece os projetos que espalham amor e esperança.</motion.p>
                    <motion.hr variants={itemVariants} className='border-t-2 border-white my-6 md:my-8' />
                    <motion.h4 variants={itemVariants} className="text-lg md:text-2xl font-extrabold text-white mb-1">Seja um Voluntário</motion.h4>
                    <motion.p variants={itemVariants} className="text-sm md:text-md text-white mb-5">Venha fazer parte de nossa missão e sirva como voluntário em nossa igreja! Ao dedicar seu tempo e talentos, você estará contribuindo para transformar vidas, fortalecer nossa comunidade de fé e espalhar amor e esperança para todos.</motion.p>
                    <motion.hr variants={itemVariants} className='border-t-2 border-white my-6 md:my-8' />
                    <motion.h4 variants={itemVariants} className="text-lg md:text-2xl font-extrabold text-white mb-1">Ajude um missionário</motion.h4>
                    <motion.p variants={itemVariants} className="text-sm md:text-md text-white mb-5">Estenda suas mãos e ajude um missionário da nossa igreja! Através de suas contribuições, estamos fortalecendo o trabalho de missionários dedicados que, com fé inabalável, levam esperança e amor a pessoas necessitadas em todo o mundo. Juntos, podemos apoiar essa missão sagrada de alcançar os perdidos e transformar vidas.</motion.p>

                    <motion.a
                        href="#;"
                        className="btn mt-8"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Mande uma Oferta
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hidden md:block text-center overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={StripImg} alt="giving image" className="max-w-sm md:max-w-md mx-auto rounded-lg shadow-md" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WaysToGive;