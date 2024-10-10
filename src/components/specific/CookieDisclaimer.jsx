import React, { useState, useEffect } from 'react';
import { MdClose } from "react-icons/md";

const CookieDisclaimer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        if (!hasAcceptedCookies) {
            setIsVisible(true);
            // Set a timeout to automatically accept cookies after a delay
            const timer = setTimeout(() => {
                handleAccept();
            }, 10000); // 10 seconds delay, adjust as needed

            // Clear the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
        // Here you would typically initialize your cookies or tracking scripts
        initializeCookies();
    };

    const initializeCookies = () => {
        // Implement your cookie initialization logic here
        console.log('Cookies initialized');
        // For example:
        // initializeAnalytics();
        // initializeMarketing();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 max-w-sm bg-white shadow-lg rounded-lg ring-2 ring-yellowBtnHover overflow-hidden z-50">
            <div className="p-7 relative">
                <button
                    onClick={handleAccept}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    <MdClose size={24} />
                </button>
                <div className="pr-8">
                    <p className="text-sm text-gray-600 mb-4">
                        Usamos cookies para fornecer a melhor experiência possível para você. Ao fechar este banner ou continuar a usar nosso site, você reconhece que aceita nossos Termos e Política de Privacidade.
                    </p>
                    <div className="flex justify-between items-center">
                        <a href="#" target='_blank' className="text-md text-yellowBtnHover hover:underline">Termos & Privacidade</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieDisclaimer;