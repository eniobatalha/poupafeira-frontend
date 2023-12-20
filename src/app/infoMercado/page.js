/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Link from "next/link";
import Image from "next/image";
import GoogleMapReact, { fitBounds } from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faStore } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { CartContext } from "@/context/cartContext";

export default function Page() {
    const mercadoParams = useSearchParams();
    const { cart, clearCart } = useContext(CartContext)
    const [mercado, setMercado] = useState({})
    const [listaProdutos, setListaProdutos] = useState([])
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
    const [checkboxes, setCheckboxes] = useState({});

    useEffect(() => {
        const mercadoInfo = JSON.parse(mercadoParams.getAll('mercado')[0]);
        setMercado(mercadoInfo)

        const { produtos } = mercadoInfo;

        const listadosProdutos = cart.map(cartItem => {
            const produtoCorrespondente = produtos.find(produto => produto.id_produto === cartItem.id);

            return {
                id: cartItem.id,
                nome_produto: cartItem.nome,
                img: cartItem.img,
                medida: cartItem.medida,
                qtd: cartItem.qtd,
                preco: produtoCorrespondente ? produtoCorrespondente.preco : 0
            };
        });

        setListaProdutos(listadosProdutos);

        const initialCheckboxes = {};
        listadosProdutos.forEach(item => {
            initialCheckboxes[item.id] = true;
        });
        setCheckboxes(initialCheckboxes);

    }, [mercadoParams]);

    useEffect(() => {
        const total = listaProdutos.reduce((acc, item) => {
            if (checkboxes[item.id]) {
                return acc + item.qtd * item.preco;
            }
            return acc;
        }, 0);

        setValorTotalCarrinho(total);
    }, [checkboxes]);

    const handleCheckboxChange = (itemId) => {
        setCheckboxes(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
        }));
    };

    const { nome_mercado, localizacao, img_mercado, info, tele, endereco } = mercado;
    const [latitude, longitude] = localizacao && localizacao.includes(',') ? localizacao.split(',').map(coord => parseFloat(coord.trim())) : [0, 0];

    return (
        <div className="bg-[#254969] h-[100vh] flex flex-col justify-center items-center relative">
            {img_mercado && (
                <Image
                    src={img_mercado}
                    style={{ height: 'auto', width: 'auto' }}
                    width={100}
                    height={100}
                    alt=""
                    className="rounded-full"
                />
            )}

            <div style={{ height: '30vh', width: '88vw' }}>
                {latitude && longitude && (
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyAmgxIBNiIvAnb-HFihEtfqzYG_4c-fMvA" }}
                        defaultCenter={{
                            lat: latitude,
                            lng: longitude
                        }}
                        defaultZoom={11}
                    >
                        <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#FAA834]">
                            {latitude && longitude && (
                                <FontAwesomeIcon
                                    size="2x"
                                    color="black"
                                    icon={faBasketShopping}
                                    lat={latitude}
                                    lng={longitude}
                                />
                            )}
                        </div>
                    </GoogleMapReact>
                )}
            </div>

            <div className='flex flex-col items-center overflow-auto h-[50vh] mt-3 bg-white w-[85vw] rounded-md mb-3'>
                {
                    listaProdutos.map(item => {
                        return (
                            <div key={item.id} className="flex justify-between w-[88vw] items-center max-w-[300px] m-2" style={{ margin: '10px' }}>
                                <Checkbox
                                    checked={checkboxes[item.id] || false}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                                <Image style={{ height: 'auto', width: 'auto', marginLeft: '5px', marginRight: '5px' }} width={25} height={25} src={item.img} alt="half" />
                                <h1 style={{ marginLeft: '5px', marginRight: '5px' }}>{item.nome_produto}</h1>
                                <div style={{ marginLeft: '5px', marginRight: '5px' }}>
                                    <h2 className="font-bold">R$ U</h2>
                                    <h1>R${item.preco}</h1>
                                </div>
                                <div style={{ marginLeft: '5px', marginRight: '5px' }}>
                                    <h2 className="font-bold">QTD</h2>
                                    <h1>{item.qtd}{item.medida}</h1>
                                </div>
                                <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                    <h2 className="font-bold">TOTAL</h2>
                                    <h1>R${item.preco * item.qtd}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="text-white text-4xl font-bold">Total: R$ {valorTotalCarrinho.toFixed(2)}</h1>

            <Link href="/produtos" onClick={clearCart}>
                <div style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center my-6'>
                    <b>FINALIZAR COMPRAS</b>
                </div>
            </Link>
        </div>
    );
}
