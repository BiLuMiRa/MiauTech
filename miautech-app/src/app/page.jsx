import Link from 'next/link';
import PetRegister from '../components/pet-register';
import Header from '../components/header';
import Slides from '../components/slides';
import Filter from '../components/filter';
import Pets from '../components/pets';


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
