import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MermaidInitializer from "@/components/MermaidInitializer";
import LenisProvider from "@/components/lenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiseCoin - Your Smart Cryptocurrency Investment Assistant",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      }
    ],
    shortcut: ["/favicon.png"],
    apple: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32"
      }
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#1E40AF",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <MermaidInitializer />
        </LenisProvider>
      </body>
    </html>
  );
}
