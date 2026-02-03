import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Play, Terminal, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './Button';
import { useLatestRelease } from '../hooks/useLatestRelease';

// Screenshot data
const screenshots = [
  { src: '/screenshots/word-lookup.png', key: 'wordLookup' },
  { src: '/screenshots/ai-explain.png', key: 'aiExplain' },
  { src: '/screenshots/ai-tutor.png', key: 'aiTutor' },
  { src: '/screenshots/vocabulary.png', key: 'vocabulary' },
];

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { version, downloadUrl } = useLatestRelease();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance slides (pause when video is playing)
  useEffect(() => {
    if (showVideo) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [showVideo]);

  // Handle escape key to close video
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showVideo) {
        setShowVideo(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showVideo]);

  // Pause video when modal closes
  useEffect(() => {
    if (!showVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showVideo]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);

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
            <Button
              variant="outline"
              size="lg"
              icon={Play}
              className="w-full sm:w-auto h-12"
              onClick={() => setShowVideo(true)}
            >
              {t('hero.watchDemo')}
            </Button>
          </div>

          <div className="mt-12 text-sm text-zinc-500 font-mono flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="flex items-center"><Terminal className="w-4 h-4 mr-2" /> {t('hero.comingSoon')}</span>
            <span className="hidden sm:inline">|</span>
            <span>{t('hero.freeForPersonal')}</span>
          </div>
        </div>

        {/* Screenshot Carousel */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-xl blur opacity-20"></div>
            <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
                {/* Screenshot Image */}
                <div className="relative aspect-video">
                  <img
                    src={screenshots[currentSlide].src}
                    alt={t(`hero.screenshots.${screenshots[currentSlide].key}`)}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 hover:bg-zinc-800 rounded-full border border-zinc-700 transition-colors"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 hover:bg-zinc-800 rounded-full border border-zinc-700 transition-colors"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 to-transparent p-6">
                    <p className="text-lg font-medium text-white text-center">
                      {t(`hero.screenshots.${screenshots[currentSlide].key}`)}
                    </p>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 py-4 bg-zinc-900/50">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentSlide
                          ? 'bg-brand-500'
                          : 'bg-zinc-600 hover:bg-zinc-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
            </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
              <video
                ref={videoRef}
                src="/demo.mp4"
                controls
                autoPlay
                className="w-full aspect-video bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Caption */}
            <p className="text-center text-zinc-400 mt-4 text-sm">
              {t('hero.watchDemo')} • Press ESC to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
