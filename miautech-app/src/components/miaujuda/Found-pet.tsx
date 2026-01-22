"use client"

import {supabase} from "../../lib/supabase"
import { useState } from "react";

function FoundPet(){
    const [file,setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) return alert("Selecione uma imagem do pet!");

        const formData = new FormData(e.currentTarget);

        const date = formData.get("date")
        const location = formData.get("location")
        const contact = formData.get("contact")
        const found = formData.get("found")
        const type = formData.get("type")
        const desc = formData.get("description")        


        try{
            const fileExt = file.name.split(".").pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `foundPets/${fileName}`;

            const {error : uploadError } = await supabase.storage
                .from("images")
                .upload(filePath, file)

            if(uploadError) throw uploadError;

            const {data: {publicUrl}} = supabase.storage
                .from("images")
                .getPublicUrl(filePath)

            const {error: insertError} = await supabase
                .from("FoundPet")
                .insert({
                    date: date,
                    contact: contact,
                    type: type,
                    description: desc,
                    found: found,
                    image_url: publicUrl,
                    location: location
                });

            if(insertError) throw insertError;

            alert("Cadastro do pet feito com sucesso!")
        }
        catch(error){
            console.error(error);
            alert("Error no cadastro");
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="type">
                Tipo: 
                <select 
                 id="type" 
                 name="type"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option value={"Gato"}>Gato</option>
                    <option value={"Cachorro"}>Cachorro</option>
                    <option value={"Pássaro"}>Pássaro</option>
                </select>
            </label>

            <label className="font-bold mb-1">Foto:</label>
                <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="text-sm"
                />

            <label htmlFor="location">
                Local que encontrou o animal:
                <input
                 id="location" 
                 name="location"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <label htmlFor="date">
                data que encontrou o animal:
                <input
                 id="date" 
                 name="date"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <label htmlFor="contact">
                Contato:
                <input
                 id="contact" 
                 name="contact"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <label htmlFor="desc">
                Descrição: 
                <textarea
                 id="desc" 
                 name="desc"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></textarea>
            </label>

        </form>
    )
}

export default FoundPet