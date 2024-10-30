import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const policyItems = [
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
];

const PrivacyPolicyContent = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
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
                    Política de Privacidade
                </motion.h1>

                {policyItems.map((item, index) => (
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