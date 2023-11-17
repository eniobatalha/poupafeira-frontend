import { carrinhoStorage } from "@/app/globalStorage";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function CardProdutos({ id, nome, img, preco, medida, categoria }) {

    const { mercadorias, setMercadorias } = carrinhoStorage()

    const [quantidade, setQuantidade] = useState(0)

    const adicionar = () => {
        if (quantidade === 0) return alert('Escolha uma quantidade do produto!')
        const total = preco * quantidade

        var hasItem = false

        var newMercadorias = mercadorias.map(item => {
            if (item.id === id) {
                hasItem = true
                return { id, nome, img, preco, total: preco * (quantidade + item.quantidade), quantidade: quantidade + item.quantidade, medida, categoria }
            } else {
                return item
            }
        })

        if(!hasItem){
            newMercadorias.push({ id, nome, img, preco, total, quantidade, medida, categoria })
        }
        
        setMercadorias(newMercadorias)
        setQuantidade(0)
    }

    const acrescentar = () => {
        setQuantidade(quantidade + 1)
    }

    const decrescer = () => {
        if (quantidade === 0) return
        setQuantidade(quantidade - 1)
    }

    return (
        <div className="flex rounded-lg w-[89vw] h-[120px] shadow-x1 mx-4 py-2 bg-white">
            <div className="w-[50%] flex justify-center items-center">
                <Image width={80} src={img} alt='half' />

            </div>
            <div className="w-[50%] flex flex-col justify-between items-center">
                <h5>{nome}</h5>
                <h5 className="text-[12px]">R$ {preco} <b>em média</b></h5>

                <div className="flex space-x-2">

                    <div onClick={decrescer} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[20px] h-[20px]">-</div>
                    <h1>{quantidade}</h1>
                    <div onClick={acrescentar} className="flex justify-center items-center rounded-full bg-[#FAA834] w-[20px] h-[20px]">+</div>
                </div>

                <Button onClick={adicionar} width="100px" height="20px" title={'Adicionar'}></Button>

            </div>
        </div>
    );
}