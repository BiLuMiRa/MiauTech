"use client";
import { supabase } from "@/src/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

const buttons = [
  {
    btn: "btnGato",
    chave: "type",
    opcao: "cat",
  },
  {
    btn: "btnCachorro",
    chave: "type",
    opcao: "dog",
  },
  {
    btn: "btnFem",
    chave: "sexo",
    opcao: "femea",
  },
  {
    btn: "btnMasc",
    chave: "sexo",
    opcao: "macho",
  },
  {
    btn: "btnP",
    chave: "size",
    opcao: "p",
  },
  {
    btn: "btnM",
    chave: "size",
    opcao: "m",
  },
  {
    btn: "btnG",
    chave: "size",
    opcao: "g",
  },
  {
    btn: "btnMeses",
    chave: "faixa",
    opcao: "2-11 meses",
  },
  {
    btn: "btn1-3",
    chave: "faixa",
    opcao: "1-3 anos",
  },
  {
    btn: "btn4-6",
    chave: "faixa",
    opcao: "4-6 anos",
  },
  {
    btn: "btn7",
    chave: "faixa",
    opcao: "7+ anos",
  },
];

export default function PetsFiltrados({
  btnSelecionados,
  buscar,
}) {
  const [pets, setPets] = useState([]);
  const [petsFiltrados, setPetsFiltrados] = useState([]);

  useEffect(() => {
    //Carrega os pets do Supabase
    async function fetchPets() {
      const { data } = await supabase.from("Registro_de_pets").select("*");

      if (!data) {
        setPets([]);
      } else {
        setPets(data);
        setPetsFiltrados(data);
      }
    }
    fetchPets();
  }, []);

  //Armazena os parâmetros dos filtros selecionados em array de arrays
  function arraySelecionados() {
    let arrayParametros = [];

    btnSelecionados.forEach((selecionado) => {
      buttons.forEach((b) => {
        if (selecionado === b.btn) {
          arrayParametros.push([b.chave, b.opcao]);
        }
      });
    });
    return arrayParametros;
  }

  function filtrarPets(lista) {
    if (lista.length === 0) {
      setPetsFiltrados(pets);
      return;
    }
    //Objeto para armazenar filtros por tipo
    const grupos = {};
    //Agrupa filtros da mesma categoria na mesma chave
    lista.forEach((item) => {
      if (grupos[item[0]] === undefined) {
        grupos[item[0]] = [];
      }
      grupos[item[0]].push(item[1]);
    });

    const filtrados = pets.filter((pet) => {
      for (let chave in grupos) {
        const opcoes = grupos[chave];

        if (opcoes.includes(pet[chave])) {
          continue; //o pet passou nesse grupo, vai testar no próximo
        } else {
          return false; //falhou em algum grupo, o pet é descartado
        }
      }
      return true; //pet passou em todos os grupos
    });
    setPetsFiltrados(filtrados);
  }

  useEffect(() => {
    if (buscar) {
        const parametros = arraySelecionados();
        filtrarPets(parametros);
    }
  }, [buscar, btnSelecionados, pets]); 
  //executa quando buscar, btnSelecionados ou pets mudam

  return (
    <section className="pets">
      {petsFiltrados.map((pet) => (
        <Link key={pet.id} href={`/miaudota/detailsPet/${pet.id}`}>
          <img src="./imgs/miaudota/pata1.png" className="pata1" alt="Pata" />
          <div>
            <img src={pet.image} alt="Imagem do Pet" />
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
