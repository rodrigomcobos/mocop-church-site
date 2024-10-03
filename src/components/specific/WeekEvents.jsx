import React from 'react'
import { BiSolidBible } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const WeekEvents = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-orange-100 via-orange-100 to-amber-100 font-[sans-serif] py-14">
                <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
                    <h2 className="text-yellow-700 text-3xl md:text-4xl text-center font-bold mb-4">Programação da Semana</h2>
                    <p className="text-black text-center mb-10 md:mb-16 text-base md:text-lg max-w-5xl mx-auto">
                        Junte-se a nós em um ambiente acolhedor, onde a fé e a comunhão se encontram. Nossas reuniões oferecem a oportunidade perfeita para adorar, aprender e crescer juntos na palavra de Deus. Venha participar e fortalecer sua caminhada espiritual com nossa comunidade.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-md md:max-w-none mx-auto min-h-[240px]">

                        {/* Prayer Day */}
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-yellow-600 font-semibold text-sm md:text-base'>QUARTAS as 7:00PM</p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">Dia de Oração</h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    Em nossas quartas-feiras, dedicamos um tempo especial para buscar a presença de Deus através da oração. Este é um momento para interceder uns pelos outros, compartilhar testemunhos e fortalecer nossa fé em comunidade. Todos são bem-vindos!
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <PiHandsPrayingDuotone className="text-9xl md:text-9xl" />
                            </div>
                        </div>

                        {/* Bible Study */}
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-yellow-600 font-semibold text-sm md:text-base'>SEXTAS as 7:00PM</p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">Estudo Bíblico</h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    As sextas-feiras são reservadas para um estudo aprofundado das Escrituras. Juntos, exploramos a Palavra de Deus, discutimos temas relevantes e aplicamos os ensinamentos em nossas vidas. Não perca a oportunidade de crescer espiritualmente e fazer novas amizades!
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <LuBookOpen className="text-9xl md:text-9xl" />
                            </div>
                        </div>

                        {/* Service Day */}
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-6 md:p-8 relative z-10 space-y-4">
                                <p className='text-yellow-600 font-semibold text-sm md:text-base'>DOMINGOS as 6:00PM</p>
                                <h3 className="text-gray-800 text-xl md:text-3xl font-semibold mb-3">Culto</h3>
                                <p className="text-gray-500 text-sm md:text-md leading-relaxed">
                                    Todos os domingos, nos reunimos para celebrar e adorar a Deus em comunhão. É uma oportunidade para ouvir a Palavra, louvar e adorar juntos, e renovar nosso compromisso de fé. Traga sua família e amigos e venha experimentar a alegria de estar na casa do Senhor!
                                </p>
                            </div>
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <BiSolidBible className="text-9xl md:text-9xl" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default WeekEvents;