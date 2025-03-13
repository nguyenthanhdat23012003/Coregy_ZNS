import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coregy ZNS",
  description: "Admin Panel for Coregy ZNS",
  icons: "../public/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          <Sidebar /> {/* ✅ Đặt Sidebar trong flex container */}
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-4 flex-1 bg-gray-100">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
