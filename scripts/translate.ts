/**
 * 翻译工具脚本
 * 使用 Google Translate API 批量翻译内容
 * 
 * 使用方法：
 * 1. 安装依赖: npm install @google-cloud/translate
 * 2. 设置环境变量 GOOGLE_APPLICATION_CREDENTIALS
 * 3. 运行: npx ts-node scripts/translate.ts
 */

// 或者使用免费的翻译 API，比如 LibreTranslate 或 MyMemory
// 这里提供一个使用 fetch 的简单实现

async function translateText(text: string, targetLang: 'en' | 'ja'): Promise<string> {
  // 使用免费的 MyMemory Translation API
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=zh|${targetLang}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.responseData?.translatedText || text;
  } catch (error) {
    console.error(`翻译失败: ${text}`, error);
    return text;
  }
}

// 提取所有需要翻译的中文文本
const chineseTexts = [
  '商业可行性评估',
  '面向未来的陪伴型机器人供应链布局',
  // ... 更多文本
];

async function generateTranslations() {
  console.log('开始翻译...');
  
  const translations: Record<string, { en: string; ja: string }> = {};
  
  for (const text of chineseTexts) {
    console.log(`翻译: ${text}`);
    const [en, ja] = await Promise.all([
      translateText(text, 'en'),
      translateText(text, 'ja'),
    ]);
    
    translations[text] = { en, ja };
    
    // 避免 API 限流
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(JSON.stringify(translations, null, 2));
}

// generateTranslations();

