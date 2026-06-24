import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuideHeader from './GuideHeader';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "US Expat Property Guide | Buying in Sitges & Barcelona",
  description:
    "A practical guide for Americans buying property in Sitges, Barcelona, and Catalonia. Covers MLS differences, NIE, remote purchasing, taxes, and why exclusive buyer representation matters.",
  keywords: [
    "US expat property guide",
    "buying property in Spain as an American",
    "Americans buying property in Sitges",
    "US buyers property Sitges",
    "remote property purchase Spain",
    "property taxes in Spain for Americans",
    "residency in Spain for US citizens",
    "buyer's agent Sitges",
  ],
  authors: [{ name: "Garnish Real Estate" }],
  openGraph: {
    title: "US Expat Property Guide | Garnish Real Estate",
    description:
      "Everything Americans need to know before buying property in Sitges, Barcelona, or Catalonia — from MLS differences to tax strategy and remote purchasing.",
    type: "article",
    locale: "en_US",
  },
};

// ─── Table of Contents ────────────────────────────────────────────────────────
const tocItems = [
  { id: 'mls-differences',   label: 'MLS Differences' },
  { id: 'residency-legal',   label: 'Residency & Legal' },
  { id: 'remote-purchasing', label: 'Remote Purchasing' },
  { id: 'tax-strategies',    label: 'Tax Strategies' },
  { id: 'buyer-agent',       label: "Why Use a Buyer's Agent" },
  { id: 'faqs',              label: 'FAQs' },
];

// ─── Key Considerations ───────────────────────────────────────────────────────
const keyConsiderations = [
  { label: 'No MLS equivalent',          desc: "Spain's market is fragmented across portals and private listings." },
  { label: 'NIE required early',          desc: 'Your Spanish tax ID is needed before any purchase can complete.' },
  { label: 'FATCA & FBAR reporting',      desc: 'US citizens must report foreign financial accounts and property income.' },
  { label: '10–12% purchase costs',       desc: 'Budget for transfer tax, notary, registry, and legal on top of the price.' },
  { label: 'Remote purchase is possible', desc: 'With the right representation, you can complete without being present.' },
  { label: "Sellers\u2019 agents represent sellers", desc: 'You need an independent agent working exclusively for you.' },
];

// ─── Comparison Table Data ────────────────────────────────────────────────────
const comparisonRows: [string, string][] = [
  ['One centralised MLS listing database',              'Multiple fragmented portals plus off-market inventory'],
  ['Agent represents buyer or seller — clearly stated', 'Most agents are listing agents and represent the seller'],
  ['Social Security number is enough for tax ID',       'You need a Spanish NIE before you can buy or open accounts'],
  ['Title insurance protects the buyer',                'Legal due diligence and a qualified notary replace title insurance'],
  ['30-year fixed mortgage is the norm',                'Spanish mortgages for non-residents typically go to 60–70% LTV'],
  ['Closing costs of 2–5%',                             'Expect 10–12% of purchase price in taxes, fees, and legal costs'],
];

// ─── Remote Purchasing Steps ──────────────────────────────────────────────────
const purchasingSteps = [
  { step: '01', title: 'Search and Shortlisting',    desc: 'Your buyer\'s agent runs the initial search, filters against your brief, and presents a curated selection. No physical presence is required.' },
  { step: '02', title: 'Video Viewings',             desc: 'We conduct detailed video walkthroughs of shortlisted properties — covering orientation, light, condition, and neighbourhood context — with real-time Q&A over video call.' },
  { step: '03', title: 'In-Person Viewing Trip',     desc: 'For serious candidates, a short visit to Sitges or Barcelona to see your final shortlist in person is strongly recommended before committing to an offer.' },
  { step: '04', title: 'Offer and Negotiation',      desc: 'We handle negotiation with the listing agent directly. You remain in the loop at every stage, but we carry the practical burden.' },
  { step: '05', title: 'Reservation and Arras',      desc: 'A reservation agreement followed by the formal private purchase contract (contrato de arras) commits both parties. Signing can be done remotely via Power of Attorney.' },
  { step: '06', title: 'Completion at the Notary',   desc: 'The final deed (escritura) is signed at the notary\'s office. This too can be handled via Power of Attorney if you cannot be present.' },
];

// ─── Purchase Cost Breakdown ──────────────────────────────────────────────────
const purchaseCosts: [string, string][] = [
  ['ITP (Impuesto sobre Transmisiones Patrimoniales)', 'Transfer tax on resale properties — the Catalonia rate is currently 10% of the purchase price.'],
  ['Notary fees', 'Regulated and relatively modest — typically €800–€2,500 depending on the transaction value.'],
  ['Land Registry fee', 'Registration of the new ownership — a similar range to notary fees.'],
  ['Legal fees', 'Your lawyer\'s due diligence and conveyancing — included in Garnish\'s flat fee.'],
];

// ─── Visa Options ─────────────────────────────────────────────────────────────
const visaOptions = [
  { title: 'Non-Lucrative Visa (NLV)', desc: 'For buyers with sufficient passive income or savings who do not intend to work in Spain.' },
  { title: 'Digital Nomad Visa',        desc: 'For remote workers employed or self-employed outside Spain, introduced under recent legislation.' },
  { title: 'Golden Visa',              desc: 'Previously available for property purchases above €500,000 — this route closed in April 2025 for new applicants.' },
];

// ─── Buyer's Agent Benefits ───────────────────────────────────────────────────
const agentBenefits = [
  { title: 'Exclusive representation',        desc: 'We work for buyers only. We are not paid by sellers and hold no listing mandates.' },
  { title: 'Objective property filtering',    desc: 'We shortlist based on your brief — not on commission rates or agency relationships.' },
  { title: 'Skilled negotiation',             desc: 'We handle all communication with listing agents and negotiate on value, not on price alone.' },
  { title: 'Due diligence coordination',      desc: 'We work alongside your lawyer to ensure checks are thorough and nothing is overlooked.' },
  { title: 'Time and stress management',      desc: 'Finding property from abroad is genuinely difficult. We handle the legwork so you focus on decisions.' },
  { title: 'Flat, transparent fee',           desc: 'Our service is €3,000 in total — covering buyer representation and all legal fees to completion.' },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do I need to be in Spain to buy property there?',
    a: 'Not necessarily. With a notarised Power of Attorney (apostilled for use in Spain), your lawyer or appointed representative can sign at the arras and notary stages on your behalf. That said, we recommend at least one in-person visit to view your final shortlist before committing.',
  },
  {
    q: 'How do I get my NIE, and how long does it take?',
    a: 'You can apply at a Spanish consulate in the US — New York, Los Angeles, Miami, Houston, Chicago, and San Francisco all have consulates — or in person in Spain at a foreigner\'s office (Oficina de Extranjería). Processing times vary from a few days in Spain to several weeks at a consulate. Apply early, well before you expect to need it.',
  },
  {
    q: 'Can I get a mortgage in Spain as a US citizen?',
    a: 'Yes. Spanish banks do lend to non-residents, though typically at lower LTV ratios than for residents — usually 60–70% of the purchase price. You\'ll need a Spanish bank account, NIE, and standard financial documentation. Some expat-focused lenders also offer products specifically for non-resident buyers.',
  },
  {
    q: 'Why is Sitges particularly popular with American buyers?',
    a: 'Sitges offers a rare combination: architectural character, a genuine village scale, a well-established English-speaking community, and excellent transport links to Barcelona (35 minutes by train). Its size — small enough to feel like a community, large enough to offer real amenities — is something American buyers in particular tend to value. Pricing, while not inexpensive, remains relatively accessible compared to comparable coastal markets in France or Italy.',
  },
  {
    q: 'What are the ongoing costs of owning a property in Spain as a non-resident?',
    a: 'Annual costs typically include IBI (local property tax, roughly 0.5–1.1% of the cadastral value), community fees if the property is within a development, insurance, and IRNR (non-resident income tax) if applicable. For a non-resident owner of a €700,000 property, total ongoing annual costs might typically run €3,000–€6,000 depending on property type and location.',
  },
  {
    q: 'Does buying property in Spain give me the right to live there?',
    a: 'No. Ownership does not confer residency. If you want to spend more than 90 days in any 180-day period (the standard Schengen limit for US passport holders), you\'ll need an appropriate visa — such as the Non-Lucrative Visa or Digital Nomad Visa. This is entirely separate from the property purchase process.',
  },
  {
    q: 'What does Garnish Real Estate charge, and what is included?',
    a: 'Our fee is a flat €3,000. This covers independent buyer representation from initial brief through to completion, and includes all legal fees for the conveyancing process. There is no percentage commission, no hidden charges, and no conflict of interest. We are paid by you, for you.',
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function USExpatGuide() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#000433] font-sans selection:bg-[#00deb6] selection:text-[#000433]">

      {/* Shared Header (client component for mobile toggle) */}
      <GuideHeader />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#000433] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <Link href="/" className="text-[#00deb6] hover:text-white transition-colors">Home</Link>
            <span className="text-[#5e6573]">/</span>
            <span className="text-[#5e6573]">Our Guides</span>
            <span className="text-[#5e6573]">/</span>
            <span className="text-white">US Expat Property Guide</span>
          </nav>

          <span className="text-[#00deb6] text-xs font-bold uppercase tracking-widest block mb-3">Our Guides</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-5 max-w-3xl">
            US Expat Property Guide
          </h1>
          <p className="text-[#dbdee0] text-lg leading-relaxed max-w-2xl">
            Understand the MLS differences, residency issues, remote purchasing, and tax strategies — everything you need before buying property in Sitges, Barcelona, or Catalonia.
          </p>
        </div>
      </section>

      {/* ── Key Considerations Summary Box ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="bg-white border border-[#dbdee0] rounded p-6 md:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00847b] mb-5">Key Considerations for US Buyers</p>
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

      {/* ── Main Content + Sidebar Layout ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar — sticky on desktop */}
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
                <p className="text-xs font-bold text-[#000433] mb-1.5">Ready to start?</p>
                <p className="text-xs text-[#5e6573] mb-3 leading-relaxed">
                  Book a complimentary buyer consultation — no obligation.
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

            {/* Intro paragraphs */}
            <div className="mb-10 pb-8 border-b border-[#dbdee0]">
              <p className="text-base text-[#5e6573] leading-relaxed mb-4">
                Buying property as a US citizen in Spain involves a set of considerations that don&apos;t apply to most European buyers — and that differ significantly from the American homebuying process most of us grew up with. The good news is that the Spanish property market is genuinely accessible to international buyers. The challenge is that navigating it effectively requires preparation, the right professional support, and a clear understanding of where the process diverges from what you might expect.
              </p>
              <p className="text-base text-[#5e6573] leading-relaxed">
                This guide covers the key areas that matter most for US buyers looking at Sitges, Barcelona, and the wider Catalonia region — written from the perspective of an independent buyer&apos;s agent whose sole obligation is to work in your interest.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#00847b] mb-4">US Expectations vs. Spanish Reality</p>
              <div className="overflow-x-auto rounded border border-[#dbdee0]">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#dbdee0] bg-[#f3f4f6]">
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/2">What US Buyers Expect</th>
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/2">How Spain Works</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([us, es], i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#dbdee0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f6]'}`}
                      >
                        <td className="py-3 px-4 text-[#5e6573] align-top">{us}</td>
                        <td className="py-3 px-4 text-[#000433] font-medium align-top">{es}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Section 1: MLS Differences ─────────────────────────────── */}
            <section id="mls-differences" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 01</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">The MLS Doesn&apos;t Exist Here</h2>

              <p className="text-[#5e6573] leading-relaxed mb-4">
                In the US, the Multiple Listing Service creates a largely transparent, centralised market. Buyers and their agents can access virtually every active listing in a given area through a single system, and cooperation between buyer agents and listing agents is built into the structure.
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Spain operates very differently. There is no equivalent centralised database. Properties are listed across a patchwork of portals — Idealista, Fotocasa, Habitaclia — and many of the most desirable homes never appear publicly at all. Local agencies hold exclusive mandates over certain listings, and off-market inventory is often circulated only within professional networks.
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                For a buyer operating from abroad, this fragmentation creates real risk. Without local contacts and established agency relationships, you may miss the best opportunities entirely — or proceed on incomplete information.
              </p>
              <p className="text-[#5e6573] leading-relaxed">
                An independent buyer&apos;s agent with active local networks in Sitges, Barcelona, and across Catalonia gives you access to the fuller picture. We source across portals, directly from agencies, and from off-market inventory — then shortlist only what genuinely fits your criteria.
              </p>
            </section>

            {/* Midway CTA Banner */}
            <div className="bg-[#000433] text-white rounded p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00deb6] mb-1">Speak with Garnish</p>
                <p className="text-base font-semibold leading-snug">
                  We search across portals and off-market inventory — solely on your behalf.
                </p>
              </div>
              <Link
                href="/#contact"
                className="flex-shrink-0 px-5 py-2.5 bg-[#00847b] text-white text-sm font-bold rounded hover:bg-[#006b64] transition-colors whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* ── Section 2: Residency & Legal ───────────────────────────── */}
            <section id="residency-legal" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 02</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Residency, NIE, and Legal Foundations</h2>

              <h3 className="text-lg font-bold text-[#000433] mt-2 mb-3">The NIE: Your First Step</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                The NIE (Número de Identidad de Extranjero) is a Spanish tax identification number required for any property transaction in Spain. Without it, you cannot sign a purchase deed at the notary or open a Spanish bank account. Obtaining your NIE should be one of the first things you arrange — either in person at a Spanish consulate in the US, or in Spain directly.
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                The process is generally straightforward but requires some paperwork — passport, completed forms, appointment booking — and processing time varies between consulates and offices. Plan for it early.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Residency and Visas</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Purchasing a property in Spain does not automatically grant residency rights. If you intend to spend significant time in Spain — or relocate — you&apos;ll need the appropriate visa. The options most relevant to US buyers are:
              </p>
              <ul className="space-y-3 mb-6">
                {visaOptions.map((v) => (
                  <li key={v.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00847b] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#5e6573] leading-relaxed">
                      <strong className="text-[#000433]">{v.title}:</strong> {v.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                Residency status also affects your tax position in Spain, so visa type and property purchase should be planned together with appropriate legal and tax advice.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Spanish Bank Account</h3>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                A Spanish bank account is required to complete a property purchase. Most banks require an in-person visit and your NIE, along with proof of identity and address. Account opening can take a few weeks, so this should be arranged well in advance of any proposed completion date.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Legal Due Diligence</h3>
              <p className="text-[#5e6573] leading-relaxed">
                Spain uses a civil law system. Properties are sold based on what is registered at the Land Registry (Registro de la Propiedad), and a qualified Spanish lawyer — not just a notary — should conduct thorough checks: verifying ownership, charges, outstanding debts, planning status, and community fees. This is standard practice and non-negotiable for any prudent international buyer.
              </p>
            </section>

            {/* ── Section 3: Remote Purchasing ───────────────────────────── */}
            <section id="remote-purchasing" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 03</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Buying Remotely from the US</h2>

              <p className="text-[#5e6573] leading-relaxed mb-6">
                One of the most common questions we receive from US clients is: can I buy property in Spain without being there in person? The honest answer is yes — with the right setup, the process can be managed largely remotely, with a carefully timed in-person visit to coincide with the key stages.
              </p>

              <div className="space-y-3 mb-6">
                {purchasingSteps.map((s) => (
                  <div
                    key={s.step}
                    className="flex items-start gap-4 p-4 bg-white border border-[#dbdee0] rounded"
                  >
                    <span className="text-[#00847b] font-bold text-base flex-shrink-0 w-7 pt-0.5">{s.step}</span>
                    <div>
                      <p className="font-bold text-[#000433] text-sm mb-1">{s.title}</p>
                      <p className="text-sm text-[#5e6573] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f3f4f6] border border-[#dbdee0] rounded p-4 text-sm text-[#5e6573]">
                <strong className="text-[#000433]">Power of Attorney (Poder Notarial):</strong>{' '}
                A notarised and apostilled Power of Attorney allows your lawyer or representative in Spain to sign on your behalf at both the arras and completion stages. This is a routine instrument used by many international buyers and does not compromise your legal protection in any way.
              </div>
            </section>

            {/* ── Section 4: Tax Strategies ───────────────────────────────── */}
            <section id="tax-strategies" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 04</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Tax Strategies for US Buyers</h2>

              <div className="bg-[#f3f4f6] border border-[#dbdee0] rounded p-4 mb-6 text-sm text-[#5e6573]">
                <strong className="text-[#000433]">Important disclaimer:</strong> Tax law is complex and individual circumstances vary considerably. This section is a high-level overview only. Before purchasing, take advice from a qualified Spanish tax advisor and — given the US-specific implications of FATCA and foreign income reporting — a US tax professional familiar with expatriate and foreign property matters.
              </div>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Purchase Costs</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                A useful rule of thumb: add 10–12% on top of the purchase price to cover taxes and fees. For a resale property in Catalonia, this typically includes:
              </p>
              <ul className="space-y-3 mb-8">
                {purchaseCosts.map(([label, desc]) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00847b] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#5e6573] leading-relaxed">
                      <strong className="text-[#000433]">{label}:</strong> {desc}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Ongoing Tax Obligations</h3>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                Once you own property in Spain, annual taxes apply regardless of whether you reside there. Non-residents are subject to IRNR (Non-Resident Income Tax) — charged on imputed rental income if the property is not commercially let, or on actual rental income if it is. IBI (local property rates, equivalent to council tax) is also levied annually.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">US Reporting Obligations</h3>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                US citizens are taxed on worldwide income and must report foreign financial accounts — FBAR filing is required when balances exceed $10,000 — and potentially the property itself under FATCA and related rules if held through certain structures. These obligations do not disappear simply because you invest abroad. They require careful, ongoing attention.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Ownership Structure</h3>
              <p className="text-[#5e6573] leading-relaxed mb-6">
                Whether to purchase as an individual, jointly, or through a corporate structure depends on your broader financial situation, intended use, and estate planning objectives. Each option carries different tax, inheritance, and reporting implications on both the Spanish and US sides — making bespoke professional advice essential before you proceed.
              </p>

              <h3 className="text-lg font-bold text-[#000433] mb-3">Sale and Inheritance</h3>
              <p className="text-[#5e6573] leading-relaxed">
                Capital gains on Spanish property are taxed in Spain for non-residents. Inheritance of Spanish property is subject to Spanish Inheritance Tax (Impuesto sobre Sucesiones y Donaciones), which can be significant. Cross-border estate planning between Spanish and US succession law is a specialist area where early planning makes a meaningful difference.
              </p>
            </section>

            {/* ── Section 5: Why Use a Buyer's Agent ─────────────────────── */}
            <section id="buyer-agent" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 05</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Why Independent Buyer Representation Matters</h2>

              <p className="text-[#5e6573] leading-relaxed mb-6">
                In the US, buyer&apos;s agents are a standard part of the transaction. In Spain, the concept of an agent who works exclusively for the buyer — with no commission from the seller — is still uncommon. Most property agents in Spain are listing agents. Their obligation is to the seller. That is not a criticism; it is simply how the market is structured. But it means that without your own representation, you are negotiating against a professional whose interests are not aligned with yours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {agentBenefits.map((item) => (
                  <div key={item.title} className="p-4 bg-white border border-[#dbdee0] rounded">
                    <p className="font-bold text-sm text-[#000433] mb-1.5">{item.title}</p>
                    <p className="text-xs text-[#5e6573] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#5e6573] leading-relaxed">
                For US buyers in particular — operating across time zones, unfamiliar with Spanish process, and managing a complex financial and legal picture on both sides of the Atlantic — having a dedicated, knowledgeable advocate in Sitges and Barcelona is not a luxury. It is the most practical decision you can make.
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
                Ready to Start Your Search in Sitges?
              </h2>
              <p className="text-[#dbdee0] text-base leading-relaxed max-w-xl mx-auto mb-8">
                We offer a complimentary buyer consultation — no obligation, no pressure. Tell us what you&apos;re looking for and we&apos;ll tell you honestly what&apos;s realistic and how we&apos;d approach it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 bg-[#00847b] text-white font-bold text-sm rounded hover:bg-[#006b64] transition-colors"
                >
                  Book a Buyer Consultation
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3.5 border border-white/30 text-white font-bold text-sm rounded hover:border-white/60 transition-colors"
                >
                  Explore the Homepage
                </Link>
              </div>
              <p className="mt-6 text-xs text-[#5e6573]">
                Flat fee of €3,000 — includes buyer representation and all legal fees to completion. Independent. Buyer-only.
              </p>
            </section>

          </article>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
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
