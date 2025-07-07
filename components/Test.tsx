'use client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '@/lib/i18n';

export const LanguageSwitcher = () => {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nextLang);
    };

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl text-white font-bold">{t('hello')}</h1>
            <button onClick={toggleLanguage} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Cambiar idioma
            </button>
        </div>
    );
}
