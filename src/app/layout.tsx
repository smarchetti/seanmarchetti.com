import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seanmarchetti.com"),
  title: {
    default: "Sean Marchetti",
    template: "%s — Sean Marchetti",
  },
  description:
    "Resume and portfolio of Sean Marchetti — projects, experience, and how to get in touch.",
  openGraph: {
    title: "Sean Marchetti",
    description:
      "Resume and portfolio of Sean Marchetti — projects, experience, and how to get in touch.",
    url: "https://seanmarchetti.com",
    siteName: "Sean Marchetti",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
