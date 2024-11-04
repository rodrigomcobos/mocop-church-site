import React from 'react';
import { Chrono } from "react-chrono";

// Image Imports
import PastorImg3 from '../../assets/images/pastorimg3.jpg';
import PastorImg4 from '../../assets/images/pastorimg4.jpg';
import PastorImg5 from '../../assets/images/pastorimg5.png';
import PastorImg6 from '../../assets/images/pastorimg6.jpeg';

const PastorTimeline = () => {
    const items = [
        {
            title: "1962",
            cardTitle: "Nascimento",
            cardSubtitle: "Salvador, Bahia",
            cardDetailedText: "Carlos Jorge Lima de Oliveira nasceu em Salvador, Bahia.",
            media: {
                source: {
                    url: "/api/placeholder/300/200"
                },
                type: "IMAGE",
                support: "Foto de Salvador"
            }
        },
        {
            title: "1994",
            cardTitle: "Conversão",
            cardSubtitle: "Igreja Batista do Caminho das Árvores",
            cardDetailedText: "Convertido na Igreja Batista do Caminho das Árvores sob liderança do Bispo Átila Brandão em Salvador, Bahia.",
            media: {
                source: {
                    url: PastorImg3
                },
                type: "IMAGE",
                support: "Foto da Igreja"
            }
        },
        {
            title: "1997",
            cardTitle: "Mudança para os EUA",
            cardSubtitle: "Shady Grove Brazilian Church",
            cardDetailedText: "Mudança para os Estados Unidos, frequentando a igreja Shady Grove Brazilian Church do pastor Julio Pinto em Garland, Texas.",
            media: {
                source: {
                    url: "/api/placeholder/300/200"
                },
                type: "IMAGE",
                support: "Foto da Igreja Shady Grove"
            }
        },
        {
            title: "2000-2003",
            cardTitle: "Formação Teológica",
            cardSubtitle: "Christ for the Nations",
            cardDetailedText: "Período de estudos e consagração como pastor teológico na Christ for the Nations.",
            media: {
                source: {
                    url: PastorImg6
                },
                type: "IMAGE",
                support: "Foto da Instituição"
            }
        },
        {
            title: "2004",
            cardTitle: "Fundação da Igreja",
            cardSubtitle: "Comunidade Cristã Brasileira",
            cardDetailedText: "Início da Comunidade Cristã Brasileira em Lewisville, Texas.",
            media: {
                source: {
                    url: "/api/placeholder/300/200"
                },
                type: "IMAGE",
                support: "Foto da Igreja"
            }
        },
        {
            title: "2004-2022",
            cardTitle: "Período Missionário",
            cardSubtitle: "Missões Internacionais",
            cardDetailedText: "Realizou missões em Cuba (2x) e Guiné Bissau (1x). Pastora Tereza realizou missões em Recife, Brasil e Cuba.",
            media: {
                source: {
                    url: PastorImg4
                },
                type: "IMAGE",
                support: "Foto Missionária"
            }
        },
        {
            title: "Presente",
            cardTitle: "Liderança Atual",
            cardSubtitle: "Equipe Pastoral",
            cardDetailedText: "Atualmente lidera a igreja junto com a Pastora Kesia Silva como co-pastora e os pastores Ocidi e Maria como pastores auxiliares.",
            media: {
                source: {
                    url: PastorImg5
                },
                type: "IMAGE",
                support: "Foto da Equipe Pastoral"
            }
        }
    ];

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#b66a25]">História Pastoral</h1>
                <div className="min-h-[calc(100vh-8rem)]">
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={250}
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
                    padding: 1.5rem !important;
                }
                .timeline-card-title {
                    color: #b66a25 !important;
                    padding: 0 0 1rem 0 !important;
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
                    padding: 1rem 0 !important;
                    margin-bottom: 0.5rem !important;
                    font-size: 0.9rem !important;
                }
                .timeline-card-content p {
                    margin-top: 0.5rem !important;
                    line-height: 1.5 !important;
                }
                .timeline-media-wrapper {
                    width: 300px !important;
                    height: 200px !important;
                    margin: 1rem auto !important;
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