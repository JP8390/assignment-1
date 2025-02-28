import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokémon Search | Next.js App",
  description:
    "Discover Pokémon details with our Next.js-powered Pokémon Search App. Find Pokémon stats, abilities, types, and more!",
  keywords: [
    "Pokémon",
    "Pokémon Search",
    "Pokémon API",
    "Next.js Pokémon App",
    "Pokémon Details",
    "Pokémon Stats",
    "Find Pokémon",
    "Pokémon Types",
    "Pokémon Abilities",
    "Next.js SEO",
  ],
  authors: [
    { name: "Jatin Patil", url: "https://assignment-1-beryl-ten.vercel.app/" },
  ],
  metadataBase: new URL("https://assignment-1-beryl-ten.vercel.app/"),
  robots: "index, follow",
  alternates: {
    canonical: "https://assignment-1-beryl-ten.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
