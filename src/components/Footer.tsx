import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#222] text-[#bebebe] py-16 mt-auto font-sans text-[13px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Archives, Categories, About & Social */}
        <div className="space-y-10">
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Archives</h4>
            <ul className="space-y-2">
              <li><Link href="/2022/09/" className="hover:text-realty-primary transition">September 2022</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/uncategorized/" className="hover:text-realty-primary transition">Uncategorized</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">About</h4>
            <p className="leading-relaxed">
              Garnish Real Estate is the leader in online real estate and operator of the WK of real estate web site for consumers and real estate professionals. Real Estate of websites captures more than 20 million monthly visitors<br />
              Garnish Real Estate is the leader in online real estate and operator of the WK of real
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Social</h4>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[#3a3a3a] hover:border-realty-primary hover:text-realty-primary flex items-center justify-center transition rounded-[3px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[#3a3a3a] hover:border-realty-primary hover:text-realty-primary flex items-center justify-center transition rounded-[3px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://plus.google.com/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[#3a3a3a] hover:border-realty-primary hover:text-realty-primary flex items-center justify-center transition rounded-[3px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.662 3.969-5.445 3.969-3.136 0-5.681-2.544-5.681-5.68s2.545-5.681 5.681-5.681c1.458 0 2.766.562 3.766 1.488l2.942-2.942C17.518 3.513 15.228 2.5 12.545 2.5 7.275 2.5 3 6.775 3 12.045s4.275 9.545 9.545 9.545c5.503 0 9.176-3.874 9.176-9.336 0-.829-.115-1.602-.303-2.339H12.545z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Contact & Feedback */}
        <div className="space-y-10">
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Contact</h4>
            <address className="not-italic flex flex-col space-y-2">
              <span>80 Franklin Street New York, NY 10013 USA</span>
              <span>08 - 17 mon-fr</span>
              <a href="tel:+12025550135" className="hover:text-realty-primary transition">+1 202 555 0135</a>
              <a href="tel:+12025550145" className="hover:text-realty-primary transition">+1 202 555 0145</a>
              <a href="mailto:contact@realtyspace.com" className="hover:text-realty-primary transition">contact@realtyspace.com</a>
            </address>
          </div>
          <div>
            <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Feedback</h4>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-[#181818] border border-transparent focus:border-realty-primary focus:bg-black px-4 py-3 outline-none transition rounded-[3px] text-[#bebebe] placeholder-[#bebebe]" 
              />
              <textarea 
                placeholder="Message for us" 
                rows={4}
                className="w-full bg-[#181818] border border-transparent focus:border-realty-primary focus:bg-black px-4 py-3 outline-none transition rounded-[3px] resize-none text-[#bebebe] placeholder-[#bebebe]"
              />
              <button 
                type="button" 
                className="bg-[#f1c40f] hover:bg-[#d4ac0d] text-[#2c3e50] font-bold font-heading uppercase tracking-wider text-[11px] px-8 py-3 rounded-[3px] transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Column 3: Latest Article */}
        <div>
          <h4 className="text-white font-bold font-heading text-base mb-5 uppercase tracking-wider">Latest Article</h4>
          <div className="space-y-5">
            <div>
              <Link href="/this-is-new-testing/" className="text-white hover:text-realty-primary font-bold transition font-heading text-[15px] block mb-1">
                This Is New Testing
              </Link>
              <time className="text-[10px] uppercase tracking-wider text-[#bebebe] font-bold">Wed - 28 Sep - 3:39 am</time>
            </div>
            <div>
              <Link href="/this-is-testing-english/" className="text-white hover:text-realty-primary font-bold transition font-heading text-[15px] block mb-1">
                This is testing (English)
              </Link>
              <time className="text-[10px] uppercase tracking-wider text-[#bebebe] font-bold">Sat - 17 Sep - 10:32 pm</time>
            </div>
            <div>
              <Link href="/this-is-testing/" className="text-white hover:text-realty-primary font-bold transition font-heading text-[15px] block mb-1">
                This is testing
              </Link>
              <time className="text-[10px] uppercase tracking-wider text-[#bebebe] font-bold">Sat - 17 Sep - 10:20 pm</time>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/blog/" className="text-[#bebebe] border-b border-[#bebebe] pb-[2px] hover:text-realty-primary hover:border-realty-primary transition text-[11px] font-bold uppercase tracking-wider">
              More articles
            </Link>
          </div>
        </div>

      </div>
      
      {/* Copyright Line */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-[#3a3a3a] flex items-center justify-between">
        <span>&copy; {new Date().getFullYear()} Garnish Real Estate | Main. All rights reserved.</span>
      </div>
    </footer>
  );
}

