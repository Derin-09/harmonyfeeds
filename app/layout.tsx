import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Harmony Feeds",
  description: "Harmony Feeds provides trusted, affordable animal nutrition to help your farm and pets thrive every day.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
