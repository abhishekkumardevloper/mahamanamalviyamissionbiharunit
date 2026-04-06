import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Camera, X, ArrowLeft, Calendar, Images, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // State for Navigation and Modals
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Tracks which event folder is open
  const [lightboxIndex, setLightboxIndex] = useState(null); // Tracks the index of the currently opened image

  // Helper for font consistency
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxIndex]);

  // Navigate to Previous Image
  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex === 0 ? selectedAlbum.images.length - 1 : prevIndex - 1
      );
    }
  }, [selectedAlbum, lightboxIndex]);

  // Navigate to Next Image
  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedAlbum && lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex === selectedAlbum.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [selectedAlbum, lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Structured Data: Events with MULTIPLE images added
  const eventAlbums = [
    {
      id: 'event-2024',
      year: '2024',
      title: currentLanguage === 'hi' ? 'वार्षिक सभा 2024' : 'Annual Gathering 2024',
      coverImage: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBldmVudHxlbnwwfHx8fDE3NzE0MTUwMDB8MA&ixlib=rb-4.1.0&q=85',
      images: [
        {
          url: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBldmVudHxlbnwwfHx8fDE3NzE0MTUwMDB8MA&ixlib=rb-4.1.0&q=85',
          title: currentLanguage === 'hi' ? 'मुख्य भाषण' : 'Keynote Speech'
        },
        {
          url: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc3MTQxNTEwMHww&ixlib=rb-4.1.0&q=85',
          title: currentLanguage === 'hi' ? 'पुरस्कार वितरण' : 'Award Distribution'
        },
        {
          url: 'https://images.pexels.com/photos/28380018/pexels-photo-28380018.jpeg',
          title: currentLanguage === 'hi' ? 'सांस्कृतिक नृत्य' : 'Cultural Dance'
        },
        {
          url: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'समारोह की शुरुआत' : 'Event Kickoff'
        },
        {
          url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'विशाल जनसमूह' : 'Massive Audience'
        }
      ]
    },
    {
      id: 'event-2023',
      year: '2023',
      title: currentLanguage === 'hi' ? 'शैक्षिक संगोष्ठी' : 'Educational Seminar',
      coverImage: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzZW1pbmFyfGVufDB8fHx8MTc3MTQxNTA1MHww&ixlib=rb-4.1.0&q=85',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzZW1pbmFyfGVufDB8fHx8MTc3MTQxNTA1MHww&ixlib=rb-4.1.0&q=85',
          title: currentLanguage === 'hi' ? 'पैनल चर्चा' : 'Panel Discussion'
        },
        {
          url: 'https://images.unsplash.com/photo-1739242621239-af87dca49b5f',
          title: currentLanguage === 'hi' ? 'समूह कार्य' : 'Group Activity'
        },
        {
          url: 'https://images.unsplash.com/photo-1475721025592-f236befec51e?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'विचार मंथन सत्र' : 'Brainstorming Session'
        },
        {
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'नेतृत्व प्रशिक्षण' : 'Leadership Training'
        }
      ]
    },
    {
      id: 'event-2022',
      year: '2022',
      title: currentLanguage === 'hi' ? 'ग्रामीण शिक्षा पहल' : 'Rural Education Initiative',
      coverImage: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBydXJhbCUyMGluZGlhfGVufDB8fHx8MTc3MTQxNTA4MHww&ixlib=rb-4.1.0&q=85',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBydXJhbCUyMGluZGlhfGVufDB8fHx8MTc3MTQxNTA4MHww&ixlib=rb-4.1.0&q=85',
          title: currentLanguage === 'hi' ? 'छात्र सभा' : 'Student Gathering'
        },
        {
          url: 'https://images.pexels.com/photos/2802403/pexels-photo-2802403.jpeg',
          title: currentLanguage === 'hi' ? 'स्वतंत्रता दिवस' : 'Independence Day'
        },
        {
          url: 'https://images.unsplash.com/photo-1767675694521-c07577afe514',
          title: currentLanguage === 'hi' ? 'कला प्रतियोगिता' : 'Art Competition'
        },
        {
          url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'कक्षा अध्ययन' : 'Classroom Study'
        },
        {
          url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'शारीरिक शिक्षा' : 'Physical Education'
        }
      ]
    },
    {
      id: 'event-2021',
      year: '2021',
      title: currentLanguage === 'hi' ? 'स्थापना दिवस' : 'Foundation Day',
      coverImage: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'उद्घाटन समारोह' : 'Opening Ceremony'
        },
        {
          url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'अतिथि स्वागत' : 'Guest Welcome'
        },
        {
          url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'दीप प्रज्वलन' : 'Lamp Lighting'
        },
        {
          url: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80',
          title: currentLanguage === 'hi' ? 'स्वयंसेवक टीम' : 'Volunteer Team'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-[#F4C430] selection:text-[#111111]">
      
      {/* Hero Header Section */}
      <section className="pt-24 pb-12 relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#F4C430] font-bold tracking-widest uppercase mb-4 flex justify-center items-center gap-2 text-sm" style={getFont()}>
              <Camera className="w-4 h-4" /> Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] mb-6 tracking-tight" style={getFont()}>
              {selectedAlbum ? selectedAlbum.title : t('gallery.heading', 'Event Gallery')}
            </h1>
            <div className="w-24 h-1.5 bg-[#F4C430] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed" style={getFont()}>
              {selectedAlbum 
                ? `${selectedAlbum.year} • ${selectedAlbum.images.length} ${currentLanguage === 'hi' ? 'तस्वीरें' : 'Photos'}` 
                : t('gallery.subheading', 'Journey through our milestones. Select an event to view the memories we have created over the years.')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 min-h-[500px]">
        <div className="container mx-auto px-4 max-w-[90rem]">
          
          {/* VIEW 1: ALBUM FOLDERS */}
          {!selectedAlbum ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {eventAlbums.map((album) => (
                <div
                  key={album.id}
                  className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-200 aspect-square border border-gray-100"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  
                  <div className="absolute top-6 right-6 bg-[#F4C430] text-[#111111] px-4 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 z-20">
                    <Calendar className="w-4 h-4" />
                    {album.year}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/40 to-transparent flex flex-col justify-end p-8">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-extrabold text-2xl mb-2 leading-tight" style={getFont()}>
                        {album.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 font-medium text-sm">
                        <Images className="w-4 h-4 text-[#F4C430]" />
                        <span>{album.images.length} {currentLanguage === 'hi' ? 'तस्वीरें' : 'Photos'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            
            /* VIEW 2: INSIDE AN ALBUM (IMAGES GRID) */
            <div className="animate-fade-in-up">
              {/* Back Button Area */}
              <div className="mb-10 flex items-center justify-between border-b border-gray-200 pb-6">
                <button 
                  onClick={() => {
                    setSelectedAlbum(null);
                    setLightboxIndex(null);
                  }}
                  className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-[#111111] hover:text-white transition-all shadow-sm"
                  style={getFont()}
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  {currentLanguage === 'hi' ? 'सभी इवेंट्स पर वापस जाएं' : 'Back to All Events'}
                </button>
              </div>

              {/* Images Grid for Selected Album */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedAlbum.images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 aspect-[4/3]"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111]">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                        <p className="text-white font-bold text-lg" style={getFont()}>
                          {image.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* VIEW 3: FULLSCREEN SCROLLABLE LIGHTBOX MODAL */}
      {lightboxIndex !== null && selectedAlbum && (
        <div
          className="fixed inset-0 bg-[#111111]/95 backdrop-blur-xl z-50 flex items-center justify-center animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Prevent clicks inside the content area from closing the modal */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Image Counter and Close Button */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-[#111111]/80 to-transparent">
              <div className="text-white font-medium tracking-widest bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                {lightboxIndex + 1} / {selectedAlbum.images.length}
              </div>
              <button
                className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#F4C430] hover:text-[#111111] border border-white/10 transition-all duration-300 group"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close modal"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Left Navigation Arrow */}
            <button
              className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#F4C430] hover:text-[#111111] transition-all duration-300 z-50 group hover:scale-110"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Main Full-Size Image Container */}
            <div className="w-full h-full flex justify-center items-center px-16 sm:px-32">
              <img
                key={lightboxIndex} // Force re-render for animation on change
                src={selectedAlbum.images[lightboxIndex].url}
                alt={selectedAlbum.images[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fade-in-up"
              />
            </div>

            {/* Right Navigation Arrow */}
            <button
              className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#F4C430] hover:text-[#111111] transition-all duration-300 z-50 group hover:scale-110"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Caption Banner at Bottom */}
            <div className="absolute bottom-10 left-0 right-0 text-center z-50">
              <span className="inline-block bg-[#F4C430] text-[#111111] px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(244,196,48,0.3)] transform transition-all">
                <p className="font-bold text-xl tracking-wide" style={getFont()}>
                  {selectedAlbum.images[lightboxIndex].title}
                </p>
              </span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
