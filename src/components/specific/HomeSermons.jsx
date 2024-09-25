import React from 'react'
import CardImg1 from '../../assets/images/churchimg3.jpeg'
import CardImg2 from '../../assets/images/churchimg10.jpeg'
import CardImg3 from '../../assets/images/churchimg8.jpeg'
import CardImg4 from '../../assets/images/churchimg7.jpeg'


const HomeSermons = () => {
    return (
        <>
            <div className="p-6 my-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center mx-12 max-w-full max-lg:max-w-2xl max-sm:max-w-sm">
                    <div>
                        <h2 className="text-4xl font-bold text-yellow-600 uppercase mb-4">PREGAÇÕES</h2>
                        <h2 className="text-3xl max-md:text-2xl font-extrabold text-gray-800">Revisite nossas pregações de Domingos passados</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSermons