import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className="">
                <div className="max-w-[75%] mx-auto p-4 my-20 flex items-center justify-center">
                    {/* Left Side */}
                    <div className="w-1/2 pr-4">
                        <h2 className="text-gray-800 text-2xl font-bold mb-6">Inscreva-se e Fique por Dentro!</h2>
                        <p className="text-gray-800 text-md">Se você deseja acompanhar tudo o que acontece na nossa igreja e ser parte da nossa jornada de fé, inscreva-se na nossa newsletter. Receba notícias sobre cultos, eventos especiais, estudos bíblicos e muito mais diretamente no seu e-mail. Sua participação é muito importante para nós!</p>
                    </div>
                    {/* Right Side */}
                    <div className="w-1/2 pl-4">
                        <div className="mt-8 flex items-center bg-gray-100 rounded overflow-hidden">
                            <input name="name" type="text" className="flex-1 w-full text-gray-800 bg-transparent text-sm px-4 py-3 outline-none" placeholder="Enter email" />
                            <button type="button"
                                className="w-max px-6 py-3 text-md tracking-wider outline-none border-none  bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 hover:bg-transparent hover:ring-2 hover:ring-yellow-600 text-white transition ease-in duration-300"> Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe