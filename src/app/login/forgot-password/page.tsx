'use client'

import Image from "next/image"
import Img from '../../../../public/login/login.svg'
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { useRouter } from "next/navigation"

export default function ForgotPassword() {
    const router = useRouter()
    const continuar = () => {
        router.push('/login')
    }
    return(
        <div className="w-full h-screen bg-gradient-to-r from-black to-escuro flex px-5 text-white">
            <div className='w-1/2 p-10 h-screen md:flex items-center justify-center hidden'>
                <Image src={Img} className='h-screen w-full ' alt='imagem de login'/>
            </div>
            <div className='md:w-1/2 w-full md:px-10 flex flex-col items-center justify-center space-y-4'>
                <div className='flex flex-col items-center md:mb-5'>
                    <h1 className='text-dourado text-2xl'>Recuperar senha</h1>
                    <p className='text-cinza' >Por favor, insira os seus dados</p>
                </div>
                <div className='w-full space-y-4'>
                    <Input
                    label="Email"
                    placeholder="Insira o seu email"
                    />
                </div>
                <p>Um codigo será enviado para o seu email</p>
                <Button texto="Continuar" onclick={continuar}/>
            </div>
        </div>
    )
}