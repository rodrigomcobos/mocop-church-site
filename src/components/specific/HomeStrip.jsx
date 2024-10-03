import React from 'react';

const HomeStrip = () => {
    return (
        <>
            <div className="relative min-h-[150px] py-6 px-6 md:py-8 md:px-16 bg-gradient-to-r from-orange-100 via-orange-100 to-amber-100 font-sans overflow-hidden -mt-16 z-10 max-w-[90%] lg:max-w-[80%] mx-auto rounded-lg">
                <div className="flex flex-col md:flex-row justify-between align-middle items-center gap-6 md:gap-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-lg md:text-xl lg:text-xl text-gray-800 font-semibold">
                            Verso do Dia
                        </h1>
                        <p className="text-2xl md:text-2xl lg:text-2xl text-yellow-800 font-bold mt-4">
                            "Em sua arrogância, o homem perverso persegue os fracos, que são pegos nos esquemas que ele cria."
                            <span className="block md:inline text-gray-800 font-normal text-lg md:text-lg lg:text-lg italic">
                                &nbsp; &nbsp; - Salmos 10:2
                            </span>
                        </p>
                    </div>
                    {/* <div>
                        <button type="button" className="mt-4 w-fit mx-auto bg-yellow-600 hover:bg-yellow-800 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out hover:shadow-xl font-bold uppercase">
                            Assista Ao Vivo
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default HomeStrip;