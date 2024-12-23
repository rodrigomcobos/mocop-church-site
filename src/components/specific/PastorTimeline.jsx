import React from 'react';
import { Chrono } from "react-chrono";
import { useLanguage } from '../../context/LanguageContext';
import Image from 'react-image-webp';

// Image Imports - Both PNG/JPG and WebP formats
import PastorImgPNG from '../../assets/images/pastorimg.jpg';
import PastorImgWebP from '../../assets/images/pastorimg.webp';
import PastorImg3PNG from '../../assets/images/pastorimg3.jpg';
import PastorImg3WebP from '../../assets/images/pastorimg3.webp';
import PastorImg4PNG from '../../assets/images/pastorimg4.jpg';
import PastorImg4WebP from '../../assets/images/pastorimg4.webp';
import PastorImg5PNG from '../../assets/images/pastorimg5.png';
import PastorImg5WebP from '../../assets/images/pastorimg5.webp';
import PastorImg6PNG from '../../assets/images/pastorimg6.jpeg';
import PastorImg6WebP from '../../assets/images/pastorimg6.webp';
import PastorImg7PNG from '../../assets/images/pastorimg7.jpeg';
import PastorImg7WebP from '../../assets/images/pastorimg7.webp';
import PastorImg8PNG from '../../assets/images/pastorimg8.jpeg';
import PastorImg8WebP from '../../assets/images/pastorimg8.webp';

const translations = {
    pt: {
        pageTitle: "História Pastoral",
        timelineItems: [
            {
                title: "1962",
                cardTitle: "Nascimento",
                cardSubtitle: "Salvador, Bahia",
                cardDetailedText: "Carlos Jorge Lima de Oliveira nasceu em Salvador, Bahia.",
                support: "Foto de Salvador"
            },
            {
                title: "1994",
                cardTitle: "Conversão",
                cardSubtitle: "Igreja Batista do Caminho das Árvores",
                cardDetailedText: "Convertido na Igreja Batista do Caminho das Árvores sob liderança do Bispo Átila Brandão em Salvador, Bahia.",
                support: "Foto da Igreja"
            },
            {
                title: "1997",
                cardTitle: "Mudança para os EUA",
                cardSubtitle: "Shady Grove Brazilian Church",
                cardDetailedText: "Mudança para os Estados Unidos, frequentando a igreja Shady Grove Brazilian Church do pastor Julio Pinto em Garland, Texas.",
                support: "Foto da Igreja Shady Grove"
            },
            {
                title: "2000-2003",
                cardTitle: "Formação Teológica",
                cardSubtitle: "Christ for the Nations",
                cardDetailedText: "Período de estudos e consagração como pastor teológico na Christ for the Nations.",
                support: "Foto da Instituição"
            },
            {
                title: "2004",
                cardTitle: "Fundação da Igreja",
                cardSubtitle: "Comunidade Cristã Brasileira",
                cardDetailedText: "Início da Comunidade Cristã Brasileira em Lewisville, Texas.",
                support: "Foto da Igreja"
            },
            {
                title: "2004-2022",
                cardTitle: "Período Missionário",
                cardSubtitle: "Missões Internacionais",
                cardDetailedText: "Realizou missões em Cuba (2x) e Guiné Bissau (1x). Pastora Tereza realizou missões em Recife, Brasil e Cuba.",
                support: "Foto Missionária"
            },
            {
                title: "Presente",
                cardTitle: "Liderança Atual",
                cardSubtitle: "Equipe Pastoral",
                cardDetailedText: "Atualmente lidera a igreja junto com a Pastora Kesia Silva como co-pastora e os pastores Ocidi e Maria como pastores auxiliares.",
                support: "Foto da Equipe Pastoral"
            }
        ]
    },
    en: {
        pageTitle: "Pastoral History",
        timelineItems: [
            {
                title: "1962",
                cardTitle: "Birth",
                cardSubtitle: "Salvador, Bahia",
                cardDetailedText: "Carlos Jorge Lima de Oliveira was born in Salvador, Bahia.",
                support: "Photo of Salvador"
            },
            {
                title: "1994",
                cardTitle: "Conversion",
                cardSubtitle: "Igreja Batista do Caminho das Árvores",
                cardDetailedText: "Converted at Igreja Batista do Caminho das Árvores under the leadership of Bishop Átila Brandão in Salvador, Bahia.",
                support: "Church Photo"
            },
            {
                title: "1997",
                cardTitle: "Move to the USA",
                cardSubtitle: "Shady Grove Brazilian Church",
                cardDetailedText: "Moved to the United States, attending Shady Grove Brazilian Church led by Pastor Julio Pinto in Garland, Texas.",
                support: "Shady Grove Church Photo"
            },
            {
                title: "2000-2003",
                cardTitle: "Theological Formation",
                cardSubtitle: "Christ for the Nations",
                cardDetailedText: "Period of studies and consecration as a theological pastor at Christ for the Nations.",
                support: "Institution Photo"
            },
            {
                title: "2004",
                cardTitle: "Church Foundation",
                cardSubtitle: "Brazilian Christian Community",
                cardDetailedText: "Beginning of the Brazilian Christian Community in Lewisville, Texas.",
                support: "Church Photo"
            },
            {
                title: "2004-2022",
                cardTitle: "Missionary Period",
                cardSubtitle: "International Missions",
                cardDetailedText: "Conducted missions in Cuba (2x) and Guinea-Bissau (1x). Pastor Tereza conducted missions in Recife, Brazil, and Cuba.",
                support: "Mission Photo"
            },
            {
                title: "Present",
                cardTitle: "Current Leadership",
                cardSubtitle: "Pastoral Team",
                cardDetailedText: "Currently leads the church alongside Pastor Kesia Silva as co-pastor and auxiliary Pastors Ocidi and Maria.",
                support: "Pastoral Team Photo"
            }
        ]
    },
    es: {
        pageTitle: "Historia Pastoral",
        timelineItems: [
            {
                title: "1962",
                cardTitle: "Nacimiento",
                cardSubtitle: "Salvador, Bahia",
                cardDetailedText: "Carlos Jorge Lima de Oliveira nació en Salvador, Bahia.",
                support: "Foto de Salvador"
            },
            {
                title: "1994",
                cardTitle: "Conversión",
                cardSubtitle: "Igreja Batista do Caminho das Árvores",
                cardDetailedText: "Convertido en la Igreja Batista do Caminho das Árvores bajo el liderazgo del Obispo Átila Brandão en Salvador, Bahia.",
                support: "Foto de la Iglesia"
            },
            {
                title: "1997",
                cardTitle: "Mudanza a EE.UU.",
                cardSubtitle: "Shady Grove Brazilian Church",
                cardDetailedText: "Se mudó a los Estados Unidos, asistiendo a la iglesia Shady Grove Brazilian Church del pastor Julio Pinto en Garland, Texas.",
                support: "Foto de la Iglesia Shady Grove"
            },
            {
                title: "2000-2003",
                cardTitle: "Formación Teológica",
                cardSubtitle: "Christ for the Nations",
                cardDetailedText: "Período de estudios y consagración como pastor teológico en Christ for the Nations.",
                support: "Foto de la Institución"
            },
            {
                title: "2004",
                cardTitle: "Fundación de la Iglesia",
                cardSubtitle: "Comunidad Cristiana Brasileña",
                cardDetailedText: "Inicio de la Comunidad Cristiana Brasileña en Lewisville, Texas.",
                support: "Foto de la Iglesia"
            },
            {
                title: "2004-2022",
                cardTitle: "Período Misionero",
                cardSubtitle: "Misiones Internacionales",
                cardDetailedText: "Realizó misiones en Cuba (2x) y Guinea-Bissau (1x). La Pastora Tereza realizó misiones en Recife, Brasil y Cuba.",
                support: "Foto Misionera"
            },
            {
                title: "Presente",
                cardTitle: "Liderazgo Actual",
                cardSubtitle: "Equipo Pastoral",
                cardDetailedText: "Actualmente lidera la iglesia junto con la Pastora Kesia Silva como co-pastora y los Pastores auxiliares Ocidi y Maria.",
                support: "Foto del Equipo Pastoral"
            }
        ]
    }
};

const PastorTimeline = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    const getTimelineMedia = (index) => {
        let png, webp;
        switch (index) {
            case 0:
                png = PastorImg8PNG;
                webp = PastorImg8WebP;
                break;
            case 1:
                png = PastorImg3PNG;
                webp = PastorImg3WebP;
                break;
            case 2:
                png = PastorImg7PNG;
                webp = PastorImg7WebP;
                break;
            case 3:
                png = PastorImg6PNG;
                webp = PastorImg6WebP;
                break;
            case 4:
                png = PastorImgPNG;
                webp = PastorImgWebP;
                break;
            case 5:
                png = PastorImg4PNG;
                webp = PastorImg4WebP;
                break;
            case 6:
                png = PastorImg5PNG;
                webp = PastorImg5WebP;
                break;
            default:
                png = PastorImg8PNG;
                webp = PastorImg8WebP;
        }

        return {
            source: {
                url: webp,
                fallback: png
            },
            type: "IMAGE"
        };
    };

    const items = texts.timelineItems.map((item, index) => ({
        ...item,
        media: getTimelineMedia(index)
    }));

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-white">
            <div className="container mx-auto px-2 py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#b66a25]">
                    {texts.pageTitle}
                </h1>
                <div className="min-h-[calc(100vh-8rem)]">
                    <Chrono
                        key={language}
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={300}
                        disableToolbar
                        hideControls
                        scrollable={{ scrollbar: true }}
                        useReadMore={false}
                        theme={{
                            primary: "#b66a25",
                            secondary: "#ffc360",
                            cardBgColor: "#f4ebdc",
                            cardForeColor: "#1F2937",
                            titleColor: "#b66a25",
                            titleColorActive: "#f4ebdc",
                            cardTitleColor: "#b66a25",
                            cardSubtitleColor: "#1F2937",
                            cardDetailsColor: "#1F2937"
                        }}
                    />
                </div>
            </div>
            <style>
                {`
                .timeline-card-content {
                    background-color: #f4ebdc !important;
                    padding: 1rem !important;
                }
                .timeline-card-title {
                    color: #b66a25 !important;
                    padding: 0 0 0.5rem 0 !important;
                }
                .timeline-title-wrapper {
                    background-color: #ffc360 !important;
                }
                .timeline-item-title {
                    color: #2A2928 !important;
                }
                .timeline-item-wrap:hover .timeline-title-wrapper {
                    background-color: #ffc360 !important;
                    transform: scale(1.05);
                }
                .timeline-item-wrap:hover .timeline-item-title {
                    color: #ffc360 !important;
                }
                .timeline-card-subtitle {
                    color: #1F2937 !important;
                    text-transform: uppercase !important;
                    padding: 0.5rem 0 !important;
                    margin-bottom: 0.25rem !important;
                    font-size: 0.9rem !important;
                }
                .timeline-card-content p {
                    margin-top: 0.25rem !important;
                    line-height: 1.5 !important;
                }
                .timeline-media-wrapper {
                    width: 400px !important;
                    height: 350px !important;
                    margin: 0.5rem auto !important;
                }
                .timeline-media-wrapper img {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                }
                .timeline-title-wrapper {
                    transition: all 0.3s ease !important;
                }
                .timeline-item-title {
                    transition: color 0.3s ease !important;
                }
                `}
            </style>
        </div>
    );
};

export default PastorTimeline;