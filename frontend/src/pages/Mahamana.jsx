import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  GraduationCap, 
  Flag, 
  Landmark, 
  BookOpen, 
  Trophy, 
  Heart, 
  Users, 
  School 
} from 'lucide-react';

const Mahamana = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Font helper
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  // Data for Objectives (mapped to icons)
  const objectivesList = [
    { key: 'education', icon: <BookOpen className="w-6 h-6" /> },
    { key: 'sports', icon: <Trophy className="w-6 h-6" /> },
    { key: 'social', icon: <Heart className="w-6 h-6" /> },
    { key: 'culture', icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT SIDE: Image (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4C430]">
                  {/* Replace src with your actual image path */}
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Mahamana Pt. Madan Mohan Malaviya Ji" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                     <p className="text-[#F4C430] font-bold text-center text-lg">
                        1861 - 1946
                     </p>
                  </div>
                </div>

                {/* Quote Box below image */}
                <div className="mt-8 bg-[#111111] p-6 rounded-xl border-l-4 border-[#F4C430] shadow-lg">
                  <p className="text-white italic text-lg leading-relaxed" style={getFont()}>
                    "{t('mahamana.quote')}"
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* 1. Header & Name */}
              <div className="border-b-2 border-gray-100 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4" style={getFont()}>
                  {t('mahamana.heading')}
                </h1>
                <div className="flex flex-wrap gap-4 mt-4">
                   {/* Pills for key attributes */}
                   <span className="bg-[#F4C430]/10 text-[#B8860B] px-4 py-1 rounded-full text-sm font-semibold border border-[#F4C430]/30">
                     {t('mahamana.educationist')}
                   </span>
                   <span className="bg-[#F4C430]/10 text-[#B8860B] px-4 py-1 rounded-full text-sm font-semibold border border-[#F4C430]/30">
                     {t('mahamana.freedom')}
                   </span>
                   <span className="bg-[#F4C430]/10 text-[#B8860B] px-4 py-1 rounded-full text-sm font-semibold border border-[#F4C430]/30">
                     {t('mahamana.cultural')}
                   </span>
                </div>
              </div>

              {/* 2. About Organization (Bihar Unit) */}
              <div style={getFont()}>
                <h2 className="text-2xl font-bold mb-4 text-[#B8860B]">
                  {t('about.heading')}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {t('about.content1')}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('about.content2')}
                </p>
              </div>

              {/* 3. Core Philosophy Card */}
              <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-yellow-100">
                  <Landmark className="w-32 h-32 opacity-50" />
                </div>
                <div className="relative z-10" style={getFont()}>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {t('philosophy.title')}
                  </h3>
                  <p className="text-gray-800 italic">
                    {t('philosophy.text')}
                  </p>
                </div>
              </div>

              {/* 4. Objectives & Areas of Work (Grid) */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#111111]" style={getFont()}>
                  {t('objectives.heading')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {objectivesList.map((obj) => (
                    <div key={obj.key} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all">
                      <div className="flex-shrink-0 mt-1 text-[#F4C430]">
                        {obj.icon}
                      </div>
                      <div style={getFont()}>
                        <h4 className="font-bold text-lg text-gray-900">
                          {t(`objectives.${obj.key}`)}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {t(`objectives.${obj.key}Desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Future Initiative (Highlighted) */}
              <div className="bg-[#111111] rounded-2xl p-8 text-white relative overflow-hidden group">
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 bg-[#F4C430] w-24 h-24 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10" style={getFont()}>
                  <div className="flex items-center gap-3 mb-4 text-[#F4C430]">
                    <School className="w-8 h-8" />
                    <span className="uppercase tracking-wider font-bold text-sm">
                      {t('future_vision.heading')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {t('future_vision.title')}
                  </h3>
                  
                  <ul className="space-y-3">
                    {(t('future_vision.points', { returnObjects: true }) || []).map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F4C430]"></span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mahamana;
