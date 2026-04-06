import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Increased scroll threshold to 50 to prevent micro-jitters
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const currentLanguage = i18n.language || 'en';
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  const navLinks = [
    { path: '/about', label: t('nav.about') },
    { path: '/mahamana', label: t('nav.mahamana') },
    { path: '/objectives', label: t('nav.objectives') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#111111]/95 backdrop-blur-md shadow-2xl py-1.5 border-b border-white/5' 
            : 'bg-[#111111] py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between gap-1">
            
            {/* --- LEFT: Logo & Brand --- */}
            <Link to="/" className="flex items-center gap-2 group z-50 shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <div className={`shrink-0 bg-gradient-to-br from-[#F4C430] to-[#ffd700] rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-[#111111] group-hover:scale-105 transition-transform duration-300 ${scrolled ? 'w-9 h-9 md:w-11 md:h-11' : 'w-11 h-11 md:w-14 md:h-14'}`}>
                <img src="malviyamissionbiharlogo.png" alt="Logo" className="w-[85%] h-[85%] object-contain" />
              </div>
              
              <div className="hidden sm:block min-w-max">
                <h1 
                  className={`text-white font-extrabold tracking-tight transition-all duration-300 group-hover:text-[#F4C430] leading-none whitespace-nowrap ${scrolled ? 'text-sm md:text-lg' : 'text-base md:text-xl'}`} 
                  style={getFont()}
                >
                  {t('header.title')}
                </h1>
              </div>
            </Link>

            {/* --- CENTER: Desktop Navigation --- */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative whitespace-nowrap px-2.5 xl:px-3.5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
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
            <div className="flex items-center gap-1.5 md:gap-2 z-50 shrink-0">
              
              {/* Language Switcher */}
              <div className="flex items-center p-0.5 bg-black/40 border border-white/10 rounded-full shadow-inner">
                <button
                  onClick={() => changeLanguage('hi')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    currentLanguage === 'hi' ? 'bg-[#F4C430] text-[#111111] shadow-md' : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
                >
                  हिंदी
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    currentLanguage === 'en' ? 'bg-[#F4C430] text-[#111111] shadow-md' : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  ENG
                </button>
              </div>

              {/* Prominent "Join Us" Button (Desktop Only) */}
              <Link
                to="/donation"
                className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-[#F4C430] to-[#ffd700] text-[#111111] px-4 xl:px-5 py-2 rounded-full font-extrabold text-sm hover:shadow-[0_0_20px_rgba(244,196,48,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                style={getFont()}
              >
                {t('nav.donation')}
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                className="lg:hidden text-[#F4C430] p-1.5 hover:bg-white/10 rounded-full transition-colors shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE NAVIGATION OVERLAY --- */}
        <div 
          className={`lg:hidden fixed inset-0 top-[65px] md:top-[73px] bg-[#111111]/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out ${
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

      {/* --- INVISIBLE SPACER --- */}
      {/* Because the header is "fixed", it doesn't take up space in the document. 
        This invisible div forces the page content down by exactly the height of the default header (68px on mobile, 88px on desktop).
        This prevents overlapping on load AND prevents layout jumping when the fixed header shrinks on scroll!
      */}
      <div className="h-[68px] md:h-[88px] w-full shrink-0"></div>
    </>
  );
};

export default Header;
