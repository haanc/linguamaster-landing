import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Tag, FileText } from 'lucide-react';

interface Release {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}

const GITHUB_API_URL = 'https://api.github.com/repos/haanc/LinguaMaster-Dist/releases';

export const ChangelogPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [releases, setReleases] = useState<Release[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) throw new Error('Failed to fetch releases');
        const data = await response.json();
        setReleases(data);
      } catch {
        setError('Failed to load changelog');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'zh' ? 'zh-CN' : i18n.language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const titles: Record<string, string> = {
    en: 'Changelog',
    zh: '更新日志',
    ja: '変更履歴',
  };

  const subtitles: Record<string, string> = {
    en: 'Track all updates and improvements to LinguaMaster',
    zh: '追踪 LinguaMaster 的所有更新和改进',
    ja: 'LinguaMaster のすべての更新と改善を追跡',
  };

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {titles[i18n.language] || titles.en}
          </h1>
          <p className="text-lg text-zinc-400">
            {subtitles[i18n.language] || subtitles.en}
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-zinc-500">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div
                key={release.id}
                className="glass-panel p-6 rounded-xl border border-zinc-800 hover:border-brand-500/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-mono">
                    <Tag className="w-3 h-3 mr-2" />
                    {release.tag_name}
                  </span>
                  <span className="inline-flex items-center text-sm text-zinc-500">
                    <Calendar className="w-3 h-3 mr-2" />
                    {formatDate(release.published_at)}
                  </span>
                  {index === 0 && (
                    <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                      Latest
                    </span>
                  )}
                </div>

                {release.name && release.name !== release.tag_name && (
                  <h3 className="text-xl font-bold text-white mb-3">{release.name}</h3>
                )}

                <div className="prose prose-invert prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-zinc-400 font-sans leading-relaxed">
                    {release.body || 'No release notes available.'}
                  </pre>
                </div>
              </div>
            ))}

            {releases.length === 0 && (
              <div className="text-center py-20 text-zinc-500">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No releases found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
