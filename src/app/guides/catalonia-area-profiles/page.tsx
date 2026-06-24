import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GuideHeader from '../us-expat-property-guide/GuideHeader';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Catalonia Area Profiles | Sitges, Barcelona City & Costa Brava",
  description:
    "A comprehensive comparison of life, logistics, and property markets in Sitges, Barcelona City, and Costa Brava for international buyers seeking independent representation.",
  keywords: [
    "Catalonia area profiles",
    "Sitges vs Barcelona",
    "buying property in Costa Brava",
    "Sitges real estate",
    "Barcelona expat guides",
    "moving to Catalonia",
    "independent buyer agent Spain",
    "Sitges luxury homes"
  ],
  authors: [{ name: "Garnish Real Estate" }],
  openGraph: {
    title: "Catalonia Area Profiles | Garnish Real Estate",
    description:
      "Compare lifestyle, logistics, and property markets across Sitges, Barcelona City, and Costa Brava to find your ideal home.",
    type: "article",
    locale: "en_GB",
  },
};

// ─── Table of Contents ────────────────────────────────────────────────────────
const tocItems = [
  { id: 'overview',             label: 'Overview' },
  { id: 'sitges-profile',       label: 'Sitges Profile' },
  { id: 'barcelona-profile',    label: 'Barcelona City' },
  { id: 'costa-brava-profile',  label: 'Costa Brava' },
  { id: 'comparison',           label: 'Area Comparison' },
  { id: 'buyer-agent',          label: "Why Use a Buyer's Agent" },
  { id: 'faqs',                 label: 'FAQs' },
];

// ─── Key Considerations ───────────────────────────────────────────────────────
const keyConsiderations = [
  { label: 'Coastal vs. Urban Vibe',     desc: 'Sitges offers microclimate beach luxury, Barcelona offers dense culture, and Costa Brava provides rugged seclusion.' },
  { label: 'Commute & Accessibility',   desc: 'Sitges is 25 minutes from El Prat Airport; Costa Brava ranges from 1 to 2 hours away.' },
  { label: 'Expat Communities',         desc: 'Sitges and Barcelona feature highly integrated, English-speaking international schools and networks.' },
  { label: 'Property Regulations',       desc: 'Catalonia enforces strict regional rental licence rules that vary significantly by municipality.' },
  { label: 'Market Liquidity',          desc: 'Barcelona and Sitges show strong historical capital preservation and high demand year-round.' },
  { label: 'Buyer Representation',       desc: 'Traditional listing agents act for the seller. Secure an independent buyer\'s agent to protect your interests.' },
];

// ─── Comparison Table Data ────────────────────────────────────────────────────
const comparisonRows: [string, string, string, string][] = [
  ['Vibe & Lifestyle', 'Cosmopolitan, bohemian, premium, walking-friendly, relaxed', 'Vibrant, fast-paced, highly cultural, busy urban living', 'Rugged, seasonal, tranquil, nature-oriented, scattered villages'],
  ['Expat Community', 'Highly active, year-round, diverse international school options', 'Massive global expat network, multiple international schools', 'Pockets of retirees and summer residents; quieter in winter months'],
  ['Airport Connection', '25 mins to Barcelona El Prat (direct highway or train)', '15–30 mins to Barcelona El Prat (metro, taxi, or bus)', '1 to 2 hours to Barcelona El Prat (Girona airport serves budget flights)'],
  ['Average Property Type', 'Premium apartments, townhouses, and sea-view villas', 'Classic Eixample apartments, modern penthouses, urban flats', 'Traditional stone farmhouses (masias) and cliffside villas'],
  ['Rental Licence Policy', 'Highly restricted; municipal caps on tourist licences', 'Extremely strict; new tourist licences currently paused or phased out', 'Varies by town; some coastal municipalities allow tourist licences'],
  ['Market Character', 'Highly resilient luxury demand, low inventory, strong value', 'High transaction volume, diverse price points, strong rental demand', 'Highly seasonal, slower sales cycles, premium pockets (Begur, Llafranc)'],
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Why is Sitges considered premium compared to other Catalan coastal towns?',
    a: 'Sitges benefits from a unique microclimate protected by the Garraf Massif, providing over 300 sunny days a year. Additionally, its proximity to Barcelona El Prat Airport (25 minutes) and its cosmopolitan, highly diverse, and welcoming year-round community set it apart from seasonal resorts that empty out in winter.',
  },
  {
    q: 'How easy is it to commute from Sitges to Barcelona City?',
    a: 'It is exceptionally straightforward. Direct trains run approximately every 15 minutes from Sitges to Barcelona Sants and Passeig de Gràcia, taking about 35–40 minutes. Alternatively, the C-32 toll road connects Sitges to Barcelona’s financial district and the airport in less than 30 minutes.',
  },
  {
    q: 'Can I obtain a tourist rental licence (HUTB) for properties in these areas?',
    a: 'Catalonia has strict rules regarding tourist licences. In Barcelona City, obtaining new licences is virtually impossible due to city-wide pauses and phase-outs. Sitges has strict municipal quotas, meaning you must purchase a property that already holds an active, transferable licence. Costa Brava towns have varying regulations, with some still issuing licences under specific zoning restrictions.',
  },
  {
    q: 'What are the international school options in these regions?',
    a: 'Barcelona and the surrounding areas host world-class international schools. Near Sitges, you have the Richmond International School and Olive Tree School. Barcelona City hosts the British School of Barcelona (with campuses in Castelldefels and Sitges too), Benjamin Franklin International School, and the American School of Barcelona. Costa Brava has fewer options, primarily located closer to Girona.',
  },
  {
    q: 'Are property prices rising in Catalonia?',
    a: 'Yes, premium coastal locations like Sitges and prime districts in Barcelona City continue to see steady price appreciation and high demand due to limited inventory, land constraints, and persistent interest from international buyers seeking lifestyle properties and capital preservation.',
  },
  {
    q: 'How does Garnish Real Estate assist buyers across these different regions?',
    a: 'Garnish represents the buyer exclusively. Whether you are choosing between a villa in Sitges, an apartment in Barcelona, or a retreat on the Costa Brava, we handle the search, local market valuations, negotiation, and full legal due diligence. We charge a simple, transparent flat fee of €3,000, which includes the entire conveyancing process, ensuring you don\'t pay inflated estate agent markups or separate solicitor fees.',
  },
];

export default function CataloniaAreaProfiles() {
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
            <span className="text-white">Catalonia Area Profiles</span>
          </nav>

          <span className="text-[#00deb6] text-xs font-bold uppercase tracking-widest block mb-3">Area Profiles</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-5 max-w-3xl">
            Catalonia Area Profiles
          </h1>
          <p className="text-[#dbdee0] text-lg leading-relaxed max-w-2xl">
            Comparing life, logistics, and real estate in Sitges, Barcelona City, and Costa Brava to help you secure the ideal luxury property.
          </p>
        </div>
      </section>

      {/* Key Considerations Summary Box */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div className="bg-white border border-[#dbdee0] rounded p-6 md:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00847b] mb-5">Key Regional Considerations</p>
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
                <p className="text-xs font-bold text-[#000433] mb-1.5">Where to buy?</p>
                <p className="text-xs text-[#5e6573] mb-3 leading-relaxed">
                  Book a free consultation to map your location strategy.
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
            {/* Intro / Overview */}
            <section id="overview" className="mb-10 pb-8 border-b border-[#dbdee0] scroll-mt-28">
              <p className="text-base text-[#5e6573] leading-relaxed mb-4">
                Catalonia offers some of the most dynamic, visually stunning, and financially resilient real estate markets in Southern Europe. However, selecting the right location involves balancing distinct lifestyles, logistical connections, and localized regulatory environments.
              </p>
              <p className="text-base text-[#5e6573] leading-relaxed">
                For international buyers, the choice typically narrows to three premier regions: the elegant coastal enclave of <strong>Sitges</strong>, the cosmopolitan metropolis of <strong>Barcelona City</strong>, or the rugged shores of the <strong>Costa Brava</strong>. This profile compares the liveability, connectivity, and property landscapes of each area.
              </p>
            </section>

            {/* ── Section 1: Sitges Profile ────────────────────────────── */}
            <section id="sitges-profile" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 01</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-4">Sitges: The Premium Coastal Enclave</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Positioned just south of Barcelona, Sitges is a historically artistic seaside town that has evolved into one of Spain&apos;s most sought-after luxury destinations. Flanked by the Garraf Massif and the Mediterranean Sea, Sitges is sheltered from harsh northern winds, enjoying a unique microclimate and beautiful sandy beaches.
              </p>
              
              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Lifestyle & Logistics</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4 text-sm">
                Sitges offers an unparalleled blend of seaside tranquillity and international sophistication. Its historic centre is compact, walking-friendly, and filled with upscale restaurants, cafes, and boutiques. Unlike many coastal resorts, Sitges remains active during winter, driven by a highly integrated local and expat community, international school hubs, and cultural festivals (like the Sitges Film Festival).
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-4 text-sm">
                Logistically, Sitges is unbeatable. It sits a mere 25-minute drive from Barcelona El Prat Airport via the C-32 motorway, and regular trains connect to Barcelona City centre in 35 minutes.
              </p>

              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Real Estate Market</h3>
              <p className="text-[#5e6573] leading-relaxed text-sm">
                Properties in Sitges hold premium valuations, offering excellent capital preservation. The inventory consists of modern sea-view apartments, historic townhouses, and expansive luxury villas in exclusive residential areas like Terramar, Vinyet, and Levantina. Because of the town&apos;s natural boundaries (sea and hills), land is highly limited, keeping supply low and demand consistently high.
              </p>
            </section>

            {/* Midway CTA Banner */}
            <div className="bg-[#000433] text-white rounded p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#00deb6] mb-1">Sitges Real Estate Focus</p>
                <p className="text-base font-semibold leading-snug">
                  Securing high-end coastal properties with tailored local search and due diligence.
                </p>
              </div>
              <Link
                href="/#contact"
                className="flex-shrink-0 px-5 py-2.5 bg-[#00847b] text-white text-sm font-bold rounded hover:bg-[#006b64] transition-colors whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* ── Section 2: Barcelona City ────────────────────────────── */}
            <section id="barcelona-profile" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 02</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-4">Barcelona City: The Cosmopolitan Hub</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Barcelona is Catalonia’s capital and a global powerhouse for business, tech, culture, and architecture. It attracts buyers seeking a high-energy urban lifestyle paired with Mediterranean coastal benefits.
              </p>
              
              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Lifestyle & Logistics</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4 text-sm">
                From the historic Gothic Quarter to the grid-patterned streets of Eixample, Barcelona offers endless culinary, cultural, and retail experiences. Public transport is comprehensive, and the city is highly connected globally through El Prat Airport. However, urban density means dealing with higher noise levels, tourist crowds, and typical city pace.
              </p>

              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Real Estate Market</h3>
              <p className="text-[#5e6573] leading-relaxed text-sm">
                The urban property market is diverse. High-ceilinged modernist apartments in Eixample, sea-facing flats in Diagonal Mar, and quiet luxury homes in the hills of Pedralbes and Sarrià represent the primary choices. The market has high transaction volumes, but buyers must be vigilant regarding rental licensing regulations, which are the strictest in Catalonia.
              </p>
            </section>

            {/* ── Section 3: Costa Brava ────────────────────────────── */}
            <section id="costa-brava-profile" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 03</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-4">Costa Brava: The Rugged Retreat</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Stretching from Blanes north to the French border, the Costa Brava (&quot;Wild Coast&quot;) is famed for its dramatic cliffs, pristine pine-fringed coves (calas), and medieval villages.
              </p>
              
              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Lifestyle & Logistics</h3>
              <p className="text-[#5e6573] leading-relaxed mb-4 text-sm">
                The Costa Brava is ideal for those seeking tranquillity, nature, and seasonal coastal living. Highlights include coastal walks along the Camí de Ronda, sailing, and dining in towns like Begur, Llafranc, and Cadaqués. Logistics are more complex, requiring a car. The drive to Barcelona El Prat Airport ranges from 1 to 2 hours, though Girona Airport offers regional options. During winter, many towns become very quiet, with some local businesses closing for the season.
              </p>

              <h3 className="text-base font-bold text-[#000433] mt-4 mb-2">Real Estate Market</h3>
              <p className="text-[#5e6573] leading-relaxed text-sm">
                The Costa Brava market offers cliffside villas with panoramic sea views and restored inland stone country houses (masias). The buying process is often slower, and properties can have complex rustic zoning laws. Independent legal and buyer guidance is essential to avoid purchasing homes with structural or land-use issues.
              </p>
            </section>

            {/* ── Section 4: Side-by-Side Comparison ────────────────────── */}
            <section id="comparison" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 04</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Side-by-Side Comparison</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                This table summarizes the core differences between the three locations to assist in your property selection:
              </p>
              <div className="overflow-x-auto rounded border border-[#dbdee0]">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#dbdee0] bg-[#f3f4f6]">
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/4">Criteria</th>
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/4">Sitges</th>
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/4">Barcelona City</th>
                      <th className="text-left font-bold text-[#000433] py-3 px-4 w-1/4">Costa Brava</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([crit, sit, bar, cb], i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#dbdee0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f6]'}`}
                      >
                        <td className="py-3 px-4 text-[#000433] font-bold align-top">{crit}</td>
                        <td className="py-3 px-4 text-[#5e6573] align-top">{sit}</td>
                        <td className="py-3 px-4 text-[#5e6573] align-top">{bar}</td>
                        <td className="py-3 px-4 text-[#5e6573] align-top">{cb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 5: Why Use a Buyer's Agent ─────────────────────── */}
            <section id="buyer-agent" className="mb-12 scroll-mt-28">
              <span className="text-[#00847b] text-xs font-bold uppercase tracking-widest block mb-2">Section 05</span>
              <h2 className="text-2xl font-bold text-[#000433] mb-5">Why Use an Independent Buyer’s Agent</h2>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                Real estate agencies in Catalonia represent the seller’s financial interests and aim to secure the highest sale price. They are not legally obliged to disclose structural faults, zoning restrictions, or unfavourable community regulations.
              </p>
              <p className="text-[#5e6573] leading-relaxed mb-4">
                At Garnish Real Estate, we act as independent buyer’s agents. We do not represent sellers, nor do we maintain a portfolio. This allows us to provide unbiased reports and negotiate purely in your interest.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#5e6573] mb-6">
                <li><strong>Unbiased Location Advice:</strong> Helping you compare areas objectively based on your lifestyle needs.</li>
                <li><strong>Full Market Access:</strong> Sourcing properties from all agencies, private sellers, and off-market networks.</li>
                <li><strong>Rigorous Due Diligence:</strong> Checking planning licences, title deeds, and structural stability.</li>
                <li><strong>In-house Legal Conveyancing:</strong> Handling contracts, tax payments, and notary preparations under our flat fee structure.</li>
              </ul>
              <p className="text-[#5e6573] leading-relaxed">
                By charging a transparent flat fee of €3,000, we make premium buyer representation and legal cover accessible and cost-effective, saving you both time and unnecessary agent markups.
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
                Ready to Find Your Home in Catalonia?
              </h2>
              <p className="text-[#dbdee0] text-base leading-relaxed max-w-xl mx-auto mb-8">
                Connect with our independent buyer agents. We offer a free consultation to map out your location criteria, property preferences, and legal roadmap in Sitges, Barcelona, and the Costa Brava.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 bg-[#00847b] text-white font-bold text-sm rounded hover:bg-[#006b64] transition-colors"
                >
                  Start Your Property Search
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3.5 border border-white/30 text-white font-bold text-sm rounded hover:border-white/60 transition-colors"
                >
                  Return Home
                </Link>
              </div>
              <p className="mt-6 text-xs text-[#5e6573]">
                Independent. Flat fee of €3,000 including full legal representation.
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
