import Link from "next/link";
import { supabase } from "../../lib/supabase";
import React from "react";
import { useState, useEffect } from "react";

type Vet = {
  id: number;
  name: string;
  image: string | Blob | undefined;
  specialty: string;
  location: string;
};

export default function Vets() {
  const [data, setData] = useState<Vet[] | null>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataVets = async () => {
      const { data, error } = await supabase
        .from("Registro_de_vets")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setData(data || []);
      }
    };
    fetchDataVets();
  }, []);

  if (error) return <div> Erro: {error} </div>;
  if (!data) return <div> Carregando... </div>;

  return (
    <main className="vets">
      {data.map((vet) => (
        <Link key={vet.id} href={`/miaujuda/details/${vet.id}`}>
          <div>
            {vet.image && <img src={vet.image} alt={vet.name} />}
            <p className="name">{vet.name}</p>
            <p className="specialty">{vet.specialty}</p>
            <p className="location">{vet.location}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
