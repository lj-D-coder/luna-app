"use client"
import { ReactLenis, useLenis } from '@/lib/utils/lenis'
import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
      <ReactLenis root options={{lerp: 0.05,duration: 1.5, smoothWheel: true,  } }>
      { children }
    </ReactLenis>
  )
}
