"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase } from '@/src/lib/supabase'
import { Session } from '@supabase/supabase-js'
import PetRegister from './pet-register'

export default function Header_miaudota(props:any) {
    const [session, setSession] = useState<Session | null>(null)
    useEffect(() => {
        const sessao = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            setSession(session)
        }

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    async function logout() {
        await supabase.auth.signOut()
        setState(false)
    }

    const [state, setState] = useState(false)

    return (
    <header>
        <div className="imgs-header">
            <Image src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/Dog1.png"  width={0} height={0} sizes='100vw' style={{ width: '7rem', height: 'auto' }} alt="dog1" id="dog1" />
            <Image src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/logo.png" width={0} height={0} sizes='100vw' style={{ width: '9.5rem', height: 'auto' }} alt="logo" id="logo" />
       </div>
       <div className="options">
            <Link href="/">Início</Link>
            <Link href="/miaujuda">Miau-juda</Link>
            <Link href="/miaudota/donate">Doar</Link>
            <Link href="/miaudota/eventos">Eventos de adoção</Link>
            <button className='hover:cursor-pointer' id='user' onClick={() => {
                console.log("SESSION VALUE:", session)
                console.log("SESSION TYPE:", typeof session)


                if(session) setState(state => !state)
                else props.setLoginAberto(true);
            }}>
                <p className='hidden'>texto</p>
                <Image
                src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/users/user-base.png"
                width={0} height={0} sizes='100vw' style={{ width: '3.5rem', height: 'auto', 'borderRadius': '100px' }} alt="base-user-profile"/>
            </button>
        </div>
        <div className='fixed top-20 right-0 z-[1000]' id={state ? 'abrirMenu' : 'fecharMenu'}>
            {/* Aqui vai o componente do Menu, vai precisar passar a função de logout como argumento */}
        </div>
    </header>
    )
}