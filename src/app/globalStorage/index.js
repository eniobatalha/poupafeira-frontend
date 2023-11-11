import { create } from 'zustand'
// Imagens das categorias:
import banana from '../../assets/img/produtos/banana.png'
import batata from '../../assets/img/produtos/batata.png'
import refri from '../../assets/img/produtos/refri.png'
import carne from '../../assets/img/produtos/carne.png'

export const carrinhoStorage = create((set) => ({

    mercadorias: [],
    categorias: [
        {nome: 'vegetal', img: batata, selected: false},
        {nome: 'carne', img: carne, selected: false},
        {nome: 'fruta', img: banana, selected: false},
        {nome: 'bebida', img: refri, selected: false},
    ],
    setMercadorias: (payload) => set((state) => ({ mercadorias: state.mercadorias = payload })), 
    setCategorias: (payload) => set((state) => ({ categorias: state.categorias = payload })), 
}))