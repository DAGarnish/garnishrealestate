import Link from 'next/link';

export default function GridGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center bg-[#2c3e50] text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://garnishrealestate.com/wp-content/uploads/2016/04/bg-feature.jpg')", opacity: 0.2 }}
        />
        <div className="w-full px-[300px] relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 font-heading uppercase tracking-wide">Grid Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Browse properties in a grid layout.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#f9f9f9] flex-grow">
        <div className="w-full px-[300px] mx-auto">
          <div className="bg-white p-12 rounded-sm shadow-sm border border-gray-100 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <h2 className="text-2xl font-heading font-bold text-realty-dark mb-4 uppercase tracking-wider">Grid Gallery Content</h2>
            <p className="text-gray-500 mb-8">This page is currently a placeholder. The dynamic content for the Grid Gallery section will be populated here.</p>
            <Link href="/" className="inline-block bg-realty-primary hover:bg-[#009b8e] text-white font-bold font-heading uppercase tracking-wider px-8 py-3 rounded-sm transition duration-300 shadow-sm">
              Return Home
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
