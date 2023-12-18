'use client'

import Link from "next/link";
import CardMercados from "./CardMercados";
import { useEffect, useContext, useState } from "react";
import { CartContext } from '@/context/cartContext';
import { api } from "@/service/api";

export default function Page() {
    const { cart } = useContext(CartContext);
    const [mercados, setMercados] = useState([]);

    useEffect(() => {
        const productIds = cart.map((item) => item.id);
        const ids = {
            "produtos": productIds 
        };

        // Função assíncrona para buscar mercados
        const acharMercados = async () => {
            try {
                const response = await api.post('/mercadosEncontrados', ids);
            
                setMercados(response.data);
            } catch (error) {
                console.error('Erro ao buscar mercados:', error);
            }
        };

     
        if (cart.length > 0) {
            acharMercados();
        }
    }, [cart]);

    return (
        <div className="bg-[#254969] h-[100vh] flex flex-col justify-center items-center relative">
            <h1 className="text-white text-[20px] self-start px-4">Mercados sugeridos</h1>
            <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>
                {
                    mercados.map((item) => (
                        <Link href="/infoMercado" onClick={() => { setSelectedMercados(item) }} key={item.id_mercado}>
                            <div className='my-2'>
                                <CardMercados nome={item.nome_mercado}  />
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Link href="/produtos">
                <div style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center my-6'>
                    <b>VOLTAR</b>
                </div>
            </Link>
        </div>
    );
}
