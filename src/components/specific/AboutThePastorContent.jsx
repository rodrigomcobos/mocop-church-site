import React from 'react';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG/JPG and WebP formats
import PastorImg1PNG from '../../assets/images/pastorimg1.png';
import PastorImg1WebP from '../../assets/images/pastorimg1.webp';

// Translations object
const translations = {
    pt: {
        title: "Pastor Carlos Jorge Lima de Oliveira",
        paragraphs: [
            "Carlos Jorge Lima de Oliveira nasceu em 1962, em Salvador, Bahia, e viveu uma jornada de fé inspiradora. Em 1994, ele e sua esposa, Tereza Cristina Guimarães de Oliveira, encontraram a Cristo e se converteram na Igreja Batista do Caminho das Árvores, sob a liderança do Bispo Átila Brandão. Três anos depois, em 1997, o casal se mudou para os Estados Unidos, onde continuaram a fortalecer sua caminhada espiritual na Shady Grove Brazilian Church, pastoreada por Julio Pinto, em Garland, Texas. Em busca de uma formação teológica mais profunda, ambos frequentaram o Christ for the Nations, onde foram consagrados como pastores.",
            "Em janeiro de 2004, o casal fundou a Comunidade Cristã Brasileira em Lewisville, Texas, com o propósito de criar uma comunidade de fé sólida e acolhedora. Pastor Carlos sempre teve um forte compromisso com missões e, ao longo dos anos, realizou viagens missionárias a Cuba e à Guiné-Bissau, levando o evangelho a novas fronteiras. Sua esposa, Tereza, também se dedicou a missões, visitando Recife, no Brasil, e Cuba.",
            "Hoje, Pastor Carlos lidera a Comunidade Cristã Brasileira em Lewisville com o apoio da Pastora Kesia Silva como co-pastora e dos Pastores auxiliares Ocidi e Maria. Juntos, continuam a obra de amor e serviço à comunidade, compartilhando o evangelho e mantendo viva a chama da fé."
        ],
        imageAlt: "Pastor Carlos Jorge"
    },
    en: {
        title: "Pastor Carlos Jorge Lima de Oliveira",
        paragraphs: [
            "Carlos Jorge Lima de Oliveira was born in 1962 in Salvador, Bahia, and lived an inspiring journey of faith. In 1994, he and his wife, Tereza Cristina Guimarães de Oliveira, found Christ and were converted at Igreja Batista do Caminho das Árvores under the leadership of Bishop Átila Brandão. Three years later, in 1997, the couple moved to the United States, where they continued to strengthen their spiritual walk at Shady Grove Brazilian Church, pastored by Julio Pinto, in Garland, Texas. In pursuit of deeper theological training, both attended Christ for the Nations, where they were consecrated as pastors.",
            "In January 2004, the couple founded the Brazilian Christian Community in Lewisville, Texas, with the purpose of creating a solid and welcoming faith community. Pastor Carlos has always had a strong commitment to missions and, over the years, has conducted missionary trips to Cuba and Guinea-Bissau, taking the gospel to new frontiers. His wife, Tereza, also dedicated herself to missions, visiting Recife, Brazil, and Cuba.",
            "Today, Pastor Carlos leads the Brazilian Christian Community in Lewisville with the support of Pastor Kesia Silva as co-pastor and auxiliary Pastors Ocidi and Maria. Together, they continue the work of love and service to the community, sharing the gospel and keeping the flame of faith alive."
        ],
        imageAlt: "Pastor Carlos Jorge"
    },
    es: {
        title: "Pastor Carlos Jorge Lima de Oliveira",
        paragraphs: [
            "Carlos Jorge Lima de Oliveira nació en 1962 en Salvador, Bahía, y vivió un inspirador viaje de fe. En 1994, él y su esposa, Tereza Cristina Guimarães de Oliveira, encontraron a Cristo y se convirtieron en la Igreja Batista do Caminho das Árvores bajo el liderazgo del Obispo Átila Brandão. Tres años después, en 1997, la pareja se mudó a los Estados Unidos, donde continuaron fortaleciendo su caminar espiritual en la Shady Grove Brazilian Church, pastoreada por Julio Pinto, en Garland, Texas. En busca de una formación teológica más profunda, ambos asistieron a Christ for the Nations, donde fueron consagrados como pastores.",
            "En enero de 2004, la pareja fundó la Comunidad Cristiana Brasileña en Lewisville, Texas, con el propósito de crear una comunidad de fe sólida y acogedora. El Pastor Carlos siempre ha tenido un fuerte compromiso con las misiones y, a lo largo de los años, ha realizado viajes misioneros a Cuba y Guinea-Bissau, llevando el evangelio a nuevas fronteras. Su esposa, Tereza, también se dedicó a las misiones, visitando Recife, Brasil, y Cuba.",
            "Hoy, el Pastor Carlos lidera la Comunidad Cristiana Brasileña en Lewisville con el apoyo de la Pastora Kesia Silva como co-pastora y los Pastores auxiliares Ocidi y Maria. Juntos, continúan la obra de amor y servicio a la comunidad, compartiendo el evangelio y manteniendo viva la llama de la fe."
        ],
        imageAlt: "Pastor Carlos Jorge"
    }
};

const AboutThePastorContent = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div>
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 font-[sans-serif] max-w-7xl max-md:max-w-md mx-auto my-12 sm:my-24 px-6">
                <div className="max-md:order-1 max-md:text-center">
                    <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-yellowBtnHover mb-4">
                        {texts.title}
                    </h2>
                    {texts.paragraphs.map((paragraph, index) => (
                        <p key={index} className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="md:h-[450px]">
                    <Image
                        src={PastorImg1PNG}
                        webp={PastorImg1WebP}
                        alt={texts.imageAlt}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutThePastorContent;