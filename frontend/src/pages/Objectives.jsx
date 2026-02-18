import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, BookOpen, Droplet, HandHeart, Heart } from 'lucide-react';

const Objectives = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const objectives = [
    {
      icon: <Users className="w-10 h-10" />,
      title: t('objectives.character'),
      description: t('objectives.characterDesc'),
      color: '#F4C430'
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: t('objectives.culture'),
      description: t('objectives.cultureDesc'),
      color: '#F4C430'
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: t('objectives.ganga'),
      description: t('objectives.gangaDesc'),
      color: '#F4C430'
    },
    {
      icon: <HandHeart className="w-10 h-10" />,
      title: t('objectives.social'),
      description: t('objectives.socialDesc'),
      color: '#F4C430'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: t('objectives.cow'),
      description: t('objectives.cowDesc'),
      color: '#F4C430'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('objectives.heading')}
          </h1>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-[#F4C430] hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] mb-6">
                  {objective.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {objective.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Objectives;
