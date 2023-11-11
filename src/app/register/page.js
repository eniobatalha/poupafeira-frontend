'use client'

import Button from "@/components/Button";
import InputRegister from "@/components/InputRegister";
import Voltar from "@/components/Voltar";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-[#254969] h-[100vh] flex justify-center items-center relative">
            <div className="rounded-2xl bg-white h-[80vh] w-[92vw] flex flex-col justify-center items-center space-y-4 ">
                <Link href="/">
                    <div className='flex justify-start items-start w-[100vw] p-3 absolute top-0 left-0 z-10'>
                        <FontAwesomeIcon color='#FAA834' className='self-start' size='2x' icon={faArrowLeft} />
                    </div>
                </Link>
                <h1 className="text-[#254969]"><b>Complete seu Registro</b></h1>

                <InputRegister width="300px" placeholder={'Nome Completo'} />
                <InputRegister width="300px" placeholder={'Username'} />
                <InputRegister width="300px" placeholder={'Número Celular'} />
                <InputRegister width="300px" placeholder={'Email'} />
                <InputRegister width="300px" placeholder={'Senha'} />


                <h1 className="text-[#4a8992] text-[12px] w-[300px] text-center">Sua senha deve ter no mínimo 6 caracteres usando obrigatoriamente letras e números</h1>

                <div className="flex justify-center items-center space-x-3">
                    <input type="checkbox" id="termos" name="termos" className="w-[20px] h-[20px]" />
                    <h1 className="w-[70vw] text-[12px] ">Ao registrar, você concorda com os Termos de Uso do PoupaFeira</h1>
                </div>

                <div className="flex justify-center items-center space-x-3">
                    <Link href="/produtos">
                        <Button width="100px" onClick={() => { alert('Conta criada!') }} title='Registrar' />
                    </Link>
                    <h2>ou</h2>
                    <Link href="/"><div style={{ border: '1px solid #254969', borderRadius: '20px', color: '#254969' }} className='w-[100px] h-[40px] text-[12px] flex justify-center items-center my-6'><b>CANCELAR</b></div></Link>
                </div>

            </div>
        </div>
    );
}