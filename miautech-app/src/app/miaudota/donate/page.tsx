'use client'

import Image from "next/image"
import Header_miaudota from "@/src/components/miaudota/Header-miaudota"
import Footer_miaudota from "@/src/components/miaudota/Footer-miaudota"
import '../../globals.css'

export default function donate() {
    return (
        <body>
            <Header_miaudota/>
            <div className="pq-doar">
                <h1>Por que doar?</h1>
                <div className="imgs-pets">
                    <Image src='https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/posts/cat-dog1.png' width={0} height={0} alt="cat-dog1" sizes="100vw" style={{ width: '10%', height: 'auto' }} className="s-imgs"/>
                    <Image src='https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/posts/cat-dog2.png' width={0} height={0} sizes="100vw" style={{ width: '15%', height: 'auto' }} alt="cat-dog2"/>
                    <Image src='https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/posts/cat-dog3.png' width={0} height={0} sizes="100vw" style={{ width: '10%', height: 'auto' }} alt="cat-dog3" className="s-imgs"
                    />
                </div>
                <p>
                    Integer consectetur convallis risus. Duis in ligula elementum, cursus
                    risus et, bibendum erat. Nullam vulputate orci quis tortor maximus, ut
                    placerat est lobortis. Sed id arcu vel odio mattis aliquam. Cras eu
                    tempus massa, vitae fringilla metus. Morbi a est diam. Etiam semper mi
                    et felis blandit iaculis. Nam sed sapien sed lectus accumsan iaculis eu
                    non nibh. In nunc sapien, molestie ornare diam nec, feugiat consequat
                    nisl.
                </p>
                <button>Apoie a causa</button>
            </div>
            <Footer_miaudota/>
        </body>
        

    )
}