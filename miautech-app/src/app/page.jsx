"use client";

import React from 'react';
import { useState } from 'react';

import Link from "next/link";
import PetRegister from "../components/pet-register";
import Header_miaudota from "../components/miaudota/Header-miaudota";
import Slides from "../components/miaudota/Slides";
import Filter from "../components/miaudota/Filter";
import Popup from "../components/miaudota/Popup"
import Pets from "../components/miaudota/Pets";
import Footer_miaudota from "../components/miaudota/Footer-miaudota";

export default function Home() {

  const [popupAberto, setpopupAberto] = useState(false);

  return (
    <div>
      <Header_miaudota />
      <main className="content">
        <Slides />
        <Filter onClick={() => setpopupAberto(true)} />
        {popupAberto && (
          <Popup />
        )}
        <section className='pets'>
          <Pets />
        </section>
      </main>
      <Footer_miaudota />
    </div>
  );
}
