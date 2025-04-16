'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    // The actual scrolling is now handled by Lenis in the lenis-scroll.ts file
    // We just need to make sure the link has the correct href
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#01050d] via-cyan-900 to-cyan-300 backdrop-blur-xl overflow-hidden">
      {/* Glass effect overlay */}
      
      <div className="absolute inset-0 bg-[#01050d]/5 backdrop-blur-md"></div>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Main Footer */}
      <div className="mx-auto max-w-lg px-4 py-16 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-12">
          <Image 
            src="/site-logo.png" 
            alt="WiseCoin Logo" 
            width={180} 
            height={180} 
            className="h-auto w-auto"
          />
        </div>

        {/* Menu Links */}
        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-6 mb-6">
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection('about', e)}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                onClick={(e) => scrollToSection('features', e)}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#technology" 
                onClick={(e) => scrollToSection('technology', e)}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Technology
              </a>
            </li>
            <li>
              <a 
                href="#tokenomics" 
                onClick={(e) => scrollToSection('tokenomics', e)}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a 
                href="#roadmap" 
                onClick={(e) => scrollToSection('roadmap', e)}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/WiseCoin_" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center w-10 h-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://t.me/WiseCoin_Official" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center w-10 h-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright with full-width border */}
      <div className="border-t border-cyan-800/30 w-full relative z-10">
        <div className="mx-auto max-w-md px-4 py-6 text-center">
          <p className="text-cyan-300/90 text-sm">
            © {new Date().getFullYear()} WiseCoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 