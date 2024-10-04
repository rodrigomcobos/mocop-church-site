import React from 'react'
import MensGroup from '../../assets/images/mensgroup.jpg'
import WomenGroup from '../../assets/images/womensgroup.jpg'
import KidsGroup from '../../assets/images/childrensgroup.jpg'

const Ministries = () => {
    return (
        <div>
            <div className="font-sans bg-white px-6 py-24">
                <h2 className="text-yellowBtnHover text-4xl font-extrabold text-center mb-20">Ministérios</h2>
                <div className="md:max-w-7xl max-w-xl mx-auto">
                    <section className="grid md:grid-cols-2 gap-12">
                        <div className="text-left">
                            <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Grupo dos Homens</h2>
                            <p className="mb-4 text-sm text-black">O Ministério do Grupo de Homens é um espaço dedicado ao fortalecimento da fé e à construção de relacionamentos significativos entre os homens da nossa comunidade. Acreditamos que a camaradagem e o apoio mútuo são fundamentais para o crescimento espiritual e pessoal. Nossos encontros incluem estudos bíblicos, discussões sobre temas relevantes da vida cotidiana, atividades de serviço comunitário e eventos sociais que promovem a união e o fortalecimento de laços.</p>
                            <p className="text-sm text-black">Estamos comprometidos em inspirar e equipar os homens para serem líderes em suas famílias, igrejas e comunidades. Juntos, buscamos viver uma vida de fé autêntica, servindo ao Senhor e uns aos outros com amor e dedicação. Junte-se a nós para crescer em sabedoria, compartilhar experiências e se encorajar mutuamente em nossa jornada de fé!</p>
                        </div>
                        <div className="h-80 overflow-hidden rounded-lg">
                            <img src={MensGroup} alt="Grupo dos Homens" className="w-full h-full object-cover" />
                        </div>
                    </section>
                    <hr className="border-gray-300 my-12" />
                    <section className="grid md:grid-cols-2 gap-12">
                        <div className="h-80 overflow-hidden rounded-lg max-md:order-1">
                            <img src={WomenGroup} alt="Grupo das Mulheres" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Grupo das Mulheres</h2>
                            <p className="mb-4 text-sm text-black">O Ministério do Grupo de Mulheres é um espaço acolhedor e inspirador, onde mulheres de todas as idades se reúnem para crescer espiritualmente e fortalecer suas relações. Aqui, acreditamos que a união e o apoio entre mulheres são essenciais para enfrentar os desafios da vida e promover um ambiente de fé e encorajamento.</p>
                            <p className="mb-4 text-sm text-black">Nossos encontros incluem estudos bíblicos, workshops, palestras e momentos de oração, além de atividades que promovem o desenvolvimento pessoal e espiritual. Também organizamos eventos sociais e de serviço comunitário, permitindo que as participantes se conectem, compartilhem suas histórias e se ajudem mutuamente.</p>
                            <p className="text-sm text-black">Nosso objetivo é capacitar as mulheres a se tornarem líderes em suas famílias, igrejas e comunidades, vivendo a fé de maneira prática e significativa. Junte-se a nós e descubra um espaço seguro para crescer em fé, amizade e propósito, enquanto caminhamos juntas na jornada espiritual!</p>
                        </div>
                    </section>
                    <hr className="border-gray-300 my-12" />
                    <section className="grid md:grid-cols-2 gap-12">
                        <div className="text-left">
                            <h2 className="text-yellowBtnHover text-2xl font-bold mb-4">Ministério Infantil</h2>
                            <p className="mb-4 text-sm text-black">O Ministério Infantil de Domingos é um ambiente seguro e divertido onde as crianças podem aprender sobre o amor de Deus e os princípios da fé cristã. Nossos encontros são planejados para crianças de todas as idades, proporcionando uma experiência enriquecedora que combina ensinamentos bíblicos com atividades lúdicas e criativas.</p>
                            <p className="mb-4 text-sm text-black">Durante as reuniões, as crianças participam de histórias bíblicas interativas, jogos, artesanato e músicas que tornam o aprendizado envolvente e memorável. Nossos professores e voluntários são dedicados a cultivar um espaço onde cada criança se sinta valorizada, amada e encorajada a explorar sua fé.</p>
                            <p className="mb-4 text-sm text-black">Além disso, promovemos eventos especiais ao longo do ano, como festivais, acampamentos e atividades de serviço, que ajudam as crianças a desenvolver um senso de comunidade e a aplicar os ensinamentos de Jesus em suas vidas diárias.</p>
                            <p className="text-sm text-black">Nosso objetivo é plantar sementes de fé no coração das crianças, preparando-as para crescer como seguidores de Cristo e impactar o mundo ao seu redor. Junte-se a nós neste ministério, onde as crianças aprendem, brincam e crescem juntas em Cristo todos os domingos!</p>
                        </div>
                        <div className="h-80 overflow-hidden rounded-lg">
                            <img src={KidsGroup} alt="Ministério Infantil" className="w-full h-full object-cover" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Ministries