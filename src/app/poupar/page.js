'use client'

import Link from "next/link";
import CardMercados from "./CardMercados";
import { mercados } from "../mock";

export default function Page() {


    return (
        <div className="bg-[#254969] h-[100vh] flex flex-col justify-center items-center relative">
            <h1 className="text-white text-[20px] self-start px-4">Mercados sugeridos</h1>


            <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>

                {
                    mercados.map((item,index) => {
                        return (
                            <div key={index} className='my-2'>
                                <CardMercados nome={item.nome} logradouro={item.logradouro} info={item.info} valor={item.valor} />
                            </div>
                        )
                    })
                }
            </div>

            <Link href="/produtos"><div style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center my-6'><b>VOLTAR</b></div></Link>
        </div>
    );
}