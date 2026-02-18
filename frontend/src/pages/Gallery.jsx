import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn } from 'lucide-react';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6',
      title: currentLanguage === 'hi' ? 'शैक्षिक कार्यक्रम' : 'Educational Program'
    },
    {
      url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f',
      title: currentLanguage === 'hi' ? 'संगोष्ठी' : 'Seminar'
    },
    {
      url: 'https://images.unsplash.com/photo-1629872928185-171e13c8e58b',
      title: currentLanguage === 'hi' ? 'छात्र सभा' : 'Student Gathering'
    },
    {
      url: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3',
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
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 text-center" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('gallery.heading')}
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
            {t('gallery.subheading')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-bold text-lg" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                      {image.title}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center text-[#111111] hover:bg-[#FFD700] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/80 rounded-lg p-4">
              <p className="text-white font-bold text-xl" style={{ fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif' }}>
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
