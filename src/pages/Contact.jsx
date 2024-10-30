import React from 'react';
import Image from 'react-image-webp';
import Subscribe from '../components/specific/Subscribe';
import ContactForm from '../components/specific/ContactForm';

// Import both PNG and WebP formats
import HeroImgPNG from '../../src/assets/images/headerimg8.png';
import HeroImgWebP from '../../src/assets/images/headerimg8.webp';

const Contact = () => {
    return (
        <div>
            <header className="relative bg-gradient-to-r from-black to-yellow-900 font-[sans-serif] h-[40dvh] sm:h-[450px]">
                {/* Set the image to cover the entire container */}
                <div className="absolute inset-0">
                    <Image
                        src={HeroImgPNG}
                        webp={HeroImgWebP}
                        alt="Contact Us Background Image"
                        className="w-full h-[40dvh] sm:h-[450px] object-cover object-center opacity-45"
                        loading="lazy"
                        fadeIn
                    />
                </div>

                <section className="absolute inset-0 pt-32 mx-6 flex justify-center items-center z-10 text-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl md:text-5xl mb-6 drop-shadow-md shadow-gray-950 uppercase font-bold">
                            Entre em Contato
                        </h1>
                        <h2 className="text-md md:text-2xl uppercase">
                            Envie Suas Perguntas, Solicitações ou Mensagens de Oração
                        </h2>
                    </div>
                </section>
            </header>

            <ContactForm />

            <Subscribe />
        </div>
    );
};

export default Contact;