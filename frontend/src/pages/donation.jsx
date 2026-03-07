import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Heart, Building2, QrCode, ShieldCheck, 
  Mail, Phone, Copy, CheckCircle2, Send
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
            {t('donation.subtitle') || "Your generous contributions help us sustain our programs and cultivate happiness in society. Every contribution makes a difference."}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 pb-24 flex-grow">
        <div className="max-w-6xl mx-auto">
          
          {/* TOP SECTION: Payment Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
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

            {/* RIGHT COLUMN: UPI Box */}
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
          </div>

          {/* BOTTOM SECTION: Donation Tracking Form */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            <div className="bg-[#F4C430]/10 border-b border-[#F4C430]/20 p-8">
              <h3 className="text-2xl font-bold text-[#111111] flex items-center gap-2" style={getFontStyle()}>
                <ShieldCheck className="w-7 h-7 text-[#F4C430]" />
                Donation Details Form
              </h3>
              <p className="text-gray-600 mt-2" style={getFontStyle()}>
                Already made a contribution? Please fill out this form so we can track your donation and send you a formal receipt.
              </p>
            </div>

            <form className="p-8 md:p-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Contribution Amount */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Contribution</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount Donated (₹) <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      placeholder="e.g. 5000" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID / UTR Number <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Enter Bank or UPI Reference No." 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type</label>
                  <div className="flex flex-wrap gap-6">
                    {['One Time Donation', 'Monthly (Recurring)', 'Quarterly', 'Annually'].map((type, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="donation_type" className="w-4 h-4 text-[#F4C430] focus:ring-[#F4C430] border-gray-300" defaultChecked={i===0} />
                        <span className="text-gray-600 group-hover:text-[#111111]">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No. <span className="text-red-500">*</span></label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone No.</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" />
                  </div>
                  
                  {/* Address Section */}
                  <div className="md:col-span-2 mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Address <span className="text-red-500">*</span></label>
                    <textarea rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all resize-none" required></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all bg-white" required>
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="e.g. Bihar" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / PIN Code</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Options */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Options</h4>
                <label className="block text-sm font-medium text-gray-700 mb-1">Would you like to honor or remember someone with your donation? / Any Message</label>
                <textarea rows="3" placeholder="Leave your message here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4C430] focus:ring-2 focus:ring-[#F4C430]/20 outline-none transition-all resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t">
                <button type="submit" className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-[#111111] hover:bg-[#F4C430] text-white hover:text-[#111111] rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Send className="w-5 h-5" />
                  Submit Donation Details
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  * All fields marked with red asterisks are mandatory. Your data is secure and will only be used for sending donation receipts.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donation;
