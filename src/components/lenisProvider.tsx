'use client';

import { ReactNode } from 'react';
import { useLenis } from '@/lib/lenis-scroll';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Initialize Lenis smooth scrolling
  useLenis();
  
  return <>{children}</>;
} 