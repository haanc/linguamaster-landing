import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export const TermsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const content: Record<string, { title: string; lastUpdated: string; sections: { heading: string; text: string }[] }> = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: February 2026',
      sections: [
        {
          heading: 'Acceptance of Terms',
          text: 'By downloading, installing, or using LinguaMaster, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application.',
        },
        {
          heading: 'Independent Developer Project',
          text: 'LinguaMaster is an independent developer ("one-person company") project. As an indie project, we may not be able to provide 24/7 customer support or immediate bug fixes. We appreciate your understanding and patience.',
        },
        {
          heading: 'License',
          text: 'The core open-source components of LinguaMaster may be provided under the MIT License. However, specific commercial versions, pre-built binaries, cloud synchronization features, and premium functionalities are subject to this End User License Agreement (EULA) and may not be redistributed or resold without explicit authorization.',
        },
        {
          heading: 'Use of the Application',
          text: 'LinguaMaster is designed for personal language learning. You are responsible for ensuring that your use of the application complies with all applicable laws and regulations, including copyright laws regarding video content.',
        },
        {
          heading: 'Subscription and Payments',
          text: 'Payments for premium features are processed via third-party providers (e.g., Lemon Squeezy). Subscription fees are non-refundable unless required by applicable local law. We reserve the right to change our pricing with reasonable notice. Free credits provided monthly are for personal use only and may not be transferred or sold.',
        },
        {
          heading: 'Data Ownership',
          text: 'You retain all rights to your learning data, including vocabulary lists and translation history. Since translation history is stored locally on your device, we cannot recover data if you uninstall the application without creating a backup. Cloud-synced data (vocabulary and video metadata) can be exported upon request.',
        },
        {
          heading: 'Third-Party Services',
          text: 'LinguaMaster integrates with third-party AI services (OpenAI, Azure OpenAI, Ollama) and video platforms (YouTube, Bilibili). Your use of these services is subject to their respective terms of service and policies.',
        },
        {
          heading: 'AI Output Disclaimer',
          text: 'The translation and language analysis features are powered by third-party AI services (such as OpenAI). We do not guarantee the accuracy, completeness, or legality of AI-generated content. We are not liable for any direct or indirect damages (including but not limited to commercial losses, academic errors) caused by translation errors, misleading content, or inappropriate expressions.',
        },
        {
          heading: 'Disclaimer of Warranties',
          text: 'LinguaMaster and all its features are provided on an "as is" and "as available" basis. As an independent developer project, we make no express or implied warranties regarding the software\'s stability, error-free operation, or fitness for a particular purpose. You assume all risks associated with using this software.',
        },
        {
          heading: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, the developer and affiliates shall not be liable for any indirect, incidental, special, or punitive damages (including loss of profits, data loss) arising from your use or inability to use the software. In no event shall our total liability exceed the total fees you have paid to this application in the past 12 months.',
        },
        {
          heading: 'Changes to Terms',
          text: 'We reserve the right to modify these Terms of Service at any time. Continued use of the application after changes constitutes acceptance of the new terms.',
        },
        {
          heading: 'Contact',
          text: 'If you have any questions about these Terms of Service, please contact us via GitHub Issues or email.',
        },
      ],
    },
    zh: {
      title: '服务条款',
      lastUpdated: '最后更新：2026年2月',
      sections: [
        {
          heading: '条款接受',
          text: '下载、安装或使用 LinguaMaster，即表示您同意受本服务条款的约束。如果您不同意这些条款，请勿使用本应用程序。',
        },
        {
          heading: '独立开发者项目',
          text: 'LinguaMaster 是一个独立开发者（"一人公司"）项目。作为独立项目，我们可能无法提供 7x24 小时的即时客服或立即修复所有 Bug。感谢您的理解与耐心。',
        },
        {
          heading: '许可证',
          text: 'LinguaMaster 的核心开源组件可能遵循 MIT 许可证。但是，特定的商业版本、预编译二进制文件、云同步功能和高级功能受本最终用户许可协议 (EULA) 约束，未经明确授权不得再分发或转售。',
        },
        {
          heading: '应用程序使用',
          text: 'LinguaMaster 专为个人语言学习设计。您有责任确保您对应用程序的使用符合所有适用的法律法规，包括有关视频内容的版权法。',
        },
        {
          heading: '订阅与付款',
          text: '高级功能的付款通过第三方提供商（如 Lemon Squeezy）处理。除非当地法律要求，否则订阅费用不予退还。我们保留在合理通知后更改定价的权利。每月提供的免费额度仅供个人使用，不得转让或出售。',
        },
        {
          heading: '数据归属',
          text: '您保留对您的学习数据的所有权利，包括生词本和翻译历史。由于翻译历史存储在您的本地设备上，如果您在未创建备份的情况下卸载应用程序，我们无法恢复数据。云同步数据（生词本和视频元数据）可根据要求导出。',
        },
        {
          heading: '第三方服务',
          text: 'LinguaMaster 与第三方 AI 服务（OpenAI、Azure OpenAI、Ollama）和视频平台（YouTube、Bilibili）集成。您对这些服务的使用受其各自的服务条款和政策约束。',
        },
        {
          heading: 'AI 翻译结果免责',
          text: '本软件集成的翻译及语言分析功能由第三方 AI 服务（如 OpenAI）驱动。我们不保证翻译内容的准确性、完整性或合法性。因翻译错误、误导或不当言论导致的任何直接或间接损失（包括但不限于商业损失、学术错误），我们不承担任何法律责任。',
        },
        {
          heading: '免责声明',
          text: 'LinguaMaster 及其所有功能均按"现状"和"现有"基础提供。作为独立开发者项目，我们不就软件的稳定性、无误性或特定用途的适用性提供任何明示或暗示的保证。您需自行承担使用本软件带来的所有风险。',
        },
        {
          heading: '责任限制',
          text: '在法律允许的最大范围内，开发者及其关联方对用户因使用或无法使用本软件而产生的任何间接、偶然、特殊或惩罚性赔偿（包括利润损失、数据丢失）不承担责任。在任何情况下，我们的赔偿责任总额不得超过您在过去 12 个月内向本应用支付的总费用。',
        },
        {
          heading: '条款变更',
          text: '我们保留随时修改本服务条款的权利。在变更后继续使用本应用程序即表示接受新条款。',
        },
        {
          heading: '联系方式',
          text: '如果您对本服务条款有任何疑问，请通过 GitHub Issues 或电子邮件与我们联系。',
        },
      ],
    },
    ja: {
      title: '利用規約',
      lastUpdated: '最終更新：2026年2月',
      sections: [
        {
          heading: '規約への同意',
          text: 'LinguaMasterをダウンロード、インストール、または使用することにより、本利用規約に拘束されることに同意したものとみなされます。これらの規約に同意しない場合は、アプリケーションを使用しないでください。',
        },
        {
          heading: '個人開発者プロジェクト',
          text: 'LinguaMasterは個人開発者（「一人会社」）プロジェクトです。個人プロジェクトとして、24時間年中無休のカスタマーサポートや即座のバグ修正を提供できない場合があります。ご理解とご協力をお願いいたします。',
        },
        {
          heading: 'ライセンス',
          text: 'LinguaMasterのコアオープンソースコンポーネントはMITライセンスの下で提供される場合があります。ただし、特定の商用バージョン、プリビルドバイナリ、クラウド同期機能、およびプレミアム機能は、本エンドユーザーライセンス契約（EULA）の対象となり、明示的な許可なく再配布または転売することはできません。',
        },
        {
          heading: 'アプリケーションの使用',
          text: 'LinguaMasterは個人の語学学習用に設計されています。動画コンテンツに関する著作権法を含む、すべての適用法および規制に準拠してアプリケーションを使用する責任はお客様にあります。',
        },
        {
          heading: 'サブスクリプションとお支払い',
          text: 'プレミアム機能のお支払いは、サードパーティプロバイダー（Lemon Squeezyなど）を通じて処理されます。適用される現地法で義務付けられていない限り、サブスクリプション料金は返金されません。当社は、合理的な通知をもって価格を変更する権利を留保します。毎月提供される無料クレジットは個人使用のみを目的としており、譲渡または販売することはできません。',
        },
        {
          heading: 'データ所有権',
          text: 'お客様は、語彙リストや翻訳履歴を含む学習データに対するすべての権利を保持します。翻訳履歴はお客様のデバイスにローカルで保存されるため、バックアップを作成せずにアプリケーションをアンインストールした場合、データを復元することはできません。クラウド同期データ（語彙および動画メタデータ）はリクエストに応じてエクスポートできます。',
        },
        {
          heading: 'サードパーティサービス',
          text: 'LinguaMasterはサードパーティAIサービス（OpenAI、Azure OpenAI、Ollama）および動画プラットフォーム（YouTube、Bilibili）と統合されています。これらのサービスの使用は、それぞれの利用規約とポリシーに従います。',
        },
        {
          heading: 'AI出力に関する免責事項',
          text: '翻訳および言語分析機能は、サードパーティのAIサービス（OpenAIなど）によって提供されています。AI生成コンテンツの正確性、完全性、または合法性を保証するものではありません。翻訳エラー、誤解を招くコンテンツ、または不適切な表現に起因する直接的または間接的な損害（商業的損失、学術的エラーを含むがこれに限定されない）について、当社は責任を負いません。',
        },
        {
          heading: '保証の免責',
          text: 'LinguaMasterおよびそのすべての機能は「現状のまま」および「利用可能な状態」で提供されます。個人開発者プロジェクトとして、ソフトウェアの安定性、エラーのない動作、または特定目的への適合性について、明示または黙示を問わず、いかなる保証も行いません。本ソフトウェアの使用に伴うすべてのリスクはお客様が負うものとします。',
        },
        {
          heading: '責任の制限',
          text: '法律で認められる最大限の範囲において、開発者およびその関係者は、本ソフトウェアの使用または使用不能に起因する間接的、偶発的、特別、または懲罰的損害（利益の損失、データの損失を含む）について責任を負いません。いかなる場合も、当社の総責任額は、過去12ヶ月間にお客様が本アプリケーションに支払った総額を超えないものとします。',
        },
        {
          heading: '規約の変更',
          text: '当社は、本利用規約をいつでも変更する権利を留保します。変更後もアプリケーションを継続して使用することは、新しい規約への同意を意味します。',
        },
        {
          heading: 'お問い合わせ',
          text: '本利用規約についてご質問がある場合は、GitHub Issuesまたはメールでお問い合わせください。',
        },
      ],
    },
  };

  const data = content[lang] || content.en;

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <SEO
        title="Terms of Service"
        description="LinguaMaster terms of service. Understand your rights and responsibilities when using our language learning application."
        path="/terms"
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
