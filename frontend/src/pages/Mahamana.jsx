import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Flag, Landmark } from 'lucide-react';

const Mahamana = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: t('mahamana.educationist'),
      description: t('mahamana.educationistDesc')
    },
    {
      icon: <Flag className="w-12 h-12" />,
      title: t('mahamana.freedom'),
      description: t('mahamana.freedomDesc')
    },
    {
      icon: <Landmark className="w-12 h-12" />,
      title: t('mahamana.cultural'),
      description: t('mahamana.culturalDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-12 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('mahamana.heading')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1763262979261-e4ea292a5f8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBlZHVjYXRpb24lMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                alt="About Us"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('about.content1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('about.content2')}
              </p>
            </div>
          </div>

          <div className="bg-[#F4C430] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-[#111111] mb-4" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {t('about.missionTitle')}
            </h2>
            <p className="text-[#111111] text-xl font-medium max-w-3xl mx-auto" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#F4C430] rounded-lg p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="text-[#F4C430] flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#111111] rounded-lg p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-[#F4C430] mb-6">"</div>
              <p className="text-white text-2xl md:text-3xl font-medium italic mb-6" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {t('mahamana.quote')}
              </p>
              <p className="text-[#F4C430] text-lg font-bold" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                - {currentLanguage === 'hi' ? 'पं. मदन मोहन मालवीय जी' : 'Pt. Madan Mohan Malaviya Ji'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mahamana;
