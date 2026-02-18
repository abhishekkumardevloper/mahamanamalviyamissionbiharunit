import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1671512226295-67a722ce5b6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxCYW5hcmFzJTIwdW5pdmVyc2l0eXxlbnwwfHx8fDE3NzE0MTE0Mzd8MA&ixlib=rb-4.1.0&q=85"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 to-[#111111]/60"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn"
            style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('hero.welcome')}
          </h1>
          <p
            className="text-xl md:text-2xl text-[#F4C430] mb-8 animate-fadeIn"
            style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif', animationDelay: '0.2s' }}
          >
            {t('hero.mission')}
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-[#F4C430] text-[#111111] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] transform hover:scale-105 transition-all shadow-lg"
            style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('hero.joinBtn')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-[#F4C430] py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#111111] px-4 py-2 rounded-full">
              <Newspaper className="text-[#F4C430] w-5 h-5" />
              <span className="text-white font-bold text-sm whitespace-nowrap" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('hero.newsLabel')}
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[#111111] font-medium animate-scroll" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('hero.newsText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1761471678603-01c294fab482?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBlZHVjYXRpb24lMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                alt="About"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('about.heading')}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('about.content1')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#F4C430] font-bold hover:gap-4 transition-all"
                style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
              >
                {currentLanguage === 'hi' ? 'और पढ़ें' : 'Read More'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '45+', label: currentLanguage === 'hi' ? 'वर्षों की सेवा' : 'Years of Service' },
              { number: '1000+', label: currentLanguage === 'hi' ? 'सदस्य' : 'Members' },
              { number: '500+', label: currentLanguage === 'hi' ? 'कार्यक्रम' : 'Programs' },
              { number: '50+', label: currentLanguage === 'hi' ? 'पुरस्कार' : 'Awards' }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-[#F4C430] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4C430]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('join.heading')}
          </h2>
          <p className="text-[#111111] text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('join.content')}
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#222222] transform hover:scale-105 transition-all shadow-lg"
            style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('hero.joinBtn')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
