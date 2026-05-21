import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kaafi Aalsi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
