"use client"

import {supabase} from "../../lib/supabase"
import {useState} from "react"

function LostPet(){
    const [file,setFile] = useState<File | null>(null)

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!file) return alert("Selecione uma imagem do pet!")
        
        const formData = new FormData(e.currentTarget)

        const date = formData.get("date")
        const location = formData.get("location")
        const contact = formData.get("contact")
        const found = false
        const type = formData.get("tipo")
        const desc = formData.get("desc")
        const namePet = formData.get("nome_P")
        const name = formData.get("nome")
        const size = formData.get("porte")
        const genero = formData.get("genero")

        try{
            const fileExt = file.name.split(".").pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `lostPets/${fileName}`;

            const {error : uploadError } = await supabase.storage
                .from("images")
                .upload(filePath, file)

            if(uploadError) throw uploadError;

            const {data: {publicUrl}} = supabase.storage
                .from("images")
                .getPublicUrl(filePath)

            const {error: insertError} = await supabase
                .from("LostPet")
                .insert([{
                    date: date,
                    contact: contact,
                    type: type,
                    description: desc,
                    found: found,
                    image_url: publicUrl,
                    location: location,
                    name: name,
                    namePet: namePet,
                    size: size,
                    genero: genero
                }]);

            if(insertError) throw insertError;

            alert("Cadastro do pet feito com sucesso!")
        }
        catch(error){
            console.error(error);
            alert("Erro no cadastro");
        }
    }

    return(
        <form 
        onSubmit={(e) => {handleSubmit(e)}}
        className="flex flex-col w-full max-w-xl bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-orange-100"
>

            <label htmlFor="nome_P">
                Nome do Pet:
                <input
                 id="nome_p" 
                 name="nome_P"
                 placeholder="Nome Desconhecido"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1 invalid:border-red-600"
                 type="text" pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõ]+)*$"
                 title="Digite apenas letras"
                 required
                ></input>
            </label>

            <label htmlFor="tipo">
                Tipo: 
                <select 
                 id="tipo" 
                 name="tipo"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option value={"Gato"}>Gato</option>
                    <option value={"Cachorro"}>Cachorro</option>
                    <option value={"Pássaro"}>Pássaro</option>
                </select>
            </label>

            <label htmlFor="genero">
                Gênero: 
                <select 
                 id="genero" 
                 name="genero"
                 required
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1 invalid:border-red-600"
                >
                    <option value={"Fêmea"}>Fêmea</option>
                    <option value={"Macho"}>Macho</option>
                </select>
            </label>

            <label htmlFor="porte">
                Porte do animal: 
                <select
                 id="porte" 
                 name="porte"
                 required
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1 invalid:border-red-600"
                >
                    <option value={"p"}>Pequeno</option>
                    <option value={"m"}>Médio</option>
                    <option value={"g"}>Grande</option>
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
                Local do encontro:
                <input
                 id="location" 
                 name="location"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <label htmlFor="date">
                data do encontro:
                <input
                 id="date" 
                 name="date"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <label htmlFor="nome">
                Nome do responsável:
                <input
                 id="nome" 
                 name="nome"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1 invalid:border-red-600"
                 type="text" pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõ]+)*$"
                 title="Digite apenas letras"
                 required
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
                Descrição do Pet: 
                <textarea
                 id="desc" 
                 name="desc"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></textarea>
            </label>

            <input
             type="submit"
             className="p-2.5 bg-orange-400 rounded-3xl hover:bg-orange-600 cursor-pointer"
            ></input>

        </form>
    )
}

export default LostPet