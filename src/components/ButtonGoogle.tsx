interface ButtonGoogleProps{
    texto: string
}

export default function ButtonGoogle({texto}: ButtonGoogleProps){
    return (
        <button className="w-full text-black bg-white rounded font-bold h-12">
            {texto}
        </button>
    )
}