'use client'

import { useContext, useState } from 'react';
import CardMinhaLista from '../../components/CardMinhaLista';
import Voltar from '@/components/Voltar';
import InputFilter from '@/components/InputFiltro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { CartContext } from '@/context/cartContext';

export default function Page() {
  const { cart, clearCart } = useContext(CartContext);
  const [filtroTexto, setFiltroTexto] = useState('');

  // Função para filtrar os itens com base no texto inserido no filtro
  const filtrarItens = (texto) => {
    setFiltroTexto(texto);
  };

  // Filtrar os itens do carrinho com base no texto do filtro
  const itensFiltrados = cart.filter((item) =>
    item.nome.toLowerCase().includes(filtroTexto.toLowerCase())
  );
  

  return (
    <div className="bg-[#254969] h-[100vh] flex flex-col items-center relative">

      <Voltar rota="produtos" />
      <div className="flex justify-between w-[90vw] mb-3">
        <h1 className="text-white text-[20px] self-start">MINHA LISTA</h1>
      </div>

      <InputFilter onChange={(e) => filtrarItens(e.target.value)} width='90vw' />

      <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>
        {itensFiltrados.map((item) => (
          <div key={item.id} className='my-2'>
            <CardMinhaLista
              id={item.id}
              nome={item.nome}
              img={item.img}
              quantidade={item.qtd}
              medida={item.medida}
            />
          </div>

        ))}
      </div>

      <div onClick={clearCart} className="w-[300px] h-[50px] text-[20px] flex justify-center items-center py-6 limpar-carrinho cursor-pointer mb-3">
        <FontAwesomeIcon className="text-yellow-500" icon={faTrash} />
        <h1 className="ml-3 text-white font-bold">LIMPAR CARRINHO</h1>
      </div>

      <Link href={cart.length === 0 ? "/produtos" : "/poupar"}>
        <div onClick={() => { cart.length === 0 && alert('Adicione itens ao carrinho!') }} style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center py-6'><b>POUPAR AGORA!</b></div>
      </Link>
    </div>
  );
}
