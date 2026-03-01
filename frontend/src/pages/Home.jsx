import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Newspaper, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Font styling helper
  const getFontStyle = (delay = '') => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif',
    ...(delay && { animationDelay: delay })
  });

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn" style={getFontStyle()}>
            {t('hero.welcome')}
          </h1>
          <p className="text-xl md:text-2xl text-[#F4C430] mb-8 animate-fadeIn max-w-4xl mx-auto" style={getFontStyle('0.2s')}>
            {t('hero.mission')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-[#F4C430] text-[#111111] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] transform hover:scale-105 transition-all shadow-lg"
              style={getFontStyle()}
            >
              {t('hero.joinBtn')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-[#F4C430] py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#111111] px-4 py-2 rounded-full">
              <Newspaper className="text-[#F4C430] w-5 h-5" />
              <span className="text-white font-bold text-sm whitespace-nowrap" style={getFontStyle()}>
                {t('hero.newsLabel')}
              </span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[#111111] font-medium animate-scroll whitespace-nowrap" style={getFontStyle()}>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6" style={getFontStyle()}>
                {t('homeAbout.title')}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={getFontStyle()}>
                {t('homeAbout.description')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#F4C430] font-bold hover:gap-4 transition-all"
                style={getFontStyle()}
              >
                {t('hero.learnMoreBtn')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Initiatives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111]" style={getFontStyle()}>
              {t('initiatives.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#F4C430]">
              <h3 className="text-xl font-bold mb-4 text-[#111111]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('initiatives.cards.0.heading')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={getFontStyle()}>
                {t('initiatives.cards.0.text')}
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#F4C430]">
              <h3 className="text-xl font-bold mb-4 text-[#111111]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('initiatives.cards.1.heading')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={getFontStyle()}>
                {t('initiatives.cards.1.text')}
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#F4C430]">
              <h3 className="text-xl font-bold mb-4 text-[#111111]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('initiatives.cards.2.heading')}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={getFontStyle()}>
                {t('initiatives.cards.2.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Kept static/ternary as it's not in the main JSON structure) */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '45+', label: currentLanguage === 'hi' ? 'वर्षों की सेवा' : 'Years of Service' },
              { number: '1000+', label: currentLanguage === 'hi' ? 'सदस्य' : 'Members' },
              { number: '500+', label: currentLanguage === 'hi' ? 'कार्यक्रम' : 'Programs' }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-[#F4C430] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base" style={getFontStyle()}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director / Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Side: Square Image */}
              <div className="w-full md:w-2/5 md:flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW58ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Director"
                  className="w-full aspect-square object-cover"
                />
              </div>
              
              {/* Right Side: Details */}
              <div className="w-full md:w-3/5 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-[#111111] mb-2" style={getFontStyle()}>
                  {t('leadership.leaderName')}
                </h3>
                <p className="text-[#F4C430] font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('leadership.heading')}
                </p>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed" style={getFontStyle()}>
                  {t('leadership.philosophy')}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#111111] font-bold border-b-2 border-[#111111] pb-1 hover:text-[#F4C430] hover:border-[#F4C430] transition-all"
                  style={getFontStyle()}
                >
                  {t('hero.learnMoreBtn')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F4C430]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6" style={getFontStyle()}>
            {t('cta.heading')}
          </h2>
          <p className="text-[#111111] text-lg mb-8 max-w-2xl mx-auto" style={getFontStyle()}>
            {t('cta.subtext')}
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#222222] transform hover:scale-105 transition-all shadow-lg"
            style={getFontStyle()}
          >
            {t('cta.volunteerBtn')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
