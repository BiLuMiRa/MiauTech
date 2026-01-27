import Link from "next/link"
import { supabase } from "../../lib/supabase"
import "./style.css"

type Vet = {
  id: number
  name: string
  image: string | null
}

export default async function Home() {
  const { data, error } = await supabase
    .from<'Registro_de_vets', Vet>('Registro_de_vets')
    .select('*')

  if (error) return <div>Erro: {error.message}</div>;

  return (
    <main className="vets">
      {data.map(vet => (
        <div key={vet.id}>
          <Link href={`/miaujuda/details/${vet.id}`}>
          <div>
            <img src={vet.image} alt="vet"/>
            <p className="name">{vet.name}</p>
            <p className="specialty">{vet.specialty}</p>
            <p className="location">{vet.location}</p>
        </div>
        </Link>
        </div>
      ))}
    </main>
  );
}
