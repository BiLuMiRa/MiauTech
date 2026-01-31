import { useEffect, useState } from "react"
import { supabase } from "@/src/lib/supabase"
import { RedirectType, redirect } from "next/navigation"
import Link from "next/link"
export default function PetsRegistrados() {
    const [petsRegistrados, setPetsRegistrados] = useState<any[]>([])
    useEffect(() => {
        const Pets = async () => {
            const { data: petsRegistrados } = await supabase
            .from("petsRegistrados")
            .select('*');
            setPetsRegistrados(petsRegistrados || [])
        }
        Pets()
    }, [])
    
    if (petsRegistrados.length === 0) return(
        <div>
            <p>Você ainda não registrou nenhum pet para adoção!</p>
            <button onClick={() => {redirect('/', RedirectType.replace)}}>Doe agora!</button>
        </div>
    )

    return(
        <section className="pets">
        {petsRegistrados.map((pet) => (
            <Link key={pet.id} href={`/miaudota/detailsPet/${pet.id}`}>
                <img src="./imgs/miaudota/pata1.png" className="pata1" alt="Pata" />
                <div>
                    <img src={pet.image || "./imgs/miaudota/pata1.png"} alt="Imagem do Pet" />
                    <p className="name">{pet.name}</p>
                    <p className="infos-pet ">
                    {pet.age} | {pet.sexo}
                    </p>
                </div>
            </Link>
        ))}
        </section>
    )
}