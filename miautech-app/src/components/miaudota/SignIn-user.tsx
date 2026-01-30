"use client"

import { supabase } from "../../lib/supabase.js"
import { FormEvent } from 'react'
import Image from "next/image.js"
export default function Signin(props:any){
    async function signin(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get("email")
        const senha = formData.get("password")

        const { data, error } = await supabase.auth.signUp({
            email: String(email),
            password: String(senha),
        })

        if (error){
            console.error(error)
            alert(error.message)
        }else{
            alert("Usuário cadastrado com sucesso")
            event.currentTarget.reset()
        }
    }
    
    return(
        <div
            className='fixed top-[22%] right-[30%] bg-yellow-900 box-border rounded-4xl p-5 openCad'
        >             
            <div className="flex justify-between">
                <button
                    onClick={() => {
                        props.setCadastroAberto(false);
                    }}
                    className='text-3xl hover:cursor-pointer'
                >
                    Logar
                </button>
                <button
                    onClick={() => {
                        props.setCadastroAberto(false);
                        props.setLoginAberto(false)
                    }}
                    className='text-3xl hover:cursor-pointer'
                >
                    X
                </button>
            </div>
            <div
                className='gap-10 flex flex-col justify-center items-center w-[60vh] h-[60vh] text-white text-2xl'
            >
                <Image 
                    src={""} 
                    alt='logo miautech'
                    width={0}
                    height={0}
                    className="w-50"
                ></Image>
                <form
                    onSubmit={(event) => {signin(event)}}
                    className='flex flex-col gap-10 items-center'
                >
                    <label 
                        htmlFor="email"
                    >
                        Email: 
                        <input
                            name="email"
                            type="email"
                            className='bg-white border-2 rounded-4xl focus:outline-none focus:border-amber-500 p-1 ml-2'
                        ></input>
                    </label>

                    <label
                        htmlFor='password'
                    >
                        Senha:
                        <input
                            name='password'
                            type="password"
                            className='bg-white border-2 rounded-4xl focus:outline-none focus:border-amber-500 p-1 ml-2'
                        ></input>
                    </label>

                    <input
                        type='submit'
                        value={"Cadastrar"}
                        className='bg-amber-600 rounded-4xl hover:bg-amber-500 hover:cursor-pointer w-38 h-11'
                    ></input>
                </form>
                <p>Faça parte da MiauTech!</p>
            </div>
        </div>
    )
}