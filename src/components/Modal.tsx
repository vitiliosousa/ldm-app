import Cards from "./Cards";

export default function Modal() {
    return(
        <div className="fixed inset-0 bg-black/60 flex flex-row items-center justify-center w-30">
            <div className="bg-dourado w-1/2 h-1/2 flex flex-row gap-14 py-10 px-4">
                <Cards title={"Plana"} description={"Esta e a plana"}/>
                <Cards title={"Inclinada"} description={"Esta é a inclinada"}/>
                <Cards title={"Mista"} description={"Esta é a Mista"}/>
                <Cards title={"Outros"} description={"Escolhe"}/> 
            </div>
        </div>
    )
}


