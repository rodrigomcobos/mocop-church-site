import React from 'react';
import StripImg from '../../assets/images/churchimg35.png';
import StripImg2 from '../../assets/images/churchimg36.jpg';
import StripImg3 from '../../assets/images/churchimg37.jpg';

const WhyUs = () => {
    return (
        <>
            <div className="font-sans px-4 py-32">
                <div className="grid lg:grid-cols-2 gap-20 lg:max-w-7xl max-w-2xl mx-auto">
                    {/* Image container with overlapping images */}
                    <section className="relative">
                        {/* Larger Image */}
                        <img
                            src={StripImg2}
                            alt="Placeholder Image"
                            className="object-contain w-full max-h-[675px] rounded-lg shadow-lg"
                        />

                        {/* Smaller Overlapping Image */}
                        <img
                            src={StripImg3}
                            alt="Overlapping Image"
                            className="absolute top-[40%] right-1/4 w-[90%] rounded-lg shadow-lg sm:hidden lg:block"
                        />
                    </section>

                    <section className="text-left px-14">
                        <h2 className="text-yellow-700 text-3xl font-bold mb-2">"Tu és a Rocha e sobre esta rocha edificarei a minha Igreja"</h2>
                        <p className='text-gray-400 text-lg font-semibold mb-6'>Mateus 16:18</p>

                        <hr className="border-t-2 border-yellow-500 mb-6" />

                        <p className="mb-4 text-md text-gray-500">Ser membro de uma igreja e frequentá-la semanalmente é fundamental para quem pretende seguir ao Senhor de forma plena, ou seja, fazendo e cumprindo convênios sagrados e guardando Seus mandamentos. Precisamos da igreja por muitas razões.</p>

                        <p className="mb-4 text-md text-gray-500">Como vemos, a igreja não é apenas um lugar físico, mas um espaço abençoado e repleto de significado, onde somos acolhidos pela graça divina e podemos nos conectar profundamente com Deus e com nossos irmãos e irmãs na fé. É mais do que apenas encontrar nossos amigos — é onde nossas vozes se unem em louvor, nossos corações se abrem em oração, e nossa alma se enriquece com o aprendizado e o ensino das palavras sagradas.</p>

                        <p className="mb-4 text-md text-gray-500">É neste ambiente de amor e comunhão que vivenciamos o Evangelho em sua plenitude. A igreja nos oferece a oportunidade de nos nutrirmos espiritualmente através da santa ceia, de renascermos pelo batismo e de cumprirmos com alegria os ensinamentos e mandamentos que Deus nos confiou nas sagradas escrituras. Cada momento vivido dentro da comunidade de fé é uma oportunidade de crescer espiritualmente e fortalecer nossa caminhada com Cristo.</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default WhyUs;