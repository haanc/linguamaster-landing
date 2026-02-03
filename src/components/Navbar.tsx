import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { downloadUrl } = useLatestRelease();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashLink = (hash: string) => {
    if (isHomePage) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/icon.png" alt="LinguaMaster" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-lg tracking-tight">Lingua<span className="text-brand-400">Master</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" onClick={() => handleHashLink('#features')} className="text-sm text-zinc-400 hover:text-white transition-colors">{t('nav.features')}</a>
                <a href="#tech-specs" onClick={() => handleHashLink('#tech-specs')} className="text-sm text-zinc-400 hover:text-white transition-colors">{t('nav.techSpecs')}</a>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('nav.features')}</Link>
                <Link to="/#tech-specs" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('nav.techSpecs')}</Link>
              </>
            )}
            <Link to="/docs" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('nav.docs')}</Link>
            <div className="flex items-center space-x-3 pl-4 border-l border-zinc-800">
              <LanguageSwitcher />
              <a href={downloadUrl}>
                <Button size="sm">{t('nav.download')}</Button>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-400 hover:text-white p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-4 space-y-4 shadow-xl">
           {isHomePage ? (
             <>
               <a href="#features" className="block text-zinc-400 hover:text-white" onClick={() => handleHashLink('#features')}>{t('nav.features')}</a>
               <a href="#tech-specs" className="block text-zinc-400 hover:text-white" onClick={() => handleHashLink('#tech-specs')}>{t('nav.techSpecs')}</a>
             </>
           ) : (
             <>
               <Link to="/#features" className="block text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t('nav.features')}</Link>
               <Link to="/#tech-specs" className="block text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t('nav.techSpecs')}</Link>
             </>
           )}
           <Link to="/docs" className="block text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>{t('nav.docs')}</Link>
           <div className="py-2">
             <LanguageSwitcher />
           </div>
           <div className="pt-4 border-t border-zinc-800 space-y-3">
              <a href={downloadUrl} className="block">
                <Button fullWidth>{t('nav.download')}</Button>
              </a>
           </div>
        </div>
      )}
    </nav>
  );
};
