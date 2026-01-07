"use client"

import { supabase } from "../lib/supabase.js"
function PetRegister(){
    // PEGANDO INFORMAÇÕES DO FORMULÁRIO
    async function register(event:any){
        event.preventDefault()

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

        const {error} = await supabase
        .from('Registro_de_pets')
        .insert([{ name:nome, age:(idade + tipoIdade), faixa: faixa, sexo:sexo, size:tamanho, type:tipo, desc:desc, vacinas:vacinas, castr: castr == "sim" ? true : false, vermi: vermi ? vermi : null, defici:defici },])

        if (error) {
        console.error(error)
        alert(error.message)
        } else {
        alert("Pet cadastrado com sucesso")
        event.currentTarget.reset()
        }
    }

    //-------------HTML---------------
    return (
        <form
         onSubmit={(event) => {register(event)}}
         className="flex flex-col items-center gap-2 text-2xl bg-orange-300 m-20 p-5 border-0 rounded-3xl"
        >
{/* ----------------NOME---------------  */}
            <label htmlFor="nome">
                Nome:
                <input
                 id="nome" 
                 name="nome"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

{/* ------------------IDADE/FAIXA-------------------- */}

            <label htmlFor="idade">
                Idade:
                <input
                 id="idade" 
                 name="idade"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
                <select
                 id="faixa"
                 name="faixa"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
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
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
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
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
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
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                >
                    <option value={"Gato"}>Gato</option>
                    <option value={"Cachorro"}>Cachorro</option>
                    <option value={"Pássaro"}>Pássaro</option>
                </select>
            </label>

{/* -----------DESCRIÇÃO------------------ */}
            <label htmlFor="desc">
                Descrição: 
                <textarea
                 id="desc" 
                 name="desc"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></textarea>
            </label>

{/* -----------VACINAS--------------- */}
            <h3>Vacinas:</h3>
            <label htmlFor="rab">
                Antirab 
                <input  
                 name="rab"
                 type="checkbox"
                 value={"Antirab"}
                    />
            </label>
            <label htmlFor="felv">
                FELV 
                <input  
                 name="felv"
                 type="checkbox"
                 value={"FELV"}
                />
            </label>
            <label htmlFor="fiv">
                FIV 
                <input  
                 name="fiv"
                 type="checkbox"
                 value={"FIV"}
                />
            </label>

{/* ---------------VERMIFUGADO------------- */}
            <label htmlFor="vermi">
                Vermifugado: 
                <input 
                 id="vermi" 
                 name="vermi"
                 type="date"
                ></input>
            </label>

{/* --------------CASTRADO--------------- */}
            <label htmlFor="castr">
                Castrado: 
                <input 
                 id="castr" 
                 name="castr"
                 type="radio"
                 value={"sim"}
                ></input>
            </label>

            <label htmlFor="defici">
                Deficiências: 
                <input 
                 id="defici" 
                 name="defici"
                 className="border-2 border-amber-600 rounded-3xl focus:outline m-2 p-1"
                ></input>
            </label>

            <input
             type="submit"
             className="p-2.5 bg-orange-400 rounded-3xl hover:bg-orange-600 cursor-pointer"
            ></input>
        </form>
    )
}

export default PetRegister