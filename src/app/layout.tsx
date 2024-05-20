import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll'
const outfit = Outfit({subsets: ['latin']});


export const metadata: Metadata = {
  title: "Luna Nanna",
  description: "Providing fast and seamless services ",
};

export const viewport = 'width=device-width, initial-scale=1, maximum-scale=1';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-white`}>
        <SmoothScroll>
        {children}
      </SmoothScroll>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic'