import { Header } from "../../components/miaujuda/header";
import { Footer } from "../../components/miaujuda/footer";
import { ClientLayout } from "../../components/ClientLayout";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">

        <ClientLayout>
          {children}
        </ClientLayout>
  
      </body>
    </html>
  );
}
