"use client";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import React from "react";
import { useState, useEffect } from "react";

type Vet = {
  id: number;
  name: string;
  image: string | null;
  specialty: string;
  location: string;
};

export default function VetsBuscados({ buscado }) {
  const [data, setData] = useState<Vet[] | null>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVetsBuscados = async () => {
      if (!buscado) {
        setData([]);
        return;
      }
      const { data, error } = await supabase
        .from("Registro_de_vets")
        .select("*")
        .or(
          `name.ilike.%${buscado}%,specialty.ilike.%${buscado}%,location.ilike.%${buscado}%`,
        );

      if (error) {
        setError(error.message);
      } else {
        setData(data || []);
      }
    };
    fetchVetsBuscados();
  }, [buscado]);

  if (error) return <div> Erro: {error} </div>;

  if (buscado && data.length===0) {
    return <p className="flex h-screen items-center justify-center text-blue-400">Nenhum veterinário encontrado</p>;
  }

  return (
    <div>
      <main className="vets">
        {data.map((vet) => (
          <div key={vet.id}>
            <Link href={`/miaujuda/details/${vet.id}`}>
              <div>
                <img src={vet.image} alt="vet" />
                <p className="name">{vet.name}</p>
                <p className="specialty">{vet.specialty}</p>
                <p className="location">{vet.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
