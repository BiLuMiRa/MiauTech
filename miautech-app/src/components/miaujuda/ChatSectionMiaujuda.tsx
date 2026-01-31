"use client"
import { useState } from "react"
import ChatMiaujuda from "./Chat_miaujuda"


export default function ChatSectionMiaujuda({vet}: {vet: any}){
    const [chatOpen, setChatOpen] = useState(false)

    return (
        <div>
            <button className="btnAdotar text-white" onClick={() => setChatOpen(!chatOpen)}>
                { chatOpen ? "Fechar Chat" : "Marcar consulta"}
            </button>

            {chatOpen && (
            <div className="fixed bottom-4 right-4 z-50 w-[500px]">
                {/* Botão para fechar dentro do chat se quiser */}
                <button 
                onClick={() => setChatOpen(false)}
                className="relative top-1 left-110 text-white font-bold"
                >
                ✕
                </button>
                <ChatMiaujuda vet={vet} />
            </div>
        )}
        </div>
    )
}