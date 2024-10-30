import React from 'react'
import Image from 'react-image-webp'

// Import both PNG and WebP formats for each team member
import CarlosPNG from '../../assets/images/carlos.png'
import CarlosWebP from '../../assets/images/carlos.webp'
import KesiaPNG from '../../assets/images/kesia.png'
import KesiaWebP from '../../assets/images/kesia.webp'
import RodrigoPNG from '../../assets/images/rodrigo.png'
import RodrigoWebP from '../../assets/images/rodrigo.webp'
import TauanePNG from '../../assets/images/tauane.png'
import TauaneWebP from '../../assets/images/tauane.webp'
import ValPNG from '../../assets/images/val.png'
import ValWebP from '../../assets/images/val.webp'
import MarkPNG from '../../assets/images/mark.png'
import MarkWebP from '../../assets/images/mark.webp'

const teamMembers = [
    {
        name: "Carlos Oliveira",
        role: "Pastor",
        imagePNG: CarlosPNG,
        imageWebP: CarlosWebP,
        description: "Nascido na Bahia-Brasil, tem duas filhas e reside em Lewisville,TX. Trabalhou na area de construção civil por vinte anos, foi consagrado a obreiro, diácono e presbítero. Estudou teologia e pastoral no Christ for the Nations Instituite (CFNI) graduando-se em 2004. No ano de 2003 foi ordenado Pastor na CCBL Lewisville."
    },
    {
        name: "Kesia Veras",
        role: "Co-Pastora",
        imagePNG: KesiaPNG,
        imageWebP: KesiaWebP,
        description: "Pastora Kesia, nascida em Mata Roma, Maranhão-Brasil, casada e mãe de três filhos, estudou teologia e pastoral no Christ for the Nations Institute (CFNI)."
    },
    {
        name: "Tauane Araujo",
        role: "Líder de Louvor",
        imagePNG: TauanePNG,
        imageWebP: TauaneWebP,
        description: "Tauane Araujo, natural do Brasil e mãe de dois filhos, é a nossa dedicada líder de louvor. Antes de assumir essa função, ela liderou o grupo de jovens da igreja, onde desempenhou um papel fundamental. Tauane possui um profundo conhecimento da palavra de Deus e é apaixonada pelo ensino da Bíblia."
    },
    {
        name: "Marc Cobos",
        role: "Cameraman",
        imagePNG: MarkPNG,
        imageWebP: MarkWebP,
        description: "Marc Cobos nasceu em Galápagos e se mudou pro Texas em 2007 com sua família. Trabalha na area de construção civil e também na area de pesca esportiva no Brasil. Ele está em cargo da filmagem e edição de vídeos da nossa igreja."
    },
    {
        name: "Val Souza",
        role: "Coordenadora",
        imagePNG: ValPNG,
        imageWebP: ValWebP,
        description: "Informações sobre Val Souza serão adicionadas em breve."
    },
    {
        name: "Rodrigo Cobos",
        role: "Web Designer",
        imagePNG: RodrigoPNG,
        imageWebP: RodrigoWebP,
        description: "Informações sobre Rodrigo Cobos serão adicionadas em breve."
    },
];

const TeamMemberCard = ({ name, role, imagePNG, imageWebP, description }) => (
    <div className="relative border rounded-md overflow-hidden max-md:max-w-[300px] group">
        <div className="relative w-full pb-[100%]">
            <Image
                src={imagePNG}
                webp={imageWebP}
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
                alt={name}
                loading="lazy"
            />
        </div>
        <div className="p-4 bg-white">
            <h4 className="text-yellowBtnHover text-lg font-bold">{name}</h4>
            <p className="text-gray-600 text-md mt-1">{role}</p>
        </div>
        <div className="absolute inset-0 bg-bottomBar bg-opacity-95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="p-6 text-white">
                <h4 className="text-lg font-bold mb-2">{name}</h4>
                <p className="text-sm leading-relaxed overflow-y-auto max-h-[200px]">{description}</p>
            </div>
        </div>
    </div>
);

const Team = () => {
    return (
        <div className="font-[sans-serif] my-24 px-6">
            <div className="max-w-4xl lg:max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-yellowBtnHover text-4xl font-extrabold">
                        Conheça a nossa equipe
                    </h2>
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        Unidos pela fé e pelo propósito de servir, nossa equipe está comprometida em liderar, guiar e fortalecer nossa comunidade em cada passo da jornada espiritual.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 max-md:justify-center mt-16">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team