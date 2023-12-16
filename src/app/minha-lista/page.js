'use client'

import InputRegister from "@/components/InputRegister/InputName";
import { useEffect, useState } from "react";
import { carrinhoStorage } from "../globalStorage";
import Link from "next/link";
import CardMinhaLista from "./CardMinhaLista";
import Voltar from "@/components/Voltar";
import InputFilter from "@/components/InputFiltro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Page() {

    const { mercadorias, setMercadorias } = carrinhoStorage()
    const [filtroLista, setFiltroLista] = useState([])

    useEffect(() => {
        setFiltroLista(mercadorias)
    }, [mercadorias])

    useEffect(() => {
        setFiltroLista(mercadorias)
    }, [mercadorias])


    const filtrarMinhaLista = (value) => {

        const filtro = mercadorias.filter(item => {
            return item.nome.toUpperCase().includes(value.toUpperCase())
        })

        setFiltroLista(filtro)
    }

    const handleLimparCarrinho = () => {
        setMercadorias([])
    }

    return (
        <div className="bg-[#254969] h-[100vh] flex flex-col items-center relative">

            <Voltar rota="produtos" />
            <div className="flex justify-between w-[90vw] mb-3">
                <h1 className="text-white text-[20px] self-start">MINHA LISTA</h1>

            </div>

            <InputFilter onChange={(e) => { filtrarMinhaLista(e.target.value) }} width='90vw' />

            <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>

                {
                    filtroLista.map((item, index) => {
                        return (
                            <div key={index} className='my-2'>
                                <CardMinhaLista nome={item.nome} img={item.img} quantidade={item.quantidade} medida={item.medida} index={index} />
                            </div>
                        )
                    })
                }
            </div>

            <div onClick={handleLimparCarrinho} className="w-[300px] h-[50px] text-[20px] flex justify-center items-center py-6 limpar-carrinho cursor-pointer mb-3">
                <FontAwesomeIcon className="text-yellow-500" icon={faTrash} />
                <h1 className="ml-3 text-white font-bold">LIMPAR CARRINHO</h1>
            </div>

            <Link href={mercadorias.length === 0 ? "/produtos" : "/poupar"}><div onClick={() => { mercadorias.length === 0 && alert('Adicione itens ao carrinho!') }} style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center py-6'><b>POUPAR AGORA!</b></div></Link>
        </div>
    );
}