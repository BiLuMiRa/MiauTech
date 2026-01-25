import Image from "next/image"

export default function Footer_miaudota() {
    return (
        <footer>
            <Image className="logo-footer" src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/miaudota/logo2.png" alt="Logo2miaudota" width={0} height={0} sizes="100vm" style={{ width: '25rem', height: 'auto' }}/>
            <div className="infos-pag">
                Entre em contato <br />
                Miaudota@miauau.com
            </div>
        </footer>
    )
}