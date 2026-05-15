import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luca Agency — Video Production & Social Media",
  description:
    "Boston-based creative agency specializing in video production, editing, and social media management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#080808] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
