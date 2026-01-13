"use client"

import Link from 'next/link';
import PetRegister from '../components/pet-register';
import Header_miaudota from '../components/miaudota/Header-miaudota';
import Slides from '../components/Slides';
import Filter from '../components/Filter';
import Pets from '../components/miaudota/Pets';
import Footer_miaudota from '../components/miaudota/Footer-miaudota'


export default function Home() {
  return (
    <div>
      <Header_miaudota/>
      <Slides/>
      <Filter/>
      <Pets/>
      <Footer_miaudota/>
    </div>
  );
}
