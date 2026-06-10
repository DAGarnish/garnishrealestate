import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-32 flex items-center justify-center bg-[#2c3e50] text-white overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe 
            src="https://www.youtube.com/embed/lMJXxhRFO1k?autoplay=1&mute=1&loop=1&playlist=lMJXxhRFO1k&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1" 
            className="w-[100vw] h-[56.25vw] min-h-[85vh] min-w-[151vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="w-full px-[300px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-5xl font-bold mb-6 font-heading leading-tight tracking-wide drop-shadow-md">
              THE BEST WAY TO FIND YOUR HOME
            </h1>
            <p className="text-lg drop-shadow text-gray-200">
              With over 700,000 active listings, Realtyspace has the largest inventory of apartments in the United States.
            </p>
          </div>

          {/* Search Form Sidebar */}
          <div className="w-full md:w-[350px] bg-black/40 backdrop-blur-sm p-8 rounded-sm shadow-2xl flex-shrink-0">
            <h3 className="text-white font-heading font-bold uppercase tracking-wider mb-6 text-lg border-b border-white/20 pb-4">Search Properties</h3>
            
            {/* Form Fields */}
            <div className="space-y-4">
              <div className="flex flex-col text-left">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">SKU</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-white/90 rounded-sm border-none text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary transition"
                />
              </div>

              <div className="flex flex-col text-left">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">Property Location</label>
                <select className="w-full px-4 py-2 bg-white/90 rounded-sm border-none text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary transition">
                  <option>Any</option>
                  <option>New York</option>
                  <option>Florida</option>
                </select>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">Contract type</label>
                <select className="w-full px-4 py-2 bg-white/90 rounded-sm border-none text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary transition">
                  <option>Any</option>
                  <option>Sale</option>
                  <option>Rent</option>
                </select>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">Property type</label>
                <select className="w-full px-4 py-2 bg-white/90 rounded-sm border-none text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary transition">
                  <option>Any</option>
                  <option>Apartment</option>
                  <option>Villa / House</option>
                </select>
              </div>

              <div className="flex flex-col text-left pt-2">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">Price ($)</label>
                <input type="range" className="w-full accent-realty-primary" />
              </div>

              <div className="flex flex-col text-left pt-2 mb-6">
                <label className="text-[11px] text-gray-300 uppercase tracking-wider mb-2 font-bold">Bedrooms</label>
                <input type="range" className="w-full accent-realty-primary" />
              </div>
              
              <button className="w-full bg-realty-primary hover:bg-[#009b8e] text-white font-bold font-heading uppercase tracking-wider py-4 rounded-sm transition duration-300 shadow-md mt-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estates Section */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="w-full px-[300px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-realty-dark font-heading uppercase tracking-wider relative inline-block">
            Real Estates
            <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Property 1 */}
            <div className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://garnishrealestate.com/wp-content/uploads/2015/07/1-1.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Property" />
                <div className="absolute top-4 left-4 bg-realty-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">For Sale</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-bold text-xl">$ 1,200,000</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-realty-dark font-heading"><Link href="#" className="hover:text-realty-primary transition">Villa on Hollywood Boulevard</Link></h3>
                <p className="text-gray-500 text-[13px] mb-4">The property is located in one of the most prestigious areas of Los Angeles.</p>
                <div className="flex items-center text-[12px] text-gray-500 font-bold border-t border-gray-100 pt-4 space-x-4">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1200 SQFT</span>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://garnishrealestate.com/wp-content/uploads/2015/07/2-1.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Property" />
                <div className="absolute top-4 left-4 bg-[#e74c3c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">For Rent</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-bold text-xl">$ 2,500 / mo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-realty-dark font-heading"><Link href="#" className="hover:text-realty-primary transition">Cozy Flat in New York</Link></h3>
                <p className="text-gray-500 text-[13px] mb-4">A perfect apartment for a young professional in the heart of the city.</p>
                <div className="flex items-center text-[12px] text-gray-500 font-bold border-t border-gray-100 pt-4 space-x-4">
                  <span>1 Bed</span>
                  <span>1 Bath</span>
                  <span>650 SQFT</span>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src="https://garnishrealestate.com/wp-content/uploads/2015/07/3-1.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Property" />
                <div className="absolute top-4 left-4 bg-realty-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">For Sale</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-bold text-xl">$ 850,000</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-realty-dark font-heading"><Link href="#" className="hover:text-realty-primary transition">Modern House in Florida</Link></h3>
                <p className="text-gray-500 text-[13px] mb-4">Enjoy the sunny weather with this gorgeous modern minimalist house.</p>
                <div className="flex items-center text-[12px] text-gray-500 font-bold border-t border-gray-100 pt-4 space-x-4">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>2500 SQFT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission / Features Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-[300px] mx-auto flex">
          {/* Push everything to the right side of the screen */}
          <div className="w-full md:w-[60%] ml-auto flex flex-col gap-12">
            
            {/* Mission Text (At the top, different row) */}
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6 font-heading uppercase tracking-wider relative inline-block text-realty-dark">
                Our Mission
                <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-0"></div>
              </h2>
              <p className="text-gray-500 leading-relaxed mt-8 font-light text-[15px]">
                Our mission is to empower consumers with information to make smart decisions. RealtySpace is a real estate marketplace dedicated to helping homeowners, home buyers, sellers, renters and agents find and share information about homes, real estate and home improvement.
              </p>
            </div>

            {/* Features Grid (Below the text) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              
              <div className="flex gap-6">
                <div className="text-realty-primary flex-shrink-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-realty-dark text-lg font-heading tracking-wide mb-2">Save Money</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">It starts with our living database of more than 110 million U.S. homes – including homes for sale, homes for rent and homes not currently on the market.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-realty-primary flex-shrink-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-realty-dark text-lg font-heading tracking-wide mb-2">Good Sales & Marketing</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">In addition, RealtySpace operates the largest real estate and rental advertising networks in the U.S. in partnership with Livemile Homes!</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-realty-primary flex-shrink-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-realty-dark text-lg font-heading tracking-wide mb-2">Comfort</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">We strive to ensure the most comfortable and stress-free transitions into your new home with professional guidance every step of the way.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-realty-primary flex-shrink-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-realty-dark text-lg font-heading tracking-wide mb-2">Easy to Find</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">With an intuitive interface and smart filtering options, discovering your perfect dream home has never been easier or faster.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Agents Section */}
      <section className="py-20 bg-[#f6f6f6]">
        <div className="w-full px-[300px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-realty-dark font-heading uppercase tracking-wider relative inline-block">
            Our Agents
            <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <img src={`https://garnishrealestate.com/wp-content/uploads/2015/07/${i}-3.jpg`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" alt="Agent" />
                <h3 className="font-bold text-realty-dark text-lg font-heading">Agent Name</h3>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-4">Real Estate Broker</p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-400 hover:text-realty-primary"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* News and Blog Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="w-full px-[300px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-realty-dark font-heading uppercase tracking-wider relative inline-block">
            News and Blog
            <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-sm">
                <div className="overflow-hidden relative h-48">
                  <img src={`https://garnishrealestate.com/wp-content/uploads/2015/07/${i}-1.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" />
                  <div className="absolute top-4 left-4 bg-realty-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">Jul 20, 2016</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-realty-dark font-heading group-hover:text-realty-primary transition">Top 10 Tips for Finding Your Dream Home</h3>
                  <p className="text-gray-500 text-[13px] mb-4">Insights, tips & how-to guides on selling property and preparing your home or investment property for sale...</p>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold flex items-center space-x-2 pt-4 border-t border-gray-100">
                    <span className="hover:text-realty-primary transition">By Admin</span>
                    <span>•</span>
                    <span className="hover:text-realty-primary transition">Real Estate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="w-full px-[300px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-realty-dark font-heading uppercase tracking-wider relative inline-block">
            Testimonials
            <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-sm shadow-sm relative italic text-gray-600 border border-gray-100">
            <svg className="w-12 h-12 text-realty-primary/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <p className="text-lg mb-6 relative z-10 leading-relaxed font-sans">
              "Working with Realtyspace was the best decision we made. Their agents are incredibly knowledgeable and they guided us through every step of buying our first home. We couldn't be happier!"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img src="https://garnishrealestate.com/wp-content/uploads/2015/07/2-3.jpg" className="w-16 h-16 rounded-full object-cover" alt="Client" />
              <div className="text-left">
                <h4 className="font-bold text-realty-dark font-heading text-[15px] not-italic">Sarah & John Jenkins</h4>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider not-italic">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell or Rent CTA Background Banner */}
      <section className="relative py-24 flex items-center justify-center bg-[#2c3e50] text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://garnishrealestate.com/wp-content/uploads/2016/04/bg-feature.jpg')", opacity: 0.15 }}
        />
        <div className="w-full px-[300px] relative z-10 text-center flex flex-col items-center">
          <div className="text-4xl font-heading mb-8 uppercase tracking-wide">
            <span className="font-light">Looking to</span> <span className="font-bold text-realty-primary mx-2">Sell</span> <span className="font-light">or</span> <span className="font-bold text-realty-primary mx-2">Rent</span> <span className="font-light">Your Property?</span>
          </div>
          <a href="/submit-a-property/" className="bg-realty-primary hover:bg-[#009b8e] text-white font-bold font-heading uppercase tracking-wider px-10 py-4 rounded-sm transition duration-300 shadow-xl">
            Submit now
          </a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden relative group/slider">
        <div className="w-full px-[300px] mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-realty-dark font-heading uppercase tracking-wider relative inline-block">
            Partners
            <div className="absolute w-12 h-0.5 bg-realty-primary bottom-[-15px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          
          <div className="relative w-full flex items-center justify-center group-hover/slider:cursor-ew-resize">
            {/* Left Arrow */}
            <button className="absolute left-0 w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-realty-primary hover:border-realty-primary transition z-20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Partners Wrapper with CSS Marquee */}
            <div className="w-[80%] overflow-hidden relative flex">
              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                }
              `}</style>
              <div className="flex items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300 w-max animate-scroll hover:[animation-play-state:paused]">
                {[1, 2].map(set => (
                  <div key={set} className="flex items-center space-x-16 px-8">
                    <img src="https://garnishrealestate.com/wp-content/themes/realtyspace/public/img/partners/1.png" alt="ThemeForest" className="h-8 object-contain" />
                    <img src="https://garnishrealestate.com/wp-content/themes/realtyspace/public/img/partners/2.png" alt="AudioJungle" className="h-8 object-contain" />
                    <img src="https://garnishrealestate.com/wp-content/themes/realtyspace/public/img/partners/3.png" alt="CodeCanyon" className="h-8 object-contain" />
                    <img src="https://garnishrealestate.com/wp-content/themes/realtyspace/public/img/partners/4.png" alt="GraphicRiver" className="h-8 object-contain" />
                    <img src="https://garnishrealestate.com/wp-content/themes/realtyspace/public/img/partners/5.png" alt="VideoHive" className="h-8 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-realty-primary hover:border-realty-primary transition z-20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
