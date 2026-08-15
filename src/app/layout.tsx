import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: SITE_CONFIG.authors,
  icons: {
    icon: "./terminal.svg"
  }
};

const Styles = tv({
  slots: {
    html: `${geistSans.variable} ${geistMono.variable} dark h-full antialiased`,
    body: "flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-100 selection:bg-indigo-500/30 selection:text-white",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(Styles().html(), "font-sans", inter.variable)}>
      <body className={Styles().body()}>{children}</body>
    </html>
  );
}
