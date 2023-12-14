'use client'

import Image from 'next/image'
import carrinho from '../assets/img/page-elements/carrinho.png'
import half1 from '../assets/img/page-elements/half1.png'
import half2 from '../assets/img/page-elements/half2.png'
import half from '../assets/img/page-elements/half.png'
import Button from '@/components/Button'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/authContext'
import InputLoginEmail from '@/components/InputLogin/InputLoginEmail'
import InputLoginSenha from '@/components/InputLogin/InputLoginSenha'

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { AuthLogin } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(false)

    const openLogin = () => {
        setIsLogin(true)
    }

    const closeLogin = () => {
        setIsLogin(false)
    }

    const onSubmit = async (data) => {
       await AuthLogin(data)
      };

    return (
        <div className='h-[100vh]'>
            {
                isLogin &&
                <div onClick={closeLogin} className='flex justify-start items-start w-[100vw] p-3 absolute top-0 left-0 z-10' style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FAA834" className="w-9 h-9">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </div>
            }
            <div style={{ background: isLogin ? 'white' : '#254969' }} className={` h-[50vh] flex justify-center items-center  relative`}>
                <Image src={carrinho} width={300} alt='logo' priority/>
                <Image className='absolute bottom-0 left-0' src={half1} width={40} alt='half' />
                <Image className='absolute bottom-0 right-0 rotate-[270deg]' src={half1} width={40} alt='half' />
            </div>

            <div style={{ background: isLogin ? '#254969' : 'white' }} className={` h-[50vh] flex flex-col justify-center items-center p-10 relative`}>
                {
                    isLogin ?
                    <form onSubmit={handleSubmit(onSubmit)} className='inputLogin flex flex-col justify-between items-center'>

                        <InputLoginEmail width="275px" placeholder={'Email'} register={ register } errors={ errors }/>
                        <InputLoginSenha width="275px" placeholder={'Senha'} register={ register } errors={ errors } />
                        
                        <Button title='Login' type='submit' />
                        <a href='' className='underline p-3 text-white'>Esqueceu a senha?</a>
                    </form>
                   :
                        <>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-4xl text-[#072F4D]'><b>PoupaFeira</b></h1>
                                <h2 className='text-1xl text-[#072F4D]'><b>Economia Garantida!</b></h2>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <Button width='200px' onClick={openLogin} title='Login'>Login</Button>
                                <a href='/register' className='underline p-3'>Registre-se</a>
                            </div>
                        </>
                }
                <Image className='absolute top-0 left-0' src={half2} width={40} alt='half' />
                <Image className='absolute top-0 right-0 rotate-90' src={half2} width={40} alt='half' />
            </div>


            <div className='absolute top-0 left-0 w-full flex justify-center items-center'>
                <Image src={half} width={80} alt='half' />
            </div>
        </div>
    )
}
