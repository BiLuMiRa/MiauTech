'use client'

import PetRegister from "./pet-register"
import { useEffect, useState } from "react"
import { supabase } from "@/src/lib/supabase"
import { User } from "@supabase/supabase-js"
import Link from "next/link"
import Image from "next/image"

export default function PetsRegistrados() {
    const [petsRegistrados, setPetsRegistrados] = useState<any[]>([])
    const [user, setUser] = useState<User | null>(null)
    const [openRegister, setOpenRegister] = useState(false)
    useEffect(() => {
        const sessao = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            setUser(user);
            const pets = async () => {
                const { data: petsRegistrados } = await supabase
                .from("Registro_de_pets")
                .select('*')
                .eq("user_id", user?.id)
                setPetsRegistrados(petsRegistrados || []);
            }
            pets();
        }
        sessao();
    }, []);
    
    
    if (petsRegistrados.length === 0) return(
        <div className="flex justify-between text-black">
            <p>Você ainda não registrou nenhum pet para adoção!</p>
            <PetRegister fechar={setOpenRegister}/>
        </div>
    )

    return(
        <div>
            <div className="flex justify-between">
                <h1 className="text-black text-4xl m-5">Seus pets registrados</h1>
                <button
                    className="cursor-pointer active:cursor-alias"
                    onClick={() => {setOpenRegister(true)}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="size-15 m-5 text-black">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
            </div>
            <section className="pets ">
            {petsRegistrados.map((pet) => (
                <Link key={pet.id} href={`/miaudota/detailsPet/${pet.id}`}>
                    <img src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/pata1.png" className="pata1" alt="Pata" />
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
            <div className="register top-20 right-0 fixed" id={openRegister ? 'abrirRegister' : 'fecharRegister'}>
                <PetRegister fechar={setOpenRegister} />
            </div>
        </div>
    )
}