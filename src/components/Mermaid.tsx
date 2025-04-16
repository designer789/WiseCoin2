'use client';

import { useEffect, useRef } from 'react';
import { initializeMermaid } from '@/lib/mermaid-init';

interface MermaidProps {
  chart: string;
  className?: string;
}

const Mermaid = ({ chart, className = '' }: MermaidProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === 'undefined') return;

    const renderChart = async () => {
      if (!containerRef.current) return;

      try {
        // Clear previous rendered diagram
        containerRef.current.innerHTML = '';

        // Add the mermaid content
        const pre = document.createElement('pre');
        pre.className = 'mermaid';
        pre.textContent = chart;
        containerRef.current.appendChild(pre);

        // Initialize mermaid
        const mermaid = await initializeMermaid();
        
        // Process the diagram
        if (mermaid) {
          mermaid.contentLoaded();
        }
      } catch (error) {
        console.error('Error rendering mermaid chart:', error);
        
        // Show error message in the container
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="p-4 text-red-400 bg-red-900/20 rounded-lg border border-red-900">
              Error rendering diagram. Please check console for details.
            </div>
          `;
        }
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(renderChart, 0);
  }, [chart]);

  return <div ref={containerRef} className={className} />;
};

export default Mermaid; 