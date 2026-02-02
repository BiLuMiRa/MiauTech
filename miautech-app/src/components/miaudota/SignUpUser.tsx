"use client"

import { supabase } from "../../lib/supabase.js"
import { FormEvent } from 'react'
import Image from "next/image.js"
export default function SignUp(props:any){
    async function signin(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const form = event.currentTarget
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
            form.reset()
        }
    }
    
    return(

        <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-blur-sm">
        <div
                    className='shadow-black shadow-[-px_0_0_-2px_rgba(0,0,0,0.1)] bg-yellow-900 box-border rounded-4xl p-5 openCad relative top-[15%]'
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
                            src={"https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miautech/logomiautech.png"} 
                            alt='logo miautech'
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-80"
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
                                    className='bg-white rounded-4xl focus:outline-none focus:border-amber-500 p-1 ml-2 text-black'
                                ></input>
                            </label>

                            <label
                                htmlFor='password'
                            >
                                Senha:
                                <input
                                    name='password'
                                    type="password"
                                    className='bg-white rounded-4xl focus:outline-none focus:border-amber-500 p-1 ml-2 text-black'
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
        </div>
        
    )
}