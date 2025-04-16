'use client';

import { PieChart } from 'react-minimal-pie-chart';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type DataEntry = {
  title: string;
  value: number;
  color: string;
};

export default function Tokenomics() {
  const [activeTab, setActiveTab] = useState<'distribution' | 'utilities'>('distribution');
  const [isClient, setIsClient] = useState(false);
  
  const tokenDistribution: DataEntry[] = [
    { title: 'Community Rewards', value: 10, color: '#3fa8ff' },
    { title: 'Team', value: 5, color: '#4a8ae8' },
    { title: 'Ecosystem Development', value: 10, color: '#5cc5d0' },
    { title: 'Private Sale', value: 5, color: '#367bc3' },
    { title: 'Liquidity', value: 70, color: '#79dde8' },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="tokenomics" className="relative py-16 sm:py-20" style={{ backgroundColor: '#01050d' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 mb-4 sm:mb-6">
            TOKENOMICS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Tabs */}
          <div className="rounded-3xl order-2 lg:order-1">
            {/* Tab Navigation */}
            <div className="flex mb-6 sm:mb-8 border-b border-gray-800 overflow-x-auto pb-1 no-scrollbar">
              <button 
                className={`px-4 sm:px-6 py-2 font-medium text-base sm:text-lg whitespace-nowrap relative ${activeTab === 'distribution' ? 'text-primary' : 'text-gray-400'}`}
                onClick={() => setActiveTab('distribution')}
              >
                Distribution
                {activeTab === 'distribution' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2 font-medium text-base sm:text-lg whitespace-nowrap relative ${activeTab === 'utilities' ? 'text-primary' : 'text-gray-400'}`}
                onClick={() => setActiveTab('utilities')}
              >
                Utilities
                {activeTab === 'utilities' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="relative min-h-[350px] sm:min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 'distribution' && (
                  <motion.div
                    key="distribution"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-left">$WISE Token Distribution</h3>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
                      <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto shrink-0">
                        {isClient && (
                          <PieChart
                            data={tokenDistribution}
                            lineWidth={40}
                            paddingAngle={2}
                            rounded
                            animate
                            animationDuration={500}
                            label={({ dataEntry }: { dataEntry: DataEntry }) => `${dataEntry.value}%`}
                            labelStyle={{
                              fontSize: '6px',
                              fontFamily: 'sans-serif',
                              fill: '#fff',
                            }}
                            labelPosition={75}
                          />
                        )}
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4 w-full max-w-sm mx-auto md:mx-0 mt-6 md:mt-0">
                        {tokenDistribution.map((item, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-4 h-4 rounded-full mt-1" style={{ backgroundColor: item.color }}></div>
                            <div>
                              <p className="text-gray-300">{item.value}% – {item.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'utilities' && (
                  <motion.div
                    key="utilities"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 sm:mb-8 text-left">Token Utilities</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <motion.div 
                        className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 border border-gray-800 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                          🛠️
                        </div>
                        <div>
                          <p className="text-base sm:text-lg text-gray-300">Pay for premium prediction services</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 border border-gray-800 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <div className="text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                          🏦
                        </div>
                        <div>
                          <p className="text-base sm:text-lg text-gray-300">Stake to access exclusive insights</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 border border-gray-800 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <div className="text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 bg-primary/10 rounded-lg">
                          🗳️
                        </div>
                        <div>
                          <p className="text-base sm:text-lg text-gray-300">Participate in platform governance</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="rounded-3xl flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] max-w-md mx-auto rounded-xl overflow-hidden">
              <Image
                src="/p2.png"
                alt="WISE Token"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 