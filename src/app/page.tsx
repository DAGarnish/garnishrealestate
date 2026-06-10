import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[#2c3e50] text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://garnishrealestate.com/wp-content/uploads/2015/05/slider-1.jpg')", opacity: 0.4 }}
        />
        <div className="w-full px-[300px] relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading leading-tight tracking-wide drop-shadow-md">
            THE BEST WAY TO FIND YOUR HOME
          </h1>
          <p className="text-lg mb-10 max-w-2xl mx-auto drop-shadow text-gray-200">
            With over 700,000 active listings, Realtyspace has the largest inventory of apartments in the United States.
          </p>

          {/* Search Form Tab */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input 
                type="text" 
                placeholder="Address, City, Zip" 
                className="w-full px-4 py-3 rounded-sm border-none text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary"
              />
              <select className="w-full px-4 py-3 rounded-sm border-none text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary">
                <option>Any Location</option>
                <option>New York</option>
                <option>Florida</option>
              </select>
              <select className="w-full px-4 py-3 rounded-sm border-none text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-realty-primary">
                <option>Any Property Type</option>
                <option>Apartments/Flat</option>
                <option>Villa / House</option>
              </select>
              <button className="bg-realty-primary hover:bg-[#009b8e] text-white font-bold font-heading uppercase tracking-wider py-3 rounded-sm transition duration-300 shadow-md">
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

      {/* Features Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="w-full px-[300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-realty-primary border border-gray-100 group hover:bg-realty-primary hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-bold text-realty-dark text-[15px] uppercase font-heading tracking-wide">Our Mission</h3>
              <p className="text-gray-500 text-[13px]">To provide the best real estate service.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-realty-primary border border-gray-100 group hover:bg-realty-primary hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-realty-dark text-[15px] uppercase font-heading tracking-wide">Save Money</h3>
              <p className="text-gray-500 text-[13px]">No hidden fees or extra costs.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-realty-primary border border-gray-100 group hover:bg-realty-primary hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-realty-dark text-[15px] uppercase font-heading tracking-wide">Good Sales</h3>
              <p className="text-gray-500 text-[13px]">Proven track record of high value sales.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-realty-primary border border-gray-100 group hover:bg-realty-primary hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="font-bold text-realty-dark text-[15px] uppercase font-heading tracking-wide">Comfort</h3>
              <p className="text-gray-500 text-[13px]">Smooth and stress-free transitions.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-realty-primary border border-gray-100 group hover:bg-realty-primary hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="font-bold text-realty-dark text-[15px] uppercase font-heading tracking-wide">Easy to Find</h3>
              <p className="text-gray-500 text-[13px]">Find your dream home in just a few clicks.</p>
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

    </div>
  );
}
