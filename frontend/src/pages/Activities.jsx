import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, GraduationCap, Award, ArrowRight, ShieldCheck } from 'lucide-react';

const Activities = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Font styling helper for clean typography management
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  // Passed the component reference instead of JSX for cleaner styling in the map function
  const activities = [
    {
      icon: Calendar,
      title: t('activities.jayanti'),
      description: t('activities.jayantiDesc'),
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBldmVudHxlbnwwfHx8fDE3NzE0MTUwMDB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: Users,
      title: t('activities.seminars'),
      description: t('activities.seminarsDesc'),
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzZW1pbmFyfGVufDB8fHx8MTc3MTQxNTA1MHww&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: GraduationCap,
      title: t('activities.education'),
      description: t('activities.educationDesc'),
      image: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBydXJhbCUyMGluZGlhfGVufDB8fHx8MTc3MTQxNTA4MHww&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: Award,
      title: t('activities.convention'),
      description: t('activities.conventionDesc'),
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc3MTQxNTEwMHww&ixlib=rb-4.1.0&q=85'
    }
  ];

  const leadership = [
    { role: t('leadership.patron'), name: currentLanguage === 'hi' ? 'श्री रामचंद्र प्रसाद' : 'Shri Ramchandra Prasad' },
    { role: t('leadership.president'), name: currentLanguage === 'hi' ? 'डॉ. अनिल कुमार' : 'Dr. Anil Kumar' },
    { role: t('leadership.secretary'), name: currentLanguage === 'hi' ? 'श्री राजेश सिंह' : 'Shri Rajesh Singh' },
    { role: t('leadership.treasurer'), name: currentLanguage === 'hi' ? 'श्री विकास कुमार' : 'Shri Vikas Kumar' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-[#F4C430] selection:text-[#111111]">
      
      {/* 1. Core Activities Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#F4C430]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#F4C430] font-bold tracking-widest uppercase mb-4 block text-sm" style={getFont()}>
              Our Initiatives
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6 leading-tight" style={getFont()}>
              {t('activities.heading')}
            </h1>
            <div className="w-24 h-1.5 bg-[#F4C430] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-0 left-8 transform translate-y-1/2 z-20">
                    <div className="w-16 h-16 bg-[#F4C430] rounded-2xl flex items-center justify-center text-[#111111] shadow-lg group-hover:-translate-y-2 transition-transform duration-300 border-4 border-white">
                      <activity.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-8 pt-12 flex-grow flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] mb-4 group-hover:text-[#F4C430] transition-colors" style={getFont()}>
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg flex-grow" style={getFont()}>
                    {activity.description}
                  </p>
                  
                  {/* Subtle Interaction cue */}
                  <div className="mt-8 flex items-center gap-2 text-[#111111] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    Explore Program <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
