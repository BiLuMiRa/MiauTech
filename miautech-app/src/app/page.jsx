"use client";
import React from "react";
import { useState } from "react";
import Header_miaudota from "../components/miaudota/Header-miaudota";
import Slides from "../components/miaudota/Slides";
import Filter from "../components/miaudota/Filter";
import Popup from "../components/miaudota/Popup";
import PetsFiltrados from "../components/miaudota/PetsFiltrados";
import Pets from "../components/miaudota/Pets";
import Footer_miaudota from "../components/miaudota/Footer-miaudota";
import LoginUser from "../components/miaudota/LoginUser";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export default function Home() {
  const [popupAberto, setpopupAberto] = useState(false);
  const [loginAberto, setLoginAberto] = useState(false);
  const [btnSelecionados, setbtnSelecionados] = useState([]);
  const [buscar, setBuscar] = useState(false);

  return (
    <div>
      <div id={loginAberto ? 'openUserLogin' : 'closeUserLogin'} className="login fixed inset-0 flex items-center justify-center z-1000">
        <LoginUser setLoginAberto={setLoginAberto} loginAberto={loginAberto}/>
      </div>
      
      <div className={loginAberto ? "blur-sm" : ""}>
        <Header_miaudota setLoginAberto={setLoginAberto} />
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
            <PetsFiltrados btnSelecionados={btnSelecionados} buscar={buscar} />
          ) : (
            <Pets />
          )}
        </main>
        <Footer_miaudota />
      </div>
    </div>
  );
}