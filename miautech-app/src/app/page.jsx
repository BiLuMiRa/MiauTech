"use client";

import React from "react";
import { useState } from "react";

import Link from "next/link";
import PetRegister from "../components/miaudota/pet-register";
import Header_miaudota from "../components/miaudota/Header-miaudota";
import Slides from "../components/miaudota/Slides";
import Filter from "../components/miaudota/Filter";
import Popup from "../components/miaudota/Popup";
import PetsFiltrados from "../components/miaudota/PetsFiltrados";
import Pets from "../components/miaudota/Pets";
import Footer_miaudota from "../components/miaudota/Footer-miaudota";
import LoginUser from "../components/miaudota/Login-user";
import { Fredoka } from "next/font/google";
import Signin from "../components/miaudota/SignIn-user";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export default function Home() {
  const [popupAberto, setpopupAberto] = useState(false);
  const [loginAberto, setLoginAberto] = useState(false);
  // const [cadastroAberto, setCadastroAberto] = useState(false);
  const [btnSelecionados, setbtnSelecionados] = useState([]);
  const [buscar, setBuscar] = useState(false);

  return (
    <>
      {(loginAberto /*&& !cadastroAberto*/ ) && <LoginUser setLoginAberto={setLoginAberto} loginAberto={loginAberto} /*setCadastroAberto={setCadastroAberto}*//>}

      {/* {(cadastroAberto && !loginAberto) && <Signin cadastroAberto={cadastroAberto} setLoginAberto={setLoginAberto} setCadastroAberto={setCadastroAberto}/>} */}

        <div className={(loginAberto /*|| cadastroAberto*/) ? "blur-2xl" : ""}>
          <Header_miaudota setLoginAberto={setLoginAberto} loginAberto={loginAberto} /*setCadastroAberto={setCadastroAberto}*//>
          <main className="content">
            <Slides />
            <Filter setpopupAberto={setpopupAberto} />
            {popupAberto && (
          <Popup
            setpopupAberto={setpopupAberto}
            btnSelecionados={btnSelecionados}
            setbtnSelecionados={setbtnSelecionados}
            setBuscar={setBuscar}
          />
        )}
        {buscar ? (
          <PetsFiltrados
            btnSelecionados={btnSelecionados}
            buscar={buscar}
          />
        ) : (
          <Pets />
        )}
          </main>
          <Footer_miaudota />
        </div>
    </>
  );
}
