import React from 'react'
import CardImg1 from '../../assets/images/churchimg3.jpeg'
import CardImg2 from '../../assets/images/churchimg10.jpeg'
import CardImg3 from '../../assets/images/churchimg8.jpeg'
import CardImg4 from '../../assets/images/churchimg7.jpeg'


const HomeSermons = () => {
    return (
        <>
            <div className="p-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-12 items-center mx-auto max-w-7xl text-center lg:text-left">
                    <section>
                        <h2 className="text-3xl text-yellow-600 mb-4 font-bold">Pregações</h2>
                        <hr className="border-t-2 border-yellow-500 mb-6 max-w-[15rem] mx-auto lg:mx-0" />
                        <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-800">Revisite nossas pregações de Domingos passados</h2>
                        <button className='mt-8 w-fit mx-auto  bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 hover:bg-transparent hover:ring-2 hover:ring-yellow-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl font-bold uppercase'>
                            VEJA MAIS
                        </button>
                    </section>
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
                        <div className="cursor-pointer rounded overflow-hidden group">
                            <img src={CardImg1} alt="Blog Post 1" className="w-full h-52 object-cover rounded-md" />
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">10 FEB 2024 | PR CARLOS OLIVEIRA</span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">Título da Pregação vai aqui</h3>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded overflow-hidden group">
                            <img src={CardImg2} alt="Blog Post 2" className="w-full h-52 object-cover rounded-md" />
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">7 JUN 2024 | PRA KESIA VERAS</span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">Título da Pregação vai aqui</h3>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded overflow-hidden group">
                            <img src={CardImg3} alt="Blog Post 3" className="w-full h-52 object-cover rounded-md" />
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">5 OCT 2024 | PR CARLOS OLIVEIRA</span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">Título da Pregação vai aqui</h3>
                            </div>
                        </div>
                        <div className="cursor-pointer rounded overflow-hidden group">
                            <img src={CardImg4} alt="Blog Post 3" className="w-full h-52 object-cover rounded-md" />
                            <div className="py-6">
                                <span className="text-sm block text-gray-400 mb-2">10 DEC 2024 | PRA KESIA VERAS</span>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-all">Título da Pregação vai aqui</h3>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomeSermons