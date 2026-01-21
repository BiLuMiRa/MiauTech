import Link from 'next/link'

export default function Header_miaudota() {
    return (
    <header>
        <div className="imgs-header">
            <img src="./imgs/miaudota/Dog1.png" alt="dog1" id="dog1" />
            <img src="./imgs/miaudota/logo.png" alt="logo" id="logo" />
       </div>
       <div className="options">
            <Link href="/MiauTech/">Início</Link>
            <Link href="/MiauTech/pages/miau-juda-ini.html">Miau-juda</Link>
            <Link href="/MiauTech/pages/donation.html">Doar</Link>
            <Link href="/MiauTech/pages/eventos.html">Eventos de adoção</Link>
            <Link href="">
            <img
            src="./imgs/miaudota/user-base.png"
            alt="base-user-profile"
            id="user"/>
            </Link>
        </div>
    </header>
    )
}