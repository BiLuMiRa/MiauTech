import { supabase } from "../../lib/supabase"
import "./globals.css"

type Vet = {
  id: number
  name: string
  image: string | null
}

export default async function Home() {
  const { data, error } = await supabase
    .from<'Registro_de_vets', Vet>('Registro_de_vets')
    .select('*')

  // OLHE O TERMINAL DO VS CODE / TERMINAL DO SISTEMA
  console.log('--- DEBUG SUPABASE ---');
  console.log('Erro:', error);
  console.log('Dados:', data);
  console.log('----------------------');

  if (error) return <div>Erro: {error.message}</div>;
  if (!data || data.length === 0) return <div>A tabela retornou zero registros (verifique o RLS).</div>;

  return (
    <main>
      {data.map(vet => (
        <div key={vet.id}>
          <a href="/MiauTech/pages/details-vet.html?id=${vet.id}">
          <div>
            <img src={vet.image} alt="vet"/>
            <p className="name">{vet.name}</p>
            <p className="specialty">{vet.specialty}</p>
            <p className="location">{vet.location}</p>
        </div>
        </a>
        </div>
      ))}
    </main>
  );
}
