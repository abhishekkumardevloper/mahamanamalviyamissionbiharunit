import React from 'react';

const Team = () => {
  // Aapka static data yahan hai. Aap yahan se names, images aur designations edit kar sakte hain.
  const teamGroups = [
    {
      id: 'group1',
      headline: "Core Leadership", 
      gridClass: 'lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1', 
      members: [
        { id: 1, image: "/images/team1.jpg", designation: "President", name: "Bipin Kumar Singh" },
        { id: 2, image: "/images/team4.jpg", designation: "Vice President", name: "Satya Srivastava" },
        { id: 3, image: "/images/team5.jpg", designation: "Vice President", name: "Dr. Sonali Gupta" }
        { id: 4, image: "/images/team2.jpg", designation: "General Secretary", name: "Alok Singh" },
        { id: 5, image: "/images/team3.jpg", designation: "Treasurer", name: "Manit Kumar" }
      ]
    },
    {
      id: 'group2',
      headline: "Proposers (Management Team)", 
      // Changed lg:grid-cols-4 to lg:grid-cols-3 since there are 3 proposers
      gridClass: 'lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 max-w-6xl mx-auto', 
      members: [
        { id: 6, image: "/images/team6.jpg", designation: "Proposer (President)", name: "Shivaji Chaturvedi" },
        { id: 7, image: "/images/team7.jpg", designation: "Proposer (Gen. Sec.)", name: "Rajneesh Upadhyay" },
        { id: 8, image: "/images/team8.jpg", designation: "Proposer (Treasurer)", name: "Satya Srivastava" }
      ]
    },
    {
      id: 'group3',
      headline: "Executive Members", 
      // As requested, Group 3 is left untouched
      gridClass: 'lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto', 
      members: [
        { id: 10, image: "/images/team10.jpg", designation: "Executive", name: "Name 10" },
        { id: 11, image: "/images/team11.jpg", designation: "Executive", name: "Name 11" },
        { id: 12, image: "/images/team12.jpg", designation: "Executive", name: "Name 12" },
        { id: 13, image: "/images/team13.jpg", designation: "Executive", name: "Name 13" }
      ]
    },
    {
      id: 'group4',
      headline: "Working Committee (Secretary Board)", 
      // Changed lg:grid-cols-4 to lg:grid-cols-5 to neatly fit 10 members in 2 rows
      gridClass: 'lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl mx-auto', 
      members: [
        { id: 14, image: "/images/team14.jpg", designation: "Secretary", name: "Suman Kumar Singh" },
        { id: 15, image: "/images/team15.jpg", designation: "Secretary", name: "Rajneesh Upadhyay" },
        { id: 16, image: "/images/team16.jpg", designation: "Secretary", name: "Amarendra Pandey" },
        { id: 17, image: "/images/team17.jpg", designation: "Secretary", name: "Rajeev Kumar" },
        { id: 18, image: "/images/team18.jpg", designation: "Secretary", name: "Shailendra Tomar" },
        { id: 19, image: "/images/team19.jpg", designation: "Secretary", name: "Dr. Pankhuri Mishra" },
        { id: 20, image: "/images/team20.jpg", designation: "Secretary", name: "Sumit Kumar" },
        { id: 21, image: "/images/team21.jpg", designation: "Secretary", name: "Ankit Kumar" },
        { id: 22, image: "/images/team22.jpg", designation: "Secretary", name: "Naveen Lakshman" },
        { id: 23, image: "/images/team23.jpg", designation: "Secretary", name: "Amar Prakash Singh" }
      ]
    }
];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Main Page Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center font-sans">
            Our Dedicated Team
          </h1>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-16"></div>

          {/* Rendering the Groups with their Headlines */}
          <div className="flex flex-col gap-16">
            {teamGroups.map((group, index) => (
              <div key={group.id} className="flex flex-col items-center">
                
                {/* Intermediate Headline (Jo alag-alag post ke liye hai) */}
                {group.headline && (
                  <div className="mb-10 text-center w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {group.headline}
                    </h2>
                    {/* Chhoti si underline style ke liye */}
                    <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
                  </div>
                )}

                {/* Team Grid */}
                <div className={`grid gap-8 w-full ${group.gridClass}`}>
                  {group.members.map((member) => (
                    <div 
                      key={member.id} 
                      className="bg-white rounded-lg p-5 border border-gray-100 hover:border-[#F4C430] hover:shadow-xl transition-all flex flex-col items-center text-center"
                    >
                      {/* Image - Square & Medium Size */}
                      <div className="w-48 h-48 mb-5 rounded-md overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image' }} 
                        />
                      </div>

                      {/* Designation */}
                      <p className="text-[#F4C430] font-semibold text-sm uppercase tracking-wider mb-2">
                        {member.designation}
                      </p>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-[#111111]">
                        {member.name}
                      </h3>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
