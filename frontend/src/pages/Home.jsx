import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Newspaper, UserCircle2, BookOpen, HeartHandshake, Globe2, QrCode } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 selection:bg-[#F4C430] selection:text-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1671512226295-67a722ce5b6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxCYW5hcmFzJTIwdW5pdmVyc2l0eXxlbnwwfHx8fDE3NzE0MTE0Mzd8MA&ixlib=rb-4.1.0&q=85"
            alt="Hero Background"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          {/* Refined gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/60 to-[#111111]/90 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-lg" style={getFontStyle('0.1s')}>
            {t('hero.welcome')}
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-lg" style={getFontStyle('0.1s')}>
            {t('hero.ready')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/join"
              className="group inline-flex items-center gap-3 bg-[#F4C430] text-[#111111] px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(244,196,48,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              style={getFontStyle()}
            >
              {t('hero.joinBtn')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-white border-b border-gray-200 py-3 overflow-hidden shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#111111] px-4 py-1.5 rounded-full shadow-md z-10 shrink-0">
              <Newspaper className="text-[#F4C430] w-4 h-4" />
              <span className="text-white font-bold text-xs uppercase tracking-wider" style={getFontStyle()}>
                {t('hero.newsLabel', 'Latest Updates')}
              </span>
            </div>
            <div className="flex-1 overflow-hidden mask-image-fade">
              <p className="text-gray-700 font-medium animate-marquee whitespace-nowrap text-sm" style={getFontStyle()}>
                {t('hero.newsText', 'Welcome to Mahamana Malviya Mission Bihar. Join us in our upcoming events and social initiatives.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#F4C430] rounded-2xl transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src="https://images.unsplash.com/photo-1761471678603-01c294fab482?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBlZHVjYXRpb24lMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                alt="About"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3] z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-[#F4C430] rounded-full"></div>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm" style={getFontStyle()}>Our Heritage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-6 leading-tight" style={getFontStyle()}>
                {t('homeAbout.title')}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={getFontStyle()}>
                {t('homeAbout.description')}
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[#111111] font-bold text-lg hover:text-[#F4C430] transition-colors"
                style={getFontStyle()}
              >
                <span className="border-b-2 border-[#111111] group-hover:border-[#F4C430] pb-1 transition-colors">
                  {t('hero.learnMoreBtn')}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Initiatives Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] mb-6" style={getFontStyle()}>
              {t('initiatives.title')}
            </h2>
            <div className="w-24 h-1 bg-[#F4C430] mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Added dynamic icons for the cards to make them look professional */}
            {[
              { icon: BookOpen, title: t('initiatives.cards.0.heading'), desc: t('initiatives.cards.0.text') },
              { icon: HeartHandshake, title: t('initiatives.cards.1.heading'), desc: t('initiatives.cards.1.text') },
              { icon: Globe2, title: t('initiatives.cards.2.heading'), desc: t('initiatives.cards.2.text') }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-[#F4C430]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F4C430] transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-[#F4C430] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#111111]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={getFontStyle()}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#F4C430 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-gray-800/50">
            {[
              { number: '5+', label: currentLanguage === 'hi' ? 'वर्षों की संगठन' : 'Years of Organization' },
              { number: '500+', label: currentLanguage === 'hi' ? 'सदस्य' : 'Members' },
              { number: '50+', label: currentLanguage === 'hi' ? 'कार्यक्रम' : 'Programs' },
              { number: '10000+', label: currentLanguage === 'hi' ? 'लाभार्थी' : 'Beneficiary' }
            ].map((stat, index) => (
              <div key={index} className="text-center group px-4">
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-yellow-200 mb-3 transform group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wider text-sm md:text-base group-hover:text-white transition-colors" style={getFontStyle()}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gray-50 rounded-[2.5rem] p-4 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-2/5 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F4C430] to-transparent rounded-[2rem] transform -translate-x-4 translate-y-4 -z-10"></div>
                <img
                  src="bipin.jpeg"
                  alt="Director"
                  className="w-full aspect-[4/5] object-cover rounded-[2rem] shadow-xl"
                />
              </div>
              <div className="w-full lg:w-3/5 p-4 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <UserCircle2 className="w-6 h-6 text-[#F4C430]" />
                  <span className="text-[#F4C430] font-bold text-sm uppercase tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('leadership.heading', 'Leadership')}
                  </span>
                </div>
                <h3 className="text-4xl font-extrabold text-[#111111] mb-6" style={getFontStyle()}>
                  {t('leadership.leaderName')}
                </h3>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed border-l-4 border-[#F4C430] pl-6 py-2" style={getFontStyle()}>
                  "{t('leadership.philosophy')}"
                </blockquote>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full font-bold hover:bg-[#F4C430] hover:text-[#111111] transition-colors shadow-md"
                  style={getFontStyle()}
                >
                  {t('hero.learnMoreBtn')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111111] to-gray-900 rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C430]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex flex-col md:flex-row items-center p-8 md:p-16 gap-12 relative z-10">
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={getFontStyle()}>
                  Support <span className="text-[#F4C430]">Mahamana Malviya Mission</span> Bihar
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed" style={getFontStyle()}>
                  {t('donation.description') || 'Your generous contributions help us sustain our programs and reach more people in need. Scan the QR code to make a secure donation.'}
                </p>
                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <QrCode className="w-6 h-6 text-[#F4C430]" />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-white text-lg tracking-wide">
                      7209329329m@pnb
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <img
                    src="qr.jpeg"
                    alt="Donation QR Code"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-[#111111] font-extrabold uppercase tracking-wide text-sm" style={getFontStyle()}>
                      {t('donation.scanToDonate') || 'Scan to Donate'}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">Accepts all UPI apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F4C430] relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white/20 rounded-full blur-sm"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-6" style={getFontStyle()}>
            {t('cta.heading')}
          </h2>
          <p className="text-[#111111]/80 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium" style={getFontStyle()}>
            {t('cta.subtext')}
          </p>
          <Link
            to="/join"
            className="group inline-flex items-center gap-3 bg-[#111111] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all shadow-xl"
            style={getFontStyle()}
          >
            {t('cta.volunteerBtn')}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
