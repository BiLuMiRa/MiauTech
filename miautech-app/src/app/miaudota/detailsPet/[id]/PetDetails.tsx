import { supabase } from "@/src/lib/supabase"
import Image from "next/image"

type Pet = {
    id: string;
    name: string;
    image: string | null;
    age: string;
    sexo: string;
}

interface PetDetailsProps {
    params: Promise<{ id: string }>
}

export default async function PetDetails({params}: PetDetailsProps) {

    const {id} = await params

    const {data: pet, error} = await supabase
    .from('Registro_de_pets')
    .select('*')
    .eq("id", id)
    .single()

    if (error) {
        return <h1 style={{color: "chocolate"}}>Pet não encontrado!</h1>
        }
    

    return (
        <div>
            <h1>Nome: {pet.name}</h1>
            <p>Idade: {pet.age}</p>
        </div>
            
            /* <div className="infos-pet">
                <div className="foto-pet">
                    <img id="pet-image" src={pet.image} alt="foto-pet" />
                    <img src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/pata1.png" alt="pata1" id="pata1" />
                </div>

                <div className="dados-pet">
                    <h2 className="nomepet" id="pet-name"></h2>
                    <div className="idade-sexo">
                    <h3 className="sexopet" id="pet-sexo"></h3>
                    <h3>|</h3>
                    <h3 className="idadepet" id="pet-age"></h3>
                    <button className="btnAdotar">Quero Adotar!</button>
                    </div>
                    <p className="desc-pet" id="pet-desc"></p>
                </div>
            </div>

            <table className="tabela-infos">
                <tr >
                    <th>Vacinas</th>
                    <th id="vacina-bool"></th>
                    <th id="vacina-data"></th>
                </tr>

                <tr>
                    <th>Castração</th>
                    <th id="cast-bool"></th>
                    <th id="cast-data"></th>
                </tr>

                <tr>
                    <th>Vermífugo</th>
                    <th id="verm-bool"></th>
                    <th id="verm-data"></th>
                </tr>

                <tr>
                    <th>Deficiência</th>
                    <th id="defc-bool"></th>
                    <th id="defc-data"></th>
                </tr>
                </table>
                    </div> */
    )
}