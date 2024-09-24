import React from 'react'

const HomeStrip = () => {
    return (
        <>
            <div className=" min-h-[140px] py-8 p-16 bg-orange-100 font-sans overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between align-middle items-center gap-10">
                    <div>
                        <h1 className="text-xl text-gray-500 font-semibold">Pregação do próximo Domingo</h1>
                        <p className="text-3xl text-yellow-800 font-bold mt-4">"A Lei Exige, Mas a Graça Supre" <span className='text-gray-500 font-semibold text-xl'>- Pr Carlos Oliveira</span></p>
                    </div>
                    <div>
                        <button type="button"
                            className="bg-yellow-600 hover:bg-yellow-800 text-white text-base tracking-wide px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl font-bold">
                            Assista Ao Vivo
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeStrip