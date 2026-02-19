import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Reusable font style to keep the JSX clean
  const textStyle = {
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  };

  // Helper to safely map arrays from i18n translations
  const objectives = t('objectives.categories', { returnObjects: true }) || [];
  const futureFeatures = t('futureInitiative.features', { returnObjects: true }) || [];
  const leaderAchievements = t('leadership.achievements', { returnObjects: true }) || [];
  const events = t('keyEvents.events', { returnObjects: true }) || [];
  const annualFocusAreas = t('keyEvents.annualPrograms.focusAreas', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-12 text-center" style={textStyle}>
            {t('about.heading')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1763262979261-e4ea292a5f8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBlZHVjYXRpb24lMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MHx8fHwxNzcxNDExNDMwfDA&ixlib=rb-4.1.0&q=85"
                alt="About Us"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed" style={textStyle}>
                {t('about.content1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed" style={textStyle}>
                {t('about.content2')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed" style={textStyle}>
                {t('about.content3')}
              </p>
            </div>
          </div>

          {/* Mission Banner */}
          <div className="bg-[#F4C430] rounded-lg p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-[#111111] mb-4" style={textStyle}>
              {t('about.missionTitle')}
            </h2>
            <p className="text-[#111111] text-xl font-medium max-w-3xl mx-auto" style={textStyle}>
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Objectives & Areas of Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12 text-center" style={textStyle}>
            {t('objectives.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.isArray(objectives) && objectives.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F4C430]">
                <h3 className="text-xl font-bold text-[#111111] mb-4" style={textStyle}>{category.title}</h3>
                <ul className="space-y-3">
                  {category.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700" style={textStyle}>
                      <span className="text-[#F4C430] mr-2 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy & Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#111111] text-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-[#F4C430] mb-6" style={textStyle}>
                {t('corePhilosophy.heading')}
              </h2>
              <p className="text-lg leading-relaxed" style={textStyle}>
                {t('corePhilosophy.description')}
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl border-l-4 border-[#F4C430]">
              <h2 className="text-3xl font-bold text-[#111111] mb-6" style={textStyle}>
                {t('commitment.heading')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed" style={textStyle}>
                {t('commitment.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Major Future Initiative */}
      <section className="py-16 bg-[#F4C430]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4" style={textStyle}>
            {t('futureInitiative.heading')}
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg mt-8 border-2 border-[#F4C430]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4" style={textStyle}>
              {t('futureInitiative.subHeading')}
            </h3>
            <p className="text-gray-700 text-lg mb-8" style={textStyle}>
              {t('futureInitiative.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {Array.isArray(futureFeatures) && futureFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded">
                  <div className="w-2 h-2 rounded-full bg-[#F4C430] flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium" style={textStyle}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Leadership Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-bold text-[#111111]" style={textStyle}>
                {t('leadership.heading')}
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#F4C430] mb-3" style={textStyle}>
                  {t('leadership.leaderName')}
                </h3>
                <p className="text-gray-700 mb-4" style={textStyle}>{t('leadership.philosophy')}</p>
                <ul className="space-y-2 mb-4">
                  {Array.isArray(leaderAchievements) && leaderAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm" style={textStyle}>
                      <span className="text-green-600 mr-2">✔</span> {achievement}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic border-l-2 border-[#111111] pl-3" style={textStyle}>
                  "{t('leadership.idealsPromotion')}"
                </p>
              </div>
            </div>

            {/* Events Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-[#111111]" style={textStyle}>
                {t('keyEvents.heading')}
              </h2>
              <div className="space-y-6">
                {Array.isArray(events) && events.map((event, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 border-[#F4C430]">
                    <h3 className="text-xl font-bold text-[#111111] mb-2" style={textStyle}>{event.title}</h3>
                    <p className="text-gray-700" style={textStyle}>{event.description}</p>
                  </div>
                ))}

                {/* Annual Programs */}
                <div className="bg-[#111111] p-6 rounded-lg shadow-md text-white">
                  <h3 className="text-xl font-bold text-[#F4C430] mb-2" style={textStyle}>
                    {t('keyEvents.annualPrograms.title')}
                  </h3>
                  <p className="mb-4 text-gray-300" style={textStyle}>{t('keyEvents.annualPrograms.description')}</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(annualFocusAreas) && annualFocusAreas.map((area, index) => (
                      <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium" style={textStyle}>
                        {area}
                      </span>
                    ))}
                  </div>
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
