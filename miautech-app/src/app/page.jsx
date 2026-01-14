"use client";

import React from 'react';
import Link from "next/link";
import PetRegister from "../components/pet-register";
import Header_miaudota from "../components/miaudota/Header-miaudota";
import Slides from "../components/miaudota/Slides";
import Filter from "../components/miaudota/Filter";
import Pets from "../components/miaudota/Pets";
import Footer_miaudota from "../components/miaudota/Footer-miaudota";

export default function Home() {
  return (
    <div>
      <Header_miaudota />
      <main className="content">
        <Slides />
        <Filter />
        <Pets />
      </main>
      <Footer_miaudota />
    </div>
  );
}
