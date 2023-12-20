import React, { useContext, useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import { CartContext } from '@/context/cartContext';

export default function CardProdutos({ id, nome, img, preco, medida }) {
  const [qtd, setQtd] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, nome, img, medida, qtd };
    if (qtd > 0) {
      addToCart(product);
      setQtd(0);
    }
  };

  const aumentarQtd = () => {
    setQtd(qtd + 1);
  };

  const diminuirQtd = () => {
    if (qtd > 0) {
      setQtd(qtd - 1);
    }
  };

  return (
    <div className="flex rounded-lg w-[89vw] h-[165px] shadow-x1 mx-4 py-2 bg-white">
      <div className="w-[50%] flex justify-center items-center">
        <Image style={{ height: 'auto', width: 'auto' }} width={50} height={50} src={img} alt="half" />
      </div>

      <div className="w-[50%] flex flex-col justify-between items-center">
        <h5 className="text-[20px] font-bold">
          {nome} <span className="text-sm">{medida}</span>
        </h5>

        <h5 className="text-[16px]">
          R$ {preco} <b>em média</b>
        </h5>

        <div className="flex flex-col items-center">
          <div className="flex space-x-2 mt-2">
            <div onClick={diminuirQtd} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[30px] h-[30px]">
              <span className="text-xl">-</span>
            </div>
            <h1 className="text-xl">{qtd}</h1>
            <div onClick={aumentarQtd} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[30px] h-[30px]">
              <span className="text-xl">+</span>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <Button
              onClick={handleAddToCart}
              width="140px"
              height="40px"
              title={'Adicionar'}>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
