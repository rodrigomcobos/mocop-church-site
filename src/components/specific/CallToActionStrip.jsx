import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const CallToActionStrip = () => {
    const MotionLink = motion.create(Link);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div>
            <div className="bg-bottomBar text-white py-16 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                    {/* Text Section */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-2xl text-center sm:text-left font-bold mb-2">DESCUBRA COMO, ONDE E QUANDO NÓS ADORAMOS</h2>
                        <h2 className="text-white text-2xl md:text-2xl text-center sm:text-left font-bold mb-4">ESPERAMOS VER VOCÊ EM BREVE</h2>
                    </div>

                    {/* Button Section */}
                    <div>
                        <MotionLink
                            to="/plan-your-visit"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn mt-6 md:mt-4"
                        >
                            Planeje sua Visita
                        </MotionLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToActionStrip