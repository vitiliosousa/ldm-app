'use client'
import Img from '../../../public/login/login.svg'
import Input from '../../components/Input'
import ButtonGoogle from '../../components/ButtonGoogle'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Login() {
    const router = useRouter()
    const elementos = () => {
        router.push('/elementos')
    }
    return(
        <div className="w-full h-screen bg-gradient-to-r from-black to-escuro flex px-5 text-white">
            <div className='w-1/2 p-10 h-screen md:flex items-center justify-center hidden'>
                <Image src={Img} className='h-screen w-full ' alt='imagem de login'/>
            </div>
            <div className='md:w-1/2 w-full md:px-10 flex flex-col items-center justify-center space-y-4'>
                <div className='flex flex-col items-center md:mb-5'>
                    <h1 className='text-dourado text-2xl'>Bem vindo de volta!</h1>
                    <p className='text-cinza' >Por favor, insira os seus dados</p>
                </div>
                <div className='w-full space-y-4'>
                    <Input
                    label={"Nome"}
                    placeholder={"Insira o seu nome"}
                    />
                    <Input
                    label={"Palavra Passe"}
                    placeholder={"Insira a sua palavra passe"}
                    />
                </div>
                <div className='w-full flex justify-between'>
                    <div className='flex gap-1'>
                        <input type="checkbox"/>
                        <p>Lembrar-me</p>
                    </div>
                    <a href="#" className='underline text-dourado' >Esqueceu a senha</a>
                </div>                
                <button onClick={elementos} className="w-full text-black bg-dourado rounded font-bold h-12">
                    Entrar
                </button>
                <p>Não tens uma conta? <a href="/signup" className='text-dourado underline'>Criar Conta</a></p>
                <p>Ou</p>
                <ButtonGoogle
                texto={"Entrar com Google"}
                />
                <p className='text-center'>Ao prosseguir, voce automaticamente concorda com os <a href="#" className='text-dourado underline'>nossos termos</a> e <a href="" className='text-dourado underline'>politicas de privacidade</a></p>
            </div>
        </div>
    )
}