"use client"

import Link from 'next/link'
import { supabase } from "../lib/supabase.js"
import { FormEvent } from 'react'

function Login(){
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
        <div>
            <form
                onSubmit={(event) => {authentication(event)}}
            >
                <label 
                    htmlFor='email'
                >
                    Email: 
                    <input
                        name='email'
                        type="email"
                    ></input>
                </label>

                <label
                    htmlFor='password'
                >
                    Senha
                    <input
                        name='password'
                        type="password"
                    ></input>
                </label>

                <input
                    type='submit'
                ></input>
            </form>
            <p>Não têm uma conta? Registre-se <Link href={"/signup"}>aqui</Link>!</p>
        </div>
    )
}

export default Login