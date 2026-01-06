import Link from "next/link";

export function Header(){

    return ( 
        <header>
            <div className="imgs-header">
            <img src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaujuda/Dog1-mascara.png" alt="dog1" id="dog1" />
            <img src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaujuda/Logo-miaujuda.png" alt="logo" id="logo" />
            </div>
            <div className="options">

            <Link href="/">Miau-Dota</Link>
            <Link href="">Perdi meu pet</Link>
            <Link href="">Achei um pet</Link>
            <Link href="">
                <img
                src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/users/user-base.png"
                alt="base-user-profile"
                id="user"
                />
                </Link>

            </div>
        </header>
    )
}