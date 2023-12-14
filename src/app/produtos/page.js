'use client'
import CardCategorias from './CardCategorias';
import { produtosMercado } from '../mock';
import CardProdutos from './CardProdutos';
import { useEffect, useState } from 'react';
import { carrinhoStorage } from '../globalStorage';
import Link from 'next/link';
import Logout from '@/components/Logout';
import InputFilter from '@/components/InputFiltro';

export default function Page() {

    const { categorias, setCategorias } = carrinhoStorage()
    const [filtroProdutos, setFiltroProdutos] = useState([])
    const [currentCategoria, setCurrentCategoria] = useState('')

    useEffect(() => {
        setFiltroProdutos(produtosMercado)
    }, [])



    const filtrarProdutos = (value) => {

        const filtro = produtosMercado.filter(item => {
            return item.nome.toUpperCase().includes(value.toUpperCase())
        })

        setFiltroProdutos(filtro)
    }

    const selectCategoria = (selectedCategoria) => {
        const newCategoria = categorias.map(item => {
            if (selectedCategoria === currentCategoria) {
                setCurrentCategoria('')
                return { ...item, selected: false }
            }

            if (item.nome === selectedCategoria) {
                setCurrentCategoria(item.nome)
                return { ...item, selected: true }
            } else {
                return { ...item, selected: false }
            }
        })

        setCategorias(newCategoria)
    }

    const resetCategoria = () =>{

        const resetCategoria = categorias.map(item => {
                return { ...item, selected: false }
        })

        setCategorias(resetCategoria)
    }

    return (
        <div className='bg-[#254969] h-[100vh] flex flex-col items-center '>
            <Logout/>
            <h1 className='text-white text-[22px] self-start px-3 uppercase'>Categorias</h1>
            <div className='flex items-center w-[90vw] h-[160px] overflow-auto'>
                {
                    categorias.map((item, index) => {
                        return (
                            <div key={index} onClick={() => { selectCategoria(item.nome) }}>
                                <CardCategorias selected={item.selected} nome={item.nome} img={item.img} />
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-white text-[22px] uppercase'>Busque seus itens</h1>
            <InputFilter onChange={(e) => { filtrarProdutos(e.target.value) }} width='90vw' />


            <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>

                {
                    filtroProdutos.map((item, index) => {
                        if (currentCategoria === '') {
                            return (
                                <div key={index} className='my-2'>
                                    <CardProdutos id={item.id} nome={item.nome} img={item.img} preco={item.preco} medida={item.medida} categoria={item.categoria} />
                                </div>
                            )

                        } else if (item.categoria === currentCategoria) {
                            return (
                                <div key={index} className='my-2'>
                                    <CardProdutos id={item.id} nome={item.nome} img={item.img} preco={item.preco} medida={item.medida} categoria={item.categoria} />
                                </div>
                            )
                        }
                    })
                }
            </div>

            <Link href="/minha-lista"><div onClick={resetCategoria} style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[80vw] max-w-[300px]  h-[50px] text-[15px] flex justify-center items-center my-6'><b>VER MINHA LISTA</b></div></Link>

        </div>
    );
}

