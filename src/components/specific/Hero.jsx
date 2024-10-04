import React from 'react'
import HeroImg from '../../assets/images/churchimg19.jpeg'

const Hero = () => {
    return (
        <>
            <div className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[90dvh] sm:h-[90dvh]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="Background Image" className="w-full h-[90dvh] sm:h-[90dvh] object-cover object-top opacity-45" />
                </div>

                <section className="absolute inset-0 pt-28 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-md md:text-2xl mb-8 uppercase">Um lugar de fé, esperança e comunhão</h2>
                        <h1 className="text-5xl md:text-8xl font-seaweed mb-4 drop-shadow-md shadow-gray-950">Você é Bem Vindo Aqui</h1>
                        <p className="pt-8 text-sm md:text-lg mb-8 max-w-2xl">Venha fazer parte de uma comunidade que vive e compartilha o amor de Cristo. Aqui, você encontrará acolhimento, propósito e crescimento espiritual. Junte-se a nós para adorar, servir e transformar vidas com a graça de Deus.</p>
                        <button type="button" className="btn mt-6 md:mt-4">
                            Saiba mais
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero