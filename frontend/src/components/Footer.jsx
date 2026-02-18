import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] font-bold text-lg">
                <img src="malviyamissionbiharlogo.png"></img>
              </div>
              <div>
                <h3 className="text-[#F4C430] font-bold text-lg" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {t('header.title')}
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F4C430] font-bold text-lg mb-4" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {currentLanguage === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F4C430] transition-colors text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F4C430] transition-colors text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/objectives" className="text-gray-300 hover:text-[#F4C430] transition-colors text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {t('nav.objectives')}
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-[#F4C430] transition-colors text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {t('nav.join')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F4C430] font-bold text-lg mb-4" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {t('contact.heading')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-[#F4C430] w-4 h-4" />
                <span className="text-gray-300 text-sm">+91-9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#F4C430] w-4 h-4" />
                <span className="text-gray-300 text-sm">biharunit@malaviyamission.org</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#F4C430] hover:text-[#111111] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#F4C430] hover:text-[#111111] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center hover:bg-[#F4C430] hover:text-[#111111] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
