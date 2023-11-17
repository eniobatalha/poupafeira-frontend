'use client'

import Button from "@/components/Button";
import InputRegister from "@/components/InputRegister";
import InputSenha from "@/components/InputSenha";
import Link from "next/link";


export default function Page() {
    return (
        <div className="bg-[#254969] h-[100vh] flex justify-center items-center relative">
            <div className="rounded-2xl bg-white h-[80vh] w-[92vw] flex flex-col justify-center items-center space-y-4 ">
                <Link href="/">
                    <div className='flex justify-start items-start w-[100vw] p-3 absolute top-0 left-0 z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAA834" class="w-9 h-9">
                            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </Link>
                <h1 className="text-[#254969] uppercase"><b>Complete seu Registro</b></h1>

                <InputRegister width="275px" placeholder={'Nome Completo'} />
                <InputRegister width="275px" placeholder={'Username'} />
                <InputRegister width="275px" placeholder={'Número Celular'} />
                <InputRegister width="275px" placeholder={'Email'} />
                <InputSenha width="275px" placeholder={'Senha'}/>


                <h1 className="text-[#4a8992] text-[12px] w-[275px] text-center">Sua senha deve ter no mínimo 6 caracteres usando obrigatoriamente letras e números</h1>

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