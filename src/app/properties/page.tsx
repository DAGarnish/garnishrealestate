import Link from 'next/link';

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f9f9f9]">
      
      {/* Page Header */}
      <section className="relative py-16 flex flex-col items-center justify-center bg-[#2c3e50] text-white">
        <div className="w-full px-[300px] relative z-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold font-heading uppercase tracking-wide">Properties</h1>
          <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">
            <Link href="/" className="hover:text-white transition">Home</Link> <span className="mx-2">/</span> <span className="text-realty-primary">Properties</span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-16 flex-grow">
        <div className="w-full px-[300px] mx-auto flex gap-8">
          
          {/* Main Content: Properties Grid */}
          <div className="w-3/4">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-100 mb-8 flex justify-between items-center">
              <span className="text-gray-500 text-sm">Showing 1–9 of 15 results</span>
              <select className="border border-gray-200 text-sm p-2 rounded-sm text-gray-600 focus:outline-none focus:border-realty-primary">
                <option>Sort by Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={`https://garnishrealestate.com/wp-content/uploads/2015/07/${i}-1.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Property" />
                    <div className="absolute top-4 left-4 bg-realty-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">For Sale</div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white font-bold text-lg">$ {i}50,000</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-md mb-2 text-realty-dark font-heading"><Link href="#" className="hover:text-realty-primary transition">Villa on Hollywood Blvd</Link></h3>
                    <p className="text-gray-500 text-[12px] mb-4 truncate">Prestigious area of Los Angeles...</p>
                    <div className="flex items-center text-[11px] text-gray-500 font-bold border-t border-gray-100 pt-3 space-x-3">
                      <span>3 Beds</span>
                      <span>2 Baths</span>
                      <span>1200 SQFT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center space-x-2">
              <span className="w-10 h-10 flex items-center justify-center bg-realty-primary text-white font-bold rounded-sm shadow-sm cursor-pointer">1</span>
              <span className="w-10 h-10 flex items-center justify-center bg-white text-gray-500 font-bold rounded-sm shadow-sm border border-gray-100 hover:text-realty-primary cursor-pointer transition">2</span>
              <span className="w-10 h-10 flex items-center justify-center bg-white text-gray-500 font-bold rounded-sm shadow-sm border border-gray-100 hover:text-realty-primary cursor-pointer transition">→</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-1/4">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 mb-8">
              <h3 className="font-bold text-realty-dark font-heading uppercase tracking-wider mb-6 border-b border-gray-100 pb-3">Advanced Search</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Location" className="w-full px-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-realty-primary" />
                <select className="w-full px-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-realty-primary text-gray-500">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-realty-primary text-gray-500">
                  <option>Contract Type</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
                <button className="w-full bg-realty-primary hover:bg-[#009b8e] text-white font-bold font-heading uppercase tracking-wider py-3 rounded-sm transition duration-300 shadow-sm mt-4">
                  Search
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
              <h3 className="font-bold text-realty-dark font-heading uppercase tracking-wider mb-6 border-b border-gray-100 pb-3">Recent Properties</h3>
              <div className="space-y-4">
                <div className="flex space-x-3 items-center group cursor-pointer">
                  <img src="https://garnishrealestate.com/wp-content/uploads/2015/07/1-1.jpg" className="w-16 h-16 object-cover rounded-sm" alt="Prop" />
                  <div>
                    <h4 className="font-bold text-[13px] text-realty-dark group-hover:text-realty-primary transition">Cozy Flat in NY</h4>
                    <span className="text-realty-primary font-bold text-[12px]">$450,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
