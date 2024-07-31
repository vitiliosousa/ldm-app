import { ReactEventHandler } from "react"

interface ButtonProps{
    texto: string
    onclick : ReactEventHandler<HTMLButtonElement>
}

export default function Button({texto, onclick}:ButtonProps){
    
    return (
        <button onClick={onclick} className="w-full text-black bg-dourado rounded font-bold h-12">
            {texto}
        </button>
    )
}