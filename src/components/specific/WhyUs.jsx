import React from 'react'
import StripImg from '../../assets/images/churchimg35.png'

const WhyUs = () => {
    return (
        <>
            <div className="font-sans px-4 py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
                    <section>
                        <img src={StripImg} alt="Placeholder Image" className=" object-contain w-full max-h-[675px]" />
                    </section>

                    <section className="text-left">
                        <h2 className="text-yellow-700 text-3xl font-bold mb-2">"Tu és a Rocha e sobre esta rocha edificarei a minha Igreja"</h2>
                        <p className='text-gray-400 text-lg font-semibold mb-6'>Mateus 16:18</p>
                        <p className="mb-4 text-md text-gray-500">Ser membro de uma igreja e frequentá-la semanalmente é fundamental para quem pretende seguir ao Senhor de forma plena, ou seja, fazendo e cumprindo convênios sagrados e guardando Seus mandamentos. Precisamos da igreja por muitas razões. </p>

                        <p className="mb-4 text-md text-gray-500">Como vemos, a igreja não é apenas um lugar físico, mas um espaço abençoado e repleto de significado, onde somos acolhidos pela graça divina e podemos nos conectar profundamente com Deus e com nossos irmãos e irmãs na fé. É mais do que apenas encontrar nossos amigos — é onde nossas vozes se unem em louvor, nossos corações se abrem em oração, e nossa alma se enriquece com o aprendizado e o ensino das palavras sagradas.</p>

                        <p className="mb-4 text-md text-gray-500">É neste ambiente de amor e comunhão que vivenciamos o Evangelho em sua plenitude. A igreja nos oferece a oportunidade de nos nutrirmos espiritualmente através da santa ceia, de renascermos pelo batismo e de cumprirmos com alegria os ensinamentos e mandamentos que Deus nos confiou nas sagradas escrituras. Cada momento vivido dentro da comunidade de fé é uma oportunidade de crescer espiritualmente e fortalecer nossa caminhada com Cristo.</p>

                    </section>

                </div>
            </div>
        </>
    )
}

export default WhyUs