import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stavební pozemky Nasavrky - zasíťované parcely k prodeji",
  description:
    "Hledáte ideální místo pro stavbu vašeho rodinného domu? Objevte stavební pozemky v Nasavrkách — kompletně zasíťované a připravené ke stavbě. Bydlete v krásné lokalitě Železných hor, jen pár minut od Pardubic a Chrudimi.",
  keywords: [
    "stavební pozemky Nasavrky",
    "pozemky na prodej Nasavrky",
    "zasíťované parcely",
    "pozemky Pardubický kraj",
    "bydlení Železné hory",
    "parcely Chrudim",
    "pozemky Pardubice",
    "prodej pozemků Nasavrky",
  ],
  openGraph: {
    title: "Stavební pozemky Nasavrky",
    description: "Kompletně zasíťované parcely k prodeji v Nasavrkách.",
    url: "https://nasavrky.vercel.app",
    siteName: "Stavební parcely Nasavrky",
    images: [
      {
        url: "https://nasavrky.vercel.app/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Krajina Nasavrk a stavební parcely",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stavební pozemky Nasavrky",
    description: "Kompletně zasíťované parcely k prodeji v Nasavrkách.",
    images: ["https://nasavrky.vercel.app/hero.jpg"], // Replace with an actual Twitter Card image URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
