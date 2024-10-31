import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title: "Nossa Política de Privacidade e Proteção de Dados",
        sections: [
            {
                title: "Sobre Nossa Política de Privacidade",
                content: `Na Comunidade Cristã Brasileira em Lewisville ("nós", "nosso" ou "nos"), estamos comprometidos em proteger a privacidade e a segurança dos dados pessoais dos visitantes do nosso site. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações.`
            },
            {
                title: "1. Coleta de Informações",
                content: "Ao visitar nosso site, podemos coletar informações pessoais, incluindo, mas não se limitando a, nome, e-mail e outras informações fornecidas voluntariamente por você em formulários de contato."
            },
            {
                title: "2. Uso de Cookies",
                content: `Utilizamos cookies para melhorar a experiência do usuário e para fins analíticos. Os cookies são pequenos arquivos de dados armazenados no seu dispositivo que nos ajudam a entender como você utiliza nosso site e aprimorar nossos serviços. Em particular, usamos cookies para:

• Análise de tráfego e comportamento dos usuários, por meio de ferramentas de análise;
• Personalizar sua experiência de navegação.

Ao continuar a navegar em nosso site, você consente com o uso de cookies. Você pode optar por desativá-los no seu navegador, mas isso pode afetar algumas funcionalidades do site.`
            },
            {
                title: "3. Uso do Cloudinary",
                content: "Empregamos o serviço Cloudinary para armazenar e gerenciar conteúdo de mídia (imagens e vídeos) em nosso site. Este serviço pode coletar dados técnicos necessários para o funcionamento e segurança do serviço. Para mais informações sobre como o Cloudinary gerencia dados, consulte a política de privacidade do Cloudinary."
            },
            {
                title: "4. Compartilhamento de Informações",
                content: "Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto quando necessário para cumprir com a lei ou proteger nossos direitos."
            },
            {
                title: "5. Segurança das Informações",
                content: "Adotamos medidas de segurança para proteger suas informações pessoais contra acessos não autorizados. No entanto, a transmissão de dados pela internet não é completamente segura, e não podemos garantir a segurança absoluta das informações transmitidas."
            },
            {
                title: "6. Alterações nesta Política",
                content: "Reservamo-nos o direito de atualizar esta política de privacidade periodicamente. Qualquer alteração será publicada nesta página, e recomendamos que você consulte esta política regularmente."
            },
            {
                title: "7. Contato",
                content: "Se tiver dúvidas sobre esta política de privacidade, entre em contato conosco pelo e-mail: lewisvillemocop@gmail.com"
            }
        ]
    },
    en: {
        title: "Our Privacy and Data Protection Policy",
        sections: [
            {
                title: "About Our Privacy Policy",
                content: `At the Brazilian Christian Community in Lewisville ("we," "our," or "us"), we are committed to protecting the privacy and security of personal data of our website visitors. This privacy policy explains how we collect, use, and protect your information.`
            },
            {
                title: "1. Information Collection",
                content: "When visiting our website, we may collect personal information, including but not limited to, name, email, and other information voluntarily provided by you in contact forms."
            },
            {
                title: "2. Use of Cookies",
                content: `We use cookies to enhance user experience and for analytical purposes. Cookies are small data files stored on your device that help us understand how you use our website and improve our services. Specifically, we use cookies to:

• Analyze traffic and user behavior through analytics tools;
• Personalize your browsing experience.

By continuing to browse our website, you consent to the use of cookies. You can choose to disable them in your browser, but this may affect some website functionalities.`
            },
            {
                title: "3. Use of Cloudinary",
                content: "We employ Cloudinary services to store and manage media content (images and videos) on our website. This service may collect technical data necessary for service operation and security. For more information about how Cloudinary manages data, please refer to Cloudinary's privacy policy."
            },
            {
                title: "4. Information Sharing",
                content: "We do not sell, trade, or transfer your personal information to third parties without your consent, except when necessary to comply with the law or protect our rights."
            },
            {
                title: "5. Information Security",
                content: "We implement security measures to protect your personal information against unauthorized access. However, data transmission over the internet is not completely secure, and we cannot guarantee the absolute security of transmitted information."
            },
            {
                title: "6. Changes to this Policy",
                content: "We reserve the right to update this privacy policy periodically. Any changes will be posted on this page, and we recommend that you review this policy regularly."
            },
            {
                title: "7. Contact",
                content: "If you have questions about this privacy policy, please contact us at: lewisvillemocop@gmail.com"
            }
        ]
    },
    es: {
        title: "Nuestra Política de Privacidad y Protección de Datos",
        sections: [
            {
                title: "Sobre Nuestra Política de Privacidad",
                content: `En la Comunidad Cristiana Brasileña en Lewisville ("nosotros" o "nuestro"), estamos comprometidos con la protección de la privacidad y seguridad de los datos personales de los visitantes de nuestro sitio web. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información.`
            },
            {
                title: "1. Recopilación de Información",
                content: "Al visitar nuestro sitio web, podemos recopilar información personal, incluyendo, pero no limitándose a, nombre, correo electrónico y otra información proporcionada voluntariamente por usted en formularios de contacto."
            },
            {
                title: "2. Uso de Cookies",
                content: `Utilizamos cookies para mejorar la experiencia del usuario y con fines analíticos. Las cookies son pequeños archivos de datos almacenados en su dispositivo que nos ayudan a entender cómo utiliza nuestro sitio web y mejorar nuestros servicios. Específicamente, usamos cookies para:

• Analizar el tráfico y el comportamiento del usuario mediante herramientas de análisis;
• Personalizar su experiencia de navegación.

Al continuar navegando en nuestro sitio web, usted consiente el uso de cookies. Puede optar por desactivarlas en su navegador, pero esto puede afectar algunas funcionalidades del sitio.`
            },
            {
                title: "3. Uso de Cloudinary",
                content: "Empleamos el servicio Cloudinary para almacenar y gestionar contenido multimedia (imágenes y videos) en nuestro sitio web. Este servicio puede recopilar datos técnicos necesarios para el funcionamiento y la seguridad del servicio. Para más información sobre cómo Cloudinary gestiona los datos, consulte la política de privacidad de Cloudinary."
            },
            {
                title: "4. Compartir Información",
                content: "No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos."
            },
            {
                title: "5. Seguridad de la Información",
                content: "Implementamos medidas de seguridad para proteger su información personal contra accesos no autorizados. Sin embargo, la transmisión de datos por internet no es completamente segura, y no podemos garantizar la seguridad absoluta de la información transmitida."
            },
            {
                title: "6. Cambios en esta Política",
                content: "Nos reservamos el derecho de actualizar esta política de privacidad periódicamente. Cualquier cambio será publicado en esta página, y recomendamos que consulte esta política regularmente."
            },
            {
                title: "7. Contacto",
                content: "Si tiene preguntas sobre esta política de privacidad, contáctenos en: lewisvillemocop@gmail.com"
            }
        ]
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const PrivacyPolicyContent = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const { language } = useLanguage();
    const texts = translations[language];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-12"
        >
            <section className="space-y-4 max-w-4xl mx-auto px-6">
                <motion.h1
                    className="text-3xl font-extrabold text-yellowBtnHover mb-8"
                    variants={itemVariants}
                >
                    {texts.title}
                </motion.h1>

                {texts.sections.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-lg ${openIndex === index ? 'bg-primary ring-2 ring-yellowBtnHover' : 'hover:bg-primary hover:ring-2 ring-yellowBtnHover'} transition-all`}
                        variants={itemVariants}
                    >
                        <button
                            type="button"
                            className="w-full text-base font-semibold text-left py-5 px-6 text-black flex items-center"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="mr-4 text-lg">{item.title}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-auto shrink-0"
                            >
                                <FaChevronDown />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pb-5 px-6"
                                >
                                    <p className="text-sm text-black whitespace-pre-line">
                                        {item.content}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
};

export default PrivacyPolicyContent;