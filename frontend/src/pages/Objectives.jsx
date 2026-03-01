import React from 'react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const fontFamilyStyle = { 
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' 
  };

  // 1. TEAM DATA STRUCTURE (Row-wise divided for 5, 4, 4, 4 layout)
  const teamRows = [
    {
      rowId: 'row1',
      // Row 1: 5 Columns on large screens
      gridClass: 'lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1', 
      members: [
        { id: 1, image: "/images/team1.jpg", designation: "President", name: "Name 1" },
        { id: 2, image: "/images/team2.jpg", designation: "Vice President", name: "Name 2" },
        { id: 3, image: "/images/team3.jpg", designation: "Secretary", name: "Name 3" },
        { id: 4, image: "/images/team4.jpg", designation: "Treasurer", name: "Name 4" },
        { id: 5, image: "/images/team5.jpg", designation: "Advisor", name: "Name 5" }
      ]
    },
    {
      rowId: 'row2',
      // Row 2: 4 Columns on large screens
      gridClass: 'lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 max-w-5xl mx-auto', 
      members: [
        { id: 6, image: "/images/team6.jpg", designation: "Manager", name: "Name 6" },
        { id: 7, image: "/images/team7.jpg", designation: "Manager", name: "Name 7" },
        { id: 8, image: "/images/team8.jpg", designation: "Manager", name: "Name 8" },
        { id: 9, image: "/images/team9.jpg", designation: "Manager", name: "Name 9" }
      ]
    },
    {
      rowId: 'row3',
      // Row 3: 4 Columns on large screens
      gridClass: 'lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 max-w-5xl mx-auto', 
      members: [
        { id: 10, image: "/images/team10.jpg", designation: "Lead", name: "Name 10" },
        { id: 11, image: "/images/team11.jpg", designation: "Lead", name: "Name 11" },
        { id: 12, image: "/images/team12.jpg", designation: "Lead", name: "Name 12" },
        { id: 13, image: "/images/team13.jpg", designation: "Lead", name: "Name 13" }
      ]
    },
    {
      rowId: 'row4',
      // Row 4: 4 Columns on large screens
      gridClass: 'lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 max-w-5xl mx-auto', 
      members: [
        { id: 14, image: "/images/team14.jpg", designation: "Member", name: "Name 14" },
        { id: 15, image: "/images/team15.jpg", designation: "Member", name: "Name 15" },
        { id: 16, image: "/images/team16.jpg", designation: "Member", name: "Name 16" },
        { id: 17, image: "/images/team17.jpg", designation: "Member", name: "Name 17" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Section Heading */}
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center" 
            style={fontFamilyStyle}
          >
            {t('team.heading', 'Our Dedicated Team')}
          </h1>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-16"></div>

          {/* 2. RENDERING THE ROWS AND MEMBERS */}
          <div className="flex flex-col gap-12">
            {teamRows.map((row) => (
              <div key={row.rowId} className={`grid gap-8 ${row.gridClass}`}>
                
                {row.members.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#F4C430] hover:shadow-xl transition-all flex flex-col items-center text-center"
                  >
                    {/* Image (Top) */}
                    <div className="w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        // Fallback image in case the real image is missing
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image' }} 
                      />
                    </div>

                    {/* Designation (Middle) */}
                    <p 
                      className="text-[#F4C430] font-semibold text-sm uppercase tracking-wider mb-2"
                      style={fontFamilyStyle}
                    >
                      {member.designation}
                    </p>

                    {/* Name (Bottom) */}
                    <h3 
                      className="text-xl font-bold text-[#111111]" 
                      style={fontFamilyStyle}
                    >
                      {member.name}
                    </h3>
                  </div>
                ))}
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
