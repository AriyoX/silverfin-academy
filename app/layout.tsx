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
  title: "Silverfin Academy - Swimming Excellence",
  description: "Join Silverfin Academy and unlock swimming excellence with world‑class coaching, supportive community, and pathways from learn‑to‑swim to elite squads.",
  icons: {
    icon: "/logo/logo_transparent.png",
    apple: "/logo/logo_transparent.png",
  },
  openGraph: {
    title: "Silverfin Academy - Swimming Excellence",
    description: "Join Silverfin Academy and unlock swimming excellence with world‑class coaching, supportive community, and pathways from learn‑to‑swim to elite squads.",
    images: ["/logo/logo_transparent.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverfin Academy - Swimming Excellence",
    description: "Join Silverfin Academy and unlock swimming excellence with world‑class coaching, supportive community, and pathways from learn‑to‑swim to elite squads.",
    images: ["/logo/logo_transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/logo_transparent.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/logo_transparent.png" />
        <link rel="apple-touch-icon" href="/logo/logo_transparent.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
