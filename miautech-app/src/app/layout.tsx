// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-fredoka"});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
    <title>Miaudota</title>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
