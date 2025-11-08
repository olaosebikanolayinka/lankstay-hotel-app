import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});


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
      <body className={`${poppins.className} latin`}>



        
      
   
        
        {children}
      </body>
    </html>
  );
}
