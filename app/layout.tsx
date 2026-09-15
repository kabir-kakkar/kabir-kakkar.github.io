import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kabir Kakkar | Software Engineer",
  description:
    "Portfolio of Kabir Kakkar — software engineer building backend systems, data platforms, and intelligent applications. CMU MISM.",
  openGraph: {
    title: "Kabir Kakkar | Software Engineer",
    description:
      "Software engineer building backend systems, data platforms, and intelligent applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
