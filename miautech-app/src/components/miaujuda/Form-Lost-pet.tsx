"use client"

import {supabase} from "../../lib/supabase"
import {useState} from "react"

function LostPet({onSuccess}: {onSuccess: () => void}){
    const [file,setFile] = useState<File | null>(null)

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

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

            // alert("Cadastro do pet feito com sucesso!")
            form.reset()
            setFile(null)

            onSuccess()
        }
        catch(error){
            console.error(error);
            alert("Erro no cadastro");
        }
    }

    return(
        <form 
        onSubmit={(e) => {handleSubmit(e)}}
        className=" flex flex-col relative top-15 w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-100"
>

            <label htmlFor="nome_P" className="font-bold text-blue-950 m-8 pl-4.5">
                Nome do Pet:
            </label>
                <input
                 id="nome_p" 
                 name="nome_P"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                 type="text" pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõ]+)*$"
                 title="Digite apenas letras"
                 required
                />
            

            <label htmlFor="tipo" className="font-bold text-blue-950 m-8 pl-4.5 " >
                Tipo: 
            </label>
                <select 
                 id="tipo" 
                 name="tipo"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option>Selecione</option>
                    <option value={"Gato"}>Gato</option>
                    <option value={"Cachorro"}>Cachorro</option>
                    <option value={"Pássaro"}>Pássaro</option>
                </select>
            

            <label htmlFor="genero" className="font-bold text-blue-950 m-8 pl-4.5 ">
                Gênero: 
            </label>
                <select 
                 id="genero" 
                 name="genero"
                 required
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option>selecione</option>
                    <option value={"Fêmea"}>Fêmea</option>
                    <option value={"Macho"}>Macho</option>
                </select>
            

            <label htmlFor="porte" className="font-bold text-blue-950 m-8 pl-4.5 ">
                Porte do animal: 
            </label>
                <select
                 id="porte" 
                 name="porte"
                 required
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option>selecione</option>
                    <option value={"p"}>Pequeno</option>
                    <option value={"m"}>Médio</option>
                    <option value={"g"}>Grande</option>
                </select>
            

            <label htmlFor="foto" className="font-bold text-blue-950 m-8 pl-4.55 " >Foto:</label>
                <input 
                id="foto"
                type="file" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="text-sm text-gray-500 "
                />

            <label htmlFor="location" className="font-bold text-blue-950 m-8 pl-4.5 ">
                Local do desaparecimento:
            </label>
                <input
                 id="location" 
                 name="location"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            

            <label htmlFor="date" className="font-bold text-blue-950 m-8 pl-4.5">
                data do desaparecimento:
            </label>
                <input
                 id="date" 
                 name="date"
                 placeholder="dd/mm/aaaa"
                 pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/202[6-9]"
                 title="Informe uma data entre 2026 e 2029"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            

            <label htmlFor="nome" className="font-bold text-blue-950 m-8 pl-4.5 ">
                Nome do responsável:
            </label>
                <input
                 id="nome" 
                 name="nome"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                 type="text" pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõ]+)*$"
                 title="Digite apenas letras"
                 required
                ></input>
            

            <label htmlFor="contact" className="font-bold text-blue-950 m-8 pl-4.5">
                Contato:
            </label>
                <input
                 id="contact" 
                 name="contact"
                 placeholder="(xx) xxxx-xxxx"
                 pattern="\(d{2}\)\s\d{4-5}-\d{4}"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            

            <label htmlFor="desc" className="font-bold text-blue-950 m-8 pl-4.5">
                Descrição do Pet: 
            </label>
                <textarea
                 id="desc" 
                 name="desc"
                 className="border-2 text-gray-500 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></textarea>
            

            <button
             type="submit"
             className="p-2.5 text-white bg-blue-950 rounded-3xl hover:bg-orange-600 cursor-pointer"
            >Enviar</button>

        </form>
    )
}

export default LostPet