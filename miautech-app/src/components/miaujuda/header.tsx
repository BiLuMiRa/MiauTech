import Link from "next/link";

export function Header(){
        {/* Colocar as imagens no storage do supabase e mudar aqui */}

    return ( 
        <header>
            <div className="imgs-header">
            <img src="../imgs/miaujuda/Dog1-mascara.png" alt="dog1" id="dog1" />
            <img src="../imgs/miaujuda/Logo-miaujuda.png" alt="logo" id="logo" />
            </div>
            <div className="options">

            <Link href="/">Miau-Dota</Link>
            <Link href="">Perdi meu pet</Link>
            <Link href="">Achei um pet</Link>
            <Link href="">
                <img
                src="../imgs/miaudota/user-base.png"
                alt="base-user-profile"
                id="user"
                />
                </Link>

            </div>
        </header>
    )
}