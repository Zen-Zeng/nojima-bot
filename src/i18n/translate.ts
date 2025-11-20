/**
 * 简单的翻译服务
 * 可以使用免费的翻译 API 或预加载的翻译映射
 */

export type Language = 'zh' | 'en' | 'ja';

// 翻译缓存
const translationCache: Record<string, Record<Language, string>> = {};

/**
 * 使用免费的翻译 API 进行翻译
 * 注意：免费 API 有速率限制，建议先批量生成翻译文件
 */
export async function translateText(
  text: string,
  targetLang: Language,
  sourceLang: Language = 'zh'
): Promise<string> {
  // 如果目标语言是源语言，直接返回
  if (targetLang === sourceLang) {
    return text;
  }

  // 检查缓存
  const cacheKey = `${sourceLang}_${targetLang}_${text}`;
  if (translationCache[cacheKey]?.[targetLang]) {
    return translationCache[cacheKey][targetLang];
  }

  // 检查 sessionStorage
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) {
    return cached;
  }

  // 使用 MyMemory Translation API (免费，但有速率限制)
  try {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const translated = data.responseData?.translatedText || text;

    // 缓存结果
    sessionStorage.setItem(cacheKey, translated);
    if (!translationCache[cacheKey]) {
      translationCache[cacheKey] = {} as Record<Language, string>;
    }
    translationCache[cacheKey][targetLang] = translated;

    return translated;
  } catch (error) {
    console.error('翻译失败:', error);
    return text; // 翻译失败时返回原文
  }
}

/**
 * 批量翻译文本数组
 */
export async function translateBatch(
  texts: string[],
  targetLang: Language,
  sourceLang: Language = 'zh'
): Promise<string[]> {
  const results: string[] = [];
  for (const text of texts) {
    const translated = await translateText(text, targetLang, sourceLang);
    results.push(translated);
    // 避免 API 限流
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  return results;
}

