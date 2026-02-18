import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, GraduationCap, Award } from 'lucide-react';

const Activities = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const activities = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: t('activities.jayanti'),
      description: t('activities.jayantiDesc'),
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: t('activities.seminars'),
      description: t('activities.seminarsDesc'),
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f'
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: t('activities.education'),
      description: t('activities.educationDesc'),
      image: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: t('activities.convention'),
      description: t('activities.conventionDesc'),
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('activities.heading')}
          </h1>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border-2 border-gray-200 hover:border-[#F4C430]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-all"
                  />
                  <div className="absolute top-4 right-4 w-14 h-14 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111]">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#111111] mb-3" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {activity.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('leadership.heading')}
          </h2>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { role: t('leadership.patron'), name: currentLanguage === 'hi' ? 'श्री रामचंद्र प्रसाद' : 'Shri Ramchandra Prasad' },
              { role: t('leadership.president'), name: currentLanguage === 'hi' ? 'डॉ. अनिल कुमार' : 'Dr. Anil Kumar' },
              { role: t('leadership.secretary'), name: currentLanguage === 'hi' ? 'श्री राजेश सिंह' : 'Shri Rajesh Singh' },
              { role: t('leadership.treasurer'), name: currentLanguage === 'hi' ? 'श्री विकास कुमार' : 'Shri Vikas Kumar' }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border-t-4 border-[#F4C430]"
              >
                <div className="w-24 h-24 bg-[#F4C430] rounded-full mx-auto mb-4 flex items-center justify-center text-[#111111] text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#F4C430] font-medium" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
              {t('leadership.nationalPresident')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
