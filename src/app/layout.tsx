import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pattify — Sewing Patterns for Every Maker",
  description:
    "Discover beautiful sewing patterns and create clothes that fit you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}