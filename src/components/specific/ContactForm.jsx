import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'react-image-webp';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLanguage } from '../../context/LanguageContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaMapLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import ImgJPG from '../../assets/images/churchimg45.jpg';
import ImgWebP from '../../assets/images/churchimg45.webp';

const translations = {
    pt: {
        title: "Estamos Aqui Para Ouvir e Ajudar!",
        description: "Seja para tirar dúvidas, solicitar informações, ou compartilhar suas necessidades de oração, ficaremos felizes em receber sua mensagem. Nossa equipe está comprometida em atender você com carinho, orientação e suporte espiritual.",
        form: {
            name: "Nome*",
            email: "Email*",
            subject: "Assunto",
            message: "Mensagem*",
            button: "Mande sua mensagem",
            sending: "Enviando...",
        },
        validation: {
            nameRequired: "Por favor, digite seu nome.",
            emailRequired: "Por favor, digite seu email.",
            messageRequired: "Por favor, digite sua mensagem.",
            invalidEmail: "Por favor, digite um email válido.",
            success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            error: "Erro ao enviar mensagem. Por favor, tente novamente mais tarde."
        },
        contact: {
            address: {
                title: "Endereço",
                content: "2345 State Hwy 121, \nLewisville, TX 75067",
                ariaLabel: "Abrir localização no Google Maps"
            },
            phone: {
                title: "Telefone",
                content: "+1(214) 677-6646",
                ariaLabel: "Ligar para nossa igreja"
            },
            email: {
                title: "E-mail",
                content: "lewisvillemocop@gmail.com",
                ariaLabel: "Enviar email para nossa igreja"
            }
        },
        location: {
            title: "Nossa Localização"
        }
    },
    en: {
        title: "We're Here to Listen and Help!",
        description: "Whether you have questions, need information, or want to share prayer requests, we're happy to receive your message. Our team is committed to serving you with care, guidance, and spiritual support.",
        form: {
            name: "Name*",
            email: "Email*",
            subject: "Subject",
            message: "Message*",
            button: "Send your message",
            sending: "Sending...",
        },
        validation: {
            nameRequired: "Please enter your name.",
            emailRequired: "Please enter your email.",
            messageRequired: "Please enter your message.",
            invalidEmail: "Please enter a valid email.",
            success: "Message sent successfully! We'll get back to you soon.",
            error: "Error sending message. Please try again later."
        },
        contact: {
            address: {
                title: "Address",
                content: "2345 State Hwy 121, \nLewisville, TX 75067",
                ariaLabel: "Open location in Google Maps"
            },
            phone: {
                title: "Phone",
                content: "+1(214) 677-6646",
                ariaLabel: "Call our church"
            },
            email: {
                title: "Email",
                content: "lewisvillemocop@gmail.com",
                ariaLabel: "Send email to our church"
            }
        },
        location: {
            title: "Our Location"
        }
    },
    es: {
        title: "¡Estamos Aquí para Escuchar y Ayudar!",
        description: "Ya sea para hacer preguntas, solicitar información o compartir necesidades de oración, estaremos felices de recibir tu mensaje. Nuestro equipo está comprometido a servirte con cariño, orientación y apoyo espiritual.",
        form: {
            name: "Nombre*",
            email: "Correo electrónico*",
            subject: "Asunto",
            message: "Mensaje*",
            button: "Envía tu mensaje",
            sending: "Enviando...",
        },
        validation: {
            nameRequired: "Por favor, ingresa tu nombre.",
            emailRequired: "Por favor, ingresa tu correo electrónico.",
            messageRequired: "Por favor, ingresa tu mensaje.",
            invalidEmail: "Por favor, ingresa un correo electrónico válido.",
            success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
            error: "Error al enviar el mensaje. Por favor, intenta nuevamente más tarde."
        },
        contact: {
            address: {
                title: "Dirección",
                content: "2345 State Hwy 121, \nLewisville, TX 75067",
                ariaLabel: "Abrir ubicación en Google Maps"
            },
            phone: {
                title: "Teléfono",
                content: "+1(214) 677-6646",
                ariaLabel: "Llamar a nuestra iglesia"
            },
            email: {
                title: "Correo electrónico",
                content: "lewisvillemocop@gmail.com",
                ariaLabel: "Enviar correo electrónico a nuestra iglesia"
            }
        },
        location: {
            title: "Nuestra Ubicación"
        }
    }
};

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactForm = () => {
    const form = useRef();
    const position = [33.007460, -96.993690];
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ show: false, isError: false, message: '' });
    const { language } = useLanguage();
    const texts = translations[language];
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            icon: FaMapLocationDot,
            title: texts.contact.address.title,
            content: texts.contact.address.content,
            link: "https://www.google.com/maps/search/?api=1&query=2345+State+Hwy+121+Lewisville+TX+75067",
            ariaLabel: texts.contact.address.ariaLabel
        },
        {
            icon: FaPhone,
            title: texts.contact.phone.title,
            content: texts.contact.phone.content,
            link: "tel:+12146776646",
            ariaLabel: texts.contact.phone.ariaLabel
        },
        {
            icon: FaEnvelope,
            title: texts.contact.email.title,
            content: texts.contact.email.content,
            link: "mailto:lewisvillemocop@gmail.com",
            ariaLabel: texts.contact.email.ariaLabel
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const showNotification = (isError, message) => {
        setSubmitStatus({ show: true, isError, message });
        setTimeout(() => {
            setSubmitStatus({ show: false, isError: false, message: '' });
        }, 5000);
    };

    const validateForm = () => {
        if (!formData.user_name.trim()) {
            showNotification(true, texts.validation.nameRequired);
            return false;
        }
        if (!formData.user_email.trim()) {
            showNotification(true, texts.validation.emailRequired);
            return false;
        }
        if (!formData.message.trim()) {
            showNotification(true, texts.validation.messageRequired);
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.user_email)) {
            showNotification(true, texts.validation.invalidEmail);
            return false;
        }
        return true;
    };

    const resetForm = () => {
        setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                showNotification(false, texts.validation.success);
                resetForm();
            }
        } catch (error) {
            console.error('EMAILJS ERROR:', error);
            showNotification(true, texts.validation.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto my-16 sm:my-24">
                <motion.div
                    className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-footer">
                            {texts.title}
                        </h2>
                        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                            {texts.description}
                        </p>

                        {submitStatus.show && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-lg mt-4 ${submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

                        <motion.form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="mx-auto mt-8 bg-primary rounded-lg p-6 shadow-md space-y-4"
                            variants={itemVariants}
                        >
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleInputChange}
                                placeholder={texts.form.name}
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none"
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleInputChange}
                                placeholder={texts.form.email}
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none"
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder={texts.form.subject}
                                className="w-full rounded-md h-12 px-6 bg-white text-sm outline-none"
                            />
                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={texts.form.message}
                                rows="6"
                                className="w-full rounded-md px-6 bg-white text-sm pt-3 outline-none"
                            />
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`btn mx-auto w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                            >
                                {isSubmitting ? texts.form.sending : texts.form.button}
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    <motion.div
                        className="z-10 relative lg:col-span-2"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={ImgJPG}
                            webp={ImgWebP}
                            className="w-3/4 object-contain block mx-auto rounded-lg"
                            alt="Church"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-24 px-4"
                    variants={containerVariants}
                >
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.a
                                href={item.link}
                                target={item.icon === FaMapLocationDot ? "_blank" : "_self"}
                                rel={item.icon === FaMapLocationDot ? "noopener noreferrer" : ""}
                                className="group flex flex-col items-center w-full p-4 rounded-lg transition-colors hover:bg-gray-50"
                                aria-label={item.ariaLabel}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <item.icon
                                    size={34}
                                    className="text-bottomBar group-hover:text-yellowBtnHover transition-colors"
                                />
                                <div className="mt-4 text-center">
                                    <h4 className="text-footer text-xl font-bold group-hover:text-yellowBtnHover transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-2 whitespace-pre-line group-hover:text-gray-700 transition-colors">
                                        {item.content}
                                    </p>
                                </div>
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 px-4"
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-yellowBtnHover mb-4">
                        {texts.location.title}
                    </h3>
                    <div style={{ height: '450px', width: '100%' }}>
                        <MapContainer center={position} zoom={18} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    2345 State Hwy 121, Lewisville, TX 75067
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactForm;