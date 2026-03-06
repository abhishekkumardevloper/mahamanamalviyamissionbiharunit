import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a premium shrink effect when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safely lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLanguage = i18n.language || 'en';
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/mahamana', label: t('nav.mahamana') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#111111]/95 backdrop-blur-md shadow-2xl py-2 border-b border-white/5' 
          : 'bg-[#111111] py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-4">
          
          {/* --- LEFT: Logo & Brand --- */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group z-50" onClick={() => setMobileMenuOpen(false)}>
            <div className={`shrink-0 bg-gradient-to-br from-[#F4C430] to-[#ffd700] rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-[#111111] group-hover:scale-105 transition-transform duration-300 ${scrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-12 h-12 md:w-16 md:h-16'}`}>
              <img src="malviyamissionbiharlogo.png" alt="Logo" className="w-[85%] h-[85%] object-contain" />
            </div>
            
            {/* Removed line-clamp to ensure all 3 words are ALWAYS visible */}
            <div className="hidden sm:flex flex-col justify-center min-w-max lg:min-w-0">
              <h1 
                className={`text-white font-extrabold tracking-tight transition-all duration-300 group-hover:text-[#F4C430] leading-tight ${scrolled ? 'text-sm md:text-lg lg:text-xl' : 'text-base md:text-xl lg:text-2xl'}`} 
                style={getFont()}
              >
                {t('header.title')}
              </h1>
              <p 
                className={`text-[#F4C430] font-medium tracking-wide transition-all duration-300 mt-0.5 leading-snug ${scrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'}`} 
                style={getFont()}
              >
                {t('header.tagline')}
              </p>
            </div>
          </Link>

          {/* --- CENTER: Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative whitespace-nowrap px-3 xl:px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-[#111111] bg-[#F4C430] shadow-[0_0_15px_rgba(244,196,48,0.3)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={getFont()}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* --- RIGHT: Actions (Language, Join CTA, Mobile Toggle) --- */}
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 z-50 shrink-0">
            
            {/* Language Switcher */}
            <div className="flex items-center p-1 bg-black/40 border border-white/10 rounded-full shadow-inner">
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  currentLanguage === 'hi' ? 'bg-[#F4C430] text-[#111111] shadow-md' : 'text-gray-400 hover:text-white'
                }`}
                style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
              >
                हिंदी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  currentLanguage === 'en' ? 'bg-[#F4C430] text-[#111111] shadow-md' : 'text-gray-400 hover:text-white'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                ENG
              </button>
            </div>

            {/* Prominent "Join Us" Button (Desktop Only) */}
            <Link
              to="/join"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#F4C430] to-[#ffd700] text-[#111111] px-5 xl:px-6 py-2.5 rounded-full font-extrabold text-sm hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              style={getFont()}
            >
              {t('nav.join')}
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden text-[#F4C430] p-2 hover:bg-white/10 rounded-full transition-colors shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION OVERLAY --- */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-[#111111]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 pb-24 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-4 rounded-xl font-bold text-lg transition-all ${
                    isActive
                      ? 'bg-[#F4C430] text-[#111111]'
                      : 'text-white border border-white/5 hover:bg-white/10'
                  }`}
                  style={getFont()}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {isActive && <ChevronRight className="w-5 h-5" />}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile "Join Us" CTA */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              to="/join"
              className="flex items-center justify-center gap-2 w-full bg-[#F4C430] text-[#111111] p-4 rounded-xl font-extrabold text-lg"
              style={getFont()}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.join')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
