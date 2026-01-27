import { useState } from "react";

export default function Popup({
  setpopupAberto,
  btnSelecionados,
  setbtnSelecionados,
  setBuscar,
}) {
  return (
    <div id="popup" className="popup">
      <div id="filtrar-fechar">
        <h1 id="filtrar-por">Filtrar por</h1>

        <svg
          id="fechar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          onClick={() => {
            setpopupAberto(false);
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </div>

      {/* Espécie */}
      <p className="texto-filtro">Espécie</p>
      <div className="opcoes">
        <button
          className={
            btnSelecionados.includes("btnGato") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnGato"]); //lista como valor atual do state
          }}
        >
          Gato
        </button>
        <button
          className={
            btnSelecionados.includes("btnCachorro")
              ? "btnOpcao-ativa"
              : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnCachorro"]);
          }}
        >
          Cachorro
        </button>
      </div>

      {/* Sexo */}
      <p className="texto-filtro">Sexo</p>
      <div className="opcoes">
        <button
          className={
            btnSelecionados.includes("btnFem") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnFem"]);
          }}
        >
          Feminino
        </button>
        <button
          className={
            btnSelecionados.includes("btnMasc") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnMasc"]);
          }}
        >
          Masculino
        </button>
      </div>

      {/* Porte */}
      <p className="texto-filtro">Porte</p>
      <div className="opcoes">
        <button
          className={
            btnSelecionados.includes("btnP") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnP"]);
          }}
        >
          P
        </button>
        <button
          className={
            btnSelecionados.includes("btnM") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnM"]);
          }}
        >
          M
        </button>
        <button
          className={
            btnSelecionados.includes("btnG") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnG"]);
          }}
        >
          G
        </button>
      </div>

      {/* Idade */}
      <p className="texto-filtro">Idade</p>
      <div className="opcoes">
        <button
          className={
            btnSelecionados.includes("btnMeses") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btnMeses"]);
          }}
        >
          2–11 meses
        </button>
        <button
          className={
            btnSelecionados.includes("btn1-3") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btn1-3"]);
          }}
        >
          1–3 anos
        </button>
        <button
          className={
            btnSelecionados.includes("btn4-6") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btn4-6"]);
          }}
        >
          4–6 anos
        </button>
        <button
          className={
            btnSelecionados.includes("btn7") ? "btnOpcao-ativa" : "btnOpcao"
          }
          onClick={() => {
            setbtnSelecionados((lista) => [...lista, "btn7"]);
          }}
        >
          7+ anos
        </button>
      </div>

      <div id="limpar-buscar">
        <button
          onClick={() => {
            setbtnSelecionados([]);
          }}
          id="limpar"
        >
          Limpar busca
        </button>
        <button
          onClick={() => {
            setpopupAberto(false);
            setBuscar(true);
          }}
          id="buscar"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
