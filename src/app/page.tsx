import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* If we had an image, it would go here as a background */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Perfect Home</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the best properties in your area. We make finding your dream home easy and stress-free.
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Enter location, property type, or keywords..." 
              className="flex-grow px-4 py-3 text-black rounded focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock Property Card */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 aspect-video w-full" />
              <div className="p-6">
                <div className="text-blue-600 font-bold text-xl mb-2">$450,000</div>
                <h3 className="font-bold text-lg mb-2">
                  <Link href="/properties/sample-property" className="hover:text-blue-600 transition-colors">
                    Beautiful Family Home
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">123 Maple Street</p>
                <div className="flex items-center text-sm text-gray-500 gap-4 border-t pt-4">
                  <span>🛏️ 4 Beds</span>
                  <span>🛁 2 Baths</span>
                  <span>📏 2500 sqft</span>
                </div>
              </div>
            </div>
            
            {/* More Mock Cards could go here */}
          </div>
          <div className="text-center mt-12">
            <Link href="/properties" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-semibold transition-colors">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section (Migrated from WP typical sections) */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Choose Garnish Real Estate?</h2>
          <p className="text-gray-600 mb-12">
            With years of experience in the market, our dedicated agents ensure you get the best deals, 
            whether you are buying, selling, or renting. We preserve the quality and trust built over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold mb-2">Top Rated Agents</h3>
              <p className="text-sm text-gray-500">Expert guidance throughout the entire process.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-bold mb-2">Premium Listings</h3>
              <p className="text-sm text-gray-500">Exclusive access to the best properties.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Trusted Agency</h3>
              <p className="text-sm text-gray-500">A track record of successful transactions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
