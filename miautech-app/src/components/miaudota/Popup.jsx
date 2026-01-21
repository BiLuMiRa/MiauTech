export default function Popup () {
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
          <button className="btnOpcao">Gato</button>
          <button className="btnOpcao">Cachorro</button>
        </div>

        {/* Sexo */}
        <p className="texto-filtro">Sexo</p>
        <div className="opcoes">
          <button className="btnOpcao">Feminino</button>
          <button className="btnOpcao">Masculino</button>
        </div>

        {/* Porte */}
        <p className="texto-filtro">Porte</p>
        <div className="opcoes">
          <button className="btnOpcao">P</button>
          <button className="btnOpcao">M</button>
          <button className="btnOpcao">G</button>
        </div>

        {/* Idade */}
        <p className="texto-filtro">Idade</p>
        <div className="opcoes">
          <button className="btnOpcao">2–11 meses</button>
          <button className="btnOpcao">1–3 anos</button>
          <button className="btnOpcao">4–6 anos</button>
          <button className="btnOpcao">7+ anos</button>
        </div>

        <div id="limpar-buscar">
          <button id="limpar">Limpar busca</button>
          <button id="buscar">Buscar</button>
        </div>
      </div>
    );
}