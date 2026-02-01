"use client";

type BuscaProps = {
  setBusca: React.Dispatch<React.SetStateAction<boolean>>;
  setBuscado: React.Dispatch<React.SetStateAction<string>>;
};

export default function Busca({ setBusca, setBuscado }: BuscaProps) {
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
