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
  Globe
} from 'lucide-react';

const Mahamana = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

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

            {/* --- RIGHT SIDE: All Detailed Content (Scrollable) --- */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* HEADER SECTION */}
              <div className="border-b border-gray-200 pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 leading-tight" style={getFont()}>
                  {t('mahamana.heading')}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed" style={getFont()}>
                  {t('mahamana.intro')}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Educationist', 'Freedom Fighter', 'Journalist', 'Reformer', 'Karmayogi'].map((role) => (
                    <span key={role} className="bg-yellow-50 text-[#B8860B] px-4 py-1.5 rounded-full text-sm font-semibold border border-yellow-200">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1. LIFE SKETCH SECTION */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" style={getFont()}>
                <h2 className="text-2xl font-bold text-[#B8860B] mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" /> {t('mahamana.sections.life.title')}
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="w-1.5 bg-gray-200 group-hover:bg-[#F4C430] rounded-full flex-shrink-0 transition-colors"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Early Life</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.sections.life.early')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1.5 bg-gray-200 group-hover:bg-[#F4C430] rounded-full flex-shrink-0 transition-colors"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Career Trajectory</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.sections.life.career')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1.5 bg-gray-200 group-hover:bg-[#F4C430] rounded-full flex-shrink-0 transition-colors"></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Political Leadership</h4>
                      <p className="text-gray-700 mt-1">{t('mahamana.sections.life.politics')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. VISION SECTION */}
              <div style={getFont()}>
                <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                   <Flame className="w-6 h-6 text-[#B8860B]" /> {t('mahamana.sections.vision.title')}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <Globe className="w-8 h-8 text-[#B8860B] mb-3 opacity-50"/>
                    <p className="text-gray-800">{t('mahamana.sections.vision.synthesis')}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <School className="w-8 h-8 text-[#B8860B] mb-3 opacity-50"/>
                    <p className="text-gray-800">{t('mahamana.sections.vision.education')}</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 md:col-span-2">
                    <p className="text-gray-800 font-medium">{t('mahamana.sections.vision.harmony')}</p>
                  </div>
                </div>
              </div>

              {/* 3. BHU SECTION (Highlighted) */}
              <div className="bg-[#111111] text-white p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Landmark className="w-40 h-40 text-[#F4C430]" />
                </div>
                <div className="relative z-10" style={getFont()}>
                  <h2 className="text-2xl font-bold text-[#F4C430] mb-6 flex items-center gap-2">
                    <Landmark className="w-6 h-6" /> {t('mahamana.sections.bhu.title')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                        <h5 className="text-[#F4C430] font-bold uppercase text-sm tracking-wider mb-1">The Dream</h5>
                        <p className="text-gray-300">{t('mahamana.sections.bhu.dream')}</p>
                    </div>
                    <div>
                        <h5 className="text-[#F4C430] font-bold uppercase text-sm tracking-wider mb-1">The Great Beggar</h5>
                        <p className="text-gray-300">{t('mahamana.sections.bhu.beggar')}</p>
                    </div>
                    <div className="bg-[#F4C430]/10 p-4 rounded-lg border border-[#F4C430]/30">
                        <p className="text-[#F4C430] italic">{t('mahamana.sections.bhu.realization')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. NATION BUILDING */}
              <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl" style={getFont()}>
                <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#B8860B]" /> {t('mahamana.sections.nation.title')}
                </h2>
                <ul className="space-y-4">
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Gavel className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.sections.nation.freedom')}</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Newspaper className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.sections.nation.journalism')}</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <div className="bg-gray-100 p-2 rounded-lg"><Mic2 className="w-5 h-5 text-gray-700" /></div>
                     <span className="text-gray-700 text-lg pt-1">{t('mahamana.sections.nation.hindi')}</span>
                   </li>
                   <li className="flex items-center gap-4 bg-[#F4C430]/10 p-4 rounded-xl border border-[#F4C430]/30 mt-4">
                     <div className="bg-[#F4C430] p-2 rounded-full"><Award className="w-5 h-5 text-white" /></div>
                     <span className="text-[#111111] font-bold text-xl">"{t('mahamana.sections.nation.motto')}"</span>
                   </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mahamana;
