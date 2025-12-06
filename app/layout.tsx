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
  title: "Gohost - API Hosting Simplificado",
  description:
    "Hospede suas API's de forma rápida, segura e eficiente com Gohost.",
  openGraph: {
    title: "Gohost - Hospedagem de APIs",
    description: "Hospede suas API's de forma rápida e segura.",
    url: "https://gohost.dev",
    siteName: "Gohost",
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
