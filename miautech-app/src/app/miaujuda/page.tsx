"use client";

import { supabase } from "../../lib/supabase";
import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Vets from "@/src/components/miaujuda/Vets";
import Busca from "@/src/components/miaujuda/Busca";
import VetsBuscados from "@/src/components/miaujuda/VetsBuscados";

export default function Home() {
  const [busca, setBusca] = useState(false);
  const [buscado, setBuscado] = useState('');
  return (
    <div>
      <Busca setBusca={setBusca} setBuscado={setBuscado} />
      {busca ? (
        <VetsBuscados buscado={buscado}/>
      ) : (
        <Vets />
      )}
    </div>
  );
}
