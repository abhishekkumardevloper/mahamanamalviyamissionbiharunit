import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Landmark, 
  Feather, 
  Gavel,   
  Mic2,    
  Award,   
  School,  
  Newspaper, 
  Flame,
  Heart,
  Users,
  Trophy
} from 'lucide-react';

const Mahamana = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
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
            
            {/* --- LEFT SIDE: Sticky Image & Quote --- */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4C430] group">
                  {/* Replace src with your actual image path */}
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Pandit Madan Mohan Malaviya" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12">
                     <p className="text-[#F4C430] font-bold text-center text-xl">
                        1861 - 1946
                     </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="mt-8 bg-[#111111] p-8 rounded-xl border-l-4 border-[#F4C430] shadow-xl">
                  <Feather className="text-[#F4C430] w-8 h-8 mb-4 opacity-80" />
                  <p className="text-white italic text-lg leading-relaxed font-light" style={getFont()}>
                    "{t('mahamana.quote')}"
                  </p>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: All Content (Scrollable) --- */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* SECTION 1: Biography Header */}
              <div className="border-b border-gray-200 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 leading-tight" style={getFont()}>
                  {t('mahamana.heading')}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed" style={getFont()}>
                  {t('mahamana.intro')}
                </p>
                
                {/* Roles Chips */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Educationist', 'Freedom Fighter', 'Journalist', 'Reformer', 'Orator'].map((role) => (
                    <span key={role} className="bg-yellow-50 text-[#B8860B] px-4 py-1.5 rounded-full text-sm font-semibold border border-yellow-200">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECTION 2: Life Sketch */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" style={getFont()}>
                <h2 className="text-2xl font-bold text-[#B8860B] mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> {t('mahamana.life.title')}
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1.5 bg-[#F4C430] rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Early Life</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.life.early')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 bg-[#F4C430] rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Diverse Career</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.life.career')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 bg-[#F4C430] rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Political Leadership</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.life.politics')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: BHU (Magnum Opus) */}
              <div className="bg-[#111111] text-white p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <School className="w-40 h-40 text-[#F4C430]" />
                </div>
                <div className="relative z-10" style={getFont()}>
                  <h2 className="text-2xl font-bold text-[#F4C430] mb-4 flex items-center gap-2">
                    <Landmark className="w-6 h-6" /> {t('mahamana.bhu.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {t('mahamana.bhu.desc')}
                  </p>
                  <div className="inline-block bg-[#F4C430]/20 border border-[#F4C430]/50 px-4 py-2 rounded-lg text-[#F4C430]">
                    {t('mahamana.bhu.status')}
                  </div>
                </div>
              </div>

              {/* SECTION 4: Vision & Philosophy */}
              <div style={getFont()}>
                <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                   <Flame className="w-6 h-6 text-[#B8860B]" /> {t('mahamana.vision.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#B8860B] mb-2 text-lg">Synthesis</h4>
                    <p className="text-gray-700">{t('mahamana.vision.synthesis')}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#B8860B] mb-2 text-lg">Education</h4>
                    <p className="text-gray-700">{t('mahamana.vision.education')}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 md:col-span-2 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#B8860B] mb-2 text-lg">Social Harmony</h4>
                    <p className="text-gray-700">{t('mahamana.vision.harmony')}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 5: Nation Building */}
              <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl" style={getFont()}>
                <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#B8860B]" /> {t('mahamana.nation.title')}
                </h2>
                <ul className="space-y-4">
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Gavel className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.nation.freedom')}</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Newspaper className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.nation.journalism')}</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Mic2 className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.nation.hindi')}</span>
                   </li>
                   <li className="flex items-center gap-4 bg-[#F4C430]/10 p-4 rounded-xl border border-[#F4C430]/30">
                     <div className="bg-[#F4C430] p-2 rounded-full"><Award className="w-5 h-5 text-white" /></div>
                     <span className="text-[#111111] font-bold text-xl">"{t('mahamana.nation.motto')}"</span>
                   </li>
                </ul>
              </div>

              {/* SECTION 6: Organization Objectives (Bihar Unit) */}
              <div className="pt-8 border-t-2 border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-[#111111]" style={getFont()}>
                  {t('objectives.heading')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {objectivesList.map((obj) => (
                    <div key={obj.key} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all group">
                      <div className="flex-shrink-0 mt-1 text-[#F4C430] group-hover:scale-110 transition-transform">
                        {obj.icon}
                      </div>
                      <div style={getFont()}>
                        <h4 className="font-bold text-lg text-gray-900">
                          {t(`objectives.${obj.key}`)}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          {t(`objectives.${obj.key}Desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 7: Future Initiative */}
              <div className="bg-gradient-to-br from-[#111111] to-[#222] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F4C430] w-32 h-32 rounded-bl-full opacity-10"></div>
                
                <div className="relative z-10" style={getFont()}>
                  <div className="flex items-center gap-3 mb-6 text-[#F4C430]">
                    <School className="w-8 h-8" />
                    <span className="uppercase tracking-wider font-bold text-sm">
                      {t('future_vision.heading')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    {t('future_vision.title')}
                  </h3>
                  
                  <ul className="grid md:grid-cols-2 gap-4">
                    {(t('future_vision.points', { returnObjects: true }) || []).map((point, index) => (
                      <li key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#F4C430] flex-shrink-0"></span>
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
