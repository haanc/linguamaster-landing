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
          heading: 'License',
          text: 'LinguaMaster is provided under the MIT License. You are free to use, modify, and distribute the software in accordance with the license terms.',
        },
        {
          heading: 'Use of the Application',
          text: 'LinguaMaster is designed for personal language learning. You are responsible for ensuring that your use of the application complies with all applicable laws and regulations, including copyright laws regarding video content.',
        },
        {
          heading: 'Third-Party Services',
          text: 'LinguaMaster integrates with third-party AI services (OpenAI, Azure OpenAI, Ollama) and video platforms (YouTube, Bilibili). Your use of these services is subject to their respective terms of service and policies.',
        },
        {
          heading: 'Disclaimer of Warranties',
          text: 'LinguaMaster is provided "as is" without warranty of any kind, express or implied. We do not guarantee that the application will be error-free or uninterrupted.',
        },
        {
          heading: 'Limitation of Liability',
          text: 'In no event shall the developers of LinguaMaster be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the application.',
        },
        {
          heading: 'Changes to Terms',
          text: 'We reserve the right to modify these Terms of Service at any time. Continued use of the application after changes constitutes acceptance of the new terms.',
        },
        {
          heading: 'Contact',
          text: 'If you have any questions about these Terms of Service, please contact us at [contact email placeholder].',
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
          heading: '许可证',
          text: 'LinguaMaster 根据 MIT 许可证提供。您可以根据许可证条款自由使用、修改和分发该软件。',
        },
        {
          heading: '应用程序使用',
          text: 'LinguaMaster 专为个人语言学习设计。您有责任确保您对应用程序的使用符合所有适用的法律法规，包括有关视频内容的版权法。',
        },
        {
          heading: '第三方服务',
          text: 'LinguaMaster 与第三方 AI 服务（OpenAI、Azure OpenAI、Ollama）和视频平台（YouTube、Bilibili）集成。您对这些服务的使用受其各自的服务条款和政策约束。',
        },
        {
          heading: '免责声明',
          text: 'LinguaMaster 按"原样"提供，不提供任何明示或暗示的保证。我们不保证应用程序不会出错或不会中断。',
        },
        {
          heading: '责任限制',
          text: '在任何情况下，LinguaMaster 的开发者均不对因您使用本应用程序而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任。',
        },
        {
          heading: '条款变更',
          text: '我们保留随时修改本服务条款的权利。在变更后继续使用本应用程序即表示接受新条款。',
        },
        {
          heading: '联系方式',
          text: '如果您对本服务条款有任何疑问，请通过 [联系邮箱占位符] 与我们联系。',
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
          heading: 'ライセンス',
          text: 'LinguaMasterはMITライセンスの下で提供されます。ライセンス条項に従って、ソフトウェアを自由に使用、変更、配布できます。',
        },
        {
          heading: 'アプリケーションの使用',
          text: 'LinguaMasterは個人の語学学習用に設計されています。動画コンテンツに関する著作権法を含む、すべての適用法および規制に準拠してアプリケーションを使用する責任はお客様にあります。',
        },
        {
          heading: 'サードパーティサービス',
          text: 'LinguaMasterはサードパーティAIサービス（OpenAI、Azure OpenAI、Ollama）および動画プラットフォーム（YouTube、Bilibili）と統合されています。これらのサービスの使用は、それぞれの利用規約とポリシーに従います。',
        },
        {
          heading: '保証の免責',
          text: 'LinguaMasterは、明示または黙示を問わず、いかなる保証もなく「現状のまま」提供されます。アプリケーションがエラーなく、または中断なく動作することを保証するものではありません。',
        },
        {
          heading: '責任の制限',
          text: 'いかなる場合も、LinguaMasterの開発者は、アプリケーションの使用に起因する間接的、付随的、特別、結果的、または懲罰的損害について責任を負いません。',
        },
        {
          heading: '規約の変更',
          text: '当社は、本利用規約をいつでも変更する権利を留保します。変更後もアプリケーションを継続して使用することは、新しい規約への同意を意味します。',
        },
        {
          heading: 'お問い合わせ',
          text: '本利用規約についてご質問がある場合は、[連絡先メールプレースホルダー]までお問い合わせください。',
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
