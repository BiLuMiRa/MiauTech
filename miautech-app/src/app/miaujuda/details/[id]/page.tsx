import { supabase } from "@/src/lib/supabase"

type Vet = {
    id: string
    name: string
    image: string | null
    location: string
    specialty: string
    description: string
    
}

export default async function DetailsVets({
    params
}: {
    params: Promise<{ id: string}>
}) {

    

    const {data: vet, error} = await supabase
    .from("Registro_de_vets")
    .select("*")
    .eq("id", id)
    .single()

    if (error) {
        return <h1 style={{color:"tomato"}}>Veterinário não encontrado</h1>
    }

  return (
        <div className="infos-vet">
        <div className="foto-vet">
            <img id="vet-image" alt="foto-vet" src={vet.image}/>
            <img src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaujuda/Estetoscopio.png" alt="Estetoscopio" id="estetoscopio"/>
        </div>

        <div className="dados-vet">
            <h2 className="nomevet" id="vet-name">{vet.name}</h2>
            <div className="specialty-location">
                <h3 className="specialtyvet" id="vet-specialty">{vet.specialty}</h3>
                <h3>|</h3>
                <h3 className="locationvet" id="vet-location">{vet.location}</h3>
                <button className="btnAgendar" style={{color: "aliceblue"}} data-vet-id="1">Consulta</button>
            </div>
            <p className="vetdesc" id="vet-desc">{vet.description}</p>
        </div>
    </div>
  );
}