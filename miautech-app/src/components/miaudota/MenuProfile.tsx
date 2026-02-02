'use client'

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/auth-helpers-nextjs"
import LoginUser from "./LoginUser"
import Link from "next/link"
import Image from "next/image"

export default function menuProfile () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [user, setUser] = useState<any>(null)

    const [supabase] = useState(() => 
        createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
        )
    )

    useEffect(() => {
        const getUser = async () => {
            const { data: {session} } = await supabase.auth.getSession()
            setUser(session?.user|| null)
        }
        getUser()

        const { data:{ subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user|| null)
            }
        )

        return () => subscription.unsubscribe()
    }, [supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setIsMenuOpen(false)
    }

    return (
        
        <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                { user ? (
                    <span className="font-bold text-blue-600">
                        {user.email?.charAt(0).toUpperCase()}
                    </span>
                ):(
                    <Image src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/users/user-base.png" alt="user-icon" width={600} height={800} className="user"/>
                )}
            </button>

            {isMenuOpen && (
                <div className="menu-profile">
                    {!user ? (
                        <div className="login-menu">
                            <LoginUser setLoginAberto={setIsMenuOpen}/>
                        </div>
                    ) : (
                        <div>
                            <Link href={'/miaudota/donate'} ></Link>
                        </div>
                    )}
                </div>

            )}
        </div>
    )
}
