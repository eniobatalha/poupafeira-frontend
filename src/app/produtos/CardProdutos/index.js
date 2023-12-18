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
    <div className="flex rounded-lg w-[89vw] h-[120px] shadow-x1 mx-4 py-2 bg-white">
      <div className="w-[50%] flex justify-center items-center">
        <Image style={{ height: 'auto', width: 'auto' }} width={50} height={50} src={img} alt="half" />
      </div>
      <div className="w-[50%] flex flex-col justify-between items-center">
        <h5>{nome}</h5>
        <h5 className="text-[12px]">
          R$ {preco} <b>em média</b>
        </h5>

        <div className="flex space-x-2">
          <div onClick={diminuirQtd} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[20px] h-[20px]">
            -
          </div>
          <h1>{qtd}</h1>
          <div onClick={aumentarQtd} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[20px] h-[20px]">
            +
          </div>
          <p>{medida}</p>
        </div>

        <Button onClick={handleAddToCart} width="100px" height="20px" title={'Adicionar'}></Button>
      </div>
    </div>
  );
}
