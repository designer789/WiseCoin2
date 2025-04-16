'use client';

import { useEffect } from 'react';
import { initializeMermaid } from '@/lib/mermaid-init';

export default function MermaidInitializer() {
  useEffect(() => {
    // Initialize mermaid when the component mounts
    initializeMermaid();
  }, []);
  
  // This component doesn't render anything
  return null;
} 