import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Play, Terminal, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { version, downloadUrl } = useLatestRelease();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {version ? `v${version} Stable` : t('hero.badge')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            {t('hero.title1')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-500">{t('hero.title2')}</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Prominent Offer Badge - Purple Style */}
          <div className="mb-10">
             <div className="inline-flex items-center space-x-3 bg-brand-500/10 border border-brand-500/20 rounded-full px-6 py-2.5 shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:bg-brand-500/15 hover:border-brand-500/30 transition-all cursor-default">
                <Sparkles className="w-5 h-5 text-brand-400 animate-pulse" />
                <span className="text-base text-brand-100">
                    <span className="font-bold text-white text-lg">{t('hero.freeCredits')}</span> {t('hero.onSignUp')}
                </span>
                <span className="text-brand-500/30 text-lg font-light">|</span>
                <span className="text-sm text-brand-300 font-medium tracking-wide">{t('hero.noConfig')}</span>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <a href={downloadUrl}>
              <Button size="lg" icon={Download} className="w-full sm:w-auto h-12">
                {t('hero.downloadWindows')}
              </Button>
            </a>
            <Button variant="outline" size="lg" icon={Play} className="w-full sm:w-auto h-12">
              {t('hero.watchDemo')}
            </Button>
          </div>

          <div className="mt-12 text-sm text-zinc-500 font-mono flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="flex items-center"><Terminal className="w-4 h-4 mr-2" /> {t('hero.comingSoon')}</span>
            <span className="hidden sm:inline">|</span>
            <span>{t('hero.freeForPersonal')}</span>
          </div>
        </div>

        {/* Abstract "Studio" visual representation */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-xl blur opacity-20"></div>
            <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden aspect-video group">
                {/* Fake UI Header */}
                <div className="h-10 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    <div className="ml-4 h-5 w-64 bg-zinc-800/50 rounded text-[10px] flex items-center px-2 text-zinc-500 font-mono">
                        linguamaster://studio/session-01
                    </div>
                </div>
                {/* Fake UI Body Split */}
                <div className="flex h-full">
                    {/* Left: Video Placeholder */}
                    <div className="w-2/3 border-r border-zinc-800 bg-black flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex items-end p-8">
                             <div className="bg-zinc-900/90 px-4 py-2 rounded-lg border border-zinc-700 backdrop-blur-md">
                                <p className="text-xl font-medium text-white">{t('hero.exampleSubtitle')}</p>
                                <p className="text-sm text-zinc-400 mt-1">{t('hero.exampleTranslation')} <span className="text-brand-400 text-xs ml-2">{t('hero.exampleAuthor')}</span></p>
                             </div>
                        </div>
                        <Play className="w-16 h-16 text-white/20" />
                    </div>
                    {/* Right: AI Panel */}
                    <div className="w-1/3 bg-zinc-900/20 p-6 space-y-6 font-mono text-sm">
                         <div className="space-y-2">
                            <div className="text-xs text-brand-400 uppercase tracking-wider font-bold">{t('hero.aiAnalysis')}</div>
                            <div className="p-3 bg-zinc-800/50 rounded border border-zinc-700/50 text-zinc-300">
                                <p><span className="text-indigo-400">{t('hero.grammar')}</span> {t('hero.grammarText')}</p>
                            </div>
                            <div className="p-3 bg-zinc-800/50 rounded border border-zinc-700/50 text-zinc-300">
                                <p><span className="text-indigo-400">{t('hero.nuance')}</span> {t('hero.nuanceText')}</p>
                            </div>
                         </div>
                         <div className="space-y-2">
                             <div className="text-xs text-brand-400 uppercase tracking-wider font-bold">{t('hero.vocabulary')}</div>
                             <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-xs text-zinc-400">créativité (n.f)</span>
                                <span className="px-2 py-1 bg-zinc-800 rounded border border-zinc-700 text-xs text-zinc-400">courage (n.m)</span>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
