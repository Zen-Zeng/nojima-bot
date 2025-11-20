import React from 'react';
import { useLanguage, Language } from '../i18n/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${
              language === lang.code
                ? 'bg-accent text-primary shadow-sm'
                : 'bg-surface/50 text-textSecondary hover:bg-surface hover:text-textPrimary'
            }
          `}
          title={lang.label}
        >
          <span className="mr-1.5">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

