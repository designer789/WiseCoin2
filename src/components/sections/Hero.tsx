'use client';

import { FlickeringGrid } from "@/components/FlickeringGrid";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#003040] via-[#01192a] to-[#01050D]">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <FlickeringGrid 
            squareSize={2} 
            gridGap={14} 
            flickerChance={0.08} 
            color="rgb(121, 221, 232)" 
            maxOpacity={0.15}
          />
          
          {/* Logo Background - positioned under masks */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative w-full max-w-4xl h-[28rem] md:h-[34rem] lg:h-[40rem] mix-blend-screen opacity-20">
              <Image
                src="/favicon.png"
                alt="Logo Background"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Fade-out mask overlays */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent from-10% to-black opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#01050D] from-20% via-transparent to-transparent opacity-90"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#003040]/20 to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#01050D] to-transparent opacity-95"></div>
        </div>
      </div>

      {/* Upper Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-12 relative z-30">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 mb-4">
            <span className="text-gradient">WISECOIN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-6">
            Your Smart Cryptocurrency Investment Assistant
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl font-light">
            Smarter Investing Powered by WiseAI
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x8c0849d66ecb8d60a003bdb241ea7b1d7c174b3e?t=1745921649282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Started
            </a>
            <a 
              href="https://wisecoin.gitbook.io/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Gitbook
            </a>
          </div>
        </div>
      </div>
      
      {/* Content-only spacer to maintain height */}
      <div className="h-32 md:h-48 lg:h-60"></div>
    </section>
  );
} 