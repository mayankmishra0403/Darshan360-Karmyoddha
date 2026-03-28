import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSInit from "@/components/AOSInit";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darshan 360 | Walk Through Living History",
  description: "AI-powered heritage tourism for Gwalior Fort and Orchha with storytelling, cultural insights, and itinerary planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="antialiased font-[family-name:var(--font-source-sans)]">
        <AOSInit />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
