import Link from 'next/link';

export default function OurAgentsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f9f9f9]">
      
      {/* Page Header */}
      <section className="relative py-16 flex flex-col items-center justify-center bg-[#2c3e50] text-white">
        <div className="w-full px-[300px] relative z-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold font-heading uppercase tracking-wide">Our Agents</h1>
          <div className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">
            <Link href="/" className="hover:text-white transition">Home</Link> <span className="mx-2">/</span> <span className="text-realty-primary">Our Agents</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 flex-grow">
        <div className="w-full px-[300px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-6 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <img src={`https://garnishrealestate.com/wp-content/uploads/2015/07/${(i % 4) + 1}-3.jpg`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" alt="Agent" />
                <h3 className="font-bold text-realty-dark text-lg font-heading hover:text-realty-primary cursor-pointer transition">Agent Name</h3>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-4">Real Estate Broker</p>
                <p className="text-gray-400 text-sm mb-6 border-t border-gray-100 pt-4">Call: (123) 456-7890</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-8 h-8 rounded-sm bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-realty-primary hover:text-white transition"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                  <a href="#" className="w-8 h-8 rounded-sm bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#1da1f2] hover:text-white transition"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
    </div>
  );
}
