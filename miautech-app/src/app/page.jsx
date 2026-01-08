"use client"

import Link from 'next/link';
import PetRegister from '../components/pet-register';
import Header from '../components/Header';
import Slides from '../components/Slides';
import Filter from '../components/Filter';
import Pets from '../components/Pets';


export default function Home() {
  return (
    <div>
      <Header/>
      <Slides/>
      <Filter/>
      <Pets/>
    </div>
  );
}
