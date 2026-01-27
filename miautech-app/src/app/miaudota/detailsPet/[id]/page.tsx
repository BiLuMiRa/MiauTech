import Header_miaudota from "@/src/components/miaudota/Header-miaudota"
import Footer_miaudota from "@/src/components/miaudota/Footer-miaudota"
import Image from "next/image";
import { supabase } from "@/src/lib/supabase";
import '../../../globals.css'
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-fredoka"});

type Pet = {
id: string;
name: string;
image: string | null;
age: string;
sexo: string;
desc: string;
vacinas: string;
castr: string;
vermi: string;
defici: string
}

interface PetDetailsProps {
params: Promise<{ id: string }>
}

export default async function petDetails({params}: PetDetailsProps) {

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
        <section>
            <Header_miaudota/>
            <div className="infos-pet">
                <div className="foto-pet">
                    <Image id="pet-image" src={pet.image} alt="foto-pet" width={800} height={600}/>
                    <Image src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/pata1.png" alt="pata1" id="pata1" width={800} height={600}/>
                </div>

                <div className="dados-pet">
                    <h2 className="nomepet">{pet.name}</h2>
                    <div className="idade-sexo">
                    <h3 className="sexopet">{pet.sexo}</h3>
                    <h3>|</h3>
                    <h3 className="idadepet">{pet.age}</h3>
                    <button className="btnAdotar">Quero Adotar!</button>
                    </div>
                    <p className="desc-pet" id="pet-desc">{pet.desc}</p>
                </div>
            </div>

            <table className="tabela-infos">
                <tr >
                    <th>Vacinas</th>
                    <th>{pet.vacinas !== null ? "SIM" : "NÃO"}</th>
                    <th>{pet.vacinas}</th>
                </tr>

                <tr>
                    <th>Castração</th>
                    <th>{pet.castr !== null ? "SIM" : "NÃO"}</th>
                    <th>{pet.castr}</th>
                </tr>

                <tr>
                    <th>Vermífugo</th>
                    <th>{pet.vermi !== null ? "SIM" : "NÃO"}</th>
                    <th>{pet.vermi}</th>
                </tr>

                <tr>
                    <th>Deficiência</th>
                    <th>{pet.defici !== null ? "SIM" : "NÃO"}</th>
                    <th>{pet.defici}</th>
                </tr>
            </table> 
            <Footer_miaudota/>
        </section>

    )
}

// export default function detailsPet() {
//     return (
//         <section>
//             <Header_miaudota/>
//             <PetDetails/>
//             <Footer_miaudota/>
//         </section>
//     )
// }