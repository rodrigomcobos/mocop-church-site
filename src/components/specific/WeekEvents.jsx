import React from 'react'
import { BiSolidBible } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";
import { PiHandsPrayingDuotone } from "react-icons/pi";

const WeekEvents = () => {
    return (
        <>
            <div className="bg-orange-100 font-[sans-serif]">
                <div className="max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-yellow-700 text-4xl font-extrabold text-center mb-4">Programação da Semana</h2>
                    <p className="text-gray-500 text-center mb-16 text-lg">Aqui esta a programação da nossa semana.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto min-h-[240px]">

                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-8 relative z-10">
                                <p className='text-yellow-600 font-semibold'>QUARTAS</p>
                                <h3 className="text-gray-800 text-3xl font-semibold mb-3">Dia de Oração</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Tailor our product to suit your needs Tailor our product to suit your needs.</p>
                            </div>
                            {/* Icon with absolute positioning */}
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <PiHandsPrayingDuotone className="text-9xl" />
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-8 relative z-10">
                                <p className='text-yellow-600 font-semibold'>SEXTAS</p>
                                <h3 className="text-gray-800 text-3xl font-semibold mb-3">Estudo Bíblico</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Your data is protected by the latest security measures.</p>
                            </div>
                            {/* Icon with absolute positioning */}
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <LuBookOpen className="text-9xl" />
                            </div>
                        </div>

                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div className="p-8 relative z-10">
                                <p className='text-yellow-600 font-semibold'>DOMINGOS</p>
                                <h3 className="text-gray-800 text-3xl font-semibold mb-3">Culto</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Experience blazing-fast performance with our product.</p>
                            </div>
                            {/* Icon with absolute positioning */}
                            <div className="absolute right-4 bottom-4 text-yellow-500 opacity-20">
                                <BiSolidBible className="text-9xl" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WeekEvents;