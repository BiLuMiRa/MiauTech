"use client";
import { supabase } from "@/src/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

type Pet = {
  id: number;
  name: string;
  image: string | null;
  age: string;
  sexo: string;
};
export default function Pets() {
  const [data, setData] = useState<Pet[] | null>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //hook para buscar os dados após o componente ser montado
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Registro_de_pets")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);

  // const { data, error } = await supabase
  // .from<'Registro_de_pets', Pet>('Registro_de_pets')
  // .select('*')

  if (error) return <div> Erro: {error} </div>;
  if (!data) return <div> Carregando... </div>;

  return (
    <section className="pets">
      {data.map((pet) => (
        <Link key={pet.id} href={`/miaudota/detailsPet/${pet.id}`} className="transition duration-400 ease-in-out hover:-translate-y-5 pet">
          <img src="./imgs/miaudota/pata1.png" className="pata1" alt="Pata" />
          <div>
            <img src={pet.image || "./imgs/miaudota/pata1.png"} alt="Imagem do Pet" />
            <p className="name">{pet.name}</p>
            <p className="infos-pet ">
              {pet.age} | {pet.sexo}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
