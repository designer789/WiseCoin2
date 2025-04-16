'use client';

import Mermaid from '@/components/Mermaid';
import { 
  ChartBarIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  LinkIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline';

const processFlowDiagram = `
sequenceDiagram
  participant User as User
  participant Frontend as Frontend
  participant Blockchain as Blockchain
  participant AI_Engine as AI_Engine
  participant Data_Sources as Data_Sources

  User ->> Frontend: Connect Wallet
  Frontend ->> Blockchain: Verify Identity
  Blockchain -->> Frontend: Auth Token
  Frontend ->> AI_Engine: Request Prediction
  AI_Engine ->> Data_Sources: Fetch Latest Data
  Data_Sources -->> AI_Engine: Raw Data
  AI_Engine ->> AI_Engine: Process & Predict
  AI_Engine ->> Blockchain: Store Prediction Proof
  Blockchain -->> AI_Engine: Receipt
  AI_Engine -->> Frontend: Prediction Results
  Frontend ->> User: Display Recommendations
`;

export default function TechnicalAdvantages() {
  return (
    <section id="technology" className="relative py-20" style={{ backgroundColor: '#01050d' }}>
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 mb-6">
            TECHNICAL ADVANTAGES
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Data Flow Diagram */}
          <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-300 mb-6">Data Flow</h3>
            <div style={{ backgroundColor: 'rgba(1, 5, 13, 0.5)' }} className="p-6 rounded-2xl border border-gray-800 overflow-x-auto">
              <Mermaid chart={processFlowDiagram} className="w-auto min-w-full h-auto" />
            </div>
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Tech Stack */}
            <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-6">AI Tech Stack</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ChartBarIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Prediction Models</h4>
                  </div>
                  <p className="text-gray-400 ml-9">LSTM + Random Forest + Custom Attention Mechanism</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <BoltIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Data Processing</h4>
                  </div>
                  <p className="text-gray-400 ml-9">Real-time pipelines powered by Apache Spark</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Privacy Protection</h4>
                  </div>
                  <p className="text-gray-400 ml-9">Federated Learning + Zero-Knowledge Proofs</p>
                </div>
              </div>
            </div>

            {/* Blockchain Integration */}
            <div className="rounded-3xl border border-gray-800 bg-background-light/20 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-6">Blockchain Integration</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <CurrencyDollarIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Trade Execution</h4>
                  </div>
                  <p className="text-gray-400 ml-9">Low-gas fees on the Polygon network</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <LinkIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Data Verification</h4>
                  </div>
                  <p className="text-gray-400 ml-9">Chainlink oracles</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ServerIcon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-primary">Storage Solutions</h4>
                  </div>
                  <p className="text-gray-400 ml-9">IPFS + Filecoin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 