import React from 'react';
import Image from 'react-image-webp';
import { useLanguage } from '../../context/LanguageContext';

// Import both PNG and WebP formats for each team member
import CarlosPNG from '../../assets/images/carlos.png';
import CarlosWebP from '../../assets/images/carlos.webp';
import KesiaPNG from '../../assets/images/kesia.png';
import KesiaWebP from '../../assets/images/kesia.webp';
import RodrigoPNG from '../../assets/images/rodrigo.png';
import RodrigoWebP from '../../assets/images/rodrigo.webp';
import TauanePNG from '../../assets/images/tauane.png';
import TauaneWebP from '../../assets/images/tauane.webp';
import ValPNG from '../../assets/images/val.png';
import ValWebP from '../../assets/images/val.webp';
import MarkPNG from '../../assets/images/mark.png';
import MarkWebP from '../../assets/images/mark.webp';

const translations = {
    pt: {
        title: "Conheça a nossa equipe",
        subtitle: "Unidos pela fé e pelo propósito de servir, nossa equipe está comprometida em liderar, guiar e fortalecer nossa comunidade em cada passo da jornada espiritual.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastora",
            worshipLeader: "Líder de Louvor",
            cameraman: "Cameraman",
            coordinator: "Coordenadora",
            webDesigner: "Web Designer"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor",
                description: "Nascido na Bahia-Brasil, tem duas filhas e reside em Lewisville,TX. Trabalhou na area de construção civil por vinte anos, foi consagrado a obreiro, diácono e presbítero. Estudou teologia e pastoral no Christ for the Nations Instituite (CFNI) graduando-se em 2004. No ano de 2003 foi ordenado Pastor na CCBL Lewisville."
            },
            {
                name: "Kesia Veras",
                role: "coPastor",
                description: "Pastora Kesia, nascida em Mata Roma, Maranhão-Brasil, casada e mãe de três filhos, estudou teologia e pastoral no Christ for the Nations Institute (CFNI)."
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader",
                description: "Tauane Araujo, natural do Brasil e mãe de dois filhos, é a nossa dedicada líder de louvor. Antes de assumir essa função, ela liderou o grupo de jovens da igreja, onde desempenhou um papel fundamental. Tauane possui um profundo conhecimento da palavra de Deus e é apaixonada pelo ensino da Bíblia."
            },
            {
                name: "Marc Cobos",
                role: "cameraman",
                description: "Marc Cobos nasceu em Galápagos e se mudou pro Texas em 2007 com sua família. Trabalha na area de construção civil e também na area de pesca esportiva no Brasil. Ele está em cargo da filmagem e edição de vídeos da nossa igreja."
            },
            {
                name: "Val Souza",
                role: "coordinator",
                description: "Informações sobre Val Souza serão adicionadas em breve."
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner",
                description: "Informações sobre Rodrigo Cobos serão adicionadas em breve."
            }
        ]
    },
    en: {
        title: "Meet Our Team",
        subtitle: "United by faith and the purpose to serve, our team is committed to leading, guiding, and strengthening our community in every step of the spiritual journey.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastor",
            worshipLeader: "Worship Leader",
            cameraman: "Cameraman",
            coordinator: "Coordinator",
            webDesigner: "Web Designer"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor",
                description: "Born in Bahia, Brazil, he has two daughters and resides in Lewisville, TX. He worked in civil construction for twenty years and was consecrated as a worker, deacon, and presbyter. He studied theology and pastoral ministry at Christ for the Nations Institute (CFNI), graduating in 2004. In 2003, he was ordained as Pastor at CCBL Lewisville."
            },
            {
                name: "Kesia Veras",
                role: "coPastor",
                description: "Pastor Kesia, born in Mata Roma, Maranhão-Brazil, is married and a mother of three children. She studied theology and pastoral ministry at Christ for the Nations Institute (CFNI)."
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader",
                description: "Tauane Araujo, born in Brazil and mother of two children, is our dedicated worship leader. Before taking on this role, she led the church's youth group, where she played a fundamental role. Tauane has a deep knowledge of God's word and is passionate about Bible teaching."
            },
            {
                name: "Marc Cobos",
                role: "cameraman",
                description: "Marc Cobos was born in the Galapagos and moved to Texas in 2007 with his family. He works in civil construction and also in sport fishing in Brazil. He is in charge of filming and video editing for our church."
            },
            {
                name: "Val Souza",
                role: "coordinator",
                description: "Information about Val Souza will be added soon."
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner",
                description: "Information about Rodrigo Cobos will be added soon."
            }
        ]
    },
    es: {
        title: "Conoce a Nuestro Equipo",
        subtitle: "Unidos por la fe y el propósito de servir, nuestro equipo está comprometido a liderar, guiar y fortalecer nuestra comunidad en cada paso del camino espiritual.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastora",
            worshipLeader: "Líder de Alabanza",
            cameraman: "Camarógrafo",
            coordinator: "Coordinadora",
            webDesigner: "Diseñador Web"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor",
                description: "Nacido en Bahía, Brasil, tiene dos hijas y reside en Lewisville, TX. Trabajó en construcción civil durante veinte años y fue consagrado como obrero, diácono y presbítero. Estudió teología y pastoral en Christ for the Nations Institute (CFNI), graduándose en 2004. En 2003, fue ordenado Pastor en CCBL Lewisville."
            },
            {
                name: "Kesia Veras",
                role: "coPastor",
                description: "La Pastora Kesia, nacida en Mata Roma, Maranhão-Brasil, está casada y es madre de tres hijos. Estudió teología y pastoral en Christ for the Nations Institute (CFNI)."
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader",
                description: "Tauane Araujo, nacida en Brasil y madre de dos hijos, es nuestra dedicada líder de alabanza. Antes de asumir este rol, dirigió el grupo de jóvenes de la iglesia, donde desempeñó un papel fundamental. Tauane tiene un profundo conocimiento de la palabra de Dios y es apasionada por la enseñanza de la Biblia."
            },
            {
                name: "Marc Cobos",
                role: "cameraman",
                description: "Marc Cobos nació en Galápagos y se mudó a Texas en 2007 con su familia. Trabaja en construcción civil y también en pesca deportiva en Brasil. Está a cargo de la filmación y edición de videos de nuestra iglesia."
            },
            {
                name: "Val Souza",
                role: "coordinator",
                description: "La información sobre Val Souza se agregará pronto."
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner",
                description: "La información sobre Rodrigo Cobos se agregará pronto."
            }
        ]
    }
};

const memberImages = {
    "Carlos Oliveira": { png: CarlosPNG, webp: CarlosWebP },
    "Kesia Veras": { png: KesiaPNG, webp: KesiaWebP },
    "Tauane Araujo": { png: TauanePNG, webp: TauaneWebP },
    "Marc Cobos": { png: MarkPNG, webp: MarkWebP },
    "Val Souza": { png: ValPNG, webp: ValWebP },
    "Rodrigo Cobos": { png: RodrigoPNG, webp: RodrigoWebP }
};

const TeamMemberCard = ({ member, roles }) => (
    <div className="relative border rounded-md overflow-hidden max-md:max-w-[300px] group">
        <div className="relative w-full pb-[100%]">
            <Image
                src={memberImages[member.name].png}
                webp={memberImages[member.name].webp}
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
                alt={member.name}
                loading="lazy"
            />
        </div>
        <div className="p-4 bg-white">
            <h4 className="text-yellowBtnHover text-lg font-bold">{member.name}</h4>
            <p className="text-gray-600 text-md mt-1">{roles[member.role]}</p>
        </div>
        <div className="absolute inset-0 bg-bottomBar bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="p-6 text-white">
                <h4 className="text-lg font-bold mb-2">{member.name}</h4>
                <p className="text-sm leading-relaxed overflow-y-auto max-h-[200px]">{member.description}</p>
            </div>
        </div>
    </div>
);

const Team = () => {
    const { language } = useLanguage();
    const texts = translations[language];

    return (
        <div className="font-[sans-serif] my-24 px-6">
            <div className="max-w-4xl lg:max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-yellowBtnHover text-4xl font-extrabold">
                        {texts.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        {texts.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 max-md:justify-center mt-16">
                    {texts.teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            member={member}
                            roles={texts.roles}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;