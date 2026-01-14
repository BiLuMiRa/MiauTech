import { supabase } from "@/src/lib/supabase";
import Link from "next/link"

type Pet = {
    id: number;
    name: string;
    image: string | null;
    age: string;
    sexo: string;
}

export default async function Pets() {
    const { data, error } = await supabase
    .from<'Registro_de_pets', Pet>('Registro_de_pets')
    .select('*')

    if (error) return <div> Erro: {error.message} </div>

    return (
        <main>
            {data.map(pet => (
                    <a href={`/miaujuda/details/${pet.id}`}>
                        <img src="./imgs/miaudota/pata1.png" className="pata1" />
                            <div>
                                <img src={pet.image}/>
                                <p className="name">{pet.name}</p>
                                <p className="infos-pet ">{pet.age} | {pet.sexo}</p>
                            </div>
                    </a>
            ))}
        </main>
    )
}