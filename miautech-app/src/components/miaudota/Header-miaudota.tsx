"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Header_miaudota(props) {
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
            <button id='user' onClick={() => {props.setLoginAberto(!props.loginAberto)}}>
                <Image
                src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/users/user-base.png"
                width={0} height={0} sizes='100vw' style={{ width: '3.5rem', height: 'auto', 'border-radius': '100px' }} alt="base-user-profile"/>
            </button>
        </div>
    </header>
    )
}