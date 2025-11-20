import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { translateText } from '../i18n/translate';

interface TranslatedFragmentProps {
  children: React.ReactNode;
}

/**
 * 翻译片段组件 - 用于翻译包含多个子元素的复杂内容
 * 会自动翻译所有文本节点
 */
const TranslatedFragment: React.FC<TranslatedFragmentProps> = ({ children }) => {
  const { language } = useLanguage();
  const [translatedChildren, setTranslatedChildren] = useState<React.ReactNode>(children);

  useEffect(() => {
    if (language === 'zh') {
      setTranslatedChildren(children);
      return;
    }

    // 递归处理子元素，翻译所有文本节点
    const translateNode = async (node: React.ReactNode): Promise<React.ReactNode> => {
      if (typeof node === 'string') {
        const cacheKey = `translation_${language}_${node}`;
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          return cached;
        }
        try {
          const translated = await translateText(node, language, 'zh');
          sessionStorage.setItem(cacheKey, translated);
          return translated;
        } catch {
          return node;
        }
      }

      if (React.isValidElement(node)) {
        const children = React.Children.map(node.props.children, translateNode);
        return React.cloneElement(node, { ...node.props }, children);
      }

      if (Array.isArray(node)) {
        return Promise.all(node.map(translateNode));
      }

      return node;
    };

    translateNode(children).then(setTranslatedChildren);
  }, [children, language]);

  return <>{translatedChildren}</>;
};

export default TranslatedFragment;

