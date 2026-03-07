import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Heart, Building2, QrCode, ShieldCheck, 
  Mail, Phone, Copy, CheckCircle2 
} from 'lucide-react';

const Donation = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const [copiedField, setCopiedField] = useState(null);

  const getFontStyle = () => ({
    fontFamily: currentLanguage === 'hi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif',
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    // Added flex-grow and min-h-screen to ensure it always pushes the footer down
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-[#F4C430] selection:text-[#111111]">
      
      {/* Hero Header */}
      <div className="bg-[#111111] py-16 md:py-24 relative overflow-hidden mt-[70px]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm mb-6 border border-white/10 shadow-xl">
            <Heart className="w-8 h-8 text-[#F4C430] fill-[#F4C430] animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight" style={getFontStyle()}>
            Give where it's <span className="text-[#F4C430]">Needed Most</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={getFontStyle()}>
            {t('donation.subtitle') || "Your generous contributions help us sustain our programs and cultivate happiness in society. Every contribution, big or small, makes a difference."}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 pb-24 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN: Bank Transfer Details */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-[#F4C430]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#111111]" style={getFontStyle()}>NEFT / RTGS Transfer</h2>
                  <p className="text-gray-500 text-sm">Direct bank account transfer</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Beneficiary Name', value: "Mahamana Malviya Mission" },
                  { label: 'Bank Name', value: 'Punjab National Bank (PNB)' },
                  { label: 'Account No.', value: '1234567890123456', copyable: true },
                  { label: 'IFSC Code', value: 'PUNB0123456', copyable: true },
                  { label: 'Branch', value: 'Patna Main Branch' },
                  { label: 'Account Type', value: 'Current' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="text-gray-500 text-sm font-medium mb-1 sm:mb-0">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#111111] font-bold tracking-wide">{item.value}</span>
                      {item.copyable && (
                        <button 
                          onClick={() => handleCopy(item.value, item.label)}
                          className="p-1.5 text-gray-400 hover:text-[#F4C430] hover:bg-white rounded-md transition-all"
                          title={`Copy ${item.label}`}
                        >
                          {copiedField === item.label ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: UPI & Post-Donation Info */}
            <div className="space-y-8">
              
              {/* UPI / QR Code Box */}
              <div className="bg-gradient-to-br from-[#111111] to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4C430]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/10">
                    <QrCode className="w-7 h-7 text-[#F4C430]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold" style={getFontStyle()}>Scan & Donate</h2>
                    <p className="text-gray-400 text-sm">Accepts all major UPI apps</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                  <div className="bg-white p-4 rounded-2xl shadow-inner shrink-0">
                    <img src="/qr.jpeg" alt="Donation QR Code" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
                  </div>
                  
                  <div className="w-full">
                    <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-bold">UPI ID</p>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
                      <span className="font-mono font-bold text-lg tracking-wide break-all">7209329329m@pnb</span>
                      <button 
                        onClick={() => handleCopy('7209329329m@pnb', 'UPI')}
                        className="p-2 ml-2 bg-white/10 hover:bg-[#F4C430] hover:text-[#111111] text-white rounded-lg transition-all shrink-0"
                        title="Copy UPI ID"
                      >
                         {copiedField === 'UPI' ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact / Notice Box */}
              <div className="bg-[#F4C430]/10 border border-[#F4C430]/20 rounded-3xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-[#111111] mb-4 flex items-center gap-2" style={getFontStyle()}>
                  <ShieldCheck className="w-6 h-6 text-[#F4C430]" />
                  Post-Donation Step
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6" style={getFontStyle()}>
                  To help us track your generous contribution and send you a receipt, please inform us after making your transfer.
                </p>
                <div className="space-y-3">
                  <a href="mailto:biharunit@malaviyamission.org" className="flex items-center gap-3 text-gray-700 hover:text-[#111111] group transition-colors">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#F4C430] transition-colors">
                      <Mail className="w-4 h-4 text-[#111111]" />
                    </div>
                    <span className="font-semibold break-all">biharunit@malaviyamission.org</span>
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700 hover:text-[#111111] group transition-colors">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#F4C430] transition-colors">
                      <Phone className="w-4 h-4 text-[#111111]" />
                    </div>
                    <span className="font-semibold">+91 98765 43210</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
