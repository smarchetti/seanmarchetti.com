import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://seanmarchetti.com"),
  title: {
    default: "Sean Marchetti",
    template: "%s — Sean Marchetti",
  },
  description:
    "Sean Marchetti — engineering leader in New York. Experience, background, and how to get in touch.",
  openGraph: {
    title: "Sean Marchetti",
    description:
      "Sean Marchetti — engineering leader in New York. Experience, background, and how to get in touch.",
    url: "https://seanmarchetti.com",
    siteName: "Sean Marchetti",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const directionContract = `<!--
THESIS: an engineering leader's record set like a Vercel product page —
the resume as clean data, refusing the decorated personal-brand hero.
OWN-WORLD: near-black #0a0a0a ground (white in light), Geist Sans +
Geist Mono only, 1px hairlines, a bordered center column with plus-mark
crosses at section intersections, one blue #0070f3 for focus/selection.
STORY: visitor reads who Sean is in one viewport, scans two decades of
roles as rows, emails him in one click.
FIRST VIEWPORT: sticky hairline header; large lowercase tracking-tight
headline "i build software — and the teams that ship it."; muted intro;
primary white Get-in-touch button left-aligned. Signature interaction:
staggered expo-out load-in; work rows illuminate on hover.
FORM: brief-pinned Vercel canon, executed straight. seed: none (pinned).
FINISH: unreviewed and undocumented is unfinished; this build ends with
the finish review, the verdict, DESIGN.md, and every shipping raster
carrying its provenance.
-->`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
