'use client';

import { useState } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline';

export default function Roadmap() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const roadmapData = [
    {
      phase: 'Phase 1',
      icon: <RocketLaunchIcon className="w-8 h-8 text-primary" />,
      items: [
        'Beta version launched on mainnet',
        'Basic prediction features released',
        'First DEX integration (Uniswap)'
      ]
    },
    {
      phase: 'Phase 2',
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary" />,
      items: [
        'Mobile app launch',
        'Institutional-grade API access',
        'Cross-chain expansion (BNB Chain)'
      ]
    },
    {
      phase: 'Phase 3',
      icon: <CubeTransparentIcon className="w-8 h-8 text-primary" />,
      items: [
        'Derivatives prediction market',
        'Transition to DAO governance',
        'Open-sourcing of AI models'
      ]
    }
  ];

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev === roadmapData.length - 1 ? 0 : prev + 1));
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev === 0 ? roadmapData.length - 1 : prev - 1));
  };

  return (
    <section id="roadmap" className="relative py-20" style={{ backgroundColor: '#01050d' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 mb-6">
            ROADMAP
          </h2>
        </div>

        <div className="max-w-xl mx-auto relative">
          {/* Carousel Container */}
          <div className="overflow-hidden relative px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPhase * 100}%)` }}
            >
              {roadmapData.map((phase, phaseIndex) => (
                <div key={phase.phase} className="w-full flex-shrink-0">
                  <div className="relative py-8">
                    {/* Phase Title */}
                    <div className="mb-10 text-center">
                      <div className="inline-flex items-center justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            {phase.icon}
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs">
                            {phaseIndex === 0 ? '1' : phaseIndex === 1 ? '2' : '3'}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-300 mt-4">{phase.phase}</h3>
                    </div>

                    {/* Phase Items */}
                    <div className="space-y-6">
                      {phase.items.map((item, index) => (
                        <div 
                          key={item}
                          className={`border border-gray-800 rounded-xl p-4 bg-background-light/5 backdrop-blur-sm transition-all duration-300 ${
                            currentPhase === phaseIndex ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'
                          } ${hoveredItem === `${phase.phase}-${index}` ? 'scale-[1.03] border-[#79dde8]' : ''}`}
                          style={{ 
                            transitionDelay: `${index * 100}ms`,
                            transition: 'opacity 0.3s, transform 0.3s, border-color 0.3s, scale 0.3s' 
                          }}
                          onMouseEnter={() => setHoveredItem(`${phase.phase}-${index}`)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                            <p className="text-gray-300">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button 
              onClick={prevPhase}
              className="w-12 h-12 rounded-lg bg-background-light/20 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous phase"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {roadmapData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhase(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPhase === index ? 'bg-primary w-6' : 'bg-gray-600 w-2'
                  }`}
                  aria-label={`Go to phase ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextPhase}
              className="w-12 h-12 rounded-lg bg-background-light/20 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-colors"
              aria-label="Next phase"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 