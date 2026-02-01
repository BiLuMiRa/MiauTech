"use client"

import Link from 'next/link'
import { supabase } from "../../lib/supabase.js"
import { FormEvent, useState } from 'react'
import Image from 'next/image.js'
import Signin from './SignIn-user'
export default function LoginUser(props:any){
    async function authentication(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const form = event.currentTarget
        const email = formData.get("email")
        const senha = formData.get("password")

        const { data, error } = await supabase.auth.signInWithPassword({
            email: String(email),
            password: String(senha),
        })

        if (error){
            console.error(error)
            alert(error.message)
        }else{
            alert("Usuário logado com sucesso")
            form.reset()
        }
    }

    const [cadastroAberto, setCadastroAberto] = useState(false);
    
    return(
        <div 
            className='z-1000 fixed top-[22%] right-[30%] bg-yellow-950 box-border rounded-4xl shadow-black shadow-[-px_0_0_-2px_rgba(0,0,0,0.1)] p-5 ' 
            id='openUserLogin'
        >
            <div
                className='flex justify-end'
            >
                <button
                    onClick={() => {props.setLoginAberto(false)}}
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
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-80'
                    alt='logo miautech'
                ></Image>
                <form
                    onSubmit={(event) => {authentication(event)}}
                    className='flex flex-col gap-10 items-center'
                >
                    <label 
                        htmlFor='email'
                    >
                        Email: 
                        <input
                            name='email'
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
                        value={"Entrar"}
                        className='bg-amber-600 rounded-4xl hover:bg-amber-500 hover:cursor-pointer w-38 h-11'
                    ></input>
                </form>
                <p>Ainda não possui uma conta? <button
                        className='underline text-amber-700 hover:cursor-pointer'
                        onClick={() => {setCadastroAberto(true)}}
                        >Cadastre-se!
                    </button>
                </p>
                {cadastroAberto && <Signin setCadastroAberto={setCadastroAberto} setLoginAberto={props.setLoginAberto} />}
            </div>
        </div>
    )
}