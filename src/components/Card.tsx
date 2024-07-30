import { WrapText } from "lucide-react"
import { ReactEventHandler } from "react"

interface CardProps{
    title : string
    description : string
    
}

export default function Card({title,description}: CardProps) {
    return(
        <div   className="bg-cinza h-48 w-40 sm:w-52 md:w-60 p-4 md:p-6 flex flex-col justify-between rounded-lg hover:-translate-y-4 ease-in duration-100 border border-escuro">
            <div className="w-full flex justify-between">
            <h2 className="text-white text-base md:text-base uppercase font-bold">{title}</h2>
            <WrapText size={20} className="text-white"/>
            </div>
            <p className="text-dourado text-xs font-semibold">{description}</p>
        </div>
    )
}