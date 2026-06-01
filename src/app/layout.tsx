import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BT Consulting | Business Therapy Consulting",
  description:
    "Book a $50 Business Diagnosis Session with Business Therapy Consulting, a Lagos-based boutique strategy and growth consulting firm serving founders globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
