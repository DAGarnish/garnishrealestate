import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LocationLandingPageProps {
  location: string;
  h1: string;
  intro: string;
  marketInsight: string;
  imageSrc: string;
}

export default function LocationLandingPage({
  location,
  h1,
  intro,
  marketInsight,
  imageSrc,
}: LocationLandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#000433] text-white py-32 md:py-48 px-6 md:px-12 text-center overflow-hidden border-b-4 border-slate-700">
        <div className="absolute inset-0 z-0">
          <Image 
            src={imageSrc} 
            alt={`${location} Property Hero`} 
            fill 
            sizes="100vw"
            className="object-cover object-center opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 !text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            {h1}
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-200 max-w-2xl mx-auto [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            {intro}
          </p>
        </div>
      </section>

      {/* The Advantage Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-slate-800">
            The Advantage: Buyer-First Representation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Absolute Independence</h3>
              <p className="text-slate-600 font-light text-sm">We never represent the seller. Zero dual-agency conflicts.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Fixed-Fee Structure</h3>
              <p className="text-slate-600 font-light text-sm">A transparent €3,000 flat fee.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Comprehensive Conveyancing</h3>
              <p className="text-slate-600 font-light text-sm">Full legal due diligence and conveyancing included.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Aggressive Negotiation</h3>
              <p className="text-slate-600 font-light text-sm">We negotiate to secure the lowest possible acquisition price, protecting you from inflated double commissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Insight */}
      <section className="py-20 px-6 md:px-12 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight mb-6 text-slate-800">
            Market Insight: {location}
          </h2>
          <div className="prose prose-lg text-slate-700 font-light max-w-none">
            <p>{marketInsight}</p>
          </div>
        </div>
      </section>

      {/* Internal Linking & CTA */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-medium tracking-tight mb-6">
            Secure Your Property with Independent Representation
          </h2>
          <p className="text-lg font-light text-slate-300 mb-10">
            Do not navigate the Catalan property market unrepresented. Protect your capital and your legal interests with a dedicated buyer's agent.
          </p>
          <Link
            href="/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-900 font-medium px-8 py-4 rounded transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            Schedule a Confidential Consultation
          </Link>
        </div>
      </section>

      {/* Explore Other Markets */}
      <section className="py-16 px-6 md:px-12 bg-white text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-slate-800 mb-6">Explore Other Markets</h3>
          <p className="text-slate-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            If you are considering coastal assets further south, we also provide independent <Link href="/buy-property-sitges" className="text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">buy property in Sitges</Link> services. For clients seeking urban investments, consult our <Link href="/buy-property-barcelona" className="text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">Barcelona property buying agent</Link> division. We offer dedicated <Link href="/buy-property-costa-brava" className="text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">Costa Brava buyer representation</Link> for those looking at northern coastal retreats. Looking beyond the coast? We provide comprehensive <Link href="/buy-property-inland-catalonia" className="text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">property buying support in Catalonia</Link>, including rural inland estates.
          </p>
        </div>
      </section>
    </div>
  );
}
