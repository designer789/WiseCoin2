'use client';

let initialized = false;

export async function initializeMermaid() {
  if (initialized) return;
  
  try {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'Manrope',
      themeVariables: {
        primaryColor: '#79dde8',
        primaryTextColor: '#fff',
        primaryBorderColor: '#79dde8',
        lineColor: '#79dde8',
        secondaryColor: '#333',
        tertiaryColor: '#111',
        fontFamily: 'Manrope',
      },
    });
    
    initialized = true;
    return mermaid;
  } catch (error) {
    console.error('Failed to initialize mermaid:', error);
    return null;
  }
} 