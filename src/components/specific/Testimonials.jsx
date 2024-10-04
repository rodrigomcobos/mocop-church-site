import React from 'react'
import { FaQuoteRight, FaStar } from "react-icons/fa";
import ReviewPhoto1 from '../../assets/images/review1.png';
import ReviewPhoto2 from '../../assets/images/review2.png';
import ReviewPhoto3 from '../../assets/images/review3.png';


const Testimonials = () => {
    return (
        <div>
            <div className="mt-6 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-yellowBtnHover text-3xl md:text-4xl text-center font-bold mb-4">Depoimentos dos Membros</h2>
                        <p className="text-md text-gray-800 mt-6 leading-relaxed">Veja o que nossos membros e visitantes dizem sobre a nossa igreja. Suas palavras nos inspiram e fortalecem nossa comunidade de fé. Compartilhe sua experiência conosco!</p>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center mt-16">
                        <div className="max-w-[350px] h-auto shadow-md lg:p-8 p-6 rounded-md bg-white relative hover:shadow-xl transition duration-300 hover:ring-2 hover:ring-yellow-600">
                            <div className="bg-yellowBtnHover flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                <FaQuoteRight size={24} className="text-white" />
                            </div>

                            <div className="flex items-center">
                                <img src={ReviewPhoto1} className="w-14 h-14" />

                                <div className="ml-4">
                                    <h4 className="text-md font-extrabold">Paulo Lima</h4>
                                    <div className="flex space-x-1 mt-2">
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-md leading-relaxed">A primeira vez que eu, minha esposa e minha filha entramos lá, nos sentimos em casa, um ótimo lugar para adorar e se conectar. Se você é brasileiro, americano ou de qualquer outro país, você será bem-vindo.</p>
                            </div>
                        </div>

                        <div className="max-w-[350px] h-auto shadow-md lg:p-8 p-6 rounded-md bg-white relative hover:shadow-xl transition duration-300 hover:ring-2 hover:ring-yellow-600">
                            <div className="bg-yellowBtnHover flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                <FaQuoteRight size={24} className="text-white" />
                            </div>

                            <div className="flex items-center">
                                <img src={ReviewPhoto2} className="w-14 h-14" />

                                <div className="ml-4">
                                    <h4 className="text-md font-extrabold">Anastacio Mesquita</h4>
                                    <div className="flex space-x-1 mt-2">
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-md leading-relaxed">Culto maravilhoso, muitos receptivos.</p>
                            </div>
                        </div>

                        <div className="max-w-[350px] h-auto shadow-md lg:p-8 p-6 rounded-md bg-white relative hover:shadow-xl transition duration-300 hover:ring-2 hover:ring-yellow-600">
                            <div className="bg-yellowBtnHover flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                <FaQuoteRight size={24} className="text-white" />
                            </div>

                            <div className="flex items-center">
                                <img src={ReviewPhoto3} className="w-14 h-14" />

                                <div className="ml-4">
                                    <h4 className="text-md font-extrabold">Rodrigo Cobos</h4>
                                    <div className="flex space-x-1 mt-2">
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                        <FaStar className="w-4 fill-yellow-600" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-md leading-relaxed">Ótimo lugar para servir a Deus. Louvor muito bom, igreja bem atenciosa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials