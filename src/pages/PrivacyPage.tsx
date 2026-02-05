import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

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
          heading: 'Core Privacy Commitment',
          text: 'We do not store or audit your translation content on any cloud server. Your translation history and browsing context are stored only on your local device.',
        },
        {
          heading: 'Local Data Storage',
          text: 'All your learning data, including vocabulary, video history, and progress, is stored locally on your device. If you delete the application or clear the cache, the developer cannot recover your data from the server.',
        },
        {
          heading: 'Cloud Sync Data',
          text: 'To enable cross-device synchronization, only the Vocabulary (word list) and Video Metadata are uploaded to our servers. Your actual video files and translation history remain local.',
        },
        {
          heading: 'Third-Party Services',
          text: 'When you use AI features, your text is transmitted to third-party AI providers (such as OpenAI) for processing. We do not permanently store the content of these requests on our servers. Any transit of data through our infrastructure is encrypted and used solely for the purpose of communicating with the AI providers. This process is also governed by the third-party provider\'s privacy policy, and we are not liable for data breaches or violations by third-party service providers.',
        },
        {
          heading: 'Security Disclaimer',
          text: 'Although we have adopted industry-standard security measures (such as SSL encryption, Vercel hosting security standards) to protect synchronized data, given the complexity of the Internet environment, we cannot guarantee that data will never be illegally accessed. Users should be aware of and accept the inherent risks of transmitting data over the Internet.',
        },
        {
          heading: 'Data Deletion',
          text: 'Users can manage or delete their synchronized cloud data (Vocabulary and Video Metadata) directly through the application settings. If you wish to request a permanent deletion of all your data from our servers, please contact us via email at feedback@linguamaster.top.',
        },
        {
          heading: 'Analytics',
          text: 'We use Vercel Analytics for basic website traffic insights on our landing page. The desktop application itself does not use any analytics or tracking services. Your usage of LinguaMaster is completely private.',
        },
        {
          heading: 'Updates',
          text: 'The application checks for updates from our GitHub repository. This request only retrieves version information and does not transmit any personal data.',
        },
        {
          heading: 'Contact',
          text: 'If you have any questions about this Privacy Policy, please contact us via GitHub Issues or email.',
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
          heading: '核心隐私承诺',
          text: '开发者承诺不对用户的翻译内容进行任何云端存储或审计。您的翻译历史、网页上下文仅存储于用户本地设备。',
        },
        {
          heading: '本地数据存储',
          text: '您的所有学习数据，包括词汇、视频历史和进度，都存储在您的本地设备上。若用户删除应用或清理缓存导致数据丢失，开发者无法通过服务器找回。',
        },
        {
          heading: '云端同步数据',
          text: '为实现跨端同步，仅生词本（Vocabulary）与视频元数据（Video Meta Data）会上传至服务器。您的实际视频文件和翻译历史保留在本地。',
        },
        {
          heading: '第三方服务',
          text: '当您使用 AI 翻译功能时，您的文本将传输至第三方 AI 服务商（如 OpenAI）进行处理。我们不会在服务器上永久存储这些请求的内容。任何通过我们基础设施的数据传输都是加密的，且仅用于与 AI 服务商通信。该过程同时受第三方服务商隐私政策约束，开发者不对第三方服务商的数据泄露或违规行为承担连带责任。',
        },
        {
          heading: '安全性免责',
          text: '尽管我们已采取主流的安全措施（如 SSL 加密、Vercel 托管环境安全标准）来保护同步数据，但鉴于互联网环境的复杂性，开发者无法保证数据绝对不被非法入侵。用户应知晓并接受互联网传输数据存在的固有风险。',
        },
        {
          heading: '数据删除',
          text: '用户可以通过应用程序设置直接管理或删除其同步的云端数据（生词本和视频元数据）。如果您希望永久删除我们服务器上的所有数据，请通过电子邮件 feedback@linguamaster.top 与我们联系。',
        },
        {
          heading: '分析',
          text: '我们在落地页使用 Vercel Analytics 进行基本的流量分析。桌面应用程序本身不使用任何分析或跟踪服务。您对 LinguaMaster 的使用完全私密。',
        },
        {
          heading: '更新',
          text: '应用程序从我们的 GitHub 仓库检查更新。此请求仅获取版本信息，不会传输任何个人数据。',
        },
        {
          heading: '联系方式',
          text: '如果您对本隐私政策有任何疑问，请通过 GitHub Issues 或电子邮件与我们联系。',
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
          heading: 'プライバシーに関する基本方針',
          text: '開発者は、ユーザーの翻訳コンテンツをクラウドサーバーに保存または監査しないことをお約束します。翻訳履歴とブラウジングコンテキストは、ユーザーのローカルデバイスにのみ保存されます。',
        },
        {
          heading: 'ローカルデータストレージ',
          text: '語彙、動画履歴、進捗状況を含むすべての学習データは、お客様のデバイスにローカルで保存されます。アプリケーションを削除したりキャッシュをクリアしたりしてデータが失われた場合、開発者はサーバーからデータを復元することはできません。',
        },
        {
          heading: 'クラウド同期データ',
          text: 'クロスデバイス同期を有効にするため、語彙リスト（Vocabulary）と動画メタデータのみがサーバーにアップロードされます。実際の動画ファイルと翻訳履歴はローカルに保持されます。',
        },
        {
          heading: 'サードパーティサービス',
          text: 'AI機能を使用する際、テキストはサードパーティのAIプロバイダー（OpenAIなど）に送信されて処理されます。当社はこれらのリクエストの内容をサーバーに永久に保存することはありません。当社のインフラストラクチャを通過するデータはすべて暗号化され、AIプロバイダーとの通信のみに使用されます。このプロセスはサードパーティプロバイダーのプライバシーポリシーにも準拠し、サードパーティサービスプロバイダーによるデータ漏洩や違反について当社は責任を負いません。',
        },
        {
          heading: 'セキュリティに関する免責事項',
          text: '同期データを保護するために業界標準のセキュリティ対策（SSL暗号化、Vercelホスティングセキュリティ基準など）を採用していますが、インターネット環境の複雑さを考慮すると、データが不正アクセスされないことを保証することはできません。ユーザーは、インターネット上でのデータ送信に固有のリスクを認識し、受け入れる必要があります。',
        },
        {
          heading: 'データ削除',
          text: 'ユーザーは、アプリケーション設定から直接、同期されたクラウドデータ（語彙および動画メタデータ）を管理または削除できます。当社のサーバーからすべてのデータを永久に削除することをご希望の場合は、feedback@linguamaster.top までメールでお問い合わせください。',
        },
        {
          heading: 'アナリティクス',
          text: 'ランディングページでは基本的なウェブサイトトラフィック分析のためにVercel Analyticsを使用しています。デスクトップアプリケーション自体はアナリティクスやトラッキングサービスを使用しません。LinguaMasterのご利用は完全にプライベートです。',
        },
        {
          heading: 'アップデート',
          text: 'アプリケーションはGitHubリポジトリからアップデートを確認します。このリクエストはバージョン情報のみを取得し、個人データは送信しません。',
        },
        {
          heading: 'お問い合わせ',
          text: 'このプライバシーポリシーについてご質問がある場合は、GitHub Issuesまたはメールでお問い合わせください。',
        },
      ],
    },
  };

  const data = content[lang] || content.en;

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <SEO
        title="Privacy Policy"
        description="LinguaMaster's privacy policy. Learn how we protect your data with our local-first, privacy-by-design approach."
        path="/privacy"
      />
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
