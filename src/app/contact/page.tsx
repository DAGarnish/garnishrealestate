import React from 'react';

export const metadata = {
  title: 'Contact Us | Garnish Real Estate',
  description: 'Get in touch with Garnish Real Estate for your property needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans">
      {/* Map Section - Moved to top per user request */}
      <div className="w-full h-[450px] bg-gray-200 relative group">
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0617304192667!2d-122.39686008468202!3d37.78854097975698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063326127e9%3A0xc66c1b30537f5207!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1655074697330!5m2!1sen!2sus" 
          className="w-full h-full border-0 absolute inset-0 grayscale-[50%] hover:grayscale-0 transition duration-700" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Map Toggle Buttons */}
        <div className="absolute top-6 right-6 z-10 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button type="button" className="px-4 py-2 bg-white text-realty-dark font-bold font-heading uppercase tracking-wider text-[11px] shadow-md border border-gray-200 hover:bg-realty-primary hover:text-white transition-colors">
            Address Map
          </button>
          <button type="button" className="px-4 py-2 bg-white text-realty-dark font-bold font-heading uppercase tracking-wider text-[11px] shadow-md border border-gray-200 hover:bg-realty-primary hover:text-white transition-colors">
            Satellite View
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-10 relative mb-6">
        <div className="w-full px-[300px] text-center relative z-10">
          <h1 className="text-2xl font-bold mb-3 text-realty-dark font-heading uppercase tracking-wider">Contact</h1>
          <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider font-heading">
            <span className="hover:text-realty-primary cursor-pointer transition-colors">Home</span> <span className="mx-2">/</span> <span className="text-realty-primary">Contact</span>
          </div>
        </div>
      </div>

      <div className="w-full px-[300px] pb-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Locations + Form) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Office Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* New York Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-realty-dark font-heading uppercase tracking-wider">New York</h3>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Address:</span>
                    <span className="font-bold text-realty-dark text-[13px]">80 Franklin Street<br/>New York, NY 10013</span>
                  </div>
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Email:</span>
                    <a href="mailto:hello@realtyspace.com" className="text-realty-primary hover:text-realty-dark font-bold transition text-[13px]">hello@realtyspace.com</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Working Hours:</span>
                    <span className="text-gray-500 text-[13px]">08:00 - 17:00 mon-fr</span>
                  </div>
                </div>
              </div>

              {/* Florida Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-realty-dark font-heading uppercase tracking-wider">Florida</h3>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Telephone:</span>
                    <a href="tel:+12025550135" className="font-bold text-realty-dark hover:text-realty-primary transition text-[13px]">+1 202 555 0135</a>
                  </div>
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Fax:</span>
                    <span className="font-bold text-realty-dark text-[13px]">+1 202 555 0145</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Email:</span>
                    <a href="mailto:florida@realtyspace.com" className="text-realty-primary hover:text-realty-dark font-bold transition text-[13px]">florida@realtyspace.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="pt-6 border-t border-gray-200">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-realty-dark mb-2 font-heading uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2.5 rounded-sm border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-realty-primary focus:border-realty-primary focus:bg-white transition text-[13px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telephone" className="block text-[10px] font-bold text-realty-dark mb-2 font-heading uppercase tracking-wider">Telephone</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      className="w-full px-4 py-2.5 rounded-sm border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-realty-primary focus:border-realty-primary focus:bg-white transition text-[13px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-realty-dark mb-2 font-heading uppercase tracking-wider">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2.5 rounded-sm border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-realty-primary focus:border-realty-primary focus:bg-white transition text-[13px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-realty-dark mb-2 font-heading uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-sm border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-realty-primary focus:border-realty-primary focus:bg-white transition resize-none text-[13px]"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="px-6 py-2.5 bg-[#f1c40f] hover:bg-[#d4ac0d] text-realty-dark font-bold font-heading uppercase tracking-wider text-[11px] rounded-sm transition duration-300 ease-in-out shadow-sm w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Company Info & Social) */}
          <div className="lg:col-span-5 pl-0 lg:pl-6">
            <h3 className="text-xl font-bold mb-4 text-realty-dark font-heading leading-tight">Contact Us to Sign Up<br/>for an Open House</h3>
            
            <p className="text-gray-500 leading-relaxed mb-4 text-[13px]">
              Founded in August of 2008 and based in San Francisco, California, RealtySpace is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone.
            </p>
            
            <p className="text-gray-500 leading-relaxed mb-8 text-[13px]">
              Whether an apartment for a night, a castle for a week, or a villa for a month, RealtySpace connects people to unique travel experiences, at any price point, in more than 190 countries. And with world-class customer service, RealtySpace is the easiest way for people to monetize their extra space.
            </p>

            <div className="border-t border-gray-200 pt-5">
              <h4 className="font-bold text-realty-dark mb-3 text-[11px] uppercase tracking-wider font-heading">Our social profiles:</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-realty-primary hover:text-realty-dark transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-realty-primary hover:text-realty-dark transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
