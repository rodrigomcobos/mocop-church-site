import React from 'react'
import PastorImg1 from '../../assets/images/pastorimg1.png'

export const AboutThePastorContent = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto my-24">
                <div className="max-md:order-1 max-md:text-center">
                    <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-yellowBtnHover mb-4">Conheça o Pastor Carlos Jorge Lima de Oliveira</h2>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Carlos Jorge Lima de Oliveira nasceu em 1962, em Salvador, Bahia, e viveu uma jornada de fé inspiradora. Em 1994, ele e sua esposa, Tereza Cristina Guimarães de Oliveira, encontraram a Cristo e se converteram na Igreja Batista do Caminho das Árvores, sob a liderança do Bispo Átila Brandão. Três anos depois, em 1997, o casal se mudou para os Estados Unidos, onde continuaram a fortalecer sua caminhada espiritual na Shady Grove Brazilian Church, pastoreada por Julio Pinto, em Garland, Texas. Em busca de uma formação teológica mais profunda, ambos frequentaram o Christ for the Nations, onde foram consagrados como pastores.</p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Em janeiro de 2004, o casal fundou a Comunidade Cristã Brasileira em Lewisville, Texas, com o propósito de criar uma comunidade de fé sólida e acolhedora. Pastor Carlos sempre teve um forte compromisso com missões e, ao longo dos anos, realizou viagens missionárias a Cuba e à Guiné-Bissau, levando o evangelho a novas fronteiras. Sua esposa, Tereza, também se dedicou a missões, visitando Recife, no Brasil, e Cuba.</p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">Hoje, Pastor Carlos lidera a Comunidade Cristã Brasileira em Lewisville com o apoio da Pastora Kesia Silva como co-pastora e dos Pastores auxiliares Ocidi e Maria. Juntos, continuam a obra de amor e serviço à comunidade, compartilhando o evangelho e mantendo viva a chama da fé.</p>
                </div>
                <div className="md:h-[450px]">
                    <img src={PastorImg1} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
                </div>
            </div>
        </div>
    )
}

export default AboutThePastorContent