"use client"
import { useState } from "react"
import Chat from "./Chat"


export default function ChatSection({pet}: {pet: any}){
    const [chatOpen, setChatOpen] = useState(false)

    return (
        <div>
            <button className="btnAdotar" onClick={() => setChatOpen(!chatOpen)}>
                { chatOpen ? "Fechar Chat" : "Quero Adotar!"}
            </button>

            {chatOpen && (
            <div className="fixed bottom-4 right-4 z-50 w-full max-w-[350px]">
                {/* Botão para fechar dentro do chat se quiser */}
                <button 
                onClick={() => setChatOpen(false)}
                className="absolute top-2 right-4 text-white font-bold"
                >
                ✕
                </button>
                <Chat pet={pet} />
            </div>
        )}
        </div>
    )
}