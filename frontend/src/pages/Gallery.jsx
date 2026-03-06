import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn, Camera, X } from 'lucide-react';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper for font consistency
  const getFont = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif'
  });

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBldmVudHxlbnwwfHx8fDE3NzE0MTUwMDB8MA&ixlib=rb-4.1.0&q=85',
      title: currentLanguage === 'hi' ? 'शैक्षिक कार्यक्रम' : 'Educational Program'
    },
    {
      url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzZW1pbmFyfGVufDB8fHx8MTc3MTQxNTA1MHww&ixlib=rb-4.1.0&q=85',
      title: currentLanguage === 'hi' ? 'संगोष्ठी' : 'Seminar'
    },
    {
      url: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBydXJhbCUyMGluZGlhfGVufDB8fHx8MTc3MTQxNTA4MHww&ixlib=rb-4.1.0&q=85',
      title: currentLanguage === 'hi' ? 'छात्र सभा' : 'Student Gathering'
    },
    {
      url: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc3MTQxNTEwMHww&ixlib=rb-4.1.0&q=85',
      title: currentLanguage === 'hi' ? 'युवा कार्यक्रम' : 'Youth Program'
    },
    {
      url: 'https://images.unsplash.com/photo-1739242621239-af87dca49b5f',
      title: currentLanguage === 'hi' ? 'समूह चर्चा' : 'Group Discussion'
    },
    {
      url: 'https://images.unsplash.com/photo-1767675694521-c07577afe514',
      title: currentLanguage === 'hi' ? 'सांस्कृतिक कार्यक्रम' : 'Cultural Event'
    },
    {
      url: 'https://images.pexels.com/photos/28380018/pexels-photo-28380018.jpeg',
      title: currentLanguage === 'hi' ? 'पारंपरिक उत्सव' : 'Traditional Festival'
    },
    {
      url: 'https://images.pexels.com/photos/2802403/pexels-photo-2802403.jpeg',
      title: currentLanguage === 'hi' ? 'देशभक्ति कार्यक्रम' : 'Patriotic Program'
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
              {t('gallery.heading', 'Our Gallery')}
            </h1>
            <div className="w-24 h-1.5 bg-[#F4C430] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed" style={getFont()}>
              {t('gallery.subheading', 'Glimpses of our events, programs, and community initiatives capturing the essence of our mission.')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[90rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-200 aspect-square border border-gray-100"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  
                  {/* Text & Icon Content (Animates up on hover) */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] mb-4 shadow-[0_0_15px_rgba(244,196,48,0.5)]">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <p className="text-white font-bold text-xl md:text-2xl leading-tight" style={getFont()}>
                      {image.title}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#111111]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Prevent clicks inside the content area from closing the modal */}
          <div 
            className="relative w-full max-w-6xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 sm:-right-12 sm:top-0 w-12 h-12 flex items-center justify-center text-white/50 hover:text-[#F4C430] transition-colors group"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X className="w-10 h-10 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Main Image */}
            <div className="w-full flex justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Caption Banner */}
            <div className="mt-8 text-center">
              <span className="inline-block bg-[#F4C430]/10 border border-[#F4C430]/20 px-6 py-3 rounded-full">
                <p className="text-[#F4C430] font-bold text-xl tracking-wider uppercase" style={getFont()}>
                  {selectedImage.title}
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
