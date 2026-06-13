import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Garnish Real Estate | Independent Property Buying Agent Sitges & Barcelona",
  description: "Bespoke property buying support and independent buyer representation in Sitges, Barcelona, and Catalonia. Find your luxury home, deal confidently with agents, and save on buyer-side fees with our €3,000 flat rate including all legal fees.",
  keywords: [
    "Sitges real estate",
    "buy property Sitges Spain",
    "Barcelona luxury real estate",
    "buying agent Sitges",
    "property finder Barcelona",
    "independent buyer advocate Barcelona",
    "luxury villas for sale Sitges",
    "moving to Sitges American expat",
    "buy property Catalonia British expat"
  ],
  authors: [{ name: "Garnish Real Estate" }],
  openGraph: {
    title: "Garnish Real Estate | Independent Property Buying Agent Sitges & Barcelona",
    description: "Bespoke property buying support and independent buyer representation in Sitges, Barcelona, and Catalonia. Flat-fee buying service including all legal fees.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[#000433] bg-[#f3f4f6]">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
