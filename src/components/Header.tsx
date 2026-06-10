"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={`w-full z-50 font-heading ${isHome ? 'absolute top-0 bg-transparent text-white' : 'sticky top-0 shadow-sm'}`}>
      {/* Top Bar */}
      <div className={`w-full py-3 px-[300px] flex items-center justify-between text-[11px] uppercase tracking-wider hidden lg:flex transition-colors duration-300 ${isHome ? 'bg-black/20 text-white' : 'bg-realty-primary text-white'}`}>
        
        {/* Left Section: Settings */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center space-x-4">
            
            {/* Currency Dropdown */}
            <div className="relative group cursor-pointer flex items-center py-1">
              <div className="flex items-center hover:opacity-80 transition-opacity">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>USD</span>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-32 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 flex flex-col">
                  <a href="#" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">EUR</a>
                  <a href="#" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">GBP</a>
                </div>
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="relative group cursor-pointer flex items-center py-1">
              <div className="flex items-center hover:opacity-80 transition-opacity">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <span>ENG</span>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-32 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 flex flex-col">
                  <a href="#" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">FRA</a>
                  <a href="#" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">SPA</a>
                </div>
              </div>
            </div>

            {/* Area Switcher */}
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity py-1">
              <span>SQFT</span>
              <div className="w-6 h-3 bg-white/30 rounded-full relative">
                <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-[1px] left-[1px]"></div>
              </div>
              <span>M²</span>
            </div>
          </div>
        </div>

        {/* Center Section: Phone & Social */}
        <div className="flex items-center justify-center space-x-6">
          <span className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +1 202 555 0135
          </span>
          <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
            <a href="#" className="hover:opacity-80 transition-opacity flex items-center justify-center" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity flex items-center justify-center" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity flex items-center justify-center" aria-label="Google Plus">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.662 3.969-5.445 3.969-3.136 0-5.681-2.544-5.681-5.68s2.545-5.681 5.681-5.681c1.458 0 2.766.562 3.766 1.488l2.942-2.942C17.518 3.513 15.228 2.5 12.545 2.5 7.275 2.5 3 6.775 3 12.045s4.275 9.545 9.545 9.545c5.503 0 9.176-3.874 9.176-9.336 0-.829-.115-1.602-.303-2.339H12.545z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Section: Email & Auth */}
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center space-x-2">
            <Link href="/login" className="hover:opacity-80 transition-opacity">Log in</Link>
            <span>/</span>
            <Link href="/register" className="hover:opacity-80 transition-opacity">Sign up</Link>
          </div>
        </div>
      </div>

      <div className={`w-full px-[300px] py-4 flex items-center justify-between border-b transition-colors duration-300 ${isHome ? 'bg-transparent border-white/20' : 'bg-[#f6f6f6] border-gray-200'}`}>
        <Link href="/" className="flex items-center">
          <img 
            src="https://garnishrealestate.com/wp-content/uploads/2022/09/Garnish-Real-Estate-Logo.png" 
            alt="Garnish Real Estate" 
            className="h-10 w-auto filter-none"
          />
        </Link>
        <nav className={`hidden xl:flex items-center space-x-4 font-semibold text-[11px] uppercase tracking-wider ${isHome ? 'text-white' : 'text-realty-dark'}`}>
          <Link href="/" className="hover:text-realty-primary transition-colors py-2">Home</Link>
          
          <div className="relative group">
            <Link href="/properties" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Properties
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-56 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-[11px]">
                <Link href="/properties/?mode=list" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">List</Link>
                <Link href="/properties/?mode=table" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Table</Link>
                
                {/* Grid Sub-menu */}
                <div className="relative group/sub">
                  <div className="px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2 cursor-pointer flex items-center justify-between">
                    <span>Grid</span>
                    <svg className="w-3 h-3 ml-1 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="absolute top-0 left-full ml-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform origin-left -translate-x-2 group-hover/sub:translate-x-0 z-50">
                    <div className="py-2 flex flex-col">
                      <Link href="/properties/?opt_property_grid_size=small" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Small</Link>
                      <Link href="/properties/?opt_property_grid_size=medium" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Medium</Link>
                      <Link href="/properties/?opt_property_grid_size=big" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Large</Link>
                    </div>
                  </div>
                </div>

                <Link href="/properties/property-agent-bottom" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Property & agent at bottom</Link>
                <Link href="/properties/property-sidebar-agent" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Property & sidebar agent</Link>
                
                {/* Filter by types Sub-menu */}
                <div className="relative group/sub">
                  <div className="px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2 cursor-pointer flex items-center justify-between">
                    <span>Filter by types</span>
                    <svg className="w-3 h-3 ml-1 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="absolute top-0 left-full ml-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform origin-left -translate-x-2 group-hover/sub:translate-x-0 z-50">
                    <div className="py-2 flex flex-col">
                      <Link href="/property_type/apartmentsflat" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Apartments/Flat</Link>
                      <Link href="/property_type/villa-house" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Villa / House</Link>
                      <Link href="/property_type/commercial" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Commercial</Link>
                      <Link href="/property_type/cottage" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Cottage</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/agents" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Agents
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/agents?mode=list" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">All Agents</Link>
                <Link href="/agents/helene-powers" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Single Agent</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/user" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              User
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-[11px]">
                <Link href="/user/my-properties" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">My properties</Link>
                <Link href="/user/submit-property" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Submit a property</Link>
                <Link href="/user/profile" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Profile</Link>
              </div>
            </div>
          </div>


          <div className="relative group">
            <Link href="/pages" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Pages
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/about" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">About Us</Link>
                <Link href="/faq" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">FAQ</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/gallery" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Gallery
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/gallery/full" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Gallery Full</Link>
                <Link href="/gallery/grid" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Gallery Grid</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link href="/blog" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Blog
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/blog/default" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Blog Default</Link>
                <Link href="/blog/grid" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Blog Grid</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/idx" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              IDX / MLS
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/idx/search" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Property Search</Link>
                <Link href="/idx/map" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Map Search</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/other" className="hover:text-realty-primary transition-colors py-2 flex items-center">
              Other
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/404" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">404 Page</Link>
                <Link href="/terms" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/contact" className="text-realty-primary py-2 flex items-center">
              Contact
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-realty-primary text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-2 flex flex-col capitalize text-xs text-white">
                <Link href="/contact" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Contact & Map</Link>
                <Link href="/contact/banner" className="block px-4 py-2 hover:bg-white/10 text-white transition-all duration-300 hover:translate-x-2">Contact & Banner</Link>
              </div>
            </div>
          </div>
        </nav>
        
        <button className="xl:hidden text-realty-dark focus:outline-none ml-auto">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
}
