"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/src/lib/supabase"


export default function ChatMiaujuda({vet}: {vet:any}){
    const [visitorId, setVisitorId] = useState("")
    const [roomId, setRoomId] = useState("")
    const [messages,setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState("")

    useEffect(() =>{

        let id = localStorage.getItem("chat_visitor_id")
        if(!id){
            id = `anon_${Math.random()}`
            localStorage.setItem("chat_visitor_id",id)
        }
        setVisitorId(id)

        if (vet?.id){
            setRoomId(`${vet.id}_${id}`)
        }
    },[vet.id])

    useEffect(() => {
            if(!roomId)return;
    
            // essa função carrega o historico
            const fetchMessages = async () => {
                const {data}= await supabase
                .from("chat_messages_miaujuda")
                .select("*")
                .eq("room_id",roomId)
                .order("created_at", {ascending : true})
            
                if (data) setMessages(data)
            }
    
            fetchMessages()
    
            // escuta novas mensagens em tempo real
            const channel = supabase
            .channel(roomId)
            .on("postgres_changes",
                { event: 'INSERT', schema: 'public', table: 'chat_messages_miaujuda',filter: `room_id=eq.${roomId}`},
                (payload) => {
                    setMessages((prev) => {
                      if (prev.find(m => m.id === payload.new.id)) return prev;
                      return [...prev, payload.new];
                  })
                }
            )
            .subscribe()
    
            return () => { supabase.removeChannel(channel)}
        },[roomId])
    
        // função para enviar mensagens
        const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!newMessage.trim()) return
    
        const { error } = await supabase
        .from("chat_messages_miaujuda")
        .insert([{
            content: newMessage,
            room_id: roomId,
            sender_name: "Visitante",
            sender_id: visitorId,
            vet_id: vet.id
        }])
    
        if(!error) setNewMessage("")
    }

    return (
    <div className="max-w-md ml-[230px] my-10 bg-white shadow-xl rounded-[0.5rem] border border-sky-100 overflow-hidden">
      {/* Cabeçalho */}
      <div className="bg-sky-700 p-4 text-white text-center">
        <h3 className="font-bold">Chat com {vet.name}</h3>
        <p className="text-[10px] opacity-80">ID da Sala: {roomId}</p>
      </div>

      {/* Lista de Mensagens */}
      <div className="h-80 overflow-y-auto p-4 bg-sky-50 flex flex-col gap-3">
        {messages.map((msg) => {
          const isMe = msg.sender_id === visitorId;
          return (
            <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-[0.5rem] text-sm shadow-sm ${
                isMe ? "bg-sky-800 text-white rounded-tr-none" : "bg-white text-gray-700 rounded-tl-none"
              }`}>
                <p>{msg.content}</p>
              </div>
            </div>
          );
        })}
        {messages.length === 0 && (
          <p className="text-center text-gray-400 text-xs mt-10">Diga um "Oi" para começar!</p>
        )}
      </div>

      {/* Formulário de Envio */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-sky-100 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escreva sua dúvida..."
          className="flex-1 border-2 border-sky-100 rounded-full px-4 py-2 outline-none focus:border-sky-400 text-sm"
        />
        <button 
          type="submit"
          className="bg-sky-700 hover:bg-sky-800 text-white p-2 rounded-full transition-transform active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  )
}