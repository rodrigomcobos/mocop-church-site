import React from 'react';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import StripImg from '../../assets/images/churchimg38.jpg';

const WaysToGive = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 px-6 md:px-8 py-16 md:py-24 font-[sans-serif] relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12 relative">
                    {/* Icon in the background */}
                    <MdOutlineVolunteerActivism
                        className="absolute left-0 top-[75%] transform -translate-y-1/2 text-white opacity-10"
                        size={300} /* Adjust icon size for smaller screens */
                    />
                    <div className="text-center md:text-left relative z-10">
                        <h2 className="text-white text-5xl md:text-5xl font-bold mb-4 font-seaweed">Maneiras de Doar</h2>
                        <p className="text-sm md:text-md text-white mb-5">"Dê a outras pessoas e Deus dará a você. Ele lhe dará ainda mais do que você deu". <span className='font-thin italic'>- Lucas 6:38</span></p>
                        <h4 className="text-lg md:text-2xl font-extrabold text-white mb-1">Dizíme nos Domingos</h4>
                        <p className="text-sm md:text-md text-white mb-5">Aproveite a chance de fazer parte de algo maior e contribua com a nossa igreja durante os cultos dominicais. Sua doação não apenas apoia as atividades da nossa comunidade de fé, mas também fortalece os projetos que espalham amor e esperança.</p>
                        <hr className='border-t-2 border-yellow-500 my-6 md:my-8' />
                        <h4 className="text-lg md:text-2xl font-extrabold text-white mb-1">Seja um Voluntário</h4>
                        <p className="text-sm md:text-md text-white mb-5">Venha fazer parte de nossa missão e sirva como voluntário em nossa igreja! Ao dedicar seu tempo e talentos, você estará contribuindo para transformar vidas, fortalecer nossa comunidade de fé e espalhar amor e esperança para todos.</p>
                        <hr className='border-t-2 border-yellow-500 my-6 md:my-8' />
                        <h4 className="text-lg md:text-2xl font-extrabold text-white mb-1">Ajude um missionário</h4>
                        <p className="text-sm md:text-md text-white mb-5">Estenda suas mãos e ajude um missionário da nossa igreja! Através de suas contribuições, estamos fortalecendo o trabalho de missionários dedicados que, com fé inabalável, levam esperança e amor a pessoas necessitadas em todo o mundo. Juntos, podemos apoiar essa missão sagrada de alcançar os perdidos e transformar vidas.</p>

                        <a href="#;" className="uppercase bg-white hover:bg-yellow-800 hover:text-white text-yellow-600 text-sm md:text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-yellow-500 font-bold inline-block mt-6 md:mt-8">
                            Mande uma Oferta
                        </a>
                    </div>

                    {/* Image - Hidden on smaller screens */}
                    <div className="hidden md:block text-center">
                        <img src={StripImg} alt="Premium Benefits" className="max-w-sm md:max-w-md mx-auto rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WaysToGive;