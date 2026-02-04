import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Twitter, Mail } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { downloadUrl } = useLatestRelease();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-bold text-xl tracking-tight text-white block mb-4">
              Lingua<span className="text-brand-400">Master</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href={downloadUrl} className="hover:text-brand-400 transition-colors">{t('footer.download')}</a></li>
              <li><Link to="/changelog" className="hover:text-brand-400 transition-colors">{t('footer.changelog')}</Link></li>
              <li><Link to="/docs" className="hover:text-brand-400 transition-colors">{t('footer.documentation')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-brand-400 transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors" title="Twitter (Coming Soon)"><Twitter className="w-5 h-5" /></a>
            <a href="mailto:feedback@linguamaster.top" className="text-zinc-500 hover:text-white transition-colors" title="feedback@linguamaster.top"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
