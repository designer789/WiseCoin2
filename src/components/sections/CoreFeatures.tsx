import {
  CheckIcon,
  XMarkIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  ChartPieIcon,
  StarIcon,
  GlobeAltIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function CoreFeatures() {
  return (
    <section id="features" className="relative py-20" style={{ backgroundColor: '#01050d' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 mb-6">
            CORE FEATURES
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8 h-full">
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-300">Intelligent Coin Selection Engine</h3>
            </div>

            <div className="space-y-8">
              {/* Data Collection */}
              <div className="rounded-2xl border border-gray-800/50 bg-background-light/10 backdrop-blur-sm p-6">
                <h4 className="text-lg font-semibold text-primary mb-5">Data Collection</h4>
                <ul className="space-y-2.5 text-gray-400">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <ChartBarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">On-chain data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <ChatBubbleBottomCenterIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Social media signals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <ChartPieIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Technical indicators</span>
                  </li>
                </ul>
              </div>

              {/* AI Model Analysis */}
              <div className="rounded-2xl border border-gray-800/50 bg-background-light/10 backdrop-blur-sm p-6">
                <h4 className="text-lg font-semibold text-primary mb-5">AI Model Analysis</h4>
                <ul className="space-y-2.5 text-gray-400">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <StarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Token recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <GlobeAltIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Real-time analysis of 8,000+ cryptocurrencies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Daily updated recommendation list</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center mr-2.5">
                      <DocumentTextIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="pt-0.5">Detailed scoring and reasoning for each recommendation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Two Cards */}
          <div className="h-full flex flex-col space-y-6">
            {/* Market Prediction System */}
            <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8 flex-1">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-300">Market Prediction System</h3>
              </div>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  </span>
                  Price trend predictions for the next 24–72 hours
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  </span>
                  82% historical accuracy (based on real data)
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  </span>
                  Probability distribution visualizations
                </li>
              </ul>
            </div>

            {/* Portfolio Optimizer */}
            <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8 flex-1">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-300">Portfolio Optimizer</h3>
              </div>

              <div className="overflow-x-auto relative">
                {/* Wise AI Column Background - positioned outside the table */}
                <div className="absolute top-0 bottom-0 rounded-xl bg-primary/5 -z-10" style={{ left: 'calc(50% - 16.67%)', width: '33.33%' }}></div>
                
                <table className="w-full text-sm text-left text-gray-400 table-fixed">
                  <colgroup>
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                  </colgroup>
                  <thead className="text-xs uppercase bg-background/50 rounded-lg">
                    <tr>
                      <th scope="col" className="px-4 py-3 rounded-l-lg">Feature</th>
                      <th scope="col" className="px-4 py-3">Wise AI</th>
                      <th scope="col" className="px-4 py-3 rounded-r-lg">Traditional Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/30">
                      <td className="px-4 py-3 font-medium">Auto Rebalancing</td>
                      <td className="px-4 py-3 text-primary">
                        <div className="flex items-center">
                          <CheckIcon className="w-5 h-5 mr-1.5" /> 
                          <span>Smart Algorithms</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <XMarkIcon className="w-5 h-5 text-red-400" />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/30">
                      <td className="px-4 py-3 font-medium">Risk Management</td>
                      <td className="px-4 py-3 text-primary">
                        <div className="flex items-center">
                          <CheckIcon className="w-5 h-5 mr-1.5" /> 
                          <span>Multi-level</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <CheckIcon className="w-5 h-5 mr-1.5 text-gray-500" /> 
                          <span>Basic</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Personalized Adjustments</td>
                      <td className="px-4 py-3 text-primary">
                        <div className="flex items-center">
                          <CheckIcon className="w-5 h-5 mr-1.5" /> 
                          <span>AI-driven</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <XMarkIcon className="w-5 h-5 text-red-400" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 