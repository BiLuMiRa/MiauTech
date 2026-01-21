"use client"

import Link from 'next/link'
import { supabase } from "../../lib/supabase.js"
import { FormEvent } from 'react'
function Signin(){
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
        <div>
            <form
                onSubmit={(event) => {signin(event)}}
            >
                <label 
                    htmlFor="email"
                >
                    Email: 
                    <input
                        name="email"
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

                <input type='submit'></input>
            </form>
            <p>Já têm uma conta? Faça login <Link href={"/"}>aqui</Link>!</p>
        </div>
    )
}

export default Signin