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

  const currentLanguage = i18n.language || 'en';

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
      <div className="container mx-auto px-4 py-3 md:py-4">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            {/* Logo - Always visible */}
            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 bg-[#F4C430] rounded-full flex items-center justify-center overflow-hidden">
              <img src="malviyamissionbiharlogo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            
            {/* Title & Tagline - HIDDEN on mobile (hidden), VISIBLE on desktop (md:block) */}
            <div className="hidden md:block">
              <h1 
                className="text-white font-bold text-xl" 
                style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('header.title')}
              </h1>
              <p 
                className="text-[#F4C430] text-sm" 
                style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('header.tagline')}
              </p>
            </div>
          </div>

          {/* Right: Language Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Language Switcher - Compact on mobile, normal on desktop */}
            <div className="flex items-center gap-1 md:gap-2 bg-[#222222] rounded-full px-2 md:px-4 py-1.5 md:py-2">
              <Globe className="text-[#F4C430] w-3 h-3 md:w-4 md:h-4 hidden sm:block" />
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all ${
                  currentLanguage === 'hi' ? 'bg-[#F4C430] text-[#111111]' : 'text-white hover:text-[#F4C430]'
                }`}
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                हिन्दी
              </button>
              <span className="text-gray-500 text-xs md:text-sm">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all ${
                  currentLanguage === 'en' ? 'bg-[#F4C430] text-[#111111]' : 'text-white hover:text-[#F4C430]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                English
              </button>
            </div>

            {/* Hamburger Menu Icon */}
            <button
              className="md:hidden text-white p-1 hover:bg-[#222222] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Dropdown (Mobile) & Inline (Desktop) */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-4`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 md:py-2 rounded-md text-sm font-medium transition-all ${
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
