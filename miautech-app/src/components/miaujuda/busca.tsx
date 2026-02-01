"use client";

export default function Busca({ setBusca, setBuscado }) {
  return (
    <form className="">
      <input
        type="text"
        placeholder="Buscar veterinários        🔍︎​"
        className="busca-input"
        onChange={(e) => {
            const value = e.target.value;
            if (value) {
                setBusca(true);
                setBuscado(value);
                
            } else {
                setBusca(false);
            }
        }}
      ></input>
    </form>
  );
}
