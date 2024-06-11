import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Snap remote",
  description: "Intro section with dropdown navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
