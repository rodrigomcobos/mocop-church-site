import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className="">
                <div className="max-w-7xl mx-auto px-6 my-20 flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 md:pr-4 text-center md:text-left">
                        <h2 className="text-yellowBtnHover text-2xl md:text-3xl font-bold mb-6">Inscreva-se e Fique por Dentro!</h2>
                        <p className="text-gray-800 text-md">Se você deseja acompanhar tudo o que acontece na nossa igreja e ser parte da nossa jornada de fé, inscreva-se na nossa newsletter. Receba notícias sobre cultos, eventos especiais, estudos bíblicos e muito mais diretamente no seu e-mail. Sua participação é muito importante para nós!</p>
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-1/2 md:pl-4">
                        <div className="mt-4 md:mt-8 flex items-center bg-gray-100 rounded overflow-hidden">
                            <input
                                name="name"
                                type="text"
                                className="flex-1 w-full text-gray-800 bg-transparent text-sm px-4 py-3 outline-none"
                                placeholder="Digite seu e-mail"
                            />
                            <button
                                type="button"
                                className="btn"
                            >
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;