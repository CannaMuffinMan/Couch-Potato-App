import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forever Couch Gang - Blockchain Social Media Revolution",
  description: "Join the decentralized social movement. Connect, create, and earn on the blockchain. Your profile, your rules, your crypto rewards.",
  keywords: "blockchain, social media, web3, crypto, decentralized, NFT, social rewards",
  authors: [{ name: "Forever Couch Gang" }],
  openGraph: {
    title: "Forever Couch Gang - Blockchain Social Media Revolution",
    description: "Join the decentralized social movement. Connect, create, and earn on the blockchain.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forever Couch Gang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forever Couch Gang - Blockchain Social Media Revolution",
    description: "Join the decentralized social movement. Connect, create, and earn on the blockchain.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
