import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Zap, Brain, BookOpen, Database, Key, Cpu, LucideIcon, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  headline: string;
  text: string;
  coreModuleLabel: string;
  learnMoreLabel: string;
  learnMoreLink: string;
  isReversed?: boolean;
  screenshot?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, headline, text, coreModuleLabel, learnMoreLabel, learnMoreLink, isReversed, screenshot }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full">
         <div className="glass-panel p-1 rounded-2xl border border-zinc-800 bg-zinc-900/30 relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-500">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 p-32 bg-brand-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-75"></div>

            {/* Visual Container */}
            <div className="aspect-[4/3] rounded-xl bg-zinc-950/50 border border-zinc-800/50 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                {screenshot ? (
                  <img
                    src={screenshot}
                    alt={headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    {/* Geeky Grid Background */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}></div>

                    {/* Central Icon Representation */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl group-hover:scale-105 transition-transform duration-500 relative">
                            <div className="absolute inset-0 bg-brand-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Icon className="w-16 h-16 text-zinc-200 relative z-10" />
                        </div>
                        {/* Fake UI Elements for "Geeky" vibe */}
                        <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span>SYSTEM_READY</span>
                        </div>
                    </div>
                  </>
                )}
            </div>
         </div>
      </div>
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start space-x-3">
          <div className="p-2.5 bg-brand-500/10 rounded-lg border border-brand-500/20">
             <Icon className="w-5 h-5 text-brand-400" />
          </div>
          <span className="text-brand-400 font-mono text-sm tracking-wider uppercase font-semibold">{coreModuleLabel}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
          {headline}
        </h3>
        <p className="text-lg text-zinc-400 leading-relaxed font-light">
          {text}
        </p>
        <Link to={learnMoreLink} className="hidden md:inline-flex items-center text-sm font-medium text-white hover:text-brand-400 transition-colors group">
            {learnMoreLabel} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        {/* Feature 1: Flow State */}
        <FeatureItem
          icon={Zap}
          headline={t('features.feature1.headline')}
          text={t('features.feature1.text')}
          coreModuleLabel={t('features.coreModule')}
          learnMoreLabel={t('features.learnMore')}
          learnMoreLink="/docs#bilingual"
          screenshot="/screenshots/word-lookup.png"
        />

        {/* Feature 2: AI Tutor */}
        <FeatureItem
          icon={Brain}
          headline={t('features.feature2.headline')}
          text={t('features.feature2.text')}
          coreModuleLabel={t('features.coreModule')}
          learnMoreLabel={t('features.learnMore')}
          learnMoreLink="/docs#ai-tutor"
          isReversed
          screenshot="/screenshots/ai-tutor.png"
        />

        {/* Feature 3: Notebook */}
        <FeatureItem
          icon={BookOpen}
          headline={t('features.feature3.headline')}
          text={t('features.feature3.text')}
          coreModuleLabel={t('features.coreModule')}
          learnMoreLabel={t('features.learnMore')}
          learnMoreLink="/docs#vocabulary"
          screenshot="/screenshots/vocabulary.png"
        />

        {/* Tech Specs Bento Grid */}
        <div id="tech-specs" className="pt-16 border-t border-zinc-800/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{t('features.techSpecs.title')}</h2>
                <p className="text-zinc-500 font-mono text-sm">{t('features.techSpecs.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Spec 1 */}
                <div className="glass-panel p-6 rounded-xl border border-zinc-800 hover:border-brand-500/30 transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                        <Database className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 font-mono">{t('features.techSpecs.localFirst.title')}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {t('features.techSpecs.localFirst.text')}
                    </p>
                </div>

                {/* Spec 2 */}
                <div className="glass-panel p-6 rounded-xl border border-zinc-800 hover:border-brand-500/30 transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 border border-brand-500/20 group-hover:border-brand-500/50 transition-colors">
                        <Key className="w-6 h-6 text-brand-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 font-mono">{t('features.techSpecs.byoKey.title')}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {t('features.techSpecs.byoKey.text')}
                    </p>
                </div>

                {/* Spec 3 */}
                <div className="glass-panel p-6 rounded-xl border border-zinc-800 hover:border-brand-500/30 transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 border border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors">
                        <Cpu className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 font-mono">{t('features.techSpecs.electronNative.title')}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {t('features.techSpecs.electronNative.text')}
                    </p>
                </div>
            </div>
        </div>

        {/* Credit System Breakdown */}
        <div id="credits" className="pt-24 border-t border-zinc-800/50">
           <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">{t('features.credits.title')}</span>
                    <br />
                    {t('features.credits.subtitle')}
                </h2>
                <p className="text-zinc-400 text-lg">
                    {t('features.credits.description')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Scenario 1: Media Processing */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 relative overflow-hidden group hover:border-brand-500/20 transition-all">
                     <div className="absolute top-0 right-0 p-20 bg-indigo-500/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400"><FileText className="w-5 h-5"/></div>
                            <h4 className="font-bold text-zinc-100">{t('features.credits.videoProcessing.title')}</h4>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.videoProcessing.transcription')}</span>
                                <span className="text-white font-mono font-medium">50 mins</span>
                            </li>
                            <div className="h-px bg-zinc-800/50 w-full"></div>
                            <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.videoProcessing.transcribeTranslate')}</span>
                                <span className="text-white font-mono font-medium">25 mins</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-3 bg-zinc-950/50 rounded border border-zinc-800/50 text-xs text-zinc-500 text-center font-mono">
                             10 credits / min
                        </div>
                     </div>
                </div>

                {/* Scenario 2: Deep Learning */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 relative overflow-hidden group hover:border-brand-500/20 transition-all">
                     <div className="absolute top-0 right-0 p-20 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                             <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400"><Brain className="w-5 h-5"/></div>
                            <h4 className="font-bold text-zinc-100">{t('features.credits.deepLearning.title')}</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.deepLearning.translation')}</span>
                                <span className="text-white font-mono font-medium">2,500 segs</span>
                            </li>
                             <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.deepLearning.lookups')}</span>
                                <span className="text-white font-mono font-medium">500 words</span>
                            </li>
                             <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.deepLearning.explanations')}</span>
                                <span className="text-white font-mono font-medium">166 times</span>
                            </li>
                             <li className="flex justify-between items-center text-sm">
                                <span className="text-zinc-400">{t('features.credits.deepLearning.tutorChat')}</span>
                                <span className="text-white font-mono font-medium">100 turns</span>
                            </li>
                        </ul>
                     </div>
                </div>

                 {/* Scenario 3: Mixed Use (Recommended) */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-zinc-900/50 border border-brand-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-500/5"></div>
                    <div className="absolute top-0 right-0 p-20 bg-brand-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-brand-500/10 rounded-lg border border-brand-500/20 text-brand-400"><Sparkles className="w-5 h-5"/></div>
                            <h4 className="font-bold text-zinc-100">{t('features.credits.typicalSession.title')} <span className="text-[10px] uppercase font-bold text-brand-300 ml-2 bg-brand-500/20 px-2 py-0.5 rounded-full tracking-wider">{t('features.credits.typicalSession.recommended')}</span></h4>
                        </div>

                        <div className="space-y-3 mb-4">
                            <div className="text-xs font-mono text-brand-200/70 mb-2 uppercase tracking-wider flex items-center"><Zap className="w-3 h-3 mr-1"/> {t('features.credits.typicalSession.workoutLabel')}</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="p-2 bg-zinc-950/40 rounded border border-zinc-800/50 text-zinc-400">{t('features.credits.typicalSession.transcribe')} <span className="block text-white font-mono">10m</span></div>
                                <div className="p-2 bg-zinc-950/40 rounded border border-zinc-800/50 text-zinc-400">{t('features.credits.typicalSession.translate')} <span className="block text-white font-mono">~80 segs</span></div>
                                <div className="p-2 bg-zinc-950/40 rounded border border-zinc-800/50 text-zinc-400">{t('features.credits.typicalSession.lookups')} <span className="block text-white font-mono">20 words</span></div>
                                <div className="p-2 bg-zinc-950/40 rounded border border-zinc-800/50 text-zinc-400">{t('features.credits.typicalSession.aiChat')} <span className="block text-white font-mono">10 turns</span></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-brand-500/10 rounded-lg border border-brand-500/20">
                            <span className="text-brand-200 text-sm font-medium">{t('features.credits.typicalSession.totalCost')}</span>
                            <span className="text-white font-bold font-mono">~176 Credits</span>
                        </div>
                        <p className="mt-4 text-xs text-zinc-400 text-center leading-relaxed">
                            <span className="text-brand-400 font-semibold">{t('features.credits.typicalSession.result')}</span> {t('features.credits.typicalSession.resultText')}
                        </p>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};
