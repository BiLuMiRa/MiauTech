"use client"

import Link from 'next/link'
import { supabase } from "../../lib/supabase.js"
import { FormEvent } from 'react'
import Image from 'next/image.js'
export default function LoginUser(props){
    async function authentication(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
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
            event.currentTarget.reset()
        }
    }
    
    return(
        <div 
            className='z-1000 fixed top-[22%] right-[30%] bg-yellow-950 box-border rounded-2xl shadow-black shadow-2xl p-5' 
            id='userLogin'
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
                <Image src={""} alt='logo miautech'></Image>
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
                        onClick={() => {/*setCdastroAberto*/}}
                        >Cadastre-se
                    </button>
                </p>
            </div>
        </div>
    )
}