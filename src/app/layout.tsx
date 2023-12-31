import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shaired/Navbar";
import SearchProvider from "@/components/context/seatchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hacker News",
  description: "Generated by hacker news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <Navbar />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
