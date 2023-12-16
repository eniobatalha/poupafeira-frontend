'use client'

import Link from "next/link";
import { carrinhoStorage } from "../globalStorage";
import Image from "next/image";
import GoogleMapReact, { fitBounds } from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faStore } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page() {

    const { selectedMercado, mercadorias } = carrinhoStorage()

    const [selecitonMercadorias, setSelecitonMercadorias] = useState([])

    useEffect(()=>{
        setSelecitonMercadorias(mercadorias)
    },[mercadorias])

    var total = 0
    
    mercadorias.map(item =>{ total = item.preco + total })
    total = parseFloat(total.toFixed(2));

    const handelCheck = (e) =>{
        const data = selecitonMercadorias.map(item=>{
            if(item.nome === e.nome){
                return {...item, checked: item.checked === undefined ? true : !item.checked}
            }else{
                return item
            }
        })
        setSelecitonMercadorias(data)
    }
    
    const handelFinalizarCompra = () =>{
        console.log(selecitonMercadorias)
    }

    return (
        <div className="bg-[#254969] h-[100vh] flex flex-col justify-center items-center relative">
            <Image className="mt-[20px]" src={selectedMercado?.img} width={100} height={100} /> 
            <h1 className="text-white mb-2"><b>{selectedMercado.nome}</b></h1>

            <div style={{ height: '30vh', width: '80vw' }}>
                {selectedMercado?.coord?.lat && <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{
                        lat: selectedMercado?.coord?.lat,
                        lng: selectedMercado?.coord?.lng
                    }}
                    defaultZoom={11}
                >
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#FAA834]">

                        { selectedMercado?.coord?.lat && <FontAwesomeIcon size="1x" color="black" icon={faBasketShopping}
                            lat={selectedMercado?.coord?.lat}
                            lng={selectedMercado?.coord?.lng}
                        />}
                    </div>
                </GoogleMapReact>}
            </div>
 
            <div className='flex flex-col items-center overflow-auto h-[50vh] mt-3 bg-white w-[80vw] rounded-md mb-3'>
                    {
                        selecitonMercadorias.map(item=>{
                            return(
                                <div className="flex justify-between w-[85vw] items-center max-w-[300px] m-2">
                                    <Checkbox onClick={()=>{handelCheck(item)}} checked={item.checked === true ? true : false} />
                                    <h1>{item.nome}</h1>
                                    <h1>R${item.preco}</h1>
                                </div>
                            )
                        })
                    }
            </div>
                    <h1 className="text-white text-4xl font-bold">Total: R$ {total}</h1>


            <Link href="/produtos"><div onClick={handelFinalizarCompra} style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[300px] h-[50px] text-[20px] flex justify-center items-center my-6'><b>FINALIZAR COMPRAS</b></div></Link>
        
        </div>
    );
}