import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { translateText } from '../i18n/translate';

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * 自动翻译文本组件
 * 当语言不是中文时，会自动调用翻译 API 进行翻译
 */
const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  children, 
  className = '',
  as: Component = 'span'
}) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string>(children);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (language === 'zh') {
      setTranslatedText(children);
      return;
    }

    // 检查缓存
    const cacheKey = `translation_${language}_${children}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setTranslatedText(cached);
      return;
    }

    // 异步翻译
    setIsTranslating(true);
    translateText(children, language, 'zh')
      .then((translated) => {
        setTranslatedText(translated);
        sessionStorage.setItem(cacheKey, translated);
      })
      .catch(() => {
        setTranslatedText(children); // 翻译失败时显示原文
      })
      .finally(() => {
        setIsTranslating(false);
      });
  }, [children, language]);

  return (
    <Component className={className}>
      {isTranslating ? children : translatedText}
    </Component>
  );
};

export default TranslatedText;

