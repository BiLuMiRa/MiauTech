'use client'
import Header_miaudota from "@/src/components/miaudota/Header-miaudota"
import EventosMiaudota from "@/src/components/miaudota/eventosMiaudota"
import Footer_miaudota from "@/src/components/miaudota/Footer-miaudota"
import '../../globals.css'
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-fredoka"});

export default function eventos() {
    return (
        <div>
            <Header_miaudota/>
            <EventosMiaudota/>
            <Footer_miaudota/>
        </div>
    )
}