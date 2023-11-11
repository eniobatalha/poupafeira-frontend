'use client'

import Image from 'next/image'
import carrinho from '../assets/img/page-elements/carrinho.png'
import half1 from '../assets/img/page-elements/half1.png'
import half2 from '../assets/img/page-elements/half2.png'
import half from '../assets/img/page-elements/half.png'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useState } from 'react'
import Link from 'next/link'
import Voltar from '@/components/Voltar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    const [isLogin, setIsLogin] = useState(false)

    const openLogin = () => {
        setIsLogin(true)
    }

    const closeLogin = () => {
        setIsLogin(false)
    }

    return (
        <div className='h-[100vh]'>
            {
                isLogin &&
                <div onClick={closeLogin} className='flex justify-start items-start w-[100vw] p-3 absolute top-0 left-0 z-10'>
                    <FontAwesomeIcon color='#FAA834' className='self-start' size='2x' icon={faArrowLeft} />
                </div>
            }
            <div style={{ background: isLogin ? 'white' : '#254969' }} className={` h-[50vh] flex justify-center items-center  relative`}>
                <Image src={carrinho} width={300} alt='logo' />
                <Image className='absolute bottom-0 left-0' src={half1} width={40} alt='half' />
                <Image className='absolute bottom-0 right-0 rotate-[270deg]' src={half1} width={40} alt='half' />
            </div>

            <div style={{ background: isLogin ? '#254969' : 'white' }} className={` h-[50vh] flex flex-col justify-center items-center p-10 relative`}>
                {
                    isLogin ?
                        <div className='inputLogin flex flex-col justify-between items-center'>
                            <Input width='250px' placeholder={'Username ou Email'} onChange={(e) => console.log(e)} />
                            <Input width='250px' placeholder={'Senha'} onChange={(e) => console.log(e)} />
                            <Link href="/produtos"> <Button title='Login'>Login</Button></Link>

                            <a href='' className='underline p-3 text-white'>Esqueceu a senha?</a>
                        </div> :
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
