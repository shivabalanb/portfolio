import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiva's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" />

      <body className="text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
