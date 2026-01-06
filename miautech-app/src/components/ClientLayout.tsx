"use client";

import { Header } from "./miaujuda/header";
import { Footer } from "./miaujuda/footer";
import React from "react";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
