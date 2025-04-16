import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20" style={{ backgroundColor: '#01050d' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-6 sm:p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Content - appears first on mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-300 mb-4 sm:mb-6">
                ABOUT WISECOIN
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                WiseCoin is a revolutionary decentralized application (DApp) that provides real-time coin selection advice and market predictions for cryptocurrency investors through advanced AI technology.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Our hybrid AI model analyzes over 15 dimensions of data, including on-chain transactions, social media sentiment, and technical indicators, to help users make smarter investment decisions.
              </p>
            </div>
            
            {/* Image - appears second on mobile */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-gray-800 bg-[#000f15]">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" 
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(121, 221, 232, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(121, 221, 232, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <Image
                      src="/11646046.png"
                      alt="Cryptocurrency analysis concept"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#01050d]/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 