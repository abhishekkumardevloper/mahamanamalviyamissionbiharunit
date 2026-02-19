"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const textStyle = {
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  };

  // Error-Fix: Helper function to safely ensure we always get an array for .map()
  const getSafeArray = (key) => {
    const data = t(key, { returnObjects: true });
    return Array.isArray(data) ? data : [];
  };

  // Safely fetching arrays
  const objectives = getSafeArray('objectives.categories');
  const futureFeatures = getSafeArray('futureInitiative.features');
  const leaderAchievements = getSafeArray('leadership.achievements');
  const events = getSafeArray('keyEvents.events');
  const annualFocusAreas = getSafeArray('keyEvents.annualPrograms.focusAreas');

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">
      
      {/* 1. Hero / Introduction Section */}
      <section className="pt-20 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6" style={textStyle}>
              {t('about.heading', 'Introduction of the Organization')}
            </h1>
            <div className="w-24 h-1 bg-[#F4C430] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F4C430] rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1763262979261-e4ea292a5f8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBlZHVjYXRpb24lMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                alt="About Us"
                className="rounded-xl shadow-xl w-full object-cover h-[450px]"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify" style={textStyle}>
                {t('about.content1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify" style={textStyle}>
                {t('about.content2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify font-medium border-l-4 border-[#F4C430] pl-4" style={textStyle}>
                {t('about.content3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="bg-[#111111] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F4C430] mb-6" style={textStyle}>
            {t('about.missionTitle', 'Mission Statement')}
          </h2>
          <p className="text-white text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed" style={textStyle}>
            "{t('about.missionText')}"
          </p>
        </div>
      </section>

      {/* 2. Objectives & Areas of Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4" style={textStyle}>
              {t('objectives.heading', 'Objectives & Areas of Work')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={textStyle}>
              Committed to bringing meaningful change across key sectors of society.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-[#F4C430]/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-[#111111] font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-4" style={textStyle}>
                  {category.title}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {Array.isArray(category.points) && category.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600" style={textStyle}>
                      <span className="text-[#F4C430] mr-3 mt-1 font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy & Future Initiative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Philosophy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#111111] mb-4" style={textStyle}>
                  {t('corePhilosophy.heading', 'Our Core Philosophy')}
                </h2>
                <div className="w-16 h-1 bg-[#F4C430] rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed" style={textStyle}>
                  {t('corePhilosophy.description')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#111111]">
                <h3 className="text-xl font-bold text-[#111111] mb-2" style={textStyle}>
                  {t('commitment.heading', 'Our Commitment')}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={textStyle}>
                  {t('commitment.description')}
                </p>
              </div>
            </div>

            {/* Future Initiative */}
            <div className="bg-gradient-to-br from-[#111111] to-gray-900 text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4C430] opacity-10 rounded-full blur-3xl"></div>
              <h2 className="text-sm uppercase tracking-widest text-[#F4C430] font-bold mb-2" style={textStyle}>
                {t('futureInitiative.heading', 'Major Future Initiative')}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={textStyle}>
                {t('futureInitiative.subHeading')}
              </h3>
              <p className="text-gray-300 mb-8" style={textStyle}>
                {t('futureInitiative.description')}
              </p>
              <ul className="space-y-4">
                {futureFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[#F4C430] flex-shrink-0"></div>
                    <span className="text-gray-200" style={textStyle}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Events */}
      <section className="py-20 bg-[#F9F9F9] border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Leadership Box */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-xl shadow-md sticky top-8 border-t-4 border-[#F4C430]">
                <h2 className="text-2xl font-bold text-[#111111] mb-6" style={textStyle}>
                  {t('leadership.heading', 'Visionary Leadership')}
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={textStyle}>
                  {t('leadership.leaderName')}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed" style={textStyle}>
                  {t('leadership.philosophy')}
                </p>
                <div className="space-y-3 mb-6">
                  {leaderAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-gray-700 text-sm" style={textStyle}>{achievement}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-[#111111] pl-4 text-gray-600 italic text-sm" style={textStyle}>
                  "{t('leadership.idealsPromotion')}"
                </blockquote>
              </div>
            </div>

            {/* Events Timeline/List */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#111111] mb-8" style={textStyle}>
                  {t('keyEvents.heading', 'Key Events & Programs')}
                </h2>
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition">
                      <div className="sm:w-1/3 flex-shrink-0">
                        <h3 className="text-lg font-bold text-[#111111] leading-tight" style={textStyle}>
                          {event.title}
                        </h3>
                      </div>
                      <div className="sm:w-2/3 border-l-0 sm:border-l-2 border-gray-100 sm:pl-6">
                        <p className="text-gray-600 text-sm leading-relaxed" style={textStyle}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Programs Highlight */}
              <div className="bg-[#F4C430] p-8 rounded-xl shadow-md text-[#111111]">
                <h3 className="text-xl font-bold mb-3" style={textStyle}>
                  {t('keyEvents.annualPrograms.title', 'Annual Lectures & Ideological Programs')}
                </h3>
                <p className="mb-6 font-medium" style={textStyle}>
                  {t('keyEvents.annualPrograms.description')}
                </p>
                <div className="flex flex-wrap gap-3">
                  {annualFocusAreas.map((area, index) => (
                    <span key={index} className="bg-[#111111] text-[#F4C430] px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase" style={textStyle}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
