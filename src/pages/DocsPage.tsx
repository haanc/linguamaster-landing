import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Brain, BookOpen, Video, Languages, Sparkles, BookMarked, Settings } from 'lucide-react';

interface DocSection {
  id: string;
  icon: React.ReactNode;
  title: Record<string, string>;
  content: Record<string, string>;
}

const docSections: DocSection[] = [
  {
    id: 'import',
    icon: <Video className="w-6 h-6" />,
    title: {
      en: 'Import Videos',
      zh: '导入视频',
      ja: '動画のインポート',
    },
    content: {
      en: 'Import videos from YouTube, Bilibili, or local files. Simply paste a URL or drag & drop a video file. LinguaMaster will automatically download and process the video for learning.',
      zh: '从 YouTube、Bilibili 或本地文件导入视频。只需粘贴 URL 或拖放视频文件。LinguaMaster 会自动下载并处理视频以供学习。',
      ja: 'YouTube、Bilibili、またはローカルファイルから動画をインポート。URLを貼り付けるか、動画ファイルをドラッグ＆ドロップするだけ。LinguaMasterが自動的にダウンロードして学習用に処理します。',
    },
  },
  {
    id: 'subtitles',
    icon: <Languages className="w-6 h-6" />,
    title: {
      en: 'AI Subtitle Generation',
      zh: 'AI 字幕生成',
      ja: 'AI字幕生成',
    },
    content: {
      en: 'Powered by OpenAI Whisper, LinguaMaster automatically transcribes audio into accurate subtitles with precise timestamps. Supports multiple languages including English, Chinese, Japanese, French, German, and Spanish.',
      zh: '基于 OpenAI Whisper，LinguaMaster 自动将音频转录为精确时间戳的准确字幕。支持多种语言，包括英语、中文、日语、法语、德语和西班牙语。',
      ja: 'OpenAI Whisperを搭載し、LinguaMasterは音声を正確なタイムスタンプ付きの字幕に自動変換します。英語、中国語、日本語、フランス語、ドイツ語、スペイン語など複数の言語をサポート。',
    },
  },
  {
    id: 'bilingual',
    icon: <Zap className="w-6 h-6" />,
    title: {
      en: 'Bilingual Subtitles',
      zh: '双语字幕',
      ja: 'バイリンガル字幕',
    },
    content: {
      en: 'Enable bilingual subtitles with one click. See the original language alongside your native language translation. Perfect for comparing sentence structures and learning natural expressions.',
      zh: '一键开启双语字幕。同时查看原语言和母语翻译。非常适合对比句子结构和学习地道表达。',
      ja: 'ワンクリックでバイリンガル字幕を有効化。原語と母語翻訳を並べて表示。文構造の比較や自然な表現の学習に最適。',
    },
  },
  {
    id: 'dictionary',
    icon: <BookOpen className="w-6 h-6" />,
    title: {
      en: 'Interactive Dictionary',
      zh: '交互式词典',
      ja: 'インタラクティブ辞書',
    },
    content: {
      en: 'Click any word in the subtitles to instantly get definitions, pronunciation, translations, and example sentences. No need to switch apps or lose your flow.',
      zh: '点击字幕中的任意单词即可立即获取定义、发音、翻译和例句。无需切换应用或中断学习流程。',
      ja: '字幕内の単語をクリックすると、定義、発音、翻訳、例文を即座に取得。アプリを切り替えたり、フローを中断する必要はありません。',
    },
  },
  {
    id: 'ai-tutor',
    icon: <Brain className="w-6 h-6" />,
    title: {
      en: 'AI Language Tutor',
      zh: 'AI 语言导师',
      ja: 'AI言語チューター',
    },
    content: {
      en: 'Select any sentence for in-depth AI analysis. Get grammar explanations, cultural context, and nuance breakdowns. Practice conversation with an AI tutor that understands your video content.',
      zh: '选择任意句子进行深度 AI 分析。获取语法解释、文化背景和语境解读。与理解您视频内容的 AI 导师进行对话练习。',
      ja: '任意の文を選択してAIの詳細分析を取得。文法説明、文化的背景、ニュアンスの解説を得られます。動画コンテンツを理解するAIチューターと会話練習。',
    },
  },
  {
    id: 'vocabulary',
    icon: <BookMarked className="w-6 h-6" />,
    title: {
      en: 'Vocabulary Notebook',
      zh: '生词本',
      ja: '単語帳',
    },
    content: {
      en: 'Save words to your personal vocabulary notebook with video context and timestamps. Review using SM-2 spaced repetition algorithm for optimal long-term retention.',
      zh: '将单词保存到个人生词本，附带视频上下文和时间戳。使用 SM-2 间隔重复算法进行复习，实现最佳长期记忆效果。',
      ja: '動画のコンテキストとタイムスタンプと共に単語を個人の単語帳に保存。SM-2間隔反復アルゴリズムで復習し、長期記憶を最適化。',
    },
  },
  {
    id: 'ai-config',
    icon: <Settings className="w-6 h-6" />,
    title: {
      en: 'Flexible AI Configuration',
      zh: '灵活的 AI 配置',
      ja: '柔軟なAI設定',
    },
    content: {
      en: 'Bring your own API key for Azure OpenAI, OpenAI, or use local models via Ollama. No subscription fees - pay only for what you use at cost price.',
      zh: '使用您自己的 Azure OpenAI、OpenAI API 密钥，或通过 Ollama 使用本地模型。无订阅费 - 按成本价按需付费。',
      ja: 'Azure OpenAI、OpenAIの自分のAPIキーを使用するか、Ollama経由でローカルモデルを使用。サブスクリプション料金なし - 使用分だけ原価で支払い。',
    },
  },
  {
    id: 'offline',
    icon: <Sparkles className="w-6 h-6" />,
    title: {
      en: 'Offline Capability',
      zh: '离线功能',
      ja: 'オフライン機能',
    },
    content: {
      en: 'All your learning data is stored locally. Review vocabulary, watch downloaded videos, and continue learning even without an internet connection.',
      zh: '所有学习数据均存储在本地。即使没有网络连接，也可以复习词汇、观看已下载的视频并继续学习。',
      ja: 'すべての学習データはローカルに保存。インターネット接続がなくても、語彙の復習、ダウンロードした動画の視聴、学習の継続が可能。',
    },
  },
];

export const DocsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const titles: Record<string, string> = {
    en: 'Documentation',
    zh: '文档',
    ja: 'ドキュメント',
  };

  const subtitles: Record<string, string> = {
    en: 'Learn how to use LinguaMaster effectively',
    zh: '了解如何有效使用 LinguaMaster',
    ja: 'LinguaMasterの効果的な使い方を学ぶ',
  };

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {titles[lang] || titles.en}
          </h1>
          <p className="text-lg text-zinc-400">
            {subtitles[lang] || subtitles.en}
          </p>
        </div>

        <div className="space-y-6">
          {docSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="glass-panel p-6 rounded-xl border border-zinc-800 hover:border-brand-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-500/10 rounded-lg border border-brand-500/20 text-brand-400 shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {section.title[lang] || section.title.en}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {section.content[lang] || section.content.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
