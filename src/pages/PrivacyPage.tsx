import React from 'react';
import { useTranslation } from 'react-i18next';

export const PrivacyPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const content: Record<string, { title: string; lastUpdated: string; sections: { heading: string; text: string }[] }> = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: February 2026',
      sections: [
        {
          heading: 'Introduction',
          text: 'LinguaMaster ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our desktop application.',
        },
        {
          heading: 'Data Collection',
          text: 'LinguaMaster is designed with privacy in mind. All your learning data, including vocabulary, video history, and progress, is stored locally on your device. We do not collect, transmit, or store any personal data on our servers.',
        },
        {
          heading: 'Third-Party Services',
          text: 'When you use AI features, your queries are sent directly to your configured AI provider (OpenAI, Azure OpenAI, or Ollama). We do not proxy or store these requests. Please refer to your AI provider\'s privacy policy for their data handling practices.',
        },
        {
          heading: 'Video Downloads',
          text: 'Videos downloaded through LinguaMaster are stored locally on your device. We do not track or monitor your viewing habits or downloaded content.',
        },
        {
          heading: 'Analytics',
          text: 'We do not use any analytics or tracking services. Your usage of LinguaMaster is completely private.',
        },
        {
          heading: 'Updates',
          text: 'The application checks for updates from our GitHub repository. This request only retrieves version information and does not transmit any personal data.',
        },
        {
          heading: 'Contact',
          text: 'If you have any questions about this Privacy Policy, please contact us at [contact email placeholder].',
        },
      ],
    },
    zh: {
      title: '隐私政策',
      lastUpdated: '最后更新：2026年2月',
      sections: [
        {
          heading: '简介',
          text: 'LinguaMaster（"我们"）致力于保护您的隐私。本隐私政策说明了当您使用我们的桌面应用程序时，我们如何收集、使用和保护您的信息。',
        },
        {
          heading: '数据收集',
          text: 'LinguaMaster 在设计时充分考虑了隐私保护。您的所有学习数据，包括词汇、视频历史和进度，都存储在您的本地设备上。我们不会在服务器上收集、传输或存储任何个人数据。',
        },
        {
          heading: '第三方服务',
          text: '当您使用 AI 功能时，您的查询会直接发送到您配置的 AI 提供商（OpenAI、Azure OpenAI 或 Ollama）。我们不会代理或存储这些请求。请参阅您的 AI 提供商的隐私政策了解其数据处理方式。',
        },
        {
          heading: '视频下载',
          text: '通过 LinguaMaster 下载的视频存储在您的本地设备上。我们不会跟踪或监控您的观看习惯或下载内容。',
        },
        {
          heading: '分析',
          text: '我们不使用任何分析或跟踪服务。您对 LinguaMaster 的使用完全私密。',
        },
        {
          heading: '更新',
          text: '应用程序从我们的 GitHub 仓库检查更新。此请求仅获取版本信息，不会传输任何个人数据。',
        },
        {
          heading: '联系方式',
          text: '如果您对本隐私政策有任何疑问，请通过 [联系邮箱占位符] 与我们联系。',
        },
      ],
    },
    ja: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新：2026年2月',
      sections: [
        {
          heading: 'はじめに',
          text: 'LinguaMaster（「当社」）は、お客様のプライバシーを保護することをお約束します。このプライバシーポリシーでは、デスクトップアプリケーションをご利用いただく際の情報の収集、使用、保護について説明します。',
        },
        {
          heading: 'データ収集',
          text: 'LinguaMasterはプライバシーを考慮して設計されています。語彙、動画履歴、進捗状況を含むすべての学習データは、お客様のデバイスにローカルで保存されます。当社のサーバーでは個人データを収集、送信、保存しません。',
        },
        {
          heading: 'サードパーティサービス',
          text: 'AI機能を使用する際、クエリは設定されたAIプロバイダー（OpenAI、Azure OpenAI、またはOllama）に直接送信されます。当社はこれらのリクエストをプロキシしたり保存したりしません。AIプロバイダーのデータ取り扱いについては、各プロバイダーのプライバシーポリシーをご参照ください。',
        },
        {
          heading: '動画ダウンロード',
          text: 'LinguaMasterを通じてダウンロードされた動画は、お客様のデバイスにローカルで保存されます。当社は視聴習慣やダウンロードコンテンツを追跡または監視しません。',
        },
        {
          heading: 'アナリティクス',
          text: '当社はアナリティクスやトラッキングサービスを使用しません。LinguaMasterのご利用は完全にプライベートです。',
        },
        {
          heading: 'アップデート',
          text: 'アプリケーションはGitHubリポジトリからアップデートを確認します。このリクエストはバージョン情報のみを取得し、個人データは送信しません。',
        },
        {
          heading: 'お問い合わせ',
          text: 'このプライバシーポリシーについてご質問がある場合は、[連絡先メールプレースホルダー]までお問い合わせください。',
        },
      ],
    },
  };

  const data = content[lang] || content.en;

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {data.title}
          </h1>
          <p className="text-sm text-zinc-500">{data.lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {data.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
              <p className="text-zinc-400 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
