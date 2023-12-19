'use client'
import CardCategorias from '../../components/CardCategorias';
import CardProdutos from '../../components/CardProdutos';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logout from '@/components/Logout';
import InputFilter from '@/components/InputFiltro';
import { api } from '@/service/api';


export default function Page() {

    const [categorias, setCategorias] = useState([]);
    const [produtosOriginais, setProdutosOriginais] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [filtroTexto, setFiltroTexto] = useState('');
    const [currentCategoria, setCurrentCategoria] = useState('');
    
    useEffect(() => {
        const getCategorias = async () => {
            try {
                const response = await api.get('/categorias');
                setCategorias(response.data);
            } catch (err) {
                console.error('Erro ao buscar categorias:', err);
            }
        };

        const getProdutos = async () => {
            try {
                const response = await api.get('/produtos');
                const produtosData = response.data;
                setProdutosOriginais(produtosData); // Armazena a lista original de produtos
                setProdutos(produtosData); // Define os produtos a serem exibidos inicialmente
            } catch (err) {
                console.error('Erro ao buscar produtos:', err);
            }
        };

        getCategorias();
        getProdutos();
    }, []);

    const filtrarProdutos = (texto) => {
        setFiltroTexto(texto);
        const produtosFiltrados = produtosOriginais.filter((produto) =>
            produto.nome_produto.toLowerCase().includes(texto.toLowerCase())
        );
        setProdutos(produtosFiltrados);
    };

    const selectCategoria = (categoria) => {
        if (currentCategoria === categoria) {
            setCurrentCategoria('');
        } else {
            setCurrentCategoria(categoria);
        }
    };

    return (
        
        <div className='bg-[#254969] h-[100vh] flex flex-col items-center '>
            <Logout/>
            <h1 className='text-white text-[22px] self-start px-3 uppercase'>Categorias</h1>
            <div className='flex items-center w-[90vw] h-[160px] overflow-auto'>
                {
                  <div className='flex items-center w-[90vw] h-[160px] overflow-auto'>
                  {categorias.map((item) => (
                        <CardCategorias
                            key={item.id_categoria}
                            nome={item.nome_categoria}
                            img={item.img_categoria}
                            medida={item.medida}
                            isSelected={currentCategoria === item.nome_categoria}
                            onSelect={() => selectCategoria(item.nome_categoria)} // Função de seleção da categoria
                        />
                    ))}
              </div>
                }
            </div>
            <h1 className='text-white text-[22px] uppercase'>Busque seus itens</h1>
            <InputFilter onChange={(e) => filtrarProdutos(e.target.value)} width='90vw' />

            <div className='flex flex-col items-center overflow-auto h-[400px] mt-3'>
                {produtos
                    .filter(
                        (item) =>
                            currentCategoria === '' ||
                            item.categoria.nome_categoria === currentCategoria
                    )
                    .map((item) => {
                        if (filtroTexto === '' || item.nome_produto.toLowerCase().includes(filtroTexto.toLowerCase())) {
                            return (
                                <div key={item.id_produto} className='my-2'>
                                    <CardProdutos
                                        id={item.id_produto}
                                        nome={item.nome_produto}
                                        img={item.img_produto}
                                        preco={item.media_preco}
                                        medida={item.medida}
                                        categoria={item.categoria.nome_categoria}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
            </div>

            <Link href="/minha-lista"><div style={{ border: '1px solid #fff', borderRadius: '20px', color: '#fff' }} className='w-[80vw] max-w-[300px]  h-[50px] text-[15px] flex justify-center items-center my-6'><b>VER MINHA LISTA</b></div></Link>

        </div>
        
    );
}

