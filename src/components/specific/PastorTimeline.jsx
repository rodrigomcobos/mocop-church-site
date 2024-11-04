import React from 'react';
import { Chrono } from "react-chrono";
import { GiPrayerBeads, GiChurch } from "react-icons/gi";
import { FaPassport, FaGraduationCap, FaPlaneDeparture } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

const PastorTimeline = () => {
    const items = [
        {
            title: "1962",
            cardTitle: "Nascimento",
            cardSubtitle: "Salvador, Bahia",
            cardDetailedText: "Carlos Jorge Lima de Oliveira nasceu em Salvador, Bahia.",
            media: {
                source: {
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
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
                    url: "/api/placeholder/150/150"
                },
                type: "IMAGE",
                support: "Foto da Equipe Pastoral"
            }
        }
    ];

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#b66a25]">História Pastoral</h1>
                <div className="min-h-[calc(100vh-8rem)]">
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={150}
                        disableToolbar
                        hideControls
                        scrollable={{ scrollbar: true }}
                        useReadMore={false}
                        theme={{
                            primary: "#ffc360",
                            secondary: "#b66a25",
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
}
.timeline-card-title {
  color: #b66a25 !important;
}
.timeline-title-wrapper {
  background-color: #b66a25 !important;
}
.timeline-item-title {
  color: #f4ebdc !important;
}
.timeline-item-wrap:hover .timeline-title-wrapper {
  background-color: #ffc360 !important;
  transform: scale(1.05);  /* Optional: adds a subtle scale effect on hover */
}
.timeline-item-wrap:hover .timeline-item-title {
  color: #f4ebdc !important;
}
/* Optional: add a smooth transition */
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