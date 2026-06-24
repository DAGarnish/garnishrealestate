import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuideHeader from '../us-expat-property-guide/GuideHeader';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UK Expat Property Guide | Buying in Sitges & Barcelona",
  description:
    "A comprehensive guide for UK citizens navigating post-Brexit property purchases, NIE, banking, and residency in Sitges, Barcelona, and Catalonia.",
  keywords: [
    "UK expat property guide Spain",
    "buying property in Spain after Brexit",
    "British buyers property Sitges",
    "Spanish visa for UK citizens",
    "NIE number for UK citizens Spain",
    "moving to Sitges from UK",
    "buyer's agent Sitges",
    "non-lucrative visa Spain UK"
  ],
  authors: [{ name: "Garnish Real Estate" }],
  openGraph: {
    title: "UK Expat Property Guide | Garnish Real Estate",
    description:
      "Essential guide for British citizens looking to buy property in Sitges, Barcelona, and Catalonia post-Brexit.",
    type: "article",
    locale: "en_GB",
  },
};

// ─── Table of Contents ────────────────────────────────────────────────────────
const tocItems = [
  { id: 'visa-alignments',   label: 'Post-Brexit Visas' },
  { id: 'nie-banking',       label: 'NIE & Spanish Banking' },
  { id: 'purchase-process',  label: 'Buying as Non-EU' },
  { id: 'healthcare-pension',label: 'Healthcare & Pension' },
  { id: 'buyer-agent',       label: "Why Use a Buyer's Agent" },
  { id: 'faqs',              label: 'FAQs' },
];

// ─── Key Considerations ───────────────────────────────────────────────────────
const keyConsiderations = [
  { label: '90/180-Day Rule',            desc: 'Post-Brexit, UK citizens are limited to 90 days in any 180-day period without a visa.' },
  { label: 'NIE Requirements',           desc: 'Your Spanish tax number must be secured before signing any property contract.' },
  { label: 'Private Health Insurance',   desc: 'Visas typically require comprehensive, zero-copay private Spanish health insurance.' },
  { label: 'Non-Resident Taxation',     desc: 'UK residents pay a higher flat rate (24%) on Spanish rental income than EU residents.' },
  { label: 'Currency Risk Management',   desc: 'Fluctuations between GBP and EUR can impact your real purchasing budget.' },
  { label: 'Independent Representation',  desc: 'Spanish estate agents act for the seller. A buyer\'s agent works solely for you.' },
];

// ─── Comparison Table Data ────────────────────────────────────────────────────
const comparisonRows: [string, string][] = [
  ['Freedom of movement and unlimited stay', 'Limited to 90 days in any 180-day period without a visa'],
  ['Access to public healthcare on arrival', 'Must show private health coverage (or S1 form for state pensioners)'],
  ['Imputed rental tax rate of 19% (EU)',    'Imputed rental tax rate of 24% (non-EU/UK citizens)'],
  ['No proof of income required to reside',  'Must prove substantial regular income or savings for residency visas'],
  ['Simple European bank transfers',         'More rigorous KYC checks and foreign currency exchange requirements'],
  ['Direct property purchase with no visa',  'Same purchase rights, but residency requires separate legal alignment'],
];

// ─── Visa Options ─────────────────────────────────────────────────────────────
const visaOptions = [
  { title: 'Non-Lucrative Visa (NLV)', desc: 'Ideal for retirees or individuals with sufficient passive income (approx. €28,800/year for the main applicant) who do not plan to work in Spain.' },
  { title: 'Digital Nomad Visa (DNV)', desc: 'For UK remote workers, freelancers, or business owners working for companies outside Spain. Offers favorable tax structures under certain conditions.' },
  { title: 'Golden Visa',              desc: 'Previously allowed residency via property investment of €500,000 or more. The Spanish government closed this pathway to new applicants in April 2025.' },
];

// ─── Purchase Costs ───────────────────────────────────────────────────────────
const purchaseCosts: [string, string][] = [
  ['ITP Transfer Tax', '10% of the property value in Catalonia for resale properties.'],
  ['Notary & Registry Fees', 'Government-regulated fees for signing and registering the deed, usually €1,500–€3,000.'],
  ['Legal & Conveyancing', 'Independent legal checks to ensure the property is free of debt and legally compliant. (Fully covered under Garnish’s flat fee).'],
  ['Mortgage Costs', 'If borrowing in Spain, expect additional valuation fees, bank setup fees, and notary costs.'],
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How does the 90-day rule affect UK property owners?',
    a: 'As non-EU citizens, UK passport holders can spend up to 90 days in Spain (and the wider Schengen Area) in any 180-day period. This is calculated on a rolling basis. If you wish to stay longer, you must apply for a residency visa such as the Non-Lucrative Visa or Digital Nomad Visa.',
  },
  {
    q: 'What is the minimum income requirement for the Non-Lucrative Visa (NLV)?',
    a: 'For 2026, the minimum passive income requirement is anchored to Spain\'s IPREM index, which equates to roughly €28,800 annually for the main applicant, plus approximately €7,200 for each additional family member. This must come from passive sources (pensions, investment portfolios, rental income) rather than active employment.',
  },
  {
    q: 'Can UK pensioners access free state healthcare in Spain?',
    a: 'Yes, but you must reach the UK state pension age and obtain an S1 form from the NHS Business Services Authority. Once registered in Spain, the S1 grants you access to the Spanish state healthcare system on the same basis as local residents. Early retirees must maintain private Spanish health insurance.',
  },
  {
    q: 'How do I open a Spanish bank account from the UK?',
    a: 'Many Spanish banks allow non-residents to open accounts online or via a representative with Power of Attorney. You will need your passport, a Spanish NIE number, and proof of your income source (such as UK tax returns or P60 documents) to satisfy strict anti-money laundering checks.',
  },
  {
    q: 'Should I buy my property before or after getting my residency visa?',
    a: 'Generally, you can purchase the property first as a non-resident. In fact, having a secured home in Spain can strengthen your visa application by proving you have adequate accommodation. However, we advise aligning the timing with a legal professional to ensure your visa timeline matches your property completion.',
  },
  {
    q: 'Why should I use a buyer’s agent instead of contacting local agencies directly?',
    a: 'Local estate agencies in Sitges and Barcelona represent the seller and are legally bound to get the highest price. A buyer\'s agent represents you exclusively—helping you navigate the local market, identifying issues during due diligence, and negotiating the price downward. Garnish does this for a transparent flat fee of €3,000, which includes all legal conveyancing fees.',
  },
];

export default function UKExpatPropertyGuide() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#000433] font-sans selection:bg-[#00deb6] selection:text-[#000433]">
      <GuideHeader />

      {/* Hero Section */}
      <section className="bg-[#000433] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <Link href="/" className="text-[#00deb6] hover:text-white transition-colors">Home</Link>
            <span className="text-[#5e6573]">/</span>
            <span className="text-[#5e6573]">Our Guides</span>
            <span className="text-[#5e6573]">/</span>
            <span className="text-white">UK Expat Property Guide</span>
          </nav>

          <span className="text-[#00deb6] text-xs font-bold uppercase tracking-widest block mb-3">Our Guides</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-5 max-w-3xl">
            UK Expat Property Guide
          </h1>
          <p className="text-[#dbdee0] text-lg leading-relaxed max-w-2xl">
            Navigate post-Brexit property acquisition, NIE processing, Spanish banking setup, and residency options in Sitges, Barcelona, and Catalonia.
          </p>
        </div>
      </section>

      {/* Key Considerations Summary Box */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="bg-white border border-[#dbdee0] rounded p-6 md:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00847b] mb-5">Key Considerations for UK Buyers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyConsiderations.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00847b] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#000433] leading-snug">{item.label}</p>
                  <p className="text-xs text-[#5e6573] leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar Layout */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-52 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-[#000433] mb-4">In This Guide</p>
              <nav aria-label="Table of contents">
                <ul className="space-y-1">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-sm text-[#5e6573] hover:text-[#00847b] transition-all py-1 pl-3 border-l-2 border-transparent hover:border-[#00847b] hover:pl-4"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar CTA */}
              <div className="mt-8 p-4 bg-[#e0fbf7] rounded border border-[#00deb6]/40">
                <p className="text-xs font-bold text-[#000433] mb-1.5">relocating?</p>
                <p className="text-xs text-[#5e6573] mb-3 leading-relaxed">
                  Book a free buyer consultation to discuss your relocation plan.
                </p>
                <Link
                  href="/#contact"
                  className="block text-center text-xs font-bold text-white bg-[#00847b] px-3 py-2 rounded hover:bg-[#006b64] transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-[#dbdee0]">
              <p className="text-base text-[#5e6573] leading-relaxed mb-4">
                Since the United Kingdom left the European Union, the logistics of moving to, buying property in, and retiring to Spain have shifted significantly. British citizens are now subject to third-country national rules. While the fundamental property buying process remains secure, the legal prerequisites, banking requirements, and residency paths require much closer coordination.
              </p>
              <p className="text-base text-[#5e6573] leading-relaxed">
                This guide breaks down the essential legal, financial, and residency frameworks you must navigate to purchase your home in Sitges, Barcelona, or the surrounding Catalonia region successfully.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#00847b] mb-4">Buying in Spain: Pre-Brexit vs. Post-Brexit</p>
              <div className="overflow-x-auto rounded border border-[#dbdee0]">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#dbdee0] bg-[#f3f4f6]">
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/2">As an EU Citizen (Pre-Brexit)</th>
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/2">As a UK Citizen (Post-Brexit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([pre, post], i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#dbdee0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f6]'}`}
                      >
                        <td className="py-3 px-4 text-[#5e6573] align-top">{pre}</td>
                        <td className="py-3 px-4 text-[#000433] font-medium align-top">{post}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Section 1: Post-Brexit Visa Alignments ───────────────── */}
            <section id="visa-alignments" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 01</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Post-Brexit Residency and Visa Options</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                If you only plan to use your Spanish property as a holiday home for less than 90 days at a time, you do not need a residency visa. For stays longer than 90 days, you must obtain a visa before arriving in Spain.
              </p>
              <ul className="space-y-4 mb-6">
                {visaOptions.map((v) => (
                  <li key={v.title} className="p-4 bg-white border border-[#dbdee0] rounded">
                    <p className="font-bold text-sm text-[#000433] mb-1">{v.title}</p>
                    <p className="text-xs text-[#5e6573] leading-relaxed">{v.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-[#5e6573] leading-relaxed">
                Visa applications must be made from the UK through the Spanish Consulate in London, Manchester, or Edinburgh. Preparing financial proof, criminal record certificates, and medical insurance certificates takes time, so align this process with your property search timelines.
              </p>
            </section>

            {/* Midway CTA Banner */}
            <div className="bg-[#000433] text-white rounded p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00deb6] mb-1">UK Expat Property Search</p>
                <p className="text-base font-semibold leading-snug">
                  Unbiased advice and full legal conveyancing support in Catalonia for one flat fee.
                </p>
              </div>
              <Link
                href="/#contact"
                className="flex-shrink-0 px-5 py-2.5 bg-[#00847b] text-white text-sm font-bold rounded hover:bg-[#006b64] transition-colors whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* ── Section 2: NIE & Spanish Banking ───────────────────────── */}
            <section id="nie-banking" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 02</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">NIE Number and Spanish Banking Setup</h2>
              
              <h3 className="text-lg font-bold text-[#000433] mt-2 mb-3">NIE (Número de Identidad de Extranjero)</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                The NIE is your personal Spanish tax identification number. It is mandatory for buying property, signing contracts, setting up utilities, and paying taxes. British citizens can obtain an NIE from the Spanish Consulates in the UK or in person at a national police station in Spain. We recommend applying as soon as your search begins, as appointments can be scarce.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Opening a Bank Account</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                You will need a Spanish bank account to pay the property deposit, make final purchase payments (usually via a guaranteed banker\'s draft), and set up standing orders for utility bills. Spanish banks apply strict KYC (Know Your Customer) rules for non-EU citizens. You must provide:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#5e6573] mb-4">
                <li>A valid passport and NIE number.</li>
                <li>Proof of occupation and income source (e.g., P60, tax returns, pay slips).</li>
                <li>A certificate of non-residency (if opening a non-resident account).</li>
              </ul>
              <p className="text-[#5e6573] leading-relaxed">
                Working with a broker or buyer\'s agent can streamline this process by introducing you to expat-friendly bank managers in Sitges or Barcelona.
              </p>
            </section>

            {/* ── Section 3: Buying as Non-EU ────────────────────────────── */}
            <section id="purchase-process" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 03</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">The Property Purchase Process for UK Citizens</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                The purchase process itself is identical to that of EU citizens, but currency fluctuations and tax structures warrant additional care. The steps include:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white border border-[#dbdee0] rounded">
                  <strong className="text-[#000433] text-sm block mb-1">1. Sourcing & Due Diligence</strong>
                  <p className="text-xs text-[#5e6573] leading-relaxed">
                    Once a property is found, your lawyer performs comprehensive title checks, planning compliance reviews, and checks for outstanding debts (such as unpaid mortgages or local property taxes) which transfer with the property in Spain.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#dbdee0] rounded">
                  <strong className="text-[#000433] text-sm block mb-1">2. Contrato de Arras (Deposit Contract)</strong>
                  <p className="text-xs text-[#5e6573] leading-relaxed">
                    A binding private contract where you pay a deposit (usually 10% of the price). If you pull out, you lose the deposit; if the seller pulls out, they must pay you double the deposit amount.
                  </p>
                </div>
                <div className="p-4 bg-white border border-[#dbdee0] rounded">
                  <strong className="text-[#000433] text-sm block mb-1">3. Completion (Escritura de Compraventa)</strong>
                  <p className="text-xs text-[#5e6573] leading-relaxed">
                    Signed in person (or via Power of Attorney) before a Spanish Public Notary. The remaining balance is paid, ownership is registered, and keys are handed over.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Taxes and Closing Costs</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                You should budget an additional 11–13% of the purchase price for purchase fees in Catalonia:
              </p>
              <ul className="space-y-2 mb-4">
                {purchaseCosts.map(([name, desc]) => (
                  <li key={name} className="text-sm text-[#5e6573] leading-relaxed">
                    <strong className="text-[#000433]">{name}:</strong> {desc}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Section 4: Healthcare & Pension ────────────────────────── */}
            <section id="healthcare-pension" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 04</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Healthcare Access and Pension Alignment</h2>
              
              <h3 className="text-lg font-bold text-[#000433] mt-2 mb-3">State Healthcare and the S1 Form</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                If you relocate to Spain and receive a UK State Pension, you are entitled to state healthcare funded by the UK. You must request an S1 form from the NHS. Register this form with the Spanish social security office (INSS) to obtain a local health card (tarjeta sanitaria).
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                If you are not yet of pension age, you must purchase comprehensive private health insurance from a provider authorised to operate in Spain. The policy must have no copayments (deductibles) to satisfy visa requirements.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">UK Pensions and Spanish Tax</h3>
              <p className="text-[#5e6573] leading-relaxed">
                Under the UK-Spain Double Taxation Agreement, UK state and private pensions are taxable in Spain if you are a Spanish tax resident. However, UK Government service pensions (such as civil service, police, or military pensions) remain taxable only in the UK, although they are factored in to calculate your Spanish tax rate. Always consult a cross-border tax specialist.
              </p>
            </section>

            {/* ── Section 5: Why Use a Buyer's Agent ─────────────────────── */}
            <section id="buyer-agent" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 05</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Why Use an Independent Buyer’s Agent</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                The Spanish estate agency market operates on a seller-paid commission model. This means standard estate agents represent the seller’s interests, aiming to achieve the highest possible price.
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                As independent buyer’s agents, Garnish Real Estate represents you exclusively. We do not maintain a property portfolio and have no interest in pushing specific properties. We:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#5e6573] mb-6">
                <li>Search the entire market, including private and off-market listings.</li>
                <li>Provide objective reports on properties, highlighting potential issues.</li>
                <li>Negotiate the purchase price and deal conditions in your interest.</li>
                <li>Coordinate the entire process, including legal due diligence with our in-house conveyancing network.</li>
              </ul>
              <p className="text-[#5e6573] leading-relaxed">
                By charging a transparent flat fee of €3,000—which fully covers all legal due diligence and closing conveyancing—we save you significant money compared to traditional agents and legal firms.
              </p>
            </section>

            {/* ── Section 6: FAQs ────────────────────────────────────────── */}
            <section id="faqs" className="mb-14 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 06</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white border border-[#dbdee0] rounded group"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-5 font-bold text-sm text-[#000433] hover:text-[#00847b] transition-colors [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="text-[#00847b] flex-shrink-0 text-xl leading-none transition-transform duration-200 group-open:rotate-45 mt-0.5">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-sm text-[#5e6573] leading-relaxed border-t border-[#dbdee0]">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Final CTA ───────────────────────────────────────────────── */}
            <section className="bg-[#000433] text-white rounded p-8 md:p-10 text-center">
              <span className="text-[#00deb6] text-xs font-bold uppercase tracking-widest block mb-3">
                Garnish Real Estate
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Your Property Search in Spain?
              </h2>
              <p className="text-[#dbdee0] text-base leading-relaxed max-w-xl mx-auto mb-8">
                Connect with our independent buyer agents. We offer a free consultation to map out your property search and residency journey in Sitges, Barcelona, and Catalonia.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 bg-[#00847b] text-white font-bold text-sm rounded hover:bg-[#006b64] transition-colors"
                >
                  Start Your Sitges Property Search
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3.5 border border-white/30 text-white font-bold text-sm rounded hover:border-white/60 transition-colors"
                >
                  Return Home
                </Link>
              </div>
              <p className="mt-6 text-xs text-[#5e6573]">
                Independent. Flat fee of €3,000 including legal representation.
              </p>
            </section>
          </article>
        </div>
      </div>

      {/* Footer */}
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
            <p>Registration &amp; Licensing in progress. Sitges, Barcelona, Spain.</p>
            <p className="text-slate-500">
              Adapting portal features to assist British and American buyers in Catalonia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
