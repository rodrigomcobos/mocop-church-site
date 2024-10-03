import React from 'react';
import PastorImage from '../../assets/images/pastor.png'; // Adjust the path as necessary

const MeetThePastor = () => {
    return (
        <div className="bg-white pt-36 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-6">
                {/* Left Column - Image */}
                <div className="relative order-2 md:order-1 mt-8 md:mt-0">
                    <img
                        src={PastorImage}
                        alt="Pastor Carlos Oliveira"
                        className="w-[90%] md:w-[90%] h-auto mx-auto"
                    />
                </div>

                {/* Right Column - Text Content */}
                <div className="flex flex-col justify-center text-center md:text-center order-1 md:order-2 -mt-10 md:-mt-18 sm:-mt-44">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase">O Poder de</h2>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">Jesus Muda</h2>
                    <h2 className="text-8xl md:text-8xl sm:text-8xl font-bold bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text font-seaweed -mt-3">Tudo</h2>
                    <p className="mt-4 text-gray-600 text-md md:text-md text-left">
                        Igreja é um momento para se reunir com uma comunidade de crentes, ser desafiado, encorajado e equipado pela palavra de Deus.
                    </p>
                    <p className="mt-4 text-gray-600 text-md md:text-md text-left">
                        Nossa experiência de adoração envolve louvor moderno e canções de adoração seguidas por um ensino centrado na Bíblia. Como uma igreja interdenominacional, damos boas-vindas a pessoas de todas as esferas da vida para se juntarem a nós.
                    </p>
                    <button className="mt-8 w-fit mx-auto  bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 hover:bg-transparent hover:ring-2 hover:ring-yellow-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl font-bold uppercase">
                        No que acreditamos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MeetThePastor;