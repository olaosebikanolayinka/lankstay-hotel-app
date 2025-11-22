import type { Metadata } from "next";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Removed next/font Poppins import: loading Poppins directly via Google Fonts in globals.css


export const metadata: Metadata = {
  title: "LankaStay",
  description: "Hotel Booking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='latin'>



        
      
   
        
        {children}
      </body>
    </html>
  );
}
