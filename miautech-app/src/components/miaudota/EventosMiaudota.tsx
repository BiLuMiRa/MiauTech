import { supabase } from "@/src/lib/supabase"
import { useEffect, useState } from "react"
import Image from "next/image"

type Evento = {
    id: number;
    name: string;
    image: string;
    local: string
}

export default function EventosMiaudota() {
    
    const [data, setData] = useState<Evento[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        const dadosEvento = async () => {
            try {
                const {data, error} = await supabase
                .from('Eventos')
                .select('*')

                if (error) throw error
                setData(data)
            } catch (error: any) {
                setError(error.message)
                
            }
        }
        dadosEvento()
    }, [])
    
    if (error) return <h1>{error}</h1>

    return (
        <div className="events">
            {data.map(evento => (
                <div key={evento.id} className="card-evento">
                    <Image src={evento.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="foto-evento"/>
                    <p className="nome-evento">{evento.name}</p>
                    <p className="local-evento">{evento.local}</p>
                </div>
                
            ))}
        </div>
    )
}