'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [propertyPrice, setPropertyPrice] = useState<number>(600000);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [enquirySent, setEnquirySent] = useState<boolean>(false);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    origin: 'US',
    location: 'Sitges',
    budget: '€500,000 - €1,000,000',
    timeline: 'As soon as possible',
    message: ''
  });

  // Calculations
  const standardLegalFee = propertyPrice * 0.01; // ~1% typical legal fee
  const typicalBuyerAgentFee = propertyPrice * 0.02; // ~2% typical buyer agent fee
  const traditionalTotal = standardLegalFee + typicalBuyerAgentFee;
  const garnishTotal = 5000;
  const savings = traditionalTotal - garnishTotal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData),
      });
      if (response.ok) {
        toast.success("Consultation Request Received!");
        setEnquirySent(true);
        setTimeout(() => {
          setEnquirySent(false);
          setEnquiryData({
            name: '',
            email: '',
            phone: '',
            origin: 'US',
            location: 'Sitges',
            budget: '€500,000 - €1,000,000',
            timeline: 'As soon as possible',
            message: ''
          });
        }, 5000);
      } else {
        toast.error('Failed to submit enquiry. Please try again.');
        console.error('Failed to submit enquiry');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#000433] font-sans selection:bg-[#00deb6] selection:text-[#000433]">
      <ToastContainer position="top-right" autoClose={5000} />
      
      {/* Rightmove-Style Navigation Header */}
      <header className="bg-white border-b border-[#dbdee0] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Larger logo as requested */}
            <Image 
              src="/Garnish-Real-Estate-Logo.png" 
              alt="Garnish Real Estate Logo" 
              width={275} 
              height={80} 
              style={{ width: 'auto', height: '70px' }}
              className="object-contain filter brightness-95"
              priority
            />
            {/* Main Nav Items */}
            <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-[#000433]">
              <a href="#about" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">About Us</a>
              <a href="#services" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">Buying Services</a>
              <a href="#fee-calculator" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">Fee Transparency</a>
              <a href="#contact" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">Contact Finder</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-[#00847b] text-white text-[14px] font-bold rounded hover:bg-[#006b64] transition-colors"
            >
              Book Consultation
            </a>
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#000433] hover:text-[#00847b] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#dbdee0] p-4 flex flex-col gap-4 text-center">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">About Us</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Buying Services</a>
            <a href="#fee-calculator" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Fee Transparency</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Contact Finder</a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="px-5 py-3 bg-[#00847b] text-white font-bold rounded"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Rightmove Dark Navy Banner style */}
      <section className="relative bg-[#000433] text-white py-16 md:py-24 overflow-hidden">
        {/* Vibrant Golden Hour Background Image - Dimmed 60% */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/sitges_hero_panoramic.png" 
            alt="Sitges Property" 
            fill 
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-100 scale-100"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8 !text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            Independent property buying support in Sitges, Barcelona, and across Catalonia.
          </h1>

          {/* Rightmove Search-box Interface */}
          <div className="bg-white text-[#000433] p-6 rounded shadow-lg max-w-2xl mx-auto text-left border border-slate-200">
            <h2 className="text-[17px] font-bold text-[#000433] mb-4">
              Where are you looking to buy in Catalonia?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <select 
                  value={enquiryData.location}
                  onChange={(e) => setEnquiryData({...enquiryData, location: e.target.value})}
                  className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3.5 rounded text-sm font-semibold appearance-none focus:outline-none"
                >
                  <option value="Sitges">Sitges (Premium Coastline)</option>
                  <option value="Barcelona">Barcelona (City & Metropolitan)</option>
                  <option value="Tortosa to Castelldefels">Tortosa to Castelldefels</option>
                  <option value="Catalonia Coast">Costa Brava / Coastal Catalonia</option>
                  <option value="Inland Catalonia">Inland Catalonia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#000433]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              {/* Action Buttons styled like For Sale / To Rent */}
              <div className="flex gap-2">
                <a 
                  href="#contact" 
                  className="flex-1 sm:flex-none px-6 py-3.5 bg-[#00847b] text-white text-sm font-bold rounded hover:bg-[#006b64] text-center whitespace-nowrap transition-colors"
                >
                  Book Consultation
                </a>
                <a 
                  href="#contact" 
                  className="flex-1 sm:flex-none px-6 py-3.5 bg-[#000433] text-white text-sm font-bold rounded hover:bg-[#000852] text-center whitespace-nowrap transition-colors"
                >
                  Tell Us Requirements
                </a>
              </div>
            </div>
            
            <p className="text-[12px] text-[#5e6573] mt-3 text-center sm:text-left font-semibold">
              Buyer-first guidance | All legal fees included | Sitges, Barcelona & Catalonia
            </p>
          </div>

        </div>
      </section>

      {/* Main Container block - Rightmove style light columns */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Center Intro Block to match the top block of Rightmove screenshot */}
        <section id="about" className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#000433]">
            A more transparent way to buy property in Spain
          </h2>
          <p className="text-[#5e6573] text-base font-light leading-relaxed">
            Whether you’re after an exclusive coastal villa in or around Sitges, a modern luxury apartment in Barcelona, or a rustic country estate in Catalonia, we guide you securely through the bureaucracy, and protect your interests from things like double-commission traps.
          </p>
        </section>

        {/* Buy and sell with ease section - Exactly aligned with Screenshot layout */}
        <section id="services" className="space-y-6">
          <h2 className="text-2xl font-bold text-[#000433] text-left">
            Buy and transition with ease
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/luxury_search_shortlist.png" 
                  alt="Search and shortlisting villa" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#000433]">Find your ideal home</h3>
              <p className="text-[14px] text-[#5e6573] leading-relaxed">
                We search every listing, local agency database, and off-market inventory in Catalonia to locate properties matching your exact specifications.
              </p>
              <a href="#contact" className="inline-block text-[#00847b] font-bold text-[14px] underline hover:text-[#006b64]">
                Request a customized search
              </a>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/luxury_negotiation_agent.png" 
                  alt="Negotiation support" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#000433]">Agent & negotiation control</h3>
              <p className="text-[14px] text-[#5e6573] leading-relaxed">
                We handle the local listing agents for you, eliminate double-sided commission markup demands, and negotiate the optimal market value.
              </p>
              <a href="#contact" className="inline-block text-[#00847b] font-bold text-[14px] underline hover:text-[#006b64]">
                Learn about our negotiation method
              </a>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/luxury_legal_handover.png" 
                  alt="Legal conveyancing" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#000433]">All legal fees included</h3>
              <p className="text-[14px] text-[#5e6573] leading-relaxed">
                Complete conveyancing work, from contract structures (arras), to notary (completion) are fully covered in our flat fee. 
              </p>
              <a href="#contact" className="inline-block text-[#00847b] font-bold text-[14px] underline hover:text-[#006b64]">
                See what legal checks are covered
              </a>
            </div>

          </div>
        </section>

        {/* Our Guides Section - Aligned with bottom of Rightmove screenshot */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#000433] text-left">
            Our guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Guide 1 */}
            <div className="bg-[#ffffff] border border-[#dbdee0] rounded-lg p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#e0fbf7] flex items-center justify-center text-[#00847b] flex-shrink-0">
                🇺🇸
              </div>
              <div className="space-y-1">
                <a href="#contact" className="text-base font-bold text-[#000433] underline hover:text-[#00847b]">
                  US Expat property guide
                </a>
                <p className="text-xs text-[#5e6573] leading-relaxed">
                  Understand the MLS differences, residency issues, remote purchasing, and tax strategies.
                </p>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-[#ffffff] border border-[#dbdee0] rounded-lg p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#e0fbf7] flex items-center justify-center text-[#00847b] flex-shrink-0">
                🇬🇧
              </div>
              <div className="space-y-1">
                <a href="#contact" className="text-base font-bold text-[#000433] underline hover:text-[#00847b]">
                  UK Expat residency guide
                </a>
                <p className="text-xs text-[#5e6573] leading-relaxed">
                  Navigate Spanish banking, NIE processing, and visa alignments post-Brexit.
                </p>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-[#ffffff] border border-[#dbdee0] rounded-lg p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#e0fbf7] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-5 rounded-sm shadow-md" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flag-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2"/>
                      <stop offset="25%" stopColor="#000000" stopOpacity="0.25"/>
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3"/>
                      <stop offset="75%" stopColor="#000000" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15"/>
                    </linearGradient>
                  </defs>
                  {/* Catalan Senyera background and stripes */}
                  <rect width="9" height="6" fill="#FCDD09"/>
                  <rect y="0.667" width="9" height="0.667" fill="#DA121A"/>
                  <rect y="2" width="9" height="0.667" fill="#DA121A"/>
                  <rect y="3.333" width="9" height="0.667" fill="#DA121A"/>
                  <rect y="4.667" width="9" height="0.667" fill="#DA121A"/>
                  {/* Wave shading overlay */}
                  <rect width="9" height="6" fill="url(#flag-wave)"/>
                </svg>
              </div>
              <div className="space-y-1">
                <a href="#contact" className="text-base font-bold text-[#000433] underline hover:text-[#00847b]">
                  Catalonia area profiles
                </a>
                <p className="text-xs text-[#5e6573] leading-relaxed">
                  Comparing life, logistics, and real estate in Sitges, Barcelona City, and Costa Brava.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Fee Transparency Calculator Section - Styled like Rightmove's mortgage/affordability tool */}
        <section id="fee-calculator" className="space-y-6">
          <div className="border-b border-[#dbdee0] pb-4">
            <span className="text-[#00847b] text-xs font-bold uppercase tracking-wider">Independent Representation</span>
            <h2 className="text-2xl font-bold text-[#000433] mt-1">Fee Transparency Calculator</h2>
          </div>

          <div className="rm-card p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Slider controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#000433] mb-2">Target Property Price</h3>
                <p className="text-xs text-[#5e6573] mb-4">
                  Drag the slider to match your estimated target property value in Spain.
                </p>
                <div className="flex justify-between items-center text-[#000433] mb-2">
                  <span className="text-sm font-semibold">Selected Price:</span>
                  <span className="text-xl font-bold text-[#00847b]">€{propertyPrice.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="200000" 
                  max="3000000" 
                  step="50000" 
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#dbdee0] rounded-lg appearance-none cursor-pointer accent-[#00847b]"
                />
                <div className="flex justify-between text-xs text-[#5e6573] mt-2">
                  <span>€200,000</span>
                  <span>€3,000,000+</span>
                </div>
              </div>

              <div className="p-4 bg-[#f3f4f6] rounded border border-[#dbdee0] text-sm text-[#5e6573] space-y-2">
                <p className="font-bold text-[#000433]">Why does this matter?</p>
                <p>
                  Spanish law firms usually charge around <strong>1% of the purchase price</strong> for conveyancing. Buying agents often request another <strong>2% to 3%</strong>.
                </p>
                <p className="text-[#00847b] font-semibold">
                  Garnish covers all of this for a flat €5,000 total.
                </p>
              </div>
            </div>

            {/* Calculations Display */}
            <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#dbdee0] pt-6 lg:pt-0 lg:pl-8">
              <h3 className="text-[15px] font-bold text-[#000433] mb-4 uppercase tracking-wider text-center lg:text-left">
                Cost Breakdown Comparison
              </h3>

              <div className="space-y-4">
                
                {/* Traditional Cost Rows */}
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-sm text-[#5e6573]">Typical Legal/Lawyer Fee (1%)</span>
                  <span className="text-sm font-semibold text-[#000433]">€{standardLegalFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-sm text-[#5e6573]">Typical Buyer Agent Commission (2%)</span>
                  <span className="text-sm font-semibold text-[#000433]">€{typicalBuyerAgentFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#dbdee0] font-bold text-sm text-[#000433]">
                  <span>Traditional Total Cost</span>
                  <span>€{traditionalTotal.toLocaleString()}</span>
                </div>

                {/* Garnish Flat Fee Row */}
                <div className="flex justify-between items-center p-3 bg-[#e0fbf7] rounded border border-[#00deb6]/40 font-bold text-[#000433]">
                  <div>
                    <span className="text-[#00847b] block text-xs uppercase tracking-wider">Garnish Real Estate</span>
                    <span className="text-[15px]">Flat Fee (Including Legal)</span>
                  </div>
                  <span className="text-lg text-[#00847b]">€5,000</span>
                </div>

              </div>

              {/* Total Savings Highlight */}
              <div className="bg-[#000433] text-white p-4 rounded mt-6 flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#00deb6] block font-bold">Estimated Savings</span>
                  <span className="text-lg md:text-xl font-bold">€{savings.toLocaleString()}</span>
                </div>
                <a 
                  href="#contact" 
                  className="px-4 py-2 bg-[#00847b] text-white text-xs font-bold rounded uppercase hover:bg-[#006b64] transition-colors"
                >
                  Consult Now
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* Rightmove-Style Form Section */}
        <section id="contact" className="space-y-6">
          <div className="border-b border-[#dbdee0] pb-4">
            <span className="text-[#00847b] text-xs font-bold uppercase tracking-wider">Complimentary Consultation</span>
            <h2 className="text-2xl font-bold text-[#000433] mt-1">Tell Us What You’re Looking For</h2>
          </div>

          <div className="rm-card p-6 md:p-8 bg-white">
            {enquirySent ? (
              <div className="text-center py-12 space-y-3">
                <span className="text-4xl text-[#00847b]">✓</span>
                <h3 className="text-xl font-bold text-[#000433]">Consultation Request Received</h3>
                <p className="text-sm text-[#5e6573] max-w-md mx-auto">
                  Thank you. A member of our founding couple will contact you within 24 hours to set up your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={enquiryData.name}
                      onChange={(e) => setEnquiryData({...enquiryData, name: e.target.value})}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={enquiryData.email}
                      onChange={(e) => setEnquiryData({...enquiryData, email: e.target.value})}
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      value={enquiryData.phone}
                      onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Origin Country</label>
                    <select 
                      value={enquiryData.origin}
                      onChange={(e) => setEnquiryData({...enquiryData, origin: e.target.value})}
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] focus:outline-none transition-colors"
                    >
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="EU">Europe</option>
                      <option value="Other">Other International</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Target Location</label>
                    <select 
                      value={enquiryData.location}
                      onChange={(e) => setEnquiryData({...enquiryData, location: e.target.value})}
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] focus:outline-none transition-colors"
                    >
                      <option value="Sitges">Sitges</option>
                      <option value="Barcelona">Barcelona City</option>
                      <option value="Tortosa to Castelldefels">Tortosa to Castelldefels</option>
                      <option value="Catalonia Coast">Costa Brava / Coastline</option>
                      <option value="Inland Catalonia">Inland Catalonia</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Target Budget</label>
                    <select 
                      value={enquiryData.budget}
                      onChange={(e) => setEnquiryData({...enquiryData, budget: e.target.value})}
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] focus:outline-none transition-colors"
                    >
                      <option value="Under €500,000">Under €500,000</option>
                      <option value="€500,000 - €1,000,000">€500,000 - €1,000,000</option>
                      <option value="€1,000,000 - €2,000,000">€1,000,000 - €2,000,000</option>
                      <option value="€2,000,000+">€2,000,000+ (Luxury Estate)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">When do you plan to buy?</label>
                    <select 
                      value={enquiryData.timeline}
                      onChange={(e) => setEnquiryData({...enquiryData, timeline: e.target.value})}
                      className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] focus:outline-none transition-colors"
                    >
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 3-6 months">Within 3-6 months</option>
                      <option value="Within 6-12 months">Within 6-12 months</option>
                      <option value="Just browsing / planning">Just browsing / planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000433] uppercase tracking-wider mb-2">Property Preferences & Notes</label>
                  <textarea 
                    value={enquiryData.message}
                    onChange={(e) => setEnquiryData({...enquiryData, message: e.target.value})}
                    placeholder="Tell us about target location details, required bedrooms, garden/sea views, near schools or transport connections..."
                    rows={4}
                    className="w-full bg-[#f3f4f6] border border-[#dbdee0] focus:border-[#00847b] px-4 py-3 rounded text-sm text-[#000433] placeholder-slate-400 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-10 py-4 bg-[#00847b] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#006b64] transition-colors shadow cursor-pointer"
                  >
                    Submit Consultation Request
                  </button>
                </div>

              </form>
            )}
          </div>
        </section>

      </main>

      {/* Rightmove-Style Dark Navy Footer */}
      <footer className="bg-[#000433] text-[#dbdee0] py-12 text-xs border-t border-[#000852]">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image 
              src="/Garnish-Real-Estate-Logo.png" 
              alt="Garnish Real Estate Logo" 
              width={180} 
              height={55} 
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain filter brightness-200 contrast-100 grayscale opacity-80"
            />
            <p className="max-w-sm text-center md:text-left text-[#5e6573] leading-relaxed">
              Bespoke, independent property buying support across Sitges, Barcelona, and Catalonia. We represent buyers, never the sellers.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right text-[#5e6573]">
            <p>© {new Date().getFullYear()} Garnish Real Estate. All rights reserved.</p>
            <p>Registration & Licensing in progress. Sitges, Barcelona, Spain.</p>
            <p className="text-slate-500">
              Adapting portal features to assist British and American buyers in Catalonia.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
