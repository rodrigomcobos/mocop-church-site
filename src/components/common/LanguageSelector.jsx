// src/components/common/LanguageSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BrazilFlag, USAFlag, SpainFlag } from '../icons/FlagIcons';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
    { code: 'pt', name: 'Português', flag: BrazilFlag },
    { code: 'en', name: 'English', flag: USAFlag },
    { code: 'es', name: 'Español', flag: SpainFlag },
];

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLanguage = languages.find(lang => lang.code === language);
    const Flag = currentLanguage.flag;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-1 text-white hover:text-gray-200 transition-colors duration-200"
            >
                <Flag />
                <span className="text-sm">{currentLanguage.name}</span>
                <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-1 bg-white rounded-md shadow-lg py-1 w-32 z-50">
                    {languages.map((lang) => {
                        const LangFlag = lang.flag;
                        return (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-100 ${language === lang.code ? 'bg-gray-50 text-bottomBar' : 'text-gray-700'
                                    }`}
                            >
                                <LangFlag />
                                <span>{lang.name}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;