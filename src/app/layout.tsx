// src/app/layout.tsx
"use client";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={manrope.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
