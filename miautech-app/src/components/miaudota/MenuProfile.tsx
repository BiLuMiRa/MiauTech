'use client'
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase.js"
import Link from "next/link"
import Image from "next/image"

export default function MenuProfile({ setLoginAberto }: any) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setUser(session?.user || null)
        }
        getUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user || null)
            }
        )
        return () => subscription.unsubscribe()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setIsMenuOpen(false)
    }

    const handleIconClick = () => {
        if (!user) {
            setLoginAberto(true)
        } else {
            setIsMenuOpen(!isMenuOpen)
        }
    }

    return (
        <div className="relative">
            <button onClick={handleIconClick} className="hover:cursor-pointer" id="user">
                {user ? (
                    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center m-[5%]">
                        <span className="font-bold text-white text-2xl mb-[5%]">
                            {user.email?.charAt(0).toUpperCase()}
                        </span>
                    </div>
                ) : (
                    <Image src="https://arfzdzzwouqjxjnngtna.supabase.co/storage/v1/object/public/images/users/user-base.png" alt="user-icon" width={56} height={56} className="rounded-full" style={{ width: '3.5rem', height: 'auto' }}/>
                )}
            </button>

            {isMenuOpen && user && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm text-gray-600">Logado como:</p>
                        <p className="text-sm font-semibold truncate text-gray-800">{user.email}</p>
                    </div>
                    <Link href="/miaudota/petsRegistrados" onClick={() => setIsMenuOpen(false)}>Registrar Pet</Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 border-t border-gray-200">
                        Sair
                    </button>
                </div>
            )}
        </div>
    )
}