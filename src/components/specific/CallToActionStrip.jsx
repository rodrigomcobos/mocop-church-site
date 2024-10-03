import React from 'react'

const CallToActionStrip = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 text-white py-16 px-2 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-around max-w-[90%] mx-auto">
                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-2xl text-left font-bold mb-2">DESCUBRA COMO, ONDE E QUANDO NÓS ADORAMOS</h2>
                        <h2 className="text-white text-2xl md:text-2xl text-left font-bold mb-4">ESPERAMOS VER VOCÊ EM BREVE</h2>
                    </div>

                    {/* Button Section */}
                    <div>
                        <button type="button" className="uppercase bg-white hover:bg-yellow-800 hover:text-white text-yellow-600 text-sm md:text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl hover:ring-2 hover:ring-yellow-500 font-bold inline-block mt-6 md:mt-8">
                            Planeje sua Visita
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToActionStrip