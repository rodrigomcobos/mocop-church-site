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
            coPastor: "Co-Pastora / Líder de Louvor",
            worshipLeader: "Tesoureira",
            cameraman: "Cameraman",
            coordinator: "Coordenadora",
            webDesigner: "Web Designer"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader"
            },
            {
                name: "Marc Cobos",
                role: "cameraman"
            },
            {
                name: "Val Souza",
                role: "coordinator"
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner"
            }
        ]
    },
    en: {
        title: "Meet Our Team",
        subtitle: "United by faith and the purpose to serve, our team is committed to leading, guiding, and strengthening our community in every step of the spiritual journey.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastor / Worship Leader",
            worshipLeader: "Treasurer",
            cameraman: "Cameraman",
            coordinator: "Coordinator",
            webDesigner: "Web Designer"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader"
            },
            {
                name: "Marc Cobos",
                role: "cameraman"
            },
            {
                name: "Val Souza",
                role: "coordinator"
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner"
            }
        ]
    },
    es: {
        title: "Conoce a Nuestro Equipo",
        subtitle: "Unidos por la fe y el propósito de servir, nuestro equipo está comprometido a liderar, guiar y fortalecer nuestra comunidad en cada paso del camino espiritual.",
        roles: {
            pastor: "Pastor",
            coPastor: "Co-Pastora / Líder de Alabanza",
            worshipLeader: "Tesorera",
            cameraman: "Camarógrafo",
            coordinator: "Coordinadora",
            webDesigner: "Diseñador Web"
        },
        teamMembers: [
            {
                name: "Carlos Oliveira",
                role: "pastor"
            },
            {
                name: "Kesia Veras",
                role: "coPastor"
            },
            {
                name: "Tauane Araujo",
                role: "worshipLeader"
            },
            {
                name: "Marc Cobos",
                role: "cameraman"
            },
            {
                name: "Val Souza",
                role: "coordinator"
            },
            {
                name: "Rodrigo Cobos",
                role: "webDesigner"
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
    <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
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