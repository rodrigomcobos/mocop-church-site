import React, { useState, useEffect } from 'react';
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const translations = {
    pt: {
        title: "Configurações de Cookies",
        description: "Utilizamos cookies para melhorar sua experiência em nosso site. Alguns cookies são essenciais para o funcionamento do site, enquanto outros nos ajudam a entender como você o utiliza.",
        cookies: {
            necessary: "Cookies Necessários",
            analytics: "Cookies Analíticos",
            marketing: "Cookies de Marketing"
        },
        alwaysActive: "Sempre ativo",
        buttons: {
            acceptAll: "Aceitar Todos",
            savePreferences: "Salvar Preferências",
            declineOptional: "Recusar Opcionais",
            privacyPolicy: "Política de Privacidade"
        },
        aria: {
            close: "Fechar"
        }
    },
    en: {
        title: "Cookie Settings",
        description: "We use cookies to enhance your experience on our website. Some cookies are essential for the site's functionality, while others help us understand how you use it.",
        cookies: {
            necessary: "Necessary Cookies",
            analytics: "Analytics Cookies",
            marketing: "Marketing Cookies"
        },
        alwaysActive: "Always active",
        buttons: {
            acceptAll: "Accept All",
            savePreferences: "Save Preferences",
            declineOptional: "Decline Optional",
            privacyPolicy: "Privacy Policy"
        },
        aria: {
            close: "Close"
        }
    },
    es: {
        title: "Configuración de Cookies",
        description: "Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Algunas cookies son esenciales para el funcionamiento del sitio, mientras que otras nos ayudan a entender cómo lo utilizas.",
        cookies: {
            necessary: "Cookies Necesarias",
            analytics: "Cookies Analíticas",
            marketing: "Cookies de Marketing"
        },
        alwaysActive: "Siempre activo",
        buttons: {
            acceptAll: "Aceptar Todo",
            savePreferences: "Guardar Preferencias",
            declineOptional: "Rechazar Opcionales",
            privacyPolicy: "Política de Privacidad"
        },
        aria: {
            close: "Cerrar"
        }
    }
};

const CookieDisclaimer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();
    const texts = translations[language];
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookieConsent');
        if (!hasConsent) {
            // Small delay before showing the banner for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        } else {
            try {
                const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
                if (savedPreferences) {
                    setPreferences(savedPreferences);
                    initializeCookies(savedPreferences);
                }
            } catch (error) {
                console.error('Error loading cookie preferences:', error);
            }
        }
    }, []);

    const handleAccept = (acceptAll = false) => {
        const newPreferences = acceptAll
            ? { necessary: true, analytics: true, marketing: true }
            : preferences;

        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
        setPreferences(newPreferences);
        setIsVisible(false);
        initializeCookies(newPreferences);
    };

    const handleDecline = () => {
        const essentialOnly = {
            necessary: true,
            analytics: false,
            marketing: false
        };

        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
        setPreferences(essentialOnly);
        setIsVisible(false);
        initializeCookies(essentialOnly);
    };

    const initializeCookies = (prefs) => {
        console.log('Initializing necessary cookies');

        if (prefs.analytics) {
            console.log('Initializing analytics cookies');
        }

        if (prefs.marketing) {
            console.log('Initializing marketing cookies');
        }
    };

    const handleTogglePreference = (key) => {
        if (key === 'necessary') return;
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="fixed bottom-6 left-0 right-0 mx-auto max-w-2xl px-4 z-50"
                >
                    <motion.div
                        className="bg-white rounded-xl shadow-2xl ring-2 ring-yellowBtnHover overflow-hidden"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="p-6 relative">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsVisible(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label={texts.aria.close}
                            >
                                <MdClose size={24} />
                            </motion.button>

                            <div className="pr-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                                    {texts.title}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {texts.description}
                                </p>

                                <div className="space-y-4 mb-6">
                                    {Object.entries({
                                        necessary: texts.cookies.necessary,
                                        analytics: texts.cookies.analytics,
                                        marketing: texts.cookies.marketing
                                    }).map(([key, label]) => (
                                        <motion.div
                                            key={key}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences[key]}
                                                    onChange={() => handleTogglePreference(key)}
                                                    disabled={key === 'necessary'}
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="ml-3 text-sm font-medium text-gray-700">
                                                    {label}
                                                </span>
                                            </label>
                                            {key === 'necessary' && (
                                                <span className="text-xs text-gray-500">
                                                    {texts.alwaysActive}
                                                </span>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAccept(true)}
                                        className="px-6 py-2 bg-yellowBtn text-footer font-bold rounded-lg hover:bg-yellowBtnHover hover:text-white transition-colors"
                                    >
                                        {texts.buttons.acceptAll}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAccept(false)}
                                        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        {texts.buttons.savePreferences}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleDecline}
                                        className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                    >
                                        {texts.buttons.declineOptional}
                                    </motion.button>
                                    <Link
                                        to="/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 text-footer hover:text-yellowBtnHover hover:underline transition-colors"
                                    >
                                        {texts.buttons.privacyPolicy}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieDisclaimer;