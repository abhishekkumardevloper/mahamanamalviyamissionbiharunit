import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Join = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    address: '',
    phone: '',
    email: '',
    occupation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.fatherName || !formData.address || !formData.phone) {
      toast.error(t('join.errorMsg'));
      return;
    }

    // Simulate form submission
    toast.success(t('join.successMsg'));
    setFormData({
      name: '',
      fatherName: '',
      address: '',
      phone: '',
      email: '',
      occupation: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('join.heading')}
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('join.content')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border-2 border-[#F4C430] rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.fatherName')} *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.address')} *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.phone')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#111111] font-medium mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.occupation')}
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#F4C430] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F4C430] text-[#111111] py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700] transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('join.submitBtn')}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Donation Details */}
            <div className="bg-[#111111] rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold text-[#F4C430] mb-6" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('join.donationTitle')}
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.accountName')}
                  </p>
                  <p className="text-white font-medium" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {currentLanguage === 'hi' ? 'महामना मालवीय मिशन बिहार इकाई' : 'Mahamana Malaviya Mission Bihar Unit'}
                  </p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.accountNo')}
                  </p>
                  <p className="text-white font-medium">XXXXXXXXXXXX</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.ifsc')}
                  </p>
                  <p className="text-white font-medium">XXXXXX</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {t('join.bank')}
                  </p>
                  <p className="text-white font-medium" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {currentLanguage === 'hi' ? 'भारतीय स्टेट बैंक' : 'State Bank of India'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-[#F4C430]/10 border-2 border-[#F4C430] rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#F4C430] w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-white text-sm leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {currentLanguage === 'hi' 
                      ? 'आपका हर योगदान समाज के उत्थान और शिक्षा के प्रसार में सहायक होगा।'
                      : 'Your every contribution will help in the upliftment of society and spread of education.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
