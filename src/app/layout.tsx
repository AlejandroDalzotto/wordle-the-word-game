import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Smoke } from "@/components/Smoke";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle • The Word Game",
  description: "Play Wordle, the popular word guessing game. Challenge yourself and improve your vocabulary skills.",
  openGraph: {
    type: "website",
    url: "https://wordle-the-word-game.vercel.app",
    title: "Wordle • The Word Game",
    description: "Play Wordle, the popular word guessing game. Challenge yourself and improve your vocabulary skills.",
    siteName: "Wordle",
    images: [{
      url: "/og.avif",
    }],
  },
  keywords: ["wordle", "word game", "english game"],
  authors: [{
    name: "Alejandro Dalzotto",
    url: "https://alejandrodalzotto-portfolio.vercel.app/"
  }],
  creator: "Alejandro Dalzotto",
  twitter: {
    card: "summary_large_image",
    site: "@wordle-the-word-game",
    images: "/og.avif",
    description: "Play Wordle, the popular word guessing game. Challenge yourself and improve your vocabulary skills.",
    title: "Wordle • The Word Game"
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16"
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32"
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180"
    }
  ],
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://wordle-the-word-game.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-50">
      <body className={inter.className}>
        <Smoke />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
