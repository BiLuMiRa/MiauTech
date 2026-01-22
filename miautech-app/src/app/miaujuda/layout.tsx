
import { ClientLayout } from "../../components/ClientLayout";
import "./style.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
        <ClientLayout>
          {children}
        </ClientLayout>

  );
}
