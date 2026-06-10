import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuela Odoh, Product Manager",
  description:
    "Product Manager focused on product discovery, prioritization, stakeholder alignment, and go-to-market execution. Portfolio featuring MeetMind AI Interviewer and HNG Internship Cohort 14 work.",
  keywords: [
    "Emmanuela Odoh",
    "Product Manager",
    "Product Management Portfolio",
    "HNG Internship",
    "MeetMind AI Interviewer",
  ],
  authors: [{ name: "Emmanuela Odoh" }],
  openGraph: {
    title: "Emmanuela Odoh, Product Manager",
    description:
      "Product Manager focused on product discovery, prioritization, stakeholder alignment, and go-to-market execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-navy`}>
        {children}
      </body>
    </html>
  );
}
