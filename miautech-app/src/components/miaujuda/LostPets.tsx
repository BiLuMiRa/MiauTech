"use client";
import { supabase } from "@/src/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/src/app/globals.css"
import FoundPet from "./Form-Lost-pet";
import LostPet from "./Form-Lost-pet";

type Pet = {
  id: number;
  namePet: string;
  image_url: string;
  type: string;
  genero: string;
};
export default function LPets() {
  const [data, setData] = useState<Pet[] | null>([]);
  const [error, setError] = useState<string | null>(null);
  const [botao,setbotao] = useState(false);

    //hook para buscar os dados após o componente ser montado
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("LostPet")
        .select("*")
        .order("created_at",{ascending: false})

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    };

    useEffect(() => {
      fetchData();
    },[])
    

  if (error) return <div> Erro: {error} </div>;
  if (!data) return <div> Carregando... </div>;

  return (
    <section className="pets flex">
      <button onClick={(() => setbotao(!botao))} className="absolute w-50 rounded hover:cursor-pointer top-25.5 left-8.5 h-8.5 w-1xl bg-blue-950 text-white">
        {!botao ? "Cadastrar pet perdido" : "fechar"} 
      </button>

      {botao && (
        <LostPet
        onSuccess={() =>{
          fetchData()
          
        }} 
        />
      )}  

      {data.map((pet) => (
  
          <div key={pet.id} className="rounded-2xl relative top-15">
            <img src={pet.image_url} alt="Imagem do Pet" />
            <p className="name">{pet.namePet}</p>
            <p className="infos-pet ">
              {pet.type} | {pet.genero}
            </p>
          </div>

      ))}
    </section>
  );
}
