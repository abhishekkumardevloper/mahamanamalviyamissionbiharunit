import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLanguage = i18n.language;

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/mahamana', label: t('nav.mahamana') },
    { path: '/objectives', label: t('nav.objectives') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/join', label: t('nav.join') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#111111] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] font-bold text-xl">
            </div>
            <div>
              <h1 className="text-white font-bold text-lg md:text-xl" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('header.title')}
              </h1>
              <p className="text-[#F4C430] text-xs md:text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('header.tagline')}
              </p>
            </div>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-[#222222] rounded-full px-4 py-2">
            <Globe className="text-[#F4C430] w-4 h-4" />
            <button
              onClick={() => changeLanguage('hi')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                currentLanguage === 'hi' ? 'bg-[#F4C430] text-[#111111]' : 'text-white hover:text-[#F4C430]'
              }`}
              style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
              हिन्दी
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                currentLanguage === 'en' ? 'bg-[#F4C430] text-[#111111]' : 'text-white hover:text-[#F4C430]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              English
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#F4C430] text-[#111111]'
                      : 'text-white hover:bg-[#222222] hover:text-[#F4C430]'
                  }`}
                  style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
