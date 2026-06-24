'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GuideHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#dbdee0] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/Garnish-Real-Estate-Logo.png"
              alt="Garnish Real Estate — Home"
              width={275}
              height={80}
              style={{ width: 'auto', height: '70px' }}
              className="object-contain filter brightness-95"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-[#000433]">
            <Link href="/#about" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">
              About Us
            </Link>
            <Link href="/#services" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">
              Buying Services
            </Link>
            <Link href="/#fee-calculator" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">
              Fee Transparency
            </Link>
            <Link href="/#contact" className="hover:text-[#00847b] border-b-2 border-transparent hover:border-[#00847b] py-8 transition-all">
              Contact Finder
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-[#00847b] text-white text-[14px] font-bold rounded hover:bg-[#006b64] transition-colors"
          >
            Book Consultation
          </Link>

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

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#dbdee0] p-4 flex flex-col gap-4 text-center">
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">About Us</Link>
          <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Buying Services</Link>
          <Link href="/#fee-calculator" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Fee Transparency</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold py-2 border-b border-slate-100">Contact Finder</Link>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-5 py-3 bg-[#00847b] text-white font-bold rounded"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
