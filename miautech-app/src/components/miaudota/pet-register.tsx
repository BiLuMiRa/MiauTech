"use client"

import { FormEvent, useState, useEffect } from "react"
import { supabase } from "../../lib/supabase.js"
import { Session } from '@supabase/supabase-js'

import { User } from "@supabase/supabase-js"

import { Dispatch, SetStateAction } from "react"
type PetRegisterProps = {
    fechar: Dispatch<SetStateAction<boolean>>
}
function PetRegister({ fechar }: PetRegisterProps){
    // PEGANDO INFORMAÇÕES DO FORMULÁRIO
    const [file,setFile] = useState<File | null>(null)
    const [user, setUser] = useState<Session | null>(null)

    useEffect(() => {
        const sessao = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            setUser(session)
        }
        sessao()
    }, [])

    async function register(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const form = event.currentTarget

        if(!file) return alert("Selecione uma imagem do pet!")

        const formData = new FormData(event.currentTarget)

        const nome = formData.get("nome")
        const idade = formData.get("idade")
        const tipoIdade = formData.get("faixa")
        let faixa
        if(tipoIdade == "meses"){
            faixa = "2-11 meses"
        }else{
            if(Number(idade) >= 1 && Number(idade) <= 3){
                faixa = "1-3 anos"
            }else if(Number(idade) >= 4 && Number(idade) <= 6){
                faixa = "4-6 anos"
            }
        }
        const sexo = formData.get("sexo")
        const tamanho = formData.get("tamanho")
        const tipo = formData.get("tipo")
        const desc = formData.get("desc")
        const rab = formData.get("rab")
        const fiv = formData.get("fiv")
        const felv = formData.get("felv")
        const vacinas = [rab ? rab : "", fiv ? fiv : "", felv ? felv : ""]
        const castr = formData.get("castr")
        const vermi = formData.get("vermi")
        const defici = formData.get("defici")

        const fileExt = file.name.split(".").pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `pets/${fileName}`

        const{error : uploadError} = await supabase.storage
        .from("images")
        .upload(filePath, file)

        if(uploadError) throw uploadError

        const {data: {publicUrl}} = supabase.storage
        .from("images")
        .getPublicUrl(filePath) 


        if(user){
            const {error} = await supabase
            .from('Registro_de_pets')
            .insert([{ name:nome, age:String(idade+" ")+String(tipoIdade), faixa: faixa, sexo:sexo, size:tamanho, type:tipo, desc:desc, vacinas:vacinas, castr: castr == "sim" ? true : false, vermi: vermi ? vermi : null, defici:defici, image: publicUrl, user_id: user.user.id}])

            if (error) {
                console.error(error)
                alert(error.message)
            } else {
                alert("Pet cadastrado com sucesso")
                form.reset()
            }
        }
    }

    //-------------HTML---------------
    return (
        <div className="flex flex-col items-center justify-center p-5 rounded-l-3xl bg-yellow-950 text-white">
            <button 
                className="relative right-45 cursor-pointer active:cursor-alias"
                onClick={() => {fechar(false)}}
            >X</button>
            <h1 className="m-4 text-3xl">Vamos registrar seu pet?</h1>
            <form
            onSubmit={(event) => {register(event)}}
            className="flex flex-col items-center justify-center gap-4"
            >
{/* ----------------NOME---------------  */}
            <label htmlFor="nome">
                Nome:
                <input
                 id="nome"
                 name="nome"
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                 type="text" pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõ]+)*$"
                 title="Digite apenas letras"
                 required
                ></input>
            </label>

{/* ------------------IDADE/FAIXA-------------------- */}

            <label htmlFor="idade">
                Idade:
                <input
                 id="idade" 
                 name="idade"
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                ></input>
                <select
                 id="faixa"
                 name="faixa"
                 required
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                >
                    <option value={"meses"}>meses</option>
                    <option value={"anos"}>anos</option>
                </select>
            </label>
        
            
            
{/* --------------GENERO---------------- */}
            <label htmlFor="sexo">
                Gênero: 
                <select 
                 id="sexo" 
                 name="sexo"
                 required
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                >
                    <option value={"Fêmea"}>Fêmea</option>
                    <option value={"Macho"}>Macho</option>
                </select>
            </label>
            
{/* -----------TAMANHO------------ */}
            <label htmlFor="tamanho">
                Tamanho: 
                <select
                 id="tamanho" 
                 name="tamanho"
                 required
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                >
                    <option value={"p"}>Pequeno</option>
                    <option value={"m"}>Médio</option>
                    <option value={"g"}>Grande</option>
                </select>
            </label>

 {/* --------TIPO DE ANIMAL-------------- */}
            <label htmlFor="tipo">
                Tipo: 
                <select 
                 id="tipo" 
                 name="tipo"
                 required
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                >
                    <option value={"Gato"}>Gato</option>
                    <option value={"Cachorro"}>Cachorro</option>
                    <option value={"Pássaro"}>Pássaro</option>
                </select>
            </label>

{/* -----------FOTO DO PET------------------ */} 
            <label htmlFor="file" className="">
                Foto:
                <input 
                id="file"
                name="file"
                type="file" 
                accept="image/*"
                onChange={(event) => setFile(event.target.files?.[0] || null)}
                className="text-sm bg-white rounded-3xl m-2 p-2 text-black"
                />  
            </label>
                         

{/* -----------DESCRIÇÃO------------------ */}
            <label htmlFor="desc">
                Descrição: 
                <textarea
                 id="desc" 
                 name="desc"
                 minLength={10} maxLength={500}
                 required
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                ></textarea>
            </label>

{/* -----------VACINAS--------------- */}
            <div
                className="flex"
            >
                <p className="mr-2">Vacinas:</p>
                <div>
                    <label htmlFor="rab">
                        Antirab 
                        <input  
                        id="rab"
                        name="rab"
                        type="checkbox"
                        className="ml-2 mr-2"
                        value={"Antirab"}
                            />
                    </label>
                    <label htmlFor="felv">
                        FELV 
                        <input  
                        id="felv"
                        name="felv"
                        type="checkbox"
                        className="ml-2 mr-2"
                        value={"FELV"}
                        />
                    </label>
                    <label htmlFor="fiv">
                        FIV 
                        <input  
                        id="fiv"
                        name="fiv"
                        type="checkbox"
                        className="ml-2 mr-2"
                        value={"FIV"}
                        />
                    </label>
                </div>
            </div>
            

{/* ---------------VERMIFUGADO------------- */}
            <label htmlFor="vermi">
                Vermifugado: 
                <input 
                 id="vermi" 
                 name="vermi"
                 type="date"
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                ></input>
            </label>

{/* --------------CASTRADO--------------- */}
            <label htmlFor="castr">
                Castrado
                <input 
                 id="castr" 
                 name="castr"
                 type="radio"
                 value={"sim"}
                 className="ml-2"
                ></input>
            </label>

{/* -------------DEFICIÊNCIAS-------------  */}
            <label htmlFor="defici">
                Deficiências: 
                <input 
                 id="defici" 
                 name="defici"
                 className="bg-white rounded-3xl focus:outline-none focus:border-amber-500 m-2 p-1 invalid:border-red-600 text-black"
                 pattern="^[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+)*(,\s?[A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+( [A-Za-zÁÉÍÓÚáéíóúÂÊÔâêôÃÕãõÇç]+)*)*$"
                 title="Digite apenas letras"
                ></input>
            </label>

{/* -------------ENVIAR----------- */}
            <input
             type="submit"
             className="p-2.5 bg-orange-400 rounded-3xl hover:bg-orange-600 cursor-pointer active:cursor-alias"
            ></input>
        </form>
    </div>
    )
}

export default PetRegister